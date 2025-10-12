# Deployment Guide for Vercel

## Current Setup
- **Main App**: Runs on port 5173 (development) / root path (production)
- **Admin App**: Runs on port 3001 (development) / `/admin` path (production)

## How to Deploy to Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Vercel will automatically detect the configuration from `vercel.json`

### 3. Build Configuration
The `vercel.json` file configures:
- Main app builds to `dist/` folder
- Admin app builds to `Admin/dist/` folder
- Routes `/admin/*` to Admin app
- Routes everything else to Main app

### 4. Environment
- **Development**: Use `npm run dev:all` (runs both servers)
- **Production**: Vercel automatically runs `npm run build` which builds both apps

## URL Structure

### Development (Local)
- Main App: `http://localhost:5173`
- Admin App: `http://localhost:3001`

### Production (Vercel)
- Main App: `https://your-app.vercel.app/`
- Admin App: `https://your-app.vercel.app/admin/`

## Navigation Flow
1. User visits main app
2. Clicks "Admin Login"
3. Redirects to `/admin-login` (handled by main app)
4. After login, redirects to `/admin/` (Admin app)
5. Admin app handles all `/admin/*` routes

## Important Notes
- Both apps are built and deployed as static sites
- No server-side rendering
- All routing is client-side
- Authentication tokens are stored in localStorage
