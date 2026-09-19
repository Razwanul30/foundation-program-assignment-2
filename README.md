# MovieExplorer

A responsive React app for browsing and searching TV shows and movies, built with Vite, React Router, and the free [TVMaze API](https://www.tvmaze.com/api).

## Features
- Home page with navbar, hero banner, CTA, and footer
- Movie listing (`GET /shows`) with live title search (`GET /search/shows?q=`)
- Reusable card component: poster, title, rating, year, See Details
- Details modal: artwork, summary, rating, release date, genres, language, network; closes via ✕, Close, backdrop click, or Esc
- Responsive grid: 1 column on mobile up to 4 columns on desktop

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Build with `npm run build` and deploy the `dist` folder to Vercel or Netlify. For client-side routing on Netlify, add `public/_redirects` containing `/* /index.html 200`. Vercel needs a rewrite of all paths to `/index.html`.
