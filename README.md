# MK Developers static websites

This repository holds the four static sites deployed through the Cloudflare Pages project connected to this repository:

- `sites/amit-george/` — `amitgeorge.in`
- `sites/athish-wedding-site/` — `athishniharikamoments.in`
- `sites/panditaradhyula/` — `panditaradhyula.com` (includes `/condohousewarming/`)
- `sites/nimbleq/` — `nimbleq.ca`

A Cloudflare Worker routes each domain to its matching site directory. Keep each site's assets inside its folder. Cloudflare Pages builds this repository as a static site with the repository root as the output directory.
