# Stakeholder Interview — Supplier Farmer

**Date:** 2025-10-02  
**Role:** Agricultural Producer / Cooperative Representative  
**Interviewed by:** FreshCut Team  
**Objective:** Understand supplier workflow, stock management, and expectations from the B2B platform.

## Summary
The supplier manages inventory for several produce types (leafy greens, roots, herbs). They want tools to easily publish listings, manage availability, and receive consolidated orders efficiently.

### Key Insights
- Each product batch has a limited freshness window.  
- Needs a **simple interface to upload products, set quantities, and define price per batch**.  
- Wants to **limit sales when stock is low** and automatically mark items as unavailable after harvest cycle.  
- Requires **automated invoicing and shipment labels**.  
- Requests an **API or export** for ERP synchronization.

### Identified Requirements
- **FR-05:** Create and manage product listings with photos, units, and pricing.  
- **FR-06:** Manage stock and batch-based availability.  
- **FR-07:** Enable automated invoicing and logistics documents.  
- **FR-08:** Provide integration (CSV/API) for ERP sync.  
- **NFR-02:** System must handle large image uploads efficiently.

### Assumptions / Risks
- Unstable weather may affect supply → system should communicate stock changes in real time.
