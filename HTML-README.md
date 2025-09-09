# Simple HTML with Google Ad Manager

A standalone HTML file demonstrating Google Ad Manager integration with rich content and modern styling.

## Features

- ✅ Standalone HTML file (no build process required)
- ✅ Google Ad Manager integration
- ✅ Responsive design
- ✅ Multiple ad placements (banner, rectangle, sidebar)
- ✅ Rich content layout
- ✅ Modern CSS styling
- ✅ Interactive elements
- ✅ Smooth scrolling navigation

## How to Use

1. **Open the file**: Simply double-click `simple.html` or open it in any web browser
2. **View the page**: The page will load with all content and ad placeholders
3. **Test ads**: The Google Ad Manager script will attempt to load ads (may show placeholders in development)

## Ad Placements

The HTML file includes several ad placements:

1. **Top Banner** (728x90) - Below hero section
2. **Rectangle Ad** (300x250) - Inline with content
3. **Sidebar Ads** (300x600, 300x250) - Right sidebar
4. **Bottom Banner** (728x90) - Footer section

## Ad Manager Configuration

### Current Setup
- **Publisher ID**: `/23308471723/gamespowerplay-com-BANNER-1`
- **Ad Sizes**: Various sizes for different placements
- **Features**: Single Request Architecture, Lazy Loading

### To Use Your Own Ads

1. **Replace the ad unit paths** in the JavaScript section:
```javascript
// Change this line:
googletag.defineSlot('/23308471723/gamespowerplay-com-BANNER-1', [728, 90], 'banner-ad-1');

// To your ad unit:
googletag.defineSlot('/YOUR_PUBLISHER_ID/YOUR_AD_UNIT', [728, 90], 'banner-ad-1');
```

2. **Update all ad slots** with your actual ad unit paths

## File Structure

```
simple.html
├── HTML Structure
│   ├── Header with navigation
│   ├── Hero section
│   ├── Main content area
│   ├── Sidebar with ads
│   └── Footer
├── CSS Styling
│   ├── Responsive grid layout
│   ├── Modern design elements
│   ├── Ad container styles
│   └── Interactive effects
└── JavaScript
    ├── Google Ad Manager integration
    ├── Smooth scrolling
    └── Interactive elements
```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Customization

### Styling
- Modify the `<style>` section to change colors, fonts, and layout
- Update CSS variables for consistent theming
- Add custom animations and effects

### Content
- Replace the content in the HTML sections
- Add more articles or sections
- Modify the sidebar content

### Ads
- Add more ad placements by copying the ad container structure
- Change ad sizes by modifying the `defineSlot` parameters
- Add different ad types (video, native, etc.)

## Testing

### Local Testing
1. Open `simple.html` in your browser
2. Check browser console for any JavaScript errors
3. Verify ad containers are visible
4. Test responsive design on different screen sizes

### Ad Testing
- Use Google's test ad units for development
- Switch to production ad units for live deployment
- Test with and without ad blockers

## Deployment

Since this is a standalone HTML file, you can:

1. **Upload to any web server**
2. **Use with static hosting** (GitHub Pages, Netlify, Vercel)
3. **Embed in existing websites**
4. **Use as a template** for other projects

## Performance Features

- **Lazy Loading**: Ads load when they enter the viewport
- **Single Request Architecture**: Multiple ads load efficiently
- **Responsive Images**: Optimized for different screen sizes
- **Minimal Dependencies**: Only Google Ad Manager script

## Troubleshooting

### Ads Not Showing
1. Check browser console for errors
2. Verify ad unit paths are correct
3. Ensure you're not using an ad blocker
4. Check if the ad unit is active in Ad Manager

### Layout Issues
1. Check CSS for any syntax errors
2. Verify responsive breakpoints
3. Test on different browsers
4. Check for conflicting styles

## License

MIT License - feel free to use this template for your own projects.

## Support

For issues related to:
- **Google Ad Manager**: Visit [Ad Manager Help Center](https://support.google.com/admanager)
- **HTML/CSS**: Check [MDN Web Docs](https://developer.mozilla.org/)
- **This template**: Modify as needed for your requirements
