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
    "who": "Kari Lake",
    "date": "November 24, 2026",
    "claim": "“80% of Americans support the work ICE is doing to remove illegal immigrants.”",
    "context": "Posted on X, November 24, 2026, arguing that opposition to ICE is a small group of “paid radicals” manufacturing a false impression.",
    "reality": "No national poll shows anything near 80% support for ICE's work. Marquette Law School (Jan. 2026) put approval of ICE's job performance at 40% of adults, with 60% disapproving; the 80% in that poll is Republicans only (independents 23%, Democrats 5%). Pew (fall 2026) found ICE 35% favorable / 56% unfavorable, and the NBC News midterm exit poll found 41% approval. The only other ~80% figure in the data is support for deporting violent criminals specifically — a different question.",
    "sources": [
      {
        "label": "Marquette Law School Poll — national survey (Jan 2026)",
        "url": "https://law.marquette.edu"
      },
      {
        "label": "Pew Research Center — How Americans View Federal Agencies (Oct 2026)",
        "url": "https://www.pewresearch.org"
      },
      {
        "label": "NBC News Exit Poll (Nov 3, 2026)",
        "url": "https://www.nbcnews.com"
      }
    ]
  },
  {
    "who": "Libs of TikTok",
    "date": "November 23, 2026",
    "claim": "“A federal appeals court just BLOCKED a Virginia law that restricts local police from cooperating with ICE and bans ICE from wearing masks.”",
    "context": "Posted on X, November 23, 2026, reporting the Fourth Circuit's decision that day in United States v. Virginia.",
    "reality": "The court split the two separate laws. It affirmed blocking only the mask/identification law as to federal officers, and it vacated the injunction against the cooperation law — letting Virginia enforce its limits on local ICE-cooperation (287(g)) agreements. The restriction the post says was blocked was in fact allowed to take effect.",
    "sources": [
      {
        "label": "Bloomberg Law — Virginia Can't Enforce ICE Mask Ban, Fourth Circuit Says (Nov 2026)",
        "url": "https://www.bloomberglaw.com"
      },
      {
        "label": "Reason / Volokh Conspiracy — Fourth Circuit Upholds Virginia's Law Terminating Agreements to Help With Immigration Enforcement (Nov 2026)",
        "url": "https://reason.com"
      }
    ]
  },
  {
    who: "Alex Jones",
    date: "November 22, 2026",
    claim: "\u201cAlmost 95% [of Somalis in Minnesota] Are On Some Form Of Welfare\u201d \u2014 and Somalis have \u201cCompletely\u201d taken over Minnesota and own it \u201cLock, Stock & Barrel.\u201d",
    context: "Posted on X, November 22, 2026, amplifying President Trump\u2019s latest remarks on Minnesota\u2019s Somali community.",
    reality: "No dataset reaches 95%. The Center for Immigration Studies\u2019 ACS analysis puts 81% of Somali immigrant households (89% of households with children) on at least one benefit; Minnesota\u2019s state demographer found 84% of Somali-ancestry individuals received assistance, mostly Medicaid (78%), with only 8% on public-assistance income. The community is ~108,000 people, about 2% of Minnesota, 95% of them U.S. citizens and 58% U.S.-born \u2014 and 72.2% of those 16+ are in the labor force (PolitiFact rated the companion \u201cdon\u2019t work\u201d claim Pants on Fire).",
    sources: [
      { label: "FactCheck.org \u2014 Probing Trump\u2019s Verbal Attack on Somalis (Dec 2025)", url: "https://www.factcheck.org" },
      { label: "Center for Immigration Studies \u2014 Somali Immigrants in Minnesota (Dec 2025)", url: "https://cis.org" },
      { label: "PolitiFact \u2014 Trump wrong that 92% of Minnesota Somalis don\u2019t work (Feb 2026)", url: "https://www.politifact.com" }
    ]
  },
  {
    who: "Laura Loomer",
    date: "November 21, 2026",
    claim: "\u201CAbdul El-Sayed is a Muslim Brotherhood operative. He signed a literal pledge in support of the Muslim Brotherhood, a designated Islamic terrorist organization.\u201D",
    context: "Posted on X, November 21, 2026, objecting to a possible White House meeting with Senator-elect Abdul El-Sayed.",
    reality: "No credible record shows El-Sayed is a member or operative of the Muslim Brotherhood, and he has repeatedly denied and disavowed it \u2014 on camera, \u201CSure, yeah, absolutely.\u201D The 2012 statement he is tied to backed Egypt\u2019s elected President Mohamed Morsi; PolitiFact and Bridge Michigan both concluded it was not a pledge to the Brotherhood as an organization, Bridge Michigan found no evidence of a pledge or ties, and PolitiFact rated the same \u201Cjihadist Muslim Brotherhood member\u201D claim \u201CPants on Fire\u201D during the campaign.",
    sources: [
      { label: "PolitiFact \u2014 El-Sayed Brotherhood fact checks (Oct 2026)", url: "https://www.politifact.com" },
      { label: "Bridge Michigan \u2014 fact check: no evidence of a pledge or ties", url: "https://www.bridgemi.com" },
      { label: "U.S. Department of State \u2014 Terrorist Designations of Muslim Brotherhood Chapters (Jan 13, 2026)", url: "https://www.state.gov" }
    ]
  },
  {
    who: "Alex Jones",
    date: "November 20, 2026",
    claim: "\u201CCHATGPT Confirms DHS/PENTAGON/FEMA Has Begun The National Forced Consolidation Of Emergency Food Stocks! Top Storable Food Companies Told To CEASE SALES TO THE AMERICAN PEOPLE Ahead Of A Major Foreseen Potential Crisis\u201D \u2014 and \u201Cour top food suppliers were ordered by the federal government to sell the remaining [food to the government].\u201D",
    context: "Posted on X, November 20, 2026, building on the Pentagon\u2019s real FORTRESS base-resilience program, amid a week of viral 90-day-blackout / stockpiling rumors that administration officials had publicly dismissed on November 15\u201316.",
    reality: "FORTRESS, announced September 30, 2026 (not \u201Cthree weeks\u201D before the post), is a plan for military bases to operate independently for 90 days \u2014 not an order to civilians and not a consolidation of the public food supply. No DHS/FEMA cease-sales order, company statement, or reputable report of one exists; the only source is Jones\u2019s own outlet. FEMA\u2019s Ready.gov guidance still says several days of food and water, and DHS Secretary Mullin (\u201CI\u2019m not stockpiling\u2026 panic\u2026 is unfounded,\u201D Nov 15) and Vice President Vance (\u201CWe don\u2019t see a crisis coming down,\u201D Nov 16) said the opposite of a foreseen-crisis food seizure on the record days earlier.",
    sources: [
      { label: "Ready.gov \u2014 Build A Kit", url: "https://www.ready.gov/kit" },
      { label: "CNN \u2014 Trump administration dismisses crisis fears, Nov 17, 2026", url: "https://www.cnn.com/2026/11/17/politics/vance-mullin-infrastructure-crisis-fears-intl-hnk" },
      { label: "The Despoiler \u2014 Fortress America, Fortress Pantry?", url: "https://despoiler.news/fortress-america-90-day-number" }
    ]
  },
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
