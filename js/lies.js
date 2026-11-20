/* ============================================================
   Conservative Intellect — Lie Counter data
   The lies.html page reads this list to render the running
   total, the per-person leaderboard, and every entry.
   To log a new lie, add one entry at the TOP of the LIES
   array (newest first).
   Fields:
     who     — name of the person who said it
     date    — when the claim was made (display text)
     claim   — the false statement, in their own words where possible
     context — where/how the claim was made
     reality — the factual record, stated plainly
     sources — array of { label, url } for verification
   ============================================================ */

const LIES = [
  {
    who: "Mike Lindell",
    date: "November 19, 2026",
    claim: "\u201CWe\u2019ve uncovered thousands of examples of vote counts going BACKWARDS and hundreds of cases where reported votes exceed the number of voters\u201D \u2014 and \u201CTHEY STOLE TEXAS.\u201D",
    context: "Posted on X, November 19\u201320, 2026, announcing a class-action lawsuit against voting machine companies over the 2026 Texas midterm results.",
    reality: "9.85 million Texans voted out of ~19 million registered (51.6% turnout, below 2018) \u2014 no precinct reported more votes than voters, and the \u201C20 million found votes\u201D variant is arithmetically impossible. The marquee \u201Cbackwards\u201D count was a dropped digit in an NBC graphic (22,403 for 224,403), flagged on air and corrected within minutes. Governor Greg Abbott congratulated the Democratic winner of his own race, and both losing Texas Republicans conceded.",
    sources: [
      { label: "Lead Stories \u2014 KornackiCam fact check", url: "https://leadstories.com/hoax-alert/2026/11/fact-check-nbc-kornackicam-result-does-not-prove-fraud-talarico-briefly-shown-with-91-point-9-percent-of-tarrant-county-votes.html" },
      { label: "MEAWW \u2014 Did Texas find 20M new fraudulent votes?", url: "https://news.meaww.com/fact-check-did-texas-find-20m-new-fraudulent-votes-that-flipped-the-state-blue" },
      { label: "CandidDragon \u2014 How Texas Flipped Statewide in 2026", url: "https://candiddragon.com/texas-2026-midterm-turnout-oddity-why-its-being-questioned/" }
    ]
  },
  {
    who: "Marjorie Taylor Greene",
    date: "November 18, 2026",
    claim: "\u201CThe price of gas dropped after the election because you got whooped in the midterms BECAUSE YOU have been psychotically threatening to basically nuke Iran. So the market reacted.\u201D",
    context: "Posted on X, November 18, 2026.",
    reality: "Pump prices peaked September 21 at $4.478 (EIA) and fell for weeks before the election on the annual winter-blend switch, refinery output, and seasonal demand \u2014 a pattern GasBuddy\u2019s Patrick De Haan notes has repeated in the 30 days before nearly every election since 2006, and he calls the election framing \u2018a myth.\u2019 Crude\u2019s post-election drop was driven by expectations the Iran war would wind down \u2014 the opposite of the mechanism claimed.",
    sources: [
      { label: "IndyStar \u2014 Did midterm election results lower U.S. gas prices with \u2018blue wave\u2019?", url: "https://www.indystar.com/story/news/politics/2026/11/10/did-midterm-election-results-lower-us-gas-prices-with-blue-wave-usa-gas-prices-near-me-thanksgiving/92704225007/" },
      { label: "The Oklahoman \u2014 Gas prices are falling nationwide, but don\u2019t credit the election", url: "https://www.oklahoman.com/story/news/state/2026/11/12/gas-prices-in-oklahoma-falling-from-near-record-highs/92727987007/" },
      { label: "Energy News Beat \u2014 Gas Fell Below $4. The Slide Started in September.", url: "https://sandstonegroup.us/gas-fell-below-4-the-slide-started-in-september/" }
    ]
  },
  {
    who: "Marjorie Taylor Greene",
    date: "August 16, 2026",
    claim: "\u201CThey are discussing using nuclear weapons on Iran in strategy meetings. Yes you read that correctly. It\u2019s real. I\u2019m not speculating, I know.\u201D",
    context: "Posted on X, August 16, 2026.",
    reality: "No transcript, leaked memo, or official statement has ever supported this. It was not confirmed by the White House, the Pentagon, or any major news organization. The White House dismissed the claim as \u2018fake news.\u2019",
    sources: [
      { label: "The Raisina Hills — reporting the claim and its lack of corroboration", url: "https://theraisinahills.com/marjorie-taylor-greene-nuclear-weapons-iran-claim/" },
      { label: "WLT Report — White House response", url: "https://wltreport.com/2026/08/17/white-house-slams-marjorie-taylor-greene-for-spreading-fake-news-about-nuclear-option-in-iran/" }
    ]
  },
  {
    who: "Marjorie Taylor Greene",
    date: "May 2026",
    claim: "\u201CThose who refused COVID-19 vaccines and instead took \u2018horse paste\u2019 developed natural immunity\u201D — implying ivermectin would protect against hantavirus.",
    context: "Posted on X during an outbreak of hantavirus aboard the MV Hondius cruise ship.",
    reality: "Infectious disease experts say there is no evidence supporting ivermectin as a treatment for hantavirus, and warn that promoting it hinders public health efforts. No hantavirus cases were confirmed in the United States during the outbreak.",
    sources: [
      { label: "Enstarz — reporting the claim and expert pushback", url: "https://www.enstarz.com/articles/245157/20260508/marjorie-taylor-greene-sparks-outrage-debunked-hantavirus-cure-claim-despite-warnings.htm" }
    ]
  },
  {
    who: "Mike Lindell",
    date: "February 2021",
    claim: "\u201CDominion Voting Systems rigged the 2020 election for Joe Biden\u201D — claiming voting machines manipulated results to steal the election.",
    context: "Repeated across media appearances and in Lindell\u2019s self-produced \u2018documentary.\u2019",
    reality: "No evidence has ever supported this. Independent audits and paper-ballot recounts confirmed the results, and Trump\u2019s own attorney general found no evidence of machine fraud. A federal jury in Colorado ordered Lindell to pay $2.3 million to former Dominion employee Eric Coomer for defamation over the false claims.",
    sources: [
      { label: "Democracy Docket — the debunked Dominion conspiracy", url: "https://www.democracydocket.com/analysis/the-biggest-election-deniers-want-scotus-to-ban-voting-machines/" },
      { label: "TheWrap — Dominion\u2019s $1.3B defamation suit over the false claims", url: "https://www.thewrap.com/mike-lindell-dominion-lawsuit/" }
    ]
  },
  {
    who: "Laura Loomer",
    date: "September 2024",
    claim: "\u201CInteresting choice of earrings tonight, [Harris]\u201D — claiming Kamala Harris wore Nova H1 \u2018audio earrings\u2019 to be fed answers during the presidential debate.",
    context: "Posted on X on the night of the Harris\u2013Trump presidential debate.",
    reality: "The earrings were identified as Tiffany & Co. South Sea Pearl earrings, which Harris had worn at earlier public events. The Nova H1 design differs (it wraps around the earlobe), and earpieces were prohibited under the debate rules, which barred notes and props on stage.",
    sources: [
      { label: "Comic Sands — the claim, fact-checked", url: "https://www.comicsands.com/laura-loomer-harris-audio-earrings" }
    ]
  },
  {
    who: "Alex Jones",
    date: "2012\u20132022",
    claim: "\u201CThe Sandy Hook Elementary School shooting was a staged hoax, and the grieving parents were crisis actors.\u201D",
    context: "Repeated for years on Infowars. Jones admitted in court during the 2022 defamation trial that the attack was real.",
    reality: "The December 14, 2012 shooting in Newtown, Connecticut was real: 20 first graders and six educators were murdered. A Connecticut jury awarded roughly $965 million to the families, with punitive damages bringing it to about $1.4 billion; in October 2025 the U.S. Supreme Court declined to hear Jones\u2019s appeal, leaving the judgment in place.",
    sources: [
      { label: "Associated Press — Supreme Court rejects Jones\u2019s appeal, $1.4B judgment stands", url: "https://www.tricityrecordnm.com/articles/associated-press-new-mexico/supreme-court-rejects-alex-jones-appeal-of-1-4-billion-defamation-judgment-in-sandy-hook-shooting/" }
    ]
  }
];
