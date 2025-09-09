import AdManager from '../components/AdManager'

export default function Home() {
  return (
    <div>
      {/* Hero Section with Banner Ad */}
      <section className="content-section">
        <h2>Welcome to Our Technology Blog</h2>
        <p>
          Discover the latest trends in web development, explore cutting-edge technologies, 
          and learn from industry experts. Our comprehensive guides and tutorials will help 
          you stay ahead in the ever-evolving world of technology.
        </p>
        
        {/* Banner Ad */}
        <AdManager
          adUnit="/123456789/example-banner"
          adSize={[728, 90]}
          adSlot="banner-ad-1"
          className="banner"
        />
      </section>

      {/* Main Content Grid */}
      <div className="content-grid">
        <div className="main-content">
          <h2>The Future of Web Development</h2>
          
          <p>
            Web development has evolved dramatically over the past decade. From simple static 
            websites to complex single-page applications, the landscape continues to change 
            at a rapid pace. Today's developers have access to powerful frameworks, tools, 
            and technologies that make building modern web applications more efficient than ever.
          </p>

          <h3>Key Technologies Shaping the Future</h3>
          
          <ul>
            <li><strong>React & Next.js:</strong> Component-based architecture with server-side rendering</li>
            <li><strong>TypeScript:</strong> Type-safe JavaScript for better development experience</li>
            <li><strong>Tailwind CSS:</strong> Utility-first CSS framework for rapid UI development</li>
            <li><strong>GraphQL:</strong> Efficient data querying and manipulation</li>
            <li><strong>WebAssembly:</strong> High-performance applications in the browser</li>
          </ul>

          <h3>Best Practices for Modern Development</h3>
          
          <p>
            Adopting best practices is crucial for building maintainable and scalable applications. 
            Here are some essential principles every developer should follow:
          </p>

          <div className="code-block">
            <pre>{`// Example: Clean component structure
import React from 'react';

interface Props {
  title: string;
  content: string;
}

const ArticleCard: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="article-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default ArticleCard;`}</pre>
          </div>

          <p>
            This approach ensures type safety, reusability, and maintainability. By following 
            these patterns, developers can create robust applications that are easy to test, 
            debug, and extend.
          </p>

          <h3>Performance Optimization</h3>
          
          <p>
            Performance is a critical factor in user experience. Modern web applications must 
            load quickly and respond smoothly to user interactions. Here are some key strategies:
          </p>

          <ul>
            <li>Implement code splitting and lazy loading</li>
            <li>Optimize images and use modern formats like WebP</li>
            <li>Minimize bundle size and eliminate unused code</li>
            <li>Use CDNs for static assets</li>
            <li>Implement proper caching strategies</li>
          </ul>

          {/* Rectangle Ad */}
          <AdManager
            adUnit="/123456789/example-rectangle"
            adSize={[300, 250]}
            adSlot="rectangle-ad-1"
            style={{ margin: '2rem auto', display: 'block' }}
          />

          <h3>Getting Started with Next.js</h3>
          
          <p>
            Next.js is a powerful React framework that provides an excellent developer experience 
            with features like automatic code splitting, server-side rendering, and static site 
            generation. It's perfect for building production-ready applications.
          </p>

          <p>
            To get started with Next.js, you can create a new project using the following command:
          </p>

          <div className="code-block">
            <pre>{`npx create-next-app@latest my-app
cd my-app
npm run dev`}</pre>
          </div>

          <p>
            This will create a new Next.js application with all the necessary dependencies and 
            configuration. The development server will start on http://localhost:3000, and you 
            can begin building your application immediately.
          </p>

          <h3>Conclusion</h3>
          
          <p>
            The world of web development is constantly evolving, and staying up-to-date with 
            the latest technologies and best practices is essential for success. By leveraging 
            modern frameworks, tools, and techniques, developers can build applications that 
            are not only functional but also performant, maintainable, and user-friendly.
          </p>

          <p>
            Whether you're a beginner just starting your journey or an experienced developer 
            looking to expand your skills, there's always something new to learn in this 
            exciting field. Keep experimenting, keep learning, and most importantly, keep building!
          </p>
        </div>

        {/* Sidebar with Ads */}
        <div className="sidebar">
          <AdManager
            adUnit="/123456789/example-sidebar"
            adSize={[300, 600]}
            adSlot="sidebar-ad-1"
            className="sidebar"
          />
          
          <div className="content-section" style={{ margin: 0, padding: '1.5rem' }}>
            <h3>Related Articles</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  Advanced React Patterns
                </a>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  TypeScript Best Practices
                </a>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  CSS Grid vs Flexbox
                </a>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  Web Performance Optimization
                </a>
              </li>
            </ul>
          </div>

          <AdManager
            adUnit="/123456789/example-sidebar-2"
            adSize={[300, 250]}
            adSlot="sidebar-ad-2"
            style={{ margin: 0 }}
          />
        </div>
      </div>

      {/* Bottom Banner Ad */}
      <section className="content-section">
        <h2>Stay Updated</h2>
        <p>
          Subscribe to our newsletter to receive the latest updates on web development, 
          new technologies, and industry insights. Join thousands of developers who trust 
          our content to stay ahead of the curve.
        </p>
        
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <button className="btn">Subscribe Now</button>
          <button className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Learn More</button>
        </div>

        <AdManager
          adUnit="/123456789/example-banner-bottom"
          adSize={[728, 90]}
          adSlot="banner-ad-2"
          className="banner"
        />
      </section>
    </div>
  )
}
