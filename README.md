# FreshCut B2B Platform

FreshCut is a digital marketplace connecting farm suppliers (Farmers) with business buyers (Florists). This repository contains the implementation of the core platform features.

## 🚀 Features Implemented
1.  **User Registration:** Role-based sign-up (Buyer/Supplier).
2.  **Product Catalog:** Browse available fresh produce (Flowers, Seeds, Supplies).
3.  **Shopping Cart:** Client-side cart management.
4.  **Order Processing:** Secure checkout and order creation.

## 🛠️ Tech Stack
-   **Runtime:** Node.js
-   **Framework:** Express.js
-   **Frontend:** HTML5, CSS, Vanilla JS
-   **Testing:** Jest, Supertest
-   **CI/CD:** GitHub Actions

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/lucimoro94/freshcut-b2b-platform.git
    cd freshcut-b2b-platform
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the application:**
    ```bash
    npm start
    ```
    The server will start on `http://localhost:3000`.
    Open your browser and navigate to `http://localhost:3000/register.html` to begin.

## ✅ Running Tests
This project uses a CI/CD pipeline. To run tests locally:
```bash
npm test