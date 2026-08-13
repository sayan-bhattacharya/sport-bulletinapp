# GitHub Pages Deployment

## What this repo now has

- CI workflow at `.github/workflows/ci.yml`
- GitHub Pages deployment workflow at `.github/workflows/deploy-pages.yml`
- `.nojekyll` so GitHub Pages serves this repo as a plain static site

## What you need to do on GitHub

1. Create a GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, open `Settings -> Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to `main` again if needed, or run the `Deploy To GitHub Pages` workflow manually.

## Expected site URL

- Project repo: `https://<github-username>.github.io/<repo-name>/`
- User site repo named `<github-username>.github.io`: `https://<github-username>.github.io/`

## Important note about API keys on GitHub Pages

GitHub Pages is a public static hosting platform. Any key used directly in browser-side JavaScript is exposed to every visitor.

That means:

- TheSportsDB key `123` is acceptable only because it is a public free/demo-style key.
- Private paid API keys should not be embedded in this static site.
- For private keys, the safe next step is a backend or serverless proxy before production use.

## Recommended secret handling

- Keep real private keys only in local `.env` files, GitHub Actions secrets, or server-side environment variables.
- Do not commit `.env` files.
- Do not add private keys to `index.html` or `app.js`.
- For Hostinger FTP deploy secrets, see `docs/SECRETS.md` and `docs/HOSTINGER-CICD.md`.

## Official GitHub references

- Pages publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Custom workflows with Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- What GitHub Pages is: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
