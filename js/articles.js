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
  {"slug": "virginia-ice-court-split", "headline": "Court Blocks Both of Virginia's ICE Laws, Internet Announces; Court, Checking Its Own Ruling, Finds It Blocked One and Let Virginia Enforce the Other", "dek": "Libs of TikTok announced a court blocked Virginia's law restricting ICE cooperation and banning ICE masks — one law, both blocked. There were two laws, and the Fourth Circuit split them: the mask law stayed blocked for federal officers, and the court vacated the block on the cooperation law, letting Virginia enforce it.", "category": "freedom-watch", "categoryLabel": "Freedom Watch", "author": "Chip Hollister", "date": "2026-11-23", "dateLabel": "Nov 23, 2026", "readTime": "4 min read", "glyph": "⚖", "tags": ["Immigration", "Courts", "Virginia"], "sample": false},
  {"slug": "secret-space-weapons", "headline": "America and the Soviets Secretly Put Weapons in Space in the '80s, Internet Is Quite Sure; the Secret Shuttle Missions, Records Show, Were Hauling Spy Satellites, and the Star Wars Program Never Left the Ground", "dek": "The internet is quite sure both superpowers secretly parked weapons in orbit in the '80s, citing a strong feeling and a Clint Eastwood movie. The secret Shuttle missions carried spy and phone satellites, SDI never deployed a single weapon, and Space Cowboys is fiction.", "category": "freedom-watch", "categoryLabel": "Freedom Watch", "author": "Biff Carrington", "date": "2026-11-23", "dateLabel": "Nov 23, 2026", "readTime": "4 min read", "glyph": "🛰", "tags": ["Space", "Cold War", "Reddit"], "sample": false},
  {
    slug: "us-pays-world-meds",
    kicker: "Freedom Watch",
    title: "America Pays for All the World's Medicine and All Its Research, Internet Announces; Europe, Which Spent \u20ac56 Billion on Drug Research Last Year, Is Surprised to Learn It Paid Nothing",
    excerpt: "\u201cWe pay for all the med research,\u201d the internet announces, and foreign health systems would collapse without U.S. prices. U.S. brand prices are 2.78x abroad, but Europe spent \u20ac56.3B on pharma R&D in 2024, U.S. generics are cheaper than abroad, and the NHS has run on British taxes since 1948.",
    author: "Chip Hollister",
    date: "November 23, 2026",
    art: "art-green",
    glyph: "\u2695",
    tags: ["healthcare", "drug prices", "reddit"],
    sample: false
  },
  {
    slug: "somali-95-percent-takeover",
    kicker: "Freedom Watch",
    title: "Somalis Have \u201cCompletely\u201d Taken Over Minnesota and Almost 95% Are on Welfare, Internet Announces; the Takeover, Records Show, Amounts to 2% of the State, and the 95% Appears in No Dataset Anywhere",
    excerpt: "Alex Jones says Somalis own Minnesota \u201clock, stock & barrel\u201d and almost 95% are on welfare. No dataset reaches 95% \u2014 the highest real figure is 89% of households with children on any benefit, mostly Medicaid \u2014 and the community is ~108,000 people, 2% of the state, 95% of them U.S. citizens.",
    author: "Biff Carrington",
    date: "November 22, 2026",
    art: "art-red",
    glyph: "\u2691",
    tags: ["minnesota", "immigration", "fact checks"],
    sample: false
  },
  {
    slug: "taqiyya-license-to-lie",
    kicker: "Freedom Watch",
    title: "Iran's Religion Lets It Lie to Infidels Anytime It Wants, Internet Explains; the Doctrine, Scholars Note, Is About Not Getting Killed for Your Faith",
    excerpt: "\u201cDoesn't matter what deals they make \u2014 their religion allows them to lie to Infidels anytime they want.\u201d The doctrine is taqiyya: concealing your faith under threat of death or injury, with a scholarly threshold of death, loss of limb, or tremendous suffering.",
    author: "Chip Hollister",
    date: "November 22, 2026",
    art: "art-purple",
    glyph: "\u263D",
    tags: ["iran", "taqiyya", "reddit"],
    sample: false
  },
  {
    slug: "spacex-only-rocket",
    kicker: "Freedom Watch",
    title: "SpaceX Is the Only Company That Can Launch Things, Internet Declares; Space Force, Which Just Paid Three Companies $13.7 Billion to Launch Things, Is Surprised",
    excerpt: "\u201cSpaceX is the only capable launch provider,\u201d the internet declares \u2014 and government contracts \u201care not that significant\u201d to it. The Space Force paid three providers $13.7B for its toughest launches, and SpaceX alone holds $22B in government contracts.",
    author: "Biff Carrington",
    date: "November 22, 2026",
    art: "art-teal",
    glyph: "\u1F680",
    tags: ["spacex", "space force", "reddit"],
    sample: false
  },
  {
    slug: "loomer-el-sayed-operative",
    kicker: "Freedom Watch",
    title: "Senator-Elect Is a Secret Operative, Pledge Reveals; the Pledge, Fact-Checkers Note, Was Not a Pledge",
    excerpt: "Laura Loomer says Senator-elect Abdul El-Sayed is a Muslim Brotherhood operative who \u201Csigned a literal pledge.\u201D The statement backed an elected president, he disavowed the group on camera, and PolitiFact rated the claim Pants on Fire.",
    author: "Chip Hollister",
    date: "November 21, 2026",
    art: "art-purple",
    glyph: "\u1F50D",
    tags: ["michigan", "senate", "fact checks"],
    sample: false
  },
  {
    slug: "ukraine-started-it",
    kicker: "Freedom Watch",
    title: "Ukraine Started the War It Was Invaded In, Internet Concludes; the Invading, Records Show, Was Russia\u2019s",
    excerpt: "Hours after Russian missiles struck Kyiv again, the internet\u2019s foremost war historians reached a finding, awarded eight times: Ukraine started this. The record \u2014 Crimea 2014, February 24, 2022, a 141\u20135 UN vote \u2014 disagrees.",
    author: "Chip Hollister",
    date: "November 21, 2026",
    art: "art-gold",
    glyph: "\u2694",
    tags: ["ukraine", "russia", "comment sections"],
    sample: false
  },
  {
    slug: "massie-14500-month-no-show",
    kicker: "Freedom Watch",
    title: "House Adjourns Early for Lack of Members, Then Begs Members to Show Up",
    excerpt: "The House canceled Friday\u2019s votes and adjourned until November 30 because too few members were in town \u2014 then the Speaker wrote a letter begging them to come back. They still collect $14,500 a month.",
    author: "Chip Hollister",
    date: "November 21, 2026",
    art: "art-navy",
    glyph: "\u1F3DB",
    tags: ["congress", "attendance", "paychecks"],
    sample: false
  },
  {
    slug: "massie-hold-our-beer",
    kicker: "Freedom Watch",
    title: "Voters Asked for Lower Prices, Peace, and the Epstein Files; Congress Heard \u201cHold Our Beer\u201d",
    excerpt: "Rep. Thomas Massie posted the exchange himself: voters asked for lower prices, an end to the war, and the Epstein files \u2014 Congress answered with one December bill that does the opposite, then adjourns early for Christmas.",
    author: "Chip Hollister",
    date: "November 20, 2026",
    art: "art-green",
    glyph: "\u1F37A",
    tags: ["congress", "epstein files", "christmas"],
    sample: false
  },
  {
    slug: "jones-chatgpt-food-consolidation",
    kicker: "Freedom Watch",
    title: "ChatGPT Confirms Government Is Taking All the Emergency Food, Reports Broadcaster",
    excerpt: "Alex Jones says ChatGPT confirmed FEMA is seizing all the emergency food and companies were told to stop selling to the public. FORTRESS is a bases-only plan from September 30; FEMA still says several days.",
    author: "Chip Hollister",
    date: "November 20, 2026",
    art: "art-red",
    glyph: "\u2691",
    tags: ["emergency food", "chatbots", "fema"],
    sample: false
  },
  {
    slug: "lindell-sues-counting-texas",
    kicker: "Freedom Watch",
    title: "Pillow Magnate Sues Counting Itself After Texas Votes Go \u201cBackwards\u201d All the Way to a Typo",
    excerpt: "Mike Lindell has uncovered thousands of backwards vote counts and more votes than voters in Texas \u2014 a state where 9.85 million of 19 million registered voters cast ballots. The backwards count was a TV graphic typo.",
    author: "Chip Hollister",
    date: "November 20, 2026",
    art: "art-purple",
    glyph: "\u2696",
    tags: ["texas", "counting", "lawsuits"],
    sample: false
  },
  {
    slug: "measles-detectives-border",
    kicker: "Freedom Watch",
    title: "America Loses Measles-Free Status After 26 Years; Internet Detectives Trace Outbreak to Tens of Millions of Migrants, 18 of Whom Had Measles",
    excerpt: "The US lost its measles elimination status after 26 years. Reddit\u2019s finest epidemiologists solved the case in minutes: tens of millions of migrants. The CDC counted 18 international visitors among 5,412 cases.",
    author: "Biff Carrington",
    date: "November 18, 2026",
    art: "art-red",
    glyph: "\U0001f9a0",
    tags: ["measles", "detectives", "public health"],
    sample: false
  },
  {
    slug: "gas-prices-defeat-autumn",
    kicker: "Freedom Watch",
    title: "Gas Prices Fall for Eighth Straight Week; Congresswoman Takes Credit, Defeats Autumn",
    excerpt: "Rep. Marjorie Taylor Greene explains that gasoline got cheaper because Democrats got whooped and Iran got threatened. The gasoline, which had been falling in price since September, was unavailable for comment.",
    author: "Chip Hollister",
    date: "November 18, 2026",
    art: "art-green",
    glyph: "\u26fd",
    tags: ["gas prices", "the market", "autumn"],
    sample: false
  },
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
