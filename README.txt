FIFTH CURSOR — STATIC SITE (no build step)

This is now a plain HTML/CSS/JS site. No npm, no Vite, no React, no build
command. Just files Cloudflare serves directly.

FOLDER CONTENTS:
  index.html                 - the homepage
  capabilities/*.html        - the 6 in-depth capability pages
  fifth-cursor-horizontal.svg, fifth-cursor-logo.svg - logo assets

CLOUDFLARE PAGES SETUP:
  Framework preset: None
  Build command:    (leave blank)
  Build output directory: / (this folder itself)
  Root directory: / (leave blank)

If using Git integration: just commit this whole folder as your repo root
and push. Cloudflare will deploy it as-is with no build step to fail.

If using Wrangler:
  npx wrangler pages deploy . --project-name=your-consultancy

That's it. Nothing to compile, nothing to break.
