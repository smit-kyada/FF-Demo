const { ProxyAgent, fetch: undiciFetch } = require("undici");
const express = require("express");
const path    = require("path");

/*
===========================================
  PROXY DETAILS
===========================================
*/
const PROXY_URL = "http://GTpsDJ1ZuKkk87Cb:40CjZkRDvBYKslxS_country-us@geo.iproyal.com:12321";
const proxyAgent = new ProxyAgent(PROXY_URL);

const app  = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

/*
===========================================
  CORE FETCH THROUGH PROXY
  All outbound requests use this.
===========================================
*/
async function proxyFetch(url, options = {}) {
  return undiciFetch(url, { dispatcher: proxyAgent, ...options });
}

/*
===========================================
  /api/ip-info
  Returns full IP + location details
  fetched through the proxy.
===========================================
*/
app.get("/api/ip-info", async (req, res) => {
  try {

    /* Step 1 — get the outbound IP via proxy */
    const ipRes  = await proxyFetch("https://ipv4.icanhazip.com");
    const ip     = (await ipRes.text()).trim();

    /* Step 2 — get geo/ISP info for that IP */
    const geoRes  = await proxyFetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,regionName,city,isp,org,as,query`);
    const geo     = await geoRes.json();

    res.json({
      success:     true,
      ip,
      country:     geo.country      || "—",
      countryCode: geo.countryCode  || "—",
      region:      geo.regionName   || "—",
      city:        geo.city         || "—",
      isp:         geo.isp          || "—",
      org:         geo.org          || "—",
      as:          geo.as           || "—",
      proxy:       PROXY_URL.replace(/:[^:@]+@/, ":****@")   /* hide password */
    });

  } catch (err) {
    console.error("ip-info failed:", err.message);
    res.json({ success: false, error: err.message });
  }
});

/*
===========================================
  /ext — RESOURCE PROXY
  Browser requests any external URL via
  GET /ext?url=https://...
  Server fetches through proxy, pipes back.
===========================================
*/
app.get("/ext", async (req, res) => {

  const target = req.query.url;

  if (!target || !/^https?:\/\//.test(target)) {
    return res.status(400).send("Missing or invalid url param");
  }

  try {

    const upstream = await proxyFetch(target, {
      headers: {
        "user-agent":      req.headers["user-agent"] || "Mozilla/5.0",
        "accept":          req.headers["accept"]     || "*/*",
        "accept-language": "en-US,en;q=0.9"
      }
    });

    const ct = upstream.headers.get("content-type") || "application/octet-stream";
    const buf = Buffer.from(await upstream.arrayBuffer());

    res.set("Content-Type", ct);
    res.set("Cache-Control", "public, max-age=3600");
    res.set("Access-Control-Allow-Origin", "*");
    res.send(buf);

  } catch (err) {
    console.error("ext proxy failed:", target, err.message);
    res.status(502).send("Proxy fetch failed: " + err.message);
  }
});

/*
===========================================
  VPN ERROR PAGE
===========================================
*/
function vpnErrorPage(err) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proxy Not Connected</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:system-ui,sans-serif;background:#0d0d1a;color:#e2e8f0;
         min-height:100vh;display:flex;align-items:center;justify-content:center}
    .box{text-align:center;padding:52px 40px;background:#1a1a35;
         border:1px solid #ef4444;border-radius:20px;max-width:460px;width:90%}
    .icon{font-size:64px;margin-bottom:16px}
    h1{font-size:24px;font-weight:900;color:#ef4444;margin-bottom:10px}
    p{color:#64748b;font-size:14px;line-height:1.7;margin-bottom:6px}
    code{background:#111;padding:4px 10px;border-radius:6px;font-size:12px;color:#f87171;display:inline-block;margin-top:8px;word-break:break-all}
    a{margin-top:24px;display:inline-block;padding:12px 32px;background:#ef4444;
      color:#fff;font-weight:800;font-size:14px;border-radius:10px;text-decoration:none}
  </style>
</head>
<body>
  <div class="box">
    <div class="icon">🔴</div>
    <h1>PROXY NOT CONNECTED</h1>
    <p>Could not reach the internet through the configured proxy.</p>
    <code>${err || "Connection refused or timed out"}</code>
    <br>
    <a href="/">Retry</a>
  </div>
</body>
</html>`;
}

/*
===========================================
  GUARDED PAGE HELPER
===========================================
*/
async function guardedPage(req, res, file) {
  try {
    const r  = await proxyFetch("https://ipv4.icanhazip.com");
    const ip = (await r.text()).trim();
    console.log(`[${file}] serving via proxy IP: ${ip}`);
    res.set("X-Proxy-IP", ip);
    res.sendFile(path.join(__dirname, "public", file));
  } catch (err) {
    res.status(403).send(vpnErrorPage(err.message));
  }
}

/*
===========================================
  ROUTES
===========================================
*/
app.get("/",          (req, res) => guardedPage(req, res, "index.html"));
app.get("/home.html", (req, res) => guardedPage(req, res, "home.html"));

/*
===========================================
  START
===========================================
*/
app.listen(PORT, () => {
  console.log(`Server → http://localhost:${PORT}`);
  console.log(`Proxy  → ${PROXY_URL.replace(/:[^:@]+@/, ":****@")}`);
});
