# FreshCut B2B Platform

FreshCut is a digital marketplace connecting farm suppliers (Farmers) with business buyers (Florists). This repository contains the implementation of the core platform features.

## 🚀 Features Implemented

### User Management
-   **Role-Based Registration:** Sign up as a Buyer (Florist) or Supplier (Farmer).
-   **Secure Login:** Authentication system with session management (LocalStorage).
-   **Smart Redirection:** Suppliers are routed to their Dashboard; Buyers to the Catalog.

### For Buyers (Florists)
-   **Product Catalog:** Browse available fresh produce with images and prices.
-   **Shopping Cart:** Real-time client-side cart management.
-   **Order History:** Track the status of placed orders (New, Processing, Completed).

### For Suppliers (Farmers)
-   **Supplier Dashboard:** Dedicated interface to manage business.
-   **Product Management:** Add new products to the global catalog.
-   **Order Fulfillment:** View incoming orders and update their status.

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
    Open your browser and navigate to `http://localhost:3000/login.html` to begin.

## ✅ Running Tests
This project uses a CI/CD pipeline. To run tests locally:
```bash
npm test
```
