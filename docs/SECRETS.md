# GitHub Secrets Checklist

Use this after the repo exists on GitHub.

## Required for Hostinger deploy

```text
HOSTINGER_FTP_SERVER
HOSTINGER_FTP_USERNAME
HOSTINGER_FTP_PASSWORD
```

Optional Hostinger:

```text
HOSTINGER_FTP_SERVER_DIR   # default /public_html/
HOSTINGER_FTP_PROTOCOL     # ftp or ftps
HOSTINGER_FTP_PORT         # default 21
```

Repository variable (not a secret):

```text
ENABLE_HOSTINGER_DEPLOY=true
```

## Recommended for later live data (server-side only)

```text
FOOTBALL_DATA_API_KEY
API_FOOTBALL_KEY
CRICKETDATA_API_KEY
THESPORTSDB_API_KEY
FIRECRAWL_API_KEY
```

## How to set with GitHub CLI

```bash
gh secret set HOSTINGER_FTP_SERVER
gh secret set HOSTINGER_FTP_USERNAME
gh secret set HOSTINGER_FTP_PASSWORD
gh variable set ENABLE_HOSTINGER_DEPLOY --body "true"
```

Paste values when prompted. Never commit them.

## Safety

- Static Pages / Hostinger HTML cannot hide private keys.
- X timeline embeds need **no** secret.
- Firecrawl and sports API keys belong in Actions or a backend, not `app.js`.
