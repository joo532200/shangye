# Globitex Railway Luxury UI

This is a Railway-ready Next.js + Tailwind landing page inspired by high-end fashion websites.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Deploy to Railway

1. Create a new empty project in Railway.
2. Upload this folder or connect a GitHub repo.
3. Railway will detect Next.js automatically.
4. Use these settings if needed:
   - Build Command: `npm run build`
   - Start Command: `npm start`
5. Add your domain after deployment.

## Files to edit

- `app/page.tsx` -> page content
- `app/globals.css` -> global styling
- `components/navbar.tsx` -> top navigation

## Notes

- Replace demo images and texts with your real content.
- Remote images from Unsplash are already enabled in `next.config.mjs`.
