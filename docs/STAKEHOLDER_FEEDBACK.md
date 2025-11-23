# Stakeholder Feedback & UAT Report

## Overview
This document tracks feedback received from stakeholders (Farmers, Florists, and System Admins) during the User Acceptance Testing (UAT) phases.

---

## Feature 1: User Registration
**Tester:** Maria (Florist Representative)
- **Feedback:** "I need to specify if I am a buyer or a supplier, otherwise the platform is confusing."
- **Action Taken:** Added a "Role" dropdown selector in the registration form (`Buyer` vs `Supplier`).
- **Status:** ✅ Implemented.

## Feature 2: Product Catalog
**Tester:** Giovanni (Farmer/Supplier)
- **Feedback:** "The list is too plain. I need to see images of the flowers to judge the quality."
- **Action Taken:** Updated the product card layout to include product images fetched from the backend.
- **Status:** ✅ Implemented.

## Feature 3: Shopping Cart & Orders
**Tester:** System Admin
- **Feedback:** "Users are able to click 'Checkout' even when the cart is empty, causing server errors."
- **Action Taken:**
  1. Disabled the "Checkout" button visually when the cart is empty.
  2. Added backend validation to reject orders with 0 items (returns 400 Bad Request).
- **Status:** ✅ Implemented.

---

## Final Sign-Off
**Date:** 2025-11-23
**Conclusion:** All critical feedback has been addressed. The platform is ready for the initial B2B pilot launch.