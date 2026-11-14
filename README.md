# Salt Lake Mobile Detailing — Website

Marketing website for **Salt Lake Mobile Detailing**, a mobile car detailing business serving
Salt Lake City and all of Salt Lake County. Built with React + Vite and designed for free
hosting on GitHub Pages.

## Local development

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Deploying to GitHub Pages (free hosting)

1. Create a new GitHub repository and push this project to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. In the repository on GitHub, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.

3. The included workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))
   builds and deploys the site automatically on every push to `main`.

Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

> **Tip:** For the best SEO, buy a custom domain (e.g. `saltlakemobiledetailing.com`),
> add it under **Settings → Pages → Custom domain**, and then update the placeholder URLs
> described below. Google strongly favors real domains for local business rankings.

## Things to update before launch

| What | Where |
| --- | --- |
| Phone number | `BUSINESS` in [src/data.js](src/data.js) — also in [index.html](index.html) JSON-LD (`telephone`) |
| Email address | `BUSINESS` in [src/data.js](src/data.js) — also in [index.html](index.html) JSON-LD (`email`) |
| Site URL | Already set to `https://saltlakemobiledetails.github.io/`. If you buy a custom domain later, update it in [index.html](index.html), [public/robots.txt](public/robots.txt), and [public/sitemap.xml](public/sitemap.xml) |
| Pricing | `PRICING`, `SERVICES`, and `ADDONS` in [src/data.js](src/data.js) |
| Service hours | `BUSINESS.hours` in [src/data.js](src/data.js) and `openingHoursSpecification` in [index.html](index.html) |

## SEO checklist (after deploying)

- [ ] Replace all placeholder URLs/contact info (table above).
- [ ] Create a free [Google Business Profile](https://business.google.com) — the single
      biggest factor for ranking in local "near me" searches and Google Maps.
- [ ] Submit the sitemap in [Google Search Console](https://search.google.com/search-console).
- [ ] Ask every customer for a Google review — competitors rank on review volume.
- [ ] Keep name/phone/address identical across Google, the website, and any directories.

## What's already SEO-optimized

- Semantic HTML with one `h1` and descriptive heading hierarchy
- Title/description/keyword meta tags targeting "mobile car detailing Salt Lake City"
- Open Graph + Twitter card tags for social sharing
- `LocalBusiness`/`AutoWash` JSON-LD structured data with services, pricing, and service area
- `FAQPage` JSON-LD (eligible for rich results in Google)
- `robots.txt` + `sitemap.xml`
- Fast: no heavy images — all artwork is inline SVG; Lighthouse-friendly single page
- Mobile responsive with `tel:` click-to-call links

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- Plain CSS (no framework) in [src/index.css](src/index.css)
- All illustrations are hand-written inline SVGs in [src/art.jsx](src/art.jsx)
