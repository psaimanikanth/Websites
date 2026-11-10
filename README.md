# MK Developers Cloudflare Pages upload

This Direct Upload Pages project contains three static sites:

- `sites/amit-george/` → `amitgeorge.in`
- `sites/athish-wedding-site/` → `athishniharikamoments.in`
- `sites/panditaradhyula/` → `panditaradhyula.com`

The separate Cloudflare Worker `mk-developers-router` routes each domain to its folder. The top-level `404.html` prevents unknown paths from displaying a project directory.

Each site folder contains its own `index.html`. No credentials are included.