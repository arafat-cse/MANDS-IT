# Deploying Mands IT to Vercel

This guide outlines the steps to deploy your Next.js application to Vercel.

## Option 1: Using Vercel CLI (Recommended for manual updates)

1. **Login to Vercel:**
    Open your terminal in this project directory and run:

    ```bash
    npx vercel login
    ```

    Follow the prompts to log in via your browser.

2. **Deploy Preview:**
    To deploy a preview version (for testing):

    ```bash
    npx vercel
    ```

    - Set up the project: `Y`
    - Scope: Select your account (e.g., `md-arafat-rahman`)
    - Link to existing project: `N` (for the first time)
    - Project Name: `mands-it` (or your preferred name)
    - Directory: `./`
    - Build settings: Default is usually fine (Next.js is auto-detected).

3. **Deploy to Production:**
    When you are ready to make the site live:

    ```bash
    npx vercel --prod
    ```

## Option 2: Using GitHub/GitLab/Bitbucket Integration (Recommended for CI/CD)

1. **Push your code** to a Git repository (GitHub, GitLab, or Bitbucket).
2. Go to your **Vercel Dashboard** (<https://vercel.com/dashboard>).
3. Click **"Add New..."** -> **"Project"**.
4. Import your Git repository.
5. Vercel will automatically detect that it's a Next.js project.
6. Click **"Deploy"**.

## Common Troubleshooting

- **Build Erros:** If deployment fails, run `npm run build` locally to see if there are any errors before deploying.
- **Environment Variables:** If you add a Laravel API later, make sure to add the API URL to the **Environment Variables** section in your Vercel Project Settings.
