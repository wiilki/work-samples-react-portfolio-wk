# Will Kim — Portfolio

A fully refreshed, responsive React portfolio featuring selected websites, web apps, and backend projects.

## Current design

- A kinetic dark-tech design with a luminous schematic background, animated signal tracer, scroll progress, floating project display, interactive 3D card highlights, featured work, searchable/filterable project archive, about, expertise, and contact sections.
- Honest project cards with meaningful descriptions, technologies, GitHub links, and live-site links **only for projects with a known public deployment**.
- Published project previews prefer locally stored **real browser screenshots** captured from live project URLs by Playwright. A pair of external screenshot services acts as fallback while the local image is unavailable. Source-only projects use labeled illustrative previews, not fabricated screenshots.
- A custom high-contrast, electric cyan/violet/navy visual system built with CSS and small React motion components. Animations are progressively enhanced, and reduced-motion users receive a static, fully functional experience.
- Source-only applications such as Paceboard are **not represented as currently live** until deployment is confirmed.

## Run locally

Node 20+ is recommended.

```bash
npm install
npm start
```

To validate the portfolio:

```bash
CI=true npm test -- --watch=false --runInBand
npm run build
```

## Updating projects and previews

Edit [src/data/projectData.js](src/data/projectData.js). Each entry requires an `id`, `title`, `subtitle`, `description`, `category`, `tags`, `repo`, and `tone`. Add a `live` field **only** when the public website is actually deployed. The card shows a stored browser screenshot at `public/previews/<id>.png`. External screenshot providers are fallbacks only when the local asset is missing.

Do not add private, local-only dashboards or unreleased preview URLs as public links. Live apps can change independently of this portfolio; confirm a live URL before listing it.

## Refreshing screenshots

The capture manifest is in [scripts/preview-sources.json](scripts/preview-sources.json). Keep its `id` and `url` synchronized with live projects in `src/data/projectData.js`. The capture script navigates to each published URL using Playwright Chromium and stores an actual 1440 × 900 browser screenshot at `public/previews/<id>.png`. Sites that fail to load or show an error are skipped.

The workflow `.github/workflows/capture-previews.yml` can be run manually via **Actions → Refresh project screenshots → Run workflow** on the default branch after it is merged. It commits new captures only if image content changes. It is intentionally not scheduled to avoid unnecessary build minutes. An unpublished source-only project never receives a fake 'live screenshot'.

## Deployment

The repository is connected to a Vercel project: [portfolio](https://work-samples-react-portfolio-wk-bfdd.vercel.app/). A successful commit to `main` should be automatically deployed if that integration remains enabled.

## Contact

[Email](mailto:thewillkim@icloud.com) · [GitHub](https://github.com/wiilki) · [LinkedIn](https://www.linkedin.com/in/thewillkim/)

## License and credit

Design and UI composition for this portfolio are original. Third-party project code, site previews, names, and imagery retain their respective ownership and licenses.

### Atmos deployment

The Atmos card links to [the current Vercel deployment](https://atmos-weather-roan.vercel.app/), deployed directly from the weather repository's `main` source (commit `fba2428`). The older GitHub Pages URL had not picked up the redesigned app. The Atmos Vercel project is **not Git-connected**; future changes in that repository will need a new explicit deployment unless the Git connection is configured.
