# Fifth Cursor — AI × Cloud Consultancy Demo

Premium React + Vite consultancy site with:
- Fifth Cursor vector logo based on the supplied logo reference
- AI and cloud consultancy positioning
- Clickable capability arrows with dedicated detail pages
- AI-generated demo service content in `src/config.js`
- Responsive layout and mobile navigation
- Cloudflare Pages SPA fallback via `public/_redirects`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare

Build command: `npm run build`

Output directory: `dist`

Root directory: `/`

If using a Wrangler deploy command in Cloudflare's build configuration, use:

```bash
npx wrangler pages deploy dist --project-name=YOUR_CLOUDFLARE_PROJECT_NAME
```

The project name must match the Pages project exactly and the Cloudflare API token must have permission to deploy to that Pages project.

## Customize

Edit `src/config.js` to change the brand, email, hero copy, services, service detail content, case studies, technology stack, process, and insights.
