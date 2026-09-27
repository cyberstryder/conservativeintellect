/* ============================================================
   Conservative Intellect — article index
   The homepage reads this list to render the featured story
   and the "Latest" grid. To add a new article:
     1. Copy articles/template.html to articles/your-slug.html
        and fill in the headline, byline, and body.
     2. Add one entry to the ARTICLES array below (newest first).
   Fields:
     slug    — filename of the article page, without ".html"
     kicker  — small category label, e.g. "Freedom Watch"
     title   — headline
     excerpt — one or two sentences shown on cards
     author  — byline name
     date    — display date
     art     — CSS class for the card artwork (art-red, art-navy,
               art-gold, art-green, art-purple, art-teal)
     glyph   — a single decorative character shown on the artwork
     tags    — array of tag strings shown on the article page
     sample  — true while this is placeholder content
   ============================================================ */

const ARTICLES = [
  {
    slug: "shadow-woke-sun-investigation",
    kicker: "Freedom Watch",
    title: "Local Man Discovers His Own Shadow Is \u2018Woke,\u2019 Demands Sun Be Investigated",
    excerpt: "Dale Krebbs, 54, says his shadow has been \u2018following him around all day, clearly surveilling,\u2019 and wants Congress to look into what the sun is hiding.",
    author: "Chip Hollister",
    date: "September 26, 2026",
    art: "art-red",
    glyph: "\u2600",
    tags: ["wokeness", "the sun", "surveillance", "shadows"],
    sample: true
  },
  {
    slug: "patriot-defeats-windmill-fistfight",
    kicker: "Heroes Among Us",
    title: "Brave Patriot Single-Handedly Defeats Windmill in Fistfight, Declares Area Safe for Birds",
    excerpt: "\u2018It looked at me funny,\u2019 said the 38-year-old, nursing three broken knuckles and a profound sense of victory. Ornithologists were unavailable for comment, mostly because they were laughing.",
    author: "Biff Carrington",
    date: "September 24, 2026",
    art: "art-navy",
    glyph: "\u2726",
    tags: ["windmills", "birds", "heroism", "renewable energy"],
    sample: true
  },
  {
    slug: "school-board-replaces-history-with-vibes",
    kicker: "Education",
    title: "School Board Votes to Replace History Curriculum with Vibes",
    excerpt: "\u2018Students were learning things that made them feel bad, which is the opposite of learning,\u2019 explained the board president. Tests will now be graded on confidence.",
    author: "Tad Pemberton",
    date: "September 21, 2026",
    art: "art-gold",
    glyph: "\u00a7",
    tags: ["education", "history", "vibes", "school board"],
    sample: true
  },
  {
    slug: "florida-man-sinkhole-government",
    kicker: "Small Government",
    title: "Man Who Fled to Florida to Escape Government Outraged Government Won\u2019t Fill His Sinkhole",
    excerpt: "\u2018I moved here so the government would leave me alone,\u2019 he shouted into the void where his driveway used to be. \u2018Now where IS the government? This is tyranny.\u2019",
    author: "Chip Hollister",
    date: "September 18, 2026",
    art: "art-teal",
    glyph: "\u25bc",
    tags: ["florida", "sinkholes", "small government", "irony"],
    sample: true
  }
];
