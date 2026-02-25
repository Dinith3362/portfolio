# Deployment Guide - Hosting on GitHub Pages

Follow these steps to host your portfolio on GitHub for free.

## Step 1: Create a New Repository on GitHub
1. Log in to your GitHub account: [github.com/Dinith3362](https://github.com/Dinith3362).
2. Click the **"+"** icon in the top-right corner and select **"New repository"**.
3. **Repository name**: `portfolio` (or any name you prefer).
4. **Public/Private**: Keep it **Public** (required for free GitHub Pages).
5. Do NOT initialize with a README, .gitignore, or license (we already have our files).
6. Click **"Create repository"**.

## Step 2: Initialize Git and Push Your Code
Open your terminal in the project folder and run these commands:

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "Initial portfolio commit"

# 4. Rename branch to main
git branch -M main

# 5. Connect to your new repository (Replace <YOUR_REPO_URL> with the link from GitHub)
git remote add origin https://github.com/Dinith3362/portfolio.git

# 6. Push your code
git push -u origin main
```

## Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on **Settings** (top tab).
3. On the left sidebar, click **Pages**.
4. Under **Build and deployment > Branch**, ensure `main` is selected and the folder is `/ (root)`.
5. Click **Save**.

## Step 4: Access Your Site
GitHub will give you a link (usually `https://Dinith3362.github.io/portfolio/`). It might take a minute or two to go live.

---
**Note:** Ensure your main image `IMG_6341.jpg` is in the same folder as `index.html` before pushing!
