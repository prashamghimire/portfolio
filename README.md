# Prasham Ghimire — Portfolio with CMS

A Next.js portfolio with a password-protected, GitHub-backed CMS. Prasham can add and edit achievement cards and writings from `/admin` without touching code.

## How it works

- Public pages read from `data/cms/achievements.json` and `data/cms/writings.json` at build time.
- Saving in `/admin` commits the updated JSON to GitHub through the Contents API.
- The commit triggers a Vercel rebuild, and the live site picks up the changes automatically.
- Image uploads go to `public/uploads/` in the same way.

The original hardcoded TypeScript data and Markdown files were migrated into those two JSON files. `content/writings/*.md` is no longer used by the site; writing bodies live in the `content` field of each record in `writings.json`.

## Local development

```bash
npm install
cp .env.local.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000/admin.

Without `CMS_GITHUB_TOKEN`, saves are written directly to local JSON files. This is intentional for local development. In production, the token is required so that changes are committed to GitHub.

## Environment variables

Set these in Vercel → Project Settings → Environment Variables:

| Variable | Required | Purpose |
| --- | --- | --- |
| `ADMIN_PASSWORD` | Yes | The single shared password for `/admin`. |
| `SESSION_SECRET` | Yes | Long random string used to sign session cookies. |
| `CMS_GITHUB_TOKEN` | Yes, in production | GitHub Personal Access Token with **Contents: read and write** on `prashamghimire/portfolio`. |
| `CMS_GITHUB_REPO` | No | Defaults to `prashamghimire/portfolio`. |
| `CMS_GITHUB_BRANCH` | No | Defaults to `main`. |

Generate a strong secret, for example:

```bash
openssl rand -base64 32
```

Create a fine-grained PAT at https://github.com/settings/personal-access-tokens with repository access to `prashamghimire/portfolio` and the **Contents** permission set to **Read and write**.

> Never commit `.env.local` or the token to the repository.

## Deploying

1. Push this project to the `main` branch of `prashamghimire/portfolio`.
2. Import the repository in Vercel (or let the existing Vercel project rebuild).
3. Add the environment variables above.
4. Deploy. Vercel rebuilds automatically on every CMS save.

## Using the CMS

1. Visit `https://<your-domain>/admin`.
2. Enter the shared password.
3. **Achievements** tab: see cards grouped by page, add new ones, edit or delete existing ones, upload images, then click **Save changes**.
4. **Writings** tab: add, edit or delete writings. The body is Markdown. Set `Featured` to show a writing in Editor's Picks. Click **Save changes**.
5. Wait for the Vercel deployment to finish before checking the public site.

### Writing fields

- `Slug` becomes the URL: `/writings/<slug>`.
- `Published` and `Updated` are free-text dates (existing data uses formats like `2026-09-15` and `2026 to Present`).
- `Topics` and `Keywords` are comma-separated.
- `Cover` accepts a path such as `/uploads/cover.jpg`; use **Upload** to add an image.

### Achievement groups

Each achievement can appear on more than one page. The group checkboxes map to:

- Lunar English Boarding School
- Navajeewan School & College
- Southwestern State Secondary School
- University of Nepal
- Leadership
- Public Speaking & Events
- Innovation & Entrepreneurship
- Community Service

## Security notes

- The admin uses one shared password and an HMAC-signed, HttpOnly cookie valid for 7 days.
- All `/api/cms/*` write endpoints verify the session cookie.
- Set `SESSION_SECRET` to a unique value; changing it signs everyone out.
- HTTPS is enforced by Vercel, so cookies are sent with the `Secure` flag in production.

## Commands

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```
