# Conservative Intellect

A static satire news site — plain HTML/CSS/JS, no build step, no dependencies.
Ready to deploy to Cloudflare Pages, Netlify, or any static host.

## File layout

```
satire-site/
├── index.html                  # Homepage (featured story + latest grid, rendered from articles.js)
├── about.html                  # About page — clearly states the site is satire
├── css/
│   └── style.css               # All styles: broadsheet-inspired, responsive, self-contained
├── js/
│   └── articles.js             # Article index: the single list the homepage + article pages read
└── articles/
    ├── template.html           # Blank template for new articles (start here)
    ├── shadow-woke-sun-investigation.html   # SAMPLE
    ├── patriot-defeats-windmill-fistfight.html  # SAMPLE
    ├── school-board-replaces-history-with-vibes.html  # SAMPLE
    └── florida-man-sinkhole-government.html  # SAMPLE
```

The four published articles are **sample content** (marked with a small
"SAMPLE" badge on the site and an HTML comment at the top of each file).
Replace them with your own, or delete them.

## How to add a new article

**Step 1 — Create the article page.**
Copy `articles/template.html` to a new file named after your story's slug
(lowercase, words separated by dashes), e.g. `articles/my-new-outrage.html`.
Open it and replace every `[[PLACEHOLDER]]`:
- `[[HEADLINE]]`, `[[CATEGORY]]`, `[[AUTHOR NAME]]`, `[[DATE]]`, `[[N]] min read`
- The `[[DATELINE]]` city, all body paragraphs, the optional pull quote
- The `<title>` and meta description
- The hero art class (pick one: `art-red`, `art-navy`, `art-gold`,
  `art-green`, `art-purple`, `art-teal`) and the decorative glyph character
- The tags
- In the `<script>` at the bottom, set `var here = 'my-new-outrage';`
  (your slug) so the "More Outrage" section doesn't link to itself
- Delete the big comment block at the top of the file when done

**Step 2 — Register it in `js/articles.js`.**
Add one entry at the **top** of the `ARTICLES` array (newest first):

```js
{
  slug: "my-new-outrage",          // filename without ".html"
  kicker: "Freedom Watch",        // category label
  title: "Your Headline Here",
  excerpt: "One or two sentences for the homepage card.",
  author: "Your Name",
  date: "October 3, 2026",
  art: "art-red",                 // one of the six art classes
  glyph: "★",                     // decorative character on the card art
  tags: ["tag one", "tag two"],
  sample: false                   // false for real articles
},
```

That's it. The homepage automatically shows the newest entry as the
featured story and the rest in the "Latest" grid, and every article page's
"More Outrage" section picks up the new entry. No build step, no regeneration.

**Removing a sample article:** delete its `.html` file and remove its entry
from `ARTICLES` in `js/articles.js`.

## Previewing locally

No server needed — but note that `file://` works fine since article data is
loaded via a plain `<script>` tag (not `fetch`). Just open `index.html` in a
browser. For a closer-to-production check:

```bash
cd ~/workspace/satire-site
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

### Cloudflare Pages
1. Push this folder to a Git repo (or use the Pages dashboard's direct upload).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets,
   or connect the repo. No build command, no output directory beyond `/`
   (publish directory = the repo/folder root).
3. Once `conservativeintellect.com` is registered, add it as a custom domain
   in the Pages project — Cloudflare handles DNS + HTTPS automatically.

### Netlify
1. Drag the `satire-site` folder onto <https://app.netlify.com/drop>,
   or connect a Git repo containing it.
2. No build command; publish directory = folder root.
3. Add `conservativeintellect.com` under Site settings → Domain management
   and point the domain's DNS at Netlify (they give you the records).

## Customizing the look

All visual design lives in `css/style.css` under `:root` CSS variables —
`--paper`, `--ink`, `--crimson`, `--gold`, `--navy` set the whole palette,
and `--serif` / `--sans` set the type. Tweak those and the whole site follows.
