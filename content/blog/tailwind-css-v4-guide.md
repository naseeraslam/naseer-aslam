---
title: "Building Custom Magento 2 Payment Integrations with Stripe"
date: "2026-02-01"
summary: "Step-by-step walkthrough of integrating Stripe into Magento 2 beyond the official plugin — custom payment flows, webhooks, and multi-vendor payouts."
tags: ["Magento 2", "Stripe", "PHP", "Payments", "Adobe Commerce"]
author: "Naseer Aslam"
---

The official Stripe plugin covers 80% of use cases. But marketplace scenarios — where you need to split payments and pay out multiple vendors — require building on top of Stripe Connect directly.

## The Architecture

```
Customer → Magento Checkout → Stripe Charge (platform)
                                    ↓
                          Stripe Transfer → Vendor A account
                          Stripe Transfer → Vendor B account
```

Magento handles the order; Stripe handles the money movement. The two are connected via Magento's `OrderManagement` observer and Stripe's Transfer API.

## Key Implementation Points

**1. Observer on `sales_order_invoice_pay`**

Trigger the Stripe transfer when an invoice is marked paid, not at order placement. This ensures you only payout for fulfilled orders.

**2. Store Stripe Account IDs on Vendor Entities**

Add a `stripe_account_id` attribute to your vendor entity (or use a custom table). Populate it during vendor onboarding via Stripe Connect OAuth.

**3. Webhook Reconciliation**

Stripe webhooks (`transfer.paid`, `transfer.failed`) should write back to a `payout_log` table in Magento. This gives ops teams an audit trail without needing to log into Stripe.

## Lessons Learned

- Always use idempotency keys on Stripe API calls — order observers can fire more than once.
- Test with Stripe's test clock feature to simulate delayed payouts and partial refunds.
- Consider a queue (RabbitMQ) for payout triggers under high order volume.
