# 🚀 How to Deploy

This project is built to run on **Vercel** (the creators of Next.js) for the best performance and zero-config deployment.

## Option 1: One-Click Deploy (Recommended)

Click the button below to deploy your own instance of the Showcase:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhypercode-lab%2Fshowcase-web)

## Option 2: Manual Deployment

### 1. Push to GitHub
If you haven't already, push your code to a GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/showcase-web.git
git push -u origin main
```

### 2. Connect to Vercel
1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your `showcase-web` repository.
4.  **Framework Preset**: Next.js (should be auto-detected).
5.  **Root Directory**: Ensure this is set to `.` (or `showcase-web` if inside a monorepo).
6.  Click **Deploy**.

### 3. Verify
Vercel will build your project and give you a live URL (e.g., `https://showcase-web.vercel.app`).

---

## 🔄 Automatic Updates

Because this project uses a JSON registry (`data/builds.json`), updates are handled via Git:

1.  Edit `data/builds.json` locally or on GitHub.
2.  Commit and Push to `main`.
3.  Vercel detects the commit and **automatically redeploys** the site with the new data.
