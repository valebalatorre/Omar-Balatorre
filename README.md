# Omar Balatorre - Coaching & Consulting Website

A professional, high-converting website for Omar Balatorre's coaching and consulting services.

## Features

- Responsive design with mobile-first approach
- Custom color palette and typography
- Navigation between Home, Servicios, E-books, Sobre Mi, and Contacto pages
- WhatsApp integration
- Contact form
- E-book sales section with external payment redirect

## Tech Stack

- HTML, CSS, JavaScript (static single-page)
- No framework, no build step

## Getting Started

1. Open `index.html` directly in a browser.

2. Optionally, start a local static server (recommended):
   ```bash
   npx serve .
   ```

3. Access `http://localhost:3000` (or printed local URL).

## Build for Production

No build step needed. Deploy `index.html`, `style.css`, and `script.js` as static files.


## Deployment

The built files in `dist/` can be deployed to any static hosting service like Vercel, Netlify, or AWS S3.

## Customization

- Replace image placeholders with actual images
- Update Lorem Ipsum content with real text
- Configure external payment platform URL in Ebooks.tsx
- Add social media links in Footer.tsx

## Troubleshooting

- Ensure Node.js version 18+ is installed
- If build fails, check for TypeScript errors with `npm run lint`