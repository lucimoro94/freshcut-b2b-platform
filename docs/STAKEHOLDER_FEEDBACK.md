# Stakeholder Feedback & UAT Reports

## Overview
This document tracks feedback received from stakeholders (Farmers, Florists, and System Admins) during the User Acceptance Testing (UAT) phases.

---

## Phase 1: Core Features (Registration & Catalog)
**Tester:** Maria (Florist Representative)
- **Feedback:** "I need to specify if I am a buyer or a supplier, otherwise the platform is confusing."
- **Action Taken:** Added a "Role" dropdown selector in the registration form (`Buyer` vs `Supplier`).
- **Status:** ✅ Implemented.

**Tester:** Giovanni (Farmer/Supplier)
- **Feedback:** "The list is too plain. I need to see images of the flowers to judge the quality."
- **Action Taken:** Updated the product card layout to include product images fetched from the backend.
- **Status:** ✅ Implemented.

---

## Phase 2: B2B Logic (Login, Dashboard, Orders)
**Tester:** System Admin
- **Feedback:** "Users are able to click 'Checkout' even when the cart is empty, causing server errors."
- **Action Taken:** Disabled the "Checkout" button visually when the cart is empty and added backend validation.
- **Status:** ✅ Implemented.

**Tester:** Giovanni (Farmer/Supplier)
- **Feedback:** "I need a way to tell buyers that I have shipped their flowers. Currently, they call me to ask for updates."
- **Action Taken:** Created a **Supplier Dashboard**. Suppliers can now view incoming orders and update the status from 'New' to 'Processing' to 'Completed'.
- **Status:** ✅ Implemented.

**Tester:** Maria (Florist Representative)
- **Feedback:** "After I login, I want to see my past orders to know what I bought last week."
- **Action Taken:** Implemented **'My Orders'** page for Buyers. It shows the history and the current status of each order.
- **Status:** ✅ Implemented.

---

## Phase 3: Enhancements & Maintenance
**Tester:** Giovanni (Farmer/Supplier)
- **Feedback:** "I made a mistake adding a product price, but I cannot remove it from the catalog."
- **Action Taken:** Added a "Manage Catalog" section in the Supplier Dashboard with a **Delete** button.
- **Status:** ✅ Implemented.

**Tester:** Maria (Florist Representative)
- **Feedback:** "The catalog is growing. It's hard to find specific flowers without scrolling."
- **Action Taken:** Implemented a **Search Bar** in the catalog to filter products by name.
- **Status:** ✅ Implemented.

---

## Final Sign-Off
**Date:** 2025-11-23
**Conclusion:** All critical feedback has been addressed. The platform supports the full B2B lifecycle (Order -> Process -> Track).