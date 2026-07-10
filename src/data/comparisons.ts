import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "granada-or-ronda",
    title: "Granada or Ronda?",
    seoTitle: "Granada vs Ronda from Málaga — Which Shore Excursion?",
    metaDescription:
      "Compare Granada and the Alhambra with Ronda's dramatic gorge for a Málaga port day, including journey time, walking, booking and ship-return planning.",
    kind: "versus",
    optionA: "Granada & the Alhambra",
    optionB: "Ronda",
    summary:
      "Granada offers one of Europe's great palace complexes and the layered history of the last Nasrid kingdom. Ronda is closer, less dependent on timed admission and built around a landscape you understand the moment you see its gorge.",
    verdict:
      "Choose Granada when the Alhambra is a long-held priority and your call is comfortably long enough. Choose Ronda for a more forgiving day of white-town character, huge views and less time on the road. Neither is a casual add-on to Málaga.",
    overview: [
      "Granada is roughly 125 km from Málaga port and normally needs a full day, with timed Alhambra admission arranged well ahead.",
      "Ronda is roughly 100 km away and also deserves a full day, but its main sights are concentrated around the gorge and old town.",
      "Granada carries more planning risk; Ronda usually offers more flexibility if the ship's hours change.",
    ],
    comparisonTable: [
      { category: "Headline sight", optionA: "Alhambra palaces and Generalife", optionB: "Puente Nuevo and El Tajo gorge" },
      { category: "Typical road time", optionA: "About 1 hr 30 min–1 hr 45 min each way", optionB: "About 1 hr 30 min each way" },
      { category: "Planning", optionA: "Timed, named admission often essential", optionB: "Advance tour booking wise; fewer ticket constraints" },
      { category: "Walking", optionA: "Moderate, with slopes, steps and extensive grounds", optionB: "Moderate, with cobbles and steep viewpoints" },
      { category: "Best for", optionA: "Architecture, Islamic history, bucket-list travel", optionB: "Scenery, photography, white-town atmosphere" },
    ],
    faqs: [
      {
        question: "Can cruise passengers visit the Alhambra from Málaga?",
        answer:
          "Yes, when the port call provides enough usable time and admission is secured in advance. Do not travel to Granada assuming Alhambra tickets will be available on arrival.",
      },
      {
        question: "Is Ronda the safer choice on a shorter call?",
        answer:
          "Often, but it is still a substantial journey. Check usable hours after disembarkation and preserve a generous return buffer.",
      },
    ],
    relatedSlugs: ["granada-from-malaga-cruise-port", "ronda-shore-excursion-guide", "best-andalusia-tour-first-time"],
    imageKey: "compare",
  },
  {
    slug: "ronda-or-caminito-del-rey",
    title: "Ronda or Caminito del Rey?",
    seoTitle: "Ronda vs Caminito del Rey — Málaga Cruise Day Guide",
    metaDescription:
      "Compare Ronda's gorge and old town with the active Caminito del Rey walkway for scenery, effort, booking risk and Málaga cruise-port timing.",
    kind: "versus",
    optionA: "Ronda",
    optionB: "Caminito del Rey",
    summary:
      "Both days are defined by Andalusia's geology. Ronda places a handsome historic town above a deep gorge; Caminito del Rey takes you into the gorge on a linear cliffside walkway.",
    verdict:
      "Choose Ronda for culture, cafés and viewpoints at your own pace. Choose Caminito for a genuinely active landscape experience, but only if everyone is comfortable with heights, sustained walking and fixed entry logistics.",
    overview: [
      "Ronda mixes sightseeing with free time and suits a broader range of passengers.",
      "Caminito del Rey is a controlled, one-way route with entry rules, weather exposure and limited places.",
      "Both need disciplined port-day transport; Caminito has less room for improvisation because entry slots can sell out.",
    ],
    comparisonTable: [
      { category: "Experience", optionA: "Historic hill town and gorge viewpoints", optionB: "Cliffside walking route through a gorge" },
      { category: "Physical effort", optionA: "Moderate and adjustable", optionB: "Active, sustained and not easily shortened" },
      { category: "Heights", optionA: "Viewpoints can be avoided", optionB: "Exposed elevated walkways are central" },
      { category: "Booking", optionA: "Flexible sightseeing", optionB: "Advance timed entry strongly advised; places sell out" },
      { category: "Best for", optionA: "Mixed groups, history, photography", optionB: "Fit walkers, geology and adventure" },
    ],
    faqs: [
      {
        question: "Is Caminito del Rey frightening?",
        answer:
          "Modern walkways are engineered and managed, but the exposure is real. Anyone uneasy with heights should choose Ronda instead.",
      },
      {
        question: "Can I combine Ronda and Caminito del Rey?",
        answer:
          "Not sensibly on a normal cruise call. They demand different routes and each deserves to be the day's anchor.",
      },
    ],
    relatedSlugs: ["ronda-shore-excursion-guide", "caminito-del-rey-from-malaga", "who-should-visit-caminito-del-rey"],
    imageKey: "caminito",
  },
  {
    slug: "can-you-explore-malaga-independently",
    title: "Can You Explore Málaga Independently?",
    seoTitle: "Can You Explore Málaga Independently from the Cruise Port?",
    metaDescription:
      "An honest guide to exploring Málaga independently from the cruise terminal, with walking routes, transport, city sights and return-to-ship advice.",
    kind: "guide",
    summary:
      "Yes. Málaga is one of the easiest major Andalusian ports to explore independently: the historic centre, cathedral, Roman Theatre, Alcazaba, museums, market and waterfront all fit within a compact city day.",
    verdict:
      "Explore independently when you want Málaga itself. Book organised transport for Granada, Ronda or Caminito del Rey, where distance, admission and return timing change the calculation.",
    overview: [
      "The terminal location and shuttle arrangements vary, but central sights are generally walkable once you reach the port entrance.",
      "A strong independent route links the waterfront, cathedral, Picasso quarter, Roman Theatre, Alcazaba and Atarazanas Market.",
      "Keep at least 60–90 minutes between your planned terminal return and all-aboard time.",
    ],
    guideItems: [
      {
        name: "Independent Málaga Guide",
        slug: "independent-malaga-guide",
        href: "/guides/independent-malaga-guide",
        reason: "Complete city route, terminal orientation, transport, food and return planning.",
        topExcursion: "Self-guided Málaga",
        returnConfidence: "High with a sensible terminal buffer",
        walkingDifficulty: "Easy to moderate; Alcazaba and Gibralfaro add climbs",
      },
      {
        name: "Historic Málaga Guide",
        slug: "historic-malaga-guide",
        href: "/guides/historic-malaga-guide",
        reason: "A focused introduction to the cathedral, Roman Theatre, Alcazaba and old town.",
        topExcursion: "Historic Málaga",
        returnConfidence: "Very high",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Málaga Cruise Port Guide",
        slug: "malaga-cruise-port-guide",
        href: "/guides/malaga-cruise-port-guide",
        reason: "Start here for terminal, shuttle and city-access decisions.",
        topExcursion: "N/A — port planning",
        returnConfidence: "High",
        walkingDifficulty: "Easy",
      },
    ],
    faqs: [
      {
        question: "Do I need a taxi into Málaga?",
        answer:
          "It depends on your berth and mobility. Many passengers use the port shuttle or walk along Muelle Uno; a taxi is useful when time or walking ability is limited.",
      },
      {
        question: "Can I visit the Alcazaba without a tour?",
        answer:
          "Yes. Check current opening hours and buy admission on site or online; allow extra time for the uphill paths.",
      },
    ],
    relatedSlugs: ["independent-malaga-guide", "historic-malaga-guide", "one-day-in-malaga"],
    imageKey: "walking",
  },
  {
    slug: "best-malaga-shore-excursion",
    title: "Best Málaga Shore Excursion",
    seoTitle: "Best Málaga Shore Excursion — Honest First-Timer Guide",
    metaDescription:
      "Choose the best Málaga shore excursion for your port hours, interests and mobility: Granada, Ronda, Caminito del Rey or historic Málaga.",
    kind: "guide",
    summary:
      "There is no universal winner. The Alhambra is the great cultural prize, Ronda is the strongest all-round day beyond the city, Caminito del Rey is the active choice, and Málaga itself is the smart answer for shorter calls.",
    verdict:
      "For most first-time visitors with a full port day, choose Granada if confirmed Alhambra admission is included; otherwise choose Ronda. Stay in Málaga for shorter calls. Pick Caminito only when the physical demands genuinely appeal.",
    overview: [
      "Best cultural landmark: Granada and the Alhambra, subject to timed admission and a long enough call.",
      "Best balanced day: Ronda, combining scenery, history and a manageable old-town visit.",
      "Best active day: Caminito del Rey, with advance planning and no assumption of ticket availability.",
      "Best short-call choice: historic Málaga on foot.",
    ],
    guideItems: [
      {
        name: "Granada & the Alhambra",
        slug: "granada-from-malaga-cruise-port",
        href: "/guides/granada-from-malaga-cruise-port",
        reason: "Andalusia's defining palace complex and deepest cultural day from Málaga.",
        topExcursion: "Granada and the Alhambra",
        returnConfidence: "Good only with cruise-aware transport and ample hours",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Ronda",
        slug: "ronda-shore-excursion-guide",
        href: "/guides/ronda-shore-excursion-guide",
        reason: "The best blend of gorge scenery, old-town character and flexible sightseeing.",
        topExcursion: "Ronda full-day excursion",
        returnConfidence: "Good with planned road buffers",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Caminito del Rey",
        slug: "caminito-del-rey-from-malaga",
        href: "/guides/caminito-del-rey-from-malaga",
        reason: "A spectacular active day for confident walkers who plan ahead.",
        topExcursion: "Caminito del Rey",
        returnConfidence: "Good with fixed transport and entry",
        walkingDifficulty: "Active",
      },
      {
        name: "Historic Málaga",
        slug: "historic-malaga-guide",
        href: "/guides/historic-malaga-guide",
        reason: "Maximum culture with minimum transfer time and the easiest return to ship.",
        topExcursion: "Málaga city walking tour",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy to moderate",
      },
    ],
    faqs: [
      {
        question: "What is the safest choice for a six-hour call?",
        answer:
          "Stay in Málaga. The city has enough substance for a rewarding day without spending valuable hours on intercity roads.",
      },
      {
        question: "Should I book the Alhambra before sailing?",
        answer:
          "Yes. Admission is timed, personal details may be required and availability can disappear well before your port date.",
      },
    ],
    relatedSlugs: ["granada-or-ronda", "best-andalusia-tour-first-time", "best-malaga-shore-excursions"],
    imageKey: "compare",
  },
  {
    slug: "private-tour-vs-coach-tour",
    title: "Private Tour vs Coach Tour",
    seoTitle: "Private vs Coach Shore Tours from Málaga",
    metaDescription:
      "Compare private and coach shore excursions from Málaga for group size, pace, cost, Alhambra planning, mobility and return-to-ship timing.",
    kind: "versus",
    optionA: "Private Tour",
    optionB: "Coach Tour",
    summary:
      "Private tours buy control: direct pickup, adjustable pacing and fewer group delays. Coach tours make long-distance Andalusian landmarks more affordable, but operate to a fixed route and the speed of the group.",
    verdict:
      "Choose private for families, small parties, mobility considerations and a day shaped around your priorities. Choose coach when price matters and the published itinerary fits. A private vehicle does not create attraction tickets or override admission rules.",
    overview: [
      "Private tours usually reduce waiting and can change viewpoint, meal and comfort stops.",
      "Coach tours offer better per-person value and often package guide, transport and admission.",
      "For the Alhambra and Caminito del Rey, verify exactly what admission is included regardless of tour format.",
    ],
    comparisonTable: [
      { category: "Group size", optionA: "Your party, usually in one vehicle", optionB: "Often 30–50 passengers" },
      { category: "Pace", optionA: "Adjustable within port and admission constraints", optionB: "Fixed to the published schedule" },
      { category: "Cost", optionA: "Higher overall; attractive for larger families", optionB: "Lower per person" },
      { category: "Mobility", optionA: "Stops and walking can often be adapted", optionB: "Group route may be less flexible" },
      { category: "Admissions", optionA: "Must be explicitly confirmed", optionB: "May be bundled; read inclusions carefully" },
    ],
    faqs: [
      {
        question: "Does a private Alhambra tour guarantee entry?",
        answer:
          "No. Entry is only secured when the booking explicitly confirms the correct timed admission for every named visitor.",
      },
      {
        question: "Are coach tours slower?",
        answer:
          "Boarding, comfort stops and regrouping take longer, but experienced cruise operators design their schedules around those realities.",
      },
    ],
    relatedSlugs: ["best-malaga-shore-excursion", "signature-andalusia-experience", "granada-or-ronda"],
    imageKey: "private",
  },
  {
    slug: "best-andalusia-tour-first-time",
    title: "Best Andalusia Tour for First-Time Visitors",
    seoTitle: "Best Andalusia Tour for First-Time Cruise Passengers",
    metaDescription:
      "First time in Andalusia? Compare Granada, Ronda, Málaga, Mijas and Caminito del Rey by port hours, interests, activity and planning.",
    kind: "guide",
    summary:
      "A first Andalusian day should reveal the region rather than race across it. Choose one clear story: Granada's palaces, Ronda's mountain drama, Málaga's layered city or Caminito's raw landscape.",
    verdict:
      "Granada is the first choice for art and history when Alhambra admission and port hours align. Ronda is the more flexible first-day panorama. Málaga is the intelligent short-call option; Caminito is a specialist active choice, not the default.",
    overview: [
      "Long full day and cultural priority: Granada and the Alhambra.",
      "Full day and broad appeal: Ronda, sometimes paired with a carefully paced white-village stop.",
      "Shorter call or independent preference: Málaga's old town, Alcazaba and waterfront.",
      "Active travellers: Caminito del Rey, booked ahead and assessed honestly.",
    ],
    guideItems: [
      {
        name: "Granada",
        slug: "granada-from-malaga-cruise-port",
        href: "/guides/granada-from-malaga-cruise-port",
        reason: "The richest first encounter with Andalusia's Islamic and Christian layers.",
        topExcursion: "Granada and the Alhambra",
        returnConfidence: "Requires a long call and cruise-aware planning",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Ronda",
        slug: "ronda-shore-excursion-guide",
        href: "/guides/ronda-shore-excursion-guide",
        reason: "A memorable landscape, historic streets and fewer admission dependencies.",
        topExcursion: "Ronda full-day excursion",
        returnConfidence: "Good with sensible buffers",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Historic Málaga",
        slug: "historic-malaga-guide",
        href: "/guides/historic-malaga-guide",
        reason: "Roman, Moorish and modern Málaga without sacrificing hours to transfers.",
        topExcursion: "Málaga city tour",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy to moderate",
      },
      {
        name: "Mijas",
        slug: "mijas-from-malaga",
        href: "/guides/mijas-from-malaga",
        reason: "A gentler white-village introduction close to the coast.",
        topExcursion: "Mijas half-day excursion",
        returnConfidence: "High",
        walkingDifficulty: "Moderate on sloping lanes",
      },
    ],
    faqs: [
      {
        question: "Can I see Granada and Ronda in one port day?",
        answer:
          "No. They lie in different directions and each needs a proper full day from Málaga.",
      },
      {
        question: "Which option suits limited mobility?",
        answer:
          "A private Málaga or Mijas programme can be adapted most readily. Discuss slopes, steps and vehicle access before booking.",
      },
    ],
    relatedSlugs: ["granada-or-ronda", "best-andalusia-shore-excursions", "best-andalusia-tour-cruise-passengers"],
    imageKey: "alhambra",
  },
  {
    slug: "one-day-in-malaga",
    title: "One Day in Málaga",
    seoTitle: "One Day in Málaga from the Cruise Port",
    metaDescription:
      "Plan one realistic day in Málaga with the cathedral, Picasso quarter, Roman Theatre, Alcazaba, market, food and a safe return to your ship.",
    kind: "guide",
    summary:
      "Málaga rewards a city day. Its port, old town, Roman Theatre, Alcazaba, cathedral, Picasso story and market sit close enough to combine without turning the day into a transport exercise.",
    verdict:
      "Start with the Alcazaba and Roman Theatre before the heat builds, cross the old town for the cathedral and Picasso quarter, have a proper Málaga lunch, then return along Muelle Uno with time in hand.",
    overview: [
      "Morning: Roman Theatre and Alcazaba, allowing roughly two hours including the climb.",
      "Midday: cathedral exterior or interior, Picasso quarter and old-town lanes.",
      "Lunch: Atarazanas Market area or a traditional bar for fried fish, anchovies and local wine.",
      "Afternoon: port promenade, Pompidou cube or a museum chosen for your interests.",
    ],
    guideItems: [
      {
        name: "Historic Málaga",
        slug: "historic-malaga-guide",
        href: "/guides/historic-malaga-guide",
        reason: "The essential city sights in their historical sequence.",
        topExcursion: "Historic Málaga walking tour",
        returnConfidence: "Very high",
        walkingDifficulty: "Moderate with Alcazaba",
      },
      {
        name: "Independent Málaga Guide",
        slug: "independent-malaga-guide",
        href: "/guides/independent-malaga-guide",
        reason: "Detailed DIY route, transport choices and food stops.",
        topExcursion: "Self-guided Málaga",
        returnConfidence: "High with a 60–90 minute buffer",
        walkingDifficulty: "Easy to moderate",
      },
      {
        name: "Best Food in Málaga",
        slug: "best-food-in-malaga",
        href: "/guides/best-food-in-malaga",
        reason: "Build lunch around local dishes rather than the nearest tourist menu.",
        topExcursion: "Málaga food walk",
        returnConfidence: "Very high in the centre",
        walkingDifficulty: "Easy",
      },
    ],
    faqs: [
      {
        question: "Can I add Gibralfaro Castle?",
        answer:
          "Yes on a long call, but use a bus or taxi uphill if you want to conserve energy. The walk is steep and exposed.",
      },
      {
        question: "Is the Picasso Museum essential?",
        answer:
          "It is important, but not compulsory. Choose it if Picasso genuinely interests you; otherwise let the Alcazaba and city streets lead the day.",
      },
    ],
    relatedSlugs: ["independent-malaga-guide", "historic-malaga-guide", "best-food-in-malaga"],
    imageKey: "historic",
  },
  {
    slug: "is-caminito-del-rey-worth-it",
    title: "Is Caminito del Rey Worth It?",
    seoTitle: "Is Caminito del Rey Worth It from Málaga?",
    metaDescription:
      "An honest verdict on Caminito del Rey for Málaga cruise passengers: scenery, activity level, heights, weather, advance tickets and port-day logistics.",
    kind: "guide",
    summary:
      "Yes for confident walkers: the gorge scale, suspended paths and changing perspectives are spectacular. No for anyone seeking a relaxed sightseeing day, uncomfortable with heights or unable to manage a sustained linear route.",
    verdict:
      "Caminito del Rey is worth making the day's anchor, not squeezing between other stops. Plan in advance, verify the current route rules and transport, and never assume entry will be available: places can sell out.",
    overview: [
      "The experience involves access walks as well as the famous boardwalk sections; judge the whole outing, not one photograph.",
      "It is active rather than technical, but includes uneven ground, steps, exposure and limited opportunities to turn back.",
      "Timed places are limited and weather or operational conditions can affect access.",
      "A cruise-port visit needs coordinated entry, one-way logistics and a conservative ship-return plan.",
    ],
    guideItems: [
      {
        name: "Caminito del Rey from Málaga",
        slug: "caminito-del-rey-from-malaga",
        href: "/guides/caminito-del-rey-from-malaga",
        reason: "Full guide to route character, transfers, timing and preparation.",
        topExcursion: "Caminito del Rey",
        returnConfidence: "Good only with coordinated entry and transport",
        walkingDifficulty: "Active",
      },
      {
        name: "Who Should Visit Caminito del Rey?",
        slug: "who-should-visit-caminito-del-rey",
        href: "/compare/who-should-visit-caminito-del-rey",
        reason: "A candid suitability check before anyone commits.",
        topExcursion: "Caminito del Rey",
        returnConfidence: "Depends on fixed port-day logistics",
        walkingDifficulty: "Active; heights and exposure",
      },
      {
        name: "Ronda or Caminito del Rey?",
        slug: "ronda-or-caminito-del-rey",
        href: "/compare/ronda-or-caminito-del-rey",
        reason: "Compare the active gorge walk with a more flexible scenic town.",
        topExcursion: "Ronda or Caminito",
        returnConfidence: "Route dependent",
        walkingDifficulty: "Moderate versus active",
      },
    ],
    faqs: [
      {
        question: "Are Caminito del Rey tickets guaranteed with every tour?",
        answer:
          "No. Only treat entry as secured when your booking explicitly confirms admission for your date and time.",
      },
      {
        question: "Is it suitable after knee or balance problems?",
        answer:
          "Often not. The route requires sustained walking and confidence on steps and exposed sections; seek current accessibility advice before booking.",
      },
    ],
    relatedSlugs: ["caminito-del-rey-from-malaga", "who-should-visit-caminito-del-rey", "ronda-or-caminito-del-rey"],
    imageKey: "caminito",
  },
  {
    slug: "who-should-visit-caminito-del-rey",
    title: "Who Should Visit Caminito del Rey?",
    seoTitle: "Who Should Visit Caminito del Rey — Honest Suitability Guide",
    metaDescription:
      "Decide whether Caminito del Rey suits your Málaga port day, with candid advice on fitness, heights, mobility, children, weather and booking.",
    kind: "guide",
    summary:
      "Caminito del Rey suits travellers who enjoy purposeful walking and dramatic exposure more than conventional sightseeing. It is not an attraction everyone needs to conquer.",
    verdict:
      "Go if you can walk comfortably for several hours, remain calm at height and accept fixed logistics. Skip it if vertigo, limited mobility, uncertain weather tolerance or a relaxed family day makes the route a poor fit.",
    overview: [
      "Ideal for active adults, confident older walkers, photographers and travellers interested in geology and engineering.",
      "Think carefully if anyone has vertigo, balance concerns, recent joint problems or difficulty with sustained walking.",
      "Families must check current age and entry rules directly; suitability is about confidence and stamina as well as the rulebook.",
      "If the group is mixed, Ronda or historic Málaga gives more opportunities to pause, separate and adapt.",
    ],
    guideItems: [
      {
        name: "Best for Active Walkers",
        slug: "caminito-del-rey-from-malaga",
        href: "/guides/caminito-del-rey-from-malaga",
        reason: "A landscape experience where the walking is the point, not the route between sights.",
        topExcursion: "Caminito del Rey",
        returnConfidence: "Requires pre-arranged port-day logistics",
        walkingDifficulty: "Active",
      },
      {
        name: "Better for Mixed Groups: Ronda",
        slug: "ronda-shore-excursion-guide",
        href: "/guides/ronda-shore-excursion-guide",
        reason: "Gorge drama with cafés, culture and a route that can be shortened.",
        topExcursion: "Ronda full-day excursion",
        returnConfidence: "Good with road buffers",
        walkingDifficulty: "Moderate and adjustable",
      },
      {
        name: "Better for a Gentle Day: Málaga",
        slug: "historic-malaga-guide",
        href: "/guides/historic-malaga-guide",
        reason: "Major sights close to the ship, with plenty of rest and transport options.",
        topExcursion: "Historic Málaga",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy to moderate",
      },
    ],
    faqs: [
      {
        question: "Should someone with vertigo attempt it?",
        answer:
          "No one should be pressured into it. The modern path is managed, but the drop and exposure remain visible and unavoidable.",
      },
      {
        question: "Can we decide on the morning?",
        answer:
          "That is risky. Places can sell out, entry is timed and transport needs coordinating, especially around a ship schedule.",
      },
    ],
    relatedSlugs: ["is-caminito-del-rey-worth-it", "ronda-or-caminito-del-rey", "caminito-del-rey-from-malaga"],
    imageKey: "walking",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
