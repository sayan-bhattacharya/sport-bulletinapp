# GitHub Pages Deployment

## Pipeline

1. `npm ci`
2. `npm run build` → `dist/`
3. Actions uploads `dist` to GitHub Pages

## URL

https://sayan-bhattacharya.github.io/sport-bulletinapp/

Vite `base` is set to `/sport-bulletinapp/` in `vite.config.ts`.

## Notes

- `public/.nojekyll` is copied into `dist` on build
- Do not put private API keys in the client bundle
- Hostinger deploy (when enabled) uploads the same `dist/` folder via FTP
