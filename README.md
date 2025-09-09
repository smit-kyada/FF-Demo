# Next.js Google Ad Manager Demo

A complete Next.js application demonstrating Google Ad Manager integration with rich content layout.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Google Ad Manager integration
- ✅ Responsive design
- ✅ Multiple ad placements (banner, rectangle, sidebar)
- ✅ Rich content layout
- ✅ Modern CSS styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Google Ad Manager Setup

### 1. Configure Ad Units

To use real Google Ad Manager ads, you need to:

1. **Create a Google Ad Manager account** at [admanager.google.com](https://admanager.google.com)

2. **Set up ad units** in your Ad Manager account:
   - Banner: 728x90
   - Rectangle: 300x250  
   - Sidebar: 300x600

3. **Update ad unit paths** in `app/page.tsx`:
```tsx
// Replace these with your actual ad unit paths
adUnit="/123456789/your-banner-ad-unit"
adUnit="/123456789/your-rectangle-ad-unit"
adUnit="/123456789/your-sidebar-ad-unit"
```

### 2. Ad Manager Configuration

The `AdManager` component automatically:
- Loads the Google Publisher Tag (GPT) library
- Initializes ad slots
- Enables lazy loading for better performance
- Handles responsive ad sizing

### 3. Testing Ads

For testing purposes, you can use Google's test ad units:
- Banner: `/123456789/example-banner`
- Rectangle: `/123456789/example-rectangle`
- Sidebar: `/123456789/example-sidebar`

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page with content and ads
├── components/
│   └── AdManager.tsx        # Google Ad Manager component
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## Ad Placements

The demo includes several ad placements:

1. **Top Banner** (728x90) - Below hero content
2. **Rectangle Ad** (300x250) - Inline with content
3. **Sidebar Ads** (300x600, 300x250) - Right sidebar
4. **Bottom Banner** (728x90) - Footer section

## Customization

### Adding New Ad Slots

1. Add a new `AdManager` component in your page:
```tsx
<AdManager
  adUnit="/your-publisher-id/your-ad-unit"
  adSize={[width, height]}
  adSlot="unique-slot-id"
  className="custom-class"
/>
```

2. Ensure each `adSlot` has a unique ID.

### Styling

- Modify `app/globals.css` for global styles
- Add custom classes to `AdManager` components
- Use the existing CSS classes for consistent styling

## Performance Features

- **Lazy Loading**: Ads load only when they're about to enter the viewport
- **Single Request Architecture**: Multiple ads load in a single request
- **Responsive Design**: Ads adapt to different screen sizes
- **TypeScript**: Type safety for better development experience

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Troubleshooting

### Ads Not Showing

1. Check browser console for errors
2. Verify ad unit paths are correct
3. Ensure you're not using an ad blocker
4. Check if the ad unit is active in Ad Manager

### Development vs Production

- Use test ad units during development
- Switch to production ad units before deployment
- Test ad loading in different browsers

## Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

Or deploy to platforms like Vercel, Netlify, or AWS.

## License

MIT License - feel free to use this project for your own applications.

## Support

For issues related to:
- **Next.js**: Check the [Next.js documentation](https://nextjs.org/docs)
- **Google Ad Manager**: Visit [Ad Manager Help Center](https://support.google.com/admanager)
- **This project**: Create an issue in the repository
