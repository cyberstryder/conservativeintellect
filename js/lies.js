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
