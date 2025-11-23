# Coding Standards & Best Practices

## 1. Technology Stack
- **Backend:** Node.js with Express.js framework.
- **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3.
- **Testing:** Jest and Supertest for integration testing.
- **CI/CD:** GitHub Actions.

## 2. Code Style & Formatting
- **Naming Conventions:**
  - Variables and Functions: `camelCase` (e.g., `loadProducts`, `userExists`).
  - Files: `kebab-case` (e.g., `app.test.js`, `coding-standards.md`).
  - Constants: `UPPER_SNAKE_CASE` (e.g., `PORT`, `DB_URL`).
- **Indentation:** 4 spaces or 2 spaces (consistent per file).
- **Semicolons:** Always used to prevent ASI issues.

## 3. Version Control (Git)
- **Branching Strategy:** Feature Branch Workflow.
  - `main`: Production-ready code.
  - `feature/*`: New features (e.g., `feature/user-registration`).
  - `docs/*`: Documentation updates.
- **Commit Messages:** Conventional Commits format.
  - `feat:` New features.
  - `fix:` Bug fixes.
  - `docs:` Documentation changes.
  - `chore:` Configuration or maintenance.

## 4. Testing Strategy
- **Requirement:** Every API endpoint must have at least one positive test case (200/201 OK) and one negative test case (400/404 Error).
- **Automation:** Tests must run automatically on every push via GitHub Actions.

## 5. Security Best Practices
- **Input Validation:** All API inputs are validated before processing.
- **Environment Variables:** Sensitive data (ports, secrets) are managed via environment variables (simulated for this assessment).