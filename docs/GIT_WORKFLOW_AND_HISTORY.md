# Git Workflow & Collaboration History

## 1. Branching Strategy (GitFlow Lite)
We adopted a **Feature Branch Workflow** to ensure stability of the `main` branch.

- **`main`**: Production-ready code. Deployed automatically to Render.
- **`feature/*`**: Used for developing new functionalities (e.g., `feature/user-login`, `feature/advanced-b2b-logic`).
- **`docs/*`**: Used for documentation updates (e.g., `docs/part4-deliverables`).
- **`fix/*`**: Used for bug fixes (e.g., `fix/registration-redirect`).

**Rule:** No direct commits to `main`. All changes are merged via Pull Requests (PRs).

## 2. Collaboration & Code Reviews
Collaboration was managed through GitHub Pull Requests.
- **Process:**
  1. Create a branch.
  2. Implement changes.
  3. Open a PR with a descriptive title (Conventional Commits).
  4. Perform a Code Review (Self-Review or Peer-Review).
  5. Merge only when CI checks (Tests) pass.

## 3. Commit History Highlights
The project follows **Conventional Commits** (`feat:`, `fix:`, `docs:`, `test:`) for clarity.

### Key Milestones:
- **Init:** `chore: init project structure and setup CI/CD pipeline`
- **Feature 1:** `feat: implement user registration api and frontend interface`
- **Feature 2:** `feat: implement product catalog api and frontend view`
- **Feature 3:** `feat: implement shopping cart and order processing logic`
- **Feature 4 (B2B):** `feat: implement full B2B logic with role-based dashboards`
- **Docs:** `docs: add coding standards, stakeholder feedback and update readme`
- **Enhancement Sprint:** `feat: implement product search for buyers and delete functionality for suppliers`

## 4. CI/CD Integration
Git is tightly integrated with GitHub Actions.
- Every push to a branch triggers `npm test`.
- Merges to `main` trigger the deployment to Render.