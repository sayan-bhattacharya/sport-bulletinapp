# Hostinger + GitHub CI/CD

This static MatchBrief site can ship two ways:

1. **GitHub Pages (live now, free)** — workflow: `.github/workflows/deploy-pages.yml`
2. **Hostinger shared hosting (custom domain / paid plan)** — workflow: `.github/workflows/deploy-hostinger.yml`

## What is already wired

| Piece | Status |
| --- | --- |
| CI validation on push/PR | Ready (`.github/workflows/ci.yml`) |
| Deploy to GitHub Pages on `main` | Ready |
| Deploy to Hostinger via FTP on `main` | Ready, **gated** until you enable it |
| Secret placeholders documented | Ready |

Hostinger deploy stays off by default so missing FTP credentials do not fail every push.

## What you must provide (cannot be invented)

From Hostinger hPanel → **Websites → Dashboard → Files → FTP Accounts**:

- FTP host / server
- FTP username
- FTP password
- Target folder (usually `/public_html/` or `/domains/<your-domain>/public_html/`)
- Optional: FTPS protocol and non-default port

Also confirm:

- which Hostinger plan you have (shared / cloud / VPS)
- whether the site should live on the apex domain or a subdomain
- whether GitHub Pages should remain as staging while Hostinger is production

## GitHub secrets to create

In the repo: **Settings → Secrets and variables → Actions → Secrets**

| Secret name | Example / notes |
| --- | --- |
| `HOSTINGER_FTP_SERVER` | `ftp.yourdomain.com` or Hostinger IP |
| `HOSTINGER_FTP_USERNAME` | FTP account username |
| `HOSTINGER_FTP_PASSWORD` | FTP account password |
| `HOSTINGER_FTP_SERVER_DIR` | `/public_html/` (optional if default is fine) |
| `HOSTINGER_FTP_PROTOCOL` | `ftp` or `ftps` (optional) |
| `HOSTINGER_FTP_PORT` | `21` or Hostinger FTPS port (optional) |

Optional future API secrets (server-side only — never embed in static JS):

| Secret name | Purpose |
| --- | --- |
| `FOOTBALL_DATA_API_KEY` | football-data.org |
| `API_FOOTBALL_KEY` | API-Football |
| `CRICKETDATA_API_KEY` | CricketData |
| `FIRECRAWL_API_KEY` | Firecrawl scrape/search |
| `THESPORTSDB_API_KEY` | artwork / metadata |

## Enable Hostinger auto-deploy

After secrets are set, add a repository **variable**:

1. **Settings → Secrets and variables → Actions → Variables**
2. Create `ENABLE_HOSTINGER_DEPLOY` = `true`
3. Push to `main` or run **Deploy To Hostinger** manually from the Actions tab

### CLI alternative (after you paste credentials locally)

```bash
gh secret set HOSTINGER_FTP_SERVER
gh secret set HOSTINGER_FTP_USERNAME
gh secret set HOSTINGER_FTP_PASSWORD
gh secret set HOSTINGER_FTP_SERVER_DIR
gh variable set ENABLE_HOSTINGER_DEPLOY --body "true"
```

## Hostinger Git deploy alternative

If your Hostinger plan supports **Deploy Web App / Git**:

1. hPanel → Websites → Add Website / Deploy
2. Connect this GitHub repo
3. Point the publish directory at the repo root (static HTML)
4. Add environment variables in Hostinger, not in the browser bundle

FTP CI/CD above is the reliable path for classic shared hosting.

## Security rules

- Never commit `.env`
- Never put private API keys in `index.html` or `app.js`
- GitHub Pages and Hostinger static files are public — treat every client-side key as leaked
- Use a tiny backend / serverless proxy before live sports API keys go into production

## Rollback

- GitHub Pages: redeploy a previous successful Actions run, or revert the `main` commit
- Hostinger FTP: re-run deploy from a known-good commit, or restore from Hostinger backups if enabled
