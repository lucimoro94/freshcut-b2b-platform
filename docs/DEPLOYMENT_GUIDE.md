# Deployment Documentation

## 1. Overview
The FreshCut B2B Platform is deployed as a cloud-native web service using **Render.com**. This ensures high availability, automatic SSL (HTTPS), and continuous deployment from the GitHub repository.

- **Live URL:** https://freshcut-platform.onrender.com/
- **Platform:** Render (Cloud PaaS)
- **Runtime:** Node.js (LTS)

## 2. Environment Setup
The production environment is configured with the following specifications:

- **Build Command:** `npm install` (Installs dependencies from `package.json`)
- **Start Command:** `npm start` (Executes `node src/server.js`)
- **Environment Variables:**
  - `NODE_ENV`: production
  - `PORT`: 10000 (Managed automatically by Render)

## 3. Deployment Pipeline
We utilize a **Continuous Deployment (CD)** strategy:
1.  Developers push code to the `main` branch on GitHub.
2.  Render detects the push via Webhook.
3.  Render clones the repository, builds the application, and runs the start command.
4.  If the build fails, the previous version remains active (Zero Downtime Deployment).

## 4. Verification Steps
To verify the deployment:
1.  Navigate to the Live URL.
2.  Ensure the Landing Page loads.
3.  Test the API Health Endpoint: `/api/health` should return `{"status":"active"}`.