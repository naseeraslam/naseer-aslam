---
title: "Securing Magento 2 GraphQL: Locking Down Introspection"
date: "2026-01-15"
summary: "GraphQL introspection leaks your entire API schema to anyone who asks. Here's how to harden your headless Magento 2 storefront before it becomes a liability."
tags: ["Magento 2", "GraphQL", "Security", "Adobe Commerce"]
author: "Naseer Aslam"
---

When you expose a Magento 2 GraphQL endpoint to the public web, introspection is enabled by default. That means anyone with `curl` can dump your entire schema — every query, every mutation, every type. For competitors and attackers alike, that's a free map.

## Why It Matters

In a headless commerce setup, your GraphQL API is your storefront's backbone. An exposed schema reveals:

- Custom business logic encoded in type names and fields
- Internal data structures (customer segments, price rules)
- Endpoints ripe for rate-limit abuse

## The Fix

The `magento2-introspection-auth` module adds a configurable authentication check to the introspection resolver. Unauthorised clients get a 401; your trusted front-end gets through with a header token.

```php
// di.xml — replace the default introspection resolver
<preference for="Magento\Framework\GraphQl\Schema\Type\ResolveInfo"
            type="Naseer\IntrospectionAuth\Model\ResolveInfo" />
```

Set the token in `Stores → Configuration → GraphQL → Introspection Token` and add it to your front-end's request headers. Done.

## Takeaway

Security hardening for headless Magento is an ongoing practice, not a one-time setup. Introspection auth is a quick win — ship it before you go live.
