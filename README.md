# Personal Website

A personal website built with React, TypeScript, Styled Components, and Ant Design.

## Features

- **About**: Bio and introduction section
- **Book**: Dedicated section for the main book
- **Writing**: Section with sub-sections for book, articles, and book reviews
- **Updates**: News and mentions with links
- **Contact**: Contact form with inviting message about services

## Tech Stack

- React 19
- TypeScript
- React Router
- Styled Components
- Ant Design

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment to GitHub Pages

1. Update `vite.config.ts` with your repository name if needed (currently set to `/Jake/`)
2. Enable GitHub Pages in your repository settings (Settings → Pages → Source: GitHub Actions)
3. Push to the `main` branch - the GitHub Action will automatically build and deploy

### Custom Domain

If you're using a custom domain, remove or update the `base` property in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()]
  // base: '/Jake/', // Remove this line for custom domain
});
```

## Contact Form

The contact form is currently set up with a mock submission. For a production site, you'll want to integrate with a service like:

- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- Or your own backend API
