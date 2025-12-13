# Maintenance & Future Roadmap

## 1. Monitoring Strategy
To ensure 99.9% uptime and rapid incident response:
- **Uptime Monitoring:** Use *UptimeRobot* to ping the `/api/health` endpoint every 5 minutes. Alert via Email if down.
- **Log Analysis:** Review Render server logs weekly to identify slow API requests or recurring errors (4xx/5xx).
- **Security Audits:** Run `npm audit` monthly to identify vulnerabilities in dependencies.

## 2. Update & Patch Management
- **Dependencies:** Update `package.json` libraries quarterly to LTS versions.
- **Bug Fixes:** Critical bugs (P0) are fixed via a `hotfix/*` branch and deployed immediately. Minor bugs (P1/P2) are scheduled for bi-weekly sprints.

## 3. Future Enhancements (Roadmap)
Based on stakeholder feedback, the following features are planned for Q1 2026:

1.  **Persistent Database:** Migrate from In-Memory storage to **MongoDB Atlas** to ensure data persistence across restarts.
2.  **Payment Integration:** Integrate **Stripe API** to allow real credit card transactions during checkout.
3.  **Email Notifications:** Use *SendGrid* to email order confirmations to Buyers and new order alerts to Suppliers.
4.  **Search & Filter:** Allow Buyers to filter products by price range and category.

## 4. Backup & Recovery
- **Code:** Hosted on GitHub with redundant storage.
- **Data:** (Post-MongoDB migration) Daily automated snapshots with 30-day retention.