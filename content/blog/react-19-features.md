---
title: "Magento 2 Performance: Redis, Varnish, and Elasticsearch in Production"
date: "2026-02-10"
summary: "A practical guide to the three caching and search layers that separate a fast Magento 2 store from a slow one — what each does, how they interact, and common pitfalls."
tags: ["Magento 2", "Performance", "Redis", "Elasticsearch", "Adobe Commerce"]
author: "Naseer Aslam"
---

Most Magento 2 performance problems trace back to missing or misconfigured caching. Here's how the three core layers work together.

## Redis — Session & Full-Page Cache

Redis replaces the default file-based cache and session storage. Configure two separate Redis instances: one for the full-page cache and one for sessions. Mixing them causes cache stampedes under load.

```xml
<!-- app/etc/env.php -->
'cache' => [
  'frontend' => [
    'default' => ['backend' => 'Cm_Cache_Backend_Redis', ...],
    'page_cache' => ['backend' => 'Cm_Cache_Backend_Redis', ...],
  ]
]
```

## Varnish — HTTP Cache

Varnish sits in front of Nginx and serves cached full-page responses in microseconds. Generate the VCL from Magento Admin → Stores → Configuration → Advanced → System → Full Page Cache. The most common pitfall: forgetting to purge Varnish after a deploy.

## Elasticsearch — Catalogue Search

Elasticsearch replaces MySQL for search and layered navigation. On large catalogues (50k+ SKUs), MySQL search degrades to seconds. Elasticsearch returns results in under 100ms and supports faceted filters without full table scans.

## The Compound Effect

Each layer multiplies the others. A store with all three configured correctly can serve 95% of traffic from cache, reducing PHP execution to near zero for anonymous visitors.
