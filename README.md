# Lashakp Portfolio (Vercel-ready)

This is a ready-to-deploy React (Create React App) portfolio for **Paul Akporarhe**.
It includes TailwindCSS setup files and `vercel.json` to ensure SPA routing works on Vercel.

## Quick start (locally)

1. Unzip and open the project folder in VS Code or terminal.
2. Install dependencies:
```bash
npm install
```
3. Run the dev server:
```bash
npm start
```
The site will open at http://localhost:3000

## Deploy to GitHub + Vercel

```bash
# initialize git (if you haven't)
git init
git add .
git commit -m "Initial commit: Portfolio site"
git branch -M main
git remote add origin https://github.com/lashakp/lashakp-portfolio.git
git push -u origin main
```

Then go to https://vercel.com, import the repository, and deploy. Use the default Create React App settings. The included `vercel.json` ensures SPA routing (no 404s on refresh).

## Resume
The resume is included at `public/resume.pdf` and the site links to `/resume.pdf` for downloads.
