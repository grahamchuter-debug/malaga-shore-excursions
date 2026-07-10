import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Most cruise ships berth in Málaga's Levante cruise terminal area, with shuttle and taxi pick-up points beside the quays; some calls use berths closer to Muelle 2. The old town is roughly 15–25 minutes on foot from Muelle 2, while the outer Levante terminals may require the port shuttle or a short taxi ride. Allow about 1.5–2 hours each way for Granada, 1.5–2 hours for Ronda and 1–1.5 hours for the Caminito del Rey, with extra time possible in summer or around Málaga's ring road. Confirm the ship's all-aboard time, not merely its published departure, and plan to reach the terminal 60–90 minutes early; longer inland excursions need the larger end of that buffer.";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
  notes: "Partner network — confirm availability for your sailing",
};

const FUTURE_SUPPLIER = {
  kind: "future" as const,
  name: "Private partners",
  notes: "Flexible supplier model for future exclusive products",
};

export const excursions: ExcursionPage[] = [
  {
    slug: "granada-alhambra-full-day",
    title: "Granada & the Alhambra Full Day",
    seoTitle: "Granada & Alhambra Full-Day Shore Excursion from Málaga",
    metaDescription:
      "Visit Granada and the Alhambra on a cruise-timed full-day excursion from Málaga, with honest advice on timed admission and the long inland journey.",
    category: "Editor's Choice",
    tagline:
      "Nasrid palaces, cypress courtyards and Granada's mountain light — Andalusia's masterpiece, when your port hours allow.",
    duration: "9–10 hours",
    pace: "Moderate",
    bestFor: "First-time visitors with a long port call who want Andalusia's defining monument",
    overview:
      "Our Editor's Choice pairs Granada's historic centre with the Alhambra, one of Europe's great palace complexes, on a carefully timed inland day from Málaga. It is the most rewarding excursion in this collection, but only when admission and ship timings genuinely align.",
    body: [
      "The drive climbs from the Mediterranean through olive country towards the Sierra Nevada, normally taking 1.5–2 hours. On arrival, the sequence depends on the Alhambra's strictly timed entry: the Nasrid Palaces may come before or after the Generalife gardens.",
      "Inside the complex, carved stucco, reflecting pools and layered views unfold slowly. A licensed guide adds essential context to the Court of the Lions, defensive Alcazaba and the transition from Nasrid Granada to the Catholic Monarchs.",
      "A focused Granada stop may include the cathedral quarter, Plaza Nueva or lunch near the Albaicín. This is not a leisurely city break; the Alhambra is the anchor and everything else must fit around its admission slot.",
      "Only choose this excursion with at least nine usable hours ashore. Tickets are capacity-controlled, named and often sold out weeks ahead, so confirm exactly what admission is included before paying.",
    ],
    highlights: [
      "Timed visit to the Alhambra complex",
      "Nasrid Palaces and Court of the Lions when included",
      "Generalife gardens and Sierra Nevada views",
      "Focused introduction to historic Granada",
    ],
    included: [
      "Licensed guide",
      "Air-conditioned coach or minivan transport",
      "Alhambra admission only when explicitly confirmed",
      "Return planned around the ship's all-aboard",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Confirm that Nasrid Palaces admission, not simply Alhambra grounds entry, is included",
      "Carry the same passport or identity document used for the named ticket",
      "Expect extensive walking, steps and uneven surfaces across a large complex",
      "Do not book independently unless your return plan allows a substantial road buffer",
    ],
    faqs: [
      {
        question: "Are Alhambra tickets guaranteed?",
        answer:
          "No. Admission is limited, named and tied to a timed slot. Your place is secure only after the operator explicitly confirms the ticket for your date.",
      },
      {
        question: "Is this suitable for an eight-hour port call?",
        answer:
          "Usually not. The road journey and fixed palace entry leave too little resilience; choose Málaga City Highlights or the Alcazaba and Cathedral instead.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Expect several kilometres over stone paths, slopes and steps. Some adapted routes exist, but they must be arranged in advance.",
      },
      {
        question: "Will there be free time in Granada?",
        answer:
          "Often a short lunch or orientation stop, but the amount depends on the palace slot and traffic. The Alhambra takes priority.",
      },
    ],
    relatedExcursionSlugs: [
      "granada-alhambra-half-day",
      "ronda-white-villages",
      "malaga-city-highlights",
    ],
    featured: true,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "ronda-white-villages",
    title: "Ronda & the White Villages",
    seoTitle: "Ronda & White Villages Shore Excursion from Málaga",
    metaDescription:
      "Discover Ronda's Puente Nuevo, gorge and whitewashed hill towns on a cruise-timed excursion from Málaga with realistic road and walking advice.",
    category: "Ronda & Pueblos Blancos",
    tagline:
      "A bridge above the void, whitewashed lanes and olive-clad mountains — inland Andalusia at its most cinematic.",
    duration: "8–9 hours",
    pace: "Moderate",
    bestFor: "Scenery lovers, photographers and passengers who have already seen Málaga",
    overview:
      "Ronda & the White Villages travels into the Serranía de Ronda for the drama of Puente Nuevo and the quieter beauty of a pueblo blanco. It is a superb alternative to Granada: fewer ticket complications, equally memorable landscapes.",
    body: [
      "The mountain drive from Málaga generally takes 1.5–2 hours, tracing valleys and rocky passes before Ronda appears above the Tajo gorge. A guided walk links the old and new towns across Puente Nuevo.",
      "Key stops usually include the Alameda viewpoint, the historic bullring exterior and the lanes of La Ciudad. The finest perspective may involve a stepped descent below the bridge, so routes should be matched to the group's mobility.",
      "When timing permits, the day adds a white village such as Setenil de las Bodegas, where houses tuck beneath great shelves of rock, or a smaller hill town chosen for access and traffic conditions.",
      "This is a full road day rather than a casual countryside potter. A disciplined departure from Ronda protects the 60–90 minute ship buffer on the return to Málaga.",
    ],
    highlights: [
      "Puente Nuevo above the Tajo gorge",
      "Ronda's old town and panoramic promenades",
      "Historic bullring exterior",
      "A white village stop when the port window permits",
    ],
    included: [
      "Licensed guide",
      "Air-conditioned transport",
      "Guided Ronda walking route",
      "Return planned around the ship's all-aboard",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear shoes with grip for polished stones and viewpoint steps",
      "Ask which white village is planned; routes vary with the sailing and season",
      "Choose the upper viewpoints if steep descents are uncomfortable",
      "Allow for cooler, windier weather in the mountains than beside the port",
    ],
    faqs: [
      {
        question: "Is Setenil always included?",
        answer:
          "No. Some departures include Setenil, while others use a nearer village or focus entirely on Ronda. Check the confirmed itinerary.",
      },
      {
        question: "Is Ronda suitable for limited mobility?",
        answer:
          "The upper town can be adapted, but cobbles, gradients and viewpoint steps remain. A private vehicle offers the greatest flexibility.",
      },
      {
        question: "Ronda or the Alhambra?",
        answer:
          "Choose the Alhambra for architecture and world history; choose Ronda for landscapes, easier ticketing and a less regimented day.",
      },
    ],
    relatedExcursionSlugs: [
      "andalusia-white-villages",
      "private-andalusia-discovery",
      "granada-alhambra-full-day",
    ],
    featured: true,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "caminito-del-rey",
    title: "Caminito del Rey",
    seoTitle: "Caminito del Rey Shore Excursion from Málaga Cruise Port",
    metaDescription:
      "Plan a Caminito del Rey shore excursion from Málaga with candid guidance on tickets, walking, heights, weather and cruise return timing.",
    category: "Adventure",
    tagline:
      "Cliff-hung boardwalks above a turquoise gorge — Andalusia's great active day, with no room for casual planning.",
    duration: "6–8 hours",
    pace: "Active",
    bestFor: "Fit walkers comfortable with heights and fixed entry times",
    overview:
      "Caminito del Rey is the collection's standout active excursion: a one-way gorge walk on engineered boardwalks suspended above the Guadalhorce. It is spectacular, tightly regulated and prone to selling out, so it rewards advance planning rather than improvisation.",
    body: [
      "The trailhead is normally 1–1.5 hours from Málaga, followed by an approach walk before the controlled entrance. The route itself is linear, with narrow boardwalks, stairs and a suspension bridge before the exit transfer.",
      "Expect roughly 7–8 kilometres in total depending on the access route. The surface is well maintained, but this remains an exposed outdoor walk with heights, sun and limited opportunities to turn back.",
      "Entry tickets are dated, timed and capacity-controlled. Listing an excursion does not guarantee admission: wait for written supplier confirmation, particularly in spring, autumn and on busy cruise days.",
      "Wind, heat, rockfall precautions or official closures can alter the plan. A responsible operator will prioritise safety and the ship's return time rather than promise the route under every condition.",
    ],
    highlights: [
      "Gaitanes Gorge cliff boardwalks",
      "Suspension bridge and dramatic rock walls",
      "Guadalhorce valley scenery",
      "Small-group active experience when available",
    ],
    included: [
      "Transport to and from the trail area",
      "Guide or trail escort",
      "Entry ticket only when explicitly confirmed",
      "Safety helmet where required",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Book well ahead, but treat the excursion as confirmed only after ticket approval",
      "Wear closed walking shoes; sandals and unsuitable footwear may be refused",
      "Carry water and sun protection without overpacking",
      "Do not choose this route if exposed heights, sustained walking or limited exits cause concern",
    ],
    faqs: [
      {
        question: "Does booking guarantee Caminito tickets?",
        answer:
          "Not automatically. Tickets frequently sell out and must be confirmed for a precise time. Check the operator's written confirmation.",
      },
      {
        question: "How difficult is the walk?",
        answer:
          "It is not technically difficult, but it requires sustained walking, stairs and comfort with exposed heights. There is no convenient midway exit.",
      },
      {
        question: "Can weather cancel the excursion?",
        answer:
          "Yes. Authorities may close the path for strong wind, heavy rain or safety reasons. Ask the supplier about its cancellation and alternative policy.",
      },
      {
        question: "Is it sensible on a short port call?",
        answer:
          "Only when a cruise-aware operator has aligned transport and the timed entry. For calls under seven usable hours, stay in Málaga.",
      },
    ],
    relatedExcursionSlugs: [
      "ronda-white-villages",
      "costa-del-sol-scenic",
      "private-andalusia-discovery",
    ],
    featured: true,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "malaga-city-highlights",
    title: "Málaga City Highlights",
    seoTitle: "Málaga City Highlights Shore Excursion from the Cruise Port",
    metaDescription:
      "See Málaga's Alcazaba, cathedral, Roman theatre and waterfront on a cruise-friendly city highlights tour close to the ship.",
    category: "Málaga",
    tagline:
      "Phoenician foundations, Moorish ramparts and Picasso's city — a rich port day without the motorway.",
    duration: "4–5 hours",
    pace: "Moderate",
    bestFor: "First-time visitors, shorter calls and anyone wanting maximum sightseeing with minimal road risk",
    overview:
      "Málaga City Highlights is the most dependable all-round port day: the Alcazaba, cathedral quarter, Roman theatre and elegant centre lie close together, leaving time for lunch or an independent waterfront stroll.",
    body: [
      "From the terminal area, a short transfer or waterfront walk leads towards the Roman theatre and the honey-coloured Alcazaba. The old town then unfolds through pedestrian lanes around Calle Larios and Plaza de la Constitución.",
      "A guide connects Málaga's layers — Phoenician port, Roman city, Islamic stronghold and modern cultural capital — rather than treating it merely as a gateway to Granada.",
      "Routes commonly include the cathedral exterior or interior, the Picasso quarter and a viewpoint by vehicle when time permits. Exact admissions should be checked because opening hours can change for worship and events.",
      "The compact geography makes this our preferred choice when the ship is late, the call is short or a long inland coach day feels disproportionate.",
    ],
    highlights: [
      "Alcazaba and Roman theatre",
      "Málaga Cathedral and old town",
      "Picasso's birthplace quarter",
      "Calle Larios and the waterfront",
    ],
    included: [
      "Licensed city guide",
      "Walking tour and local transfers as specified",
      "Admissions only where listed by the operator",
      "Return guidance to the cruise terminal",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Check whether Alcazaba and cathedral admission are included or exterior-only",
      "Keep time after the tour for Muelle Uno or a tapas lunch",
      "Use sun protection; exposed fortress paths become hot by midday",
    ],
    faqs: [
      {
        question: "Can I explore Málaga independently?",
        answer:
          "Yes. The centre is compact and close to the port, though a guide adds historical context and helps sequence the major sites.",
      },
      {
        question: "Is the Alcazaba accessible?",
        answer:
          "There are steep paths and uneven surfaces. Some access can be adapted, but discuss mobility requirements before booking.",
      },
      {
        question: "Is this a good option for a six-hour call?",
        answer:
          "Yes. It avoids long transfers and leaves a sensible margin for the ship.",
      },
    ],
    relatedExcursionSlugs: [
      "historic-malaga-walking",
      "alcazaba-cathedral-tour",
      "malaga-food-wine",
    ],
    featured: true,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "historic-malaga-walking",
    title: "Historic Málaga Walking Tour",
    seoTitle: "Historic Málaga Walking Shore Excursion from the Cruise Port",
    metaDescription:
      "Walk Málaga's Roman theatre, Moorish lanes, cathedral quarter and Picasso neighbourhood on an easy-to-time shore excursion.",
    category: "Málaga",
    tagline:
      "Two thousand years in a few sunlit streets — the old city revealed at walking pace.",
    duration: "3–4 hours",
    pace: "Moderate",
    bestFor: "Independent-minded travellers who prefer stories and street life to coach touring",
    overview:
      "Historic Málaga Walking turns the city centre into a concise timeline, from the Roman theatre and Alcazaba walls to the cathedral, Picasso quarter and merchants' streets.",
    body: [
      "The route begins near the waterfront or old town and moves through mostly pedestrian streets. Plaza de la Merced, the Roman theatre and the exterior of the Alcazaba establish Málaga's ancient and Islamic foundations.",
      "Around the cathedral, guides explain the famously unfinished south tower and the city's post-Reconquista transformation. Calle Larios then brings the story into the mercantile nineteenth century.",
      "This is an orientation rather than a sequence of lengthy interiors. It leaves enough time to revisit the Alcazaba, browse the market or eat lunch independently.",
    ],
    highlights: [
      "Roman theatre and Alcazaba exterior",
      "Cathedral quarter",
      "Plaza de la Merced and Picasso connections",
      "Calle Larios and historic squares",
    ],
    included: [
      "Licensed walking guide",
      "Small-group city orientation where available",
      "Return directions to the terminal",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes for polished paving and occasional steps",
      "Bring a hat; many squares have limited shade",
      "Add the Alcazaba independently only if opening hours and all-aboard allow",
    ],
    faqs: [
      {
        question: "Does the tour enter the major monuments?",
        answer:
          "Usually it focuses on exteriors and city history. Confirm any included admissions in the operator's description.",
      },
      {
        question: "Can I walk from the ship?",
        answer:
          "From Muelle 2, generally yes in 15–25 minutes. Outer Levante berths are farther away and may be better served by shuttle.",
      },
      {
        question: "Is it suitable in summer?",
        answer:
          "Yes with an early start, water and sun protection. Midday heat can make even a moderate walk tiring.",
      },
    ],
    relatedExcursionSlugs: [
      "malaga-city-highlights",
      "alcazaba-cathedral-tour",
      "malaga-food-wine",
    ],
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "mijas-costa-del-sol",
    title: "Mijas & the Costa del Sol",
    seoTitle: "Mijas & Costa del Sol Shore Excursion from Málaga",
    metaDescription:
      "Visit whitewashed Mijas Pueblo and enjoy Costa del Sol views on a relaxed, cruise-timed half-day shore excursion from Málaga port.",
    category: "Costa del Sol",
    tagline:
      "White walls, flowered balconies and Mediterranean horizons — an easy escape into the hills above the coast.",
    duration: "4.5–6 hours",
    pace: "Relaxed",
    bestFor: "Couples, families and passengers seeking scenery without a demanding full-day journey",
    overview:
      "Mijas & the Costa del Sol climbs from the shore to one of the region's best-known white villages, balancing panoramic viewpoints, craft-lined lanes and unhurried free time.",
    body: [
      "Mijas Pueblo sits around 45–60 minutes from Málaga, high enough for broad views over the coast. A guided orientation introduces its chapels, small plazas and whitewashed streets.",
      "There is usually time for coffee, ceramics or a gentle independent wander. The village is polished and popular rather than undiscovered, but its setting remains genuinely lovely.",
      "Some itineraries add a coastal promenade or viewpoint near Benalmádena. We favour a simple route with fewer stops and a comfortable return margin over a rushed resort checklist.",
    ],
    highlights: [
      "Mijas Pueblo's whitewashed lanes",
      "Mediterranean viewpoints",
      "Local craft shops and village squares",
      "Optional Costa del Sol scenic stop",
    ],
    included: [
      "Guide",
      "Air-conditioned transport",
      "Village orientation",
      "Return planned around the ship's all-aboard",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Expect slopes even on a relaxed village route",
      "Early departures feel calmer before day visitors arrive",
      "Treat donkey taxis as a local tradition to observe thoughtfully, not an essential activity",
    ],
    faqs: [
      {
        question: "Is Mijas very touristy?",
        answer:
          "It is one of the coast's most visited villages, with many shops and cafés, but attractive architecture and views still make it worthwhile.",
      },
      {
        question: "Is this suitable for a short call?",
        answer:
          "Often yes. It uses less road time than Ronda or Granada, provided the confirmed duration fits your usable hours.",
      },
      {
        question: "Will there be beach time?",
        answer:
          "Not usually. The focus is Mijas Pueblo in the hills; any coastal stop is brief unless specifically advertised.",
      },
    ],
    relatedExcursionSlugs: [
      "costa-del-sol-scenic",
      "andalusia-white-villages",
      "malaga-city-highlights",
    ],
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-andalusia-discovery",
    title: "Private Andalusia Discovery",
    seoTitle: "Private Andalusia Shore Excursion from Málaga Cruise Port",
    metaDescription:
      "Plan a future private Málaga shore excursion with flexible routing to Ronda, white villages, the coast or city, timed around your ship.",
    category: "Private",
    tagline:
      "Your corner of Andalusia, thoughtfully edited — private pacing, flexible stops and no coach-group compromises.",
    duration: "6–9 hours",
    pace: "Relaxed",
    bestFor: "Couples, families and small groups wanting a future tailor-made shore day",
    overview:
      "Private Andalusia Discovery is an editorial blueprint for a future private product, not a promise of immediate availability. The concept pairs a dedicated guide and vehicle with one realistic anchor: Málaga, Ronda, a white village or the Costa del Sol.",
    body: [
      "The strongest private days are selective. A Ronda route might add one village; a Málaga route might combine the Alcazaba with a long lunch; a coastal route could favour Mijas and a quiet viewpoint.",
      "Private travel is especially valuable for mixed mobility, photographers and families because stops and walking can be adjusted. It cannot make road distances disappear or secure sold-out monument tickets.",
      "Every proposal should be built backwards from all-aboard with a stated 60–90 minute buffer. Granada and Caminito require separate confirmation because their timed admissions govern the entire day.",
      "This remains a future supplier model while suitable partners and standards are being developed. Enquire about options, but do not treat it as a currently bookable exclusive.",
    ],
    highlights: [
      "Future private guide and vehicle concept",
      "One carefully chosen Andalusian anchor",
      "Flexible walking and meal pacing",
      "Explicit cruise return planning",
    ],
    included: [
      "Proposed private guide",
      "Proposed private vehicle",
      "Tailored route planning",
      "Admissions only when separately confirmed",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Share mobility, food and photography priorities before a route is proposed",
      "Choose one major inland destination rather than combining Granada and Ronda",
      "Request written confirmation of every timed admission",
    ],
    faqs: [
      {
        question: "Can I book this now?",
        answer:
          "It is a future private-product concept. Availability depends on partner development and should not be assumed until explicitly confirmed.",
      },
      {
        question: "Can a private driver guarantee Alhambra entry?",
        answer:
          "No. Alhambra admission remains capacity-controlled and must be separately confirmed for named visitors.",
      },
      {
        question: "What route works best for mixed mobility?",
        answer:
          "Málaga and Mijas are easiest to adapt. Ronda can work with upper viewpoints, while Caminito is unsuitable for significant mobility limitations.",
      },
    ],
    relatedExcursionSlugs: [
      "ronda-white-villages",
      "malaga-city-highlights",
      "costa-del-sol-scenic",
    ],
    supplier: FUTURE_SUPPLIER,
  },
  {
    slug: "malaga-food-wine",
    title: "Málaga Food & Wine",
    seoTitle: "Málaga Food & Wine Shore Excursion from the Cruise Port",
    metaDescription:
      "Taste Málaga through tapas, market produce and regional wines on a small-group food tour within easy reach of the cruise port.",
    category: "Food & Wine",
    tagline:
      "Anchovies, jamón, sweet Málaga wine and market colour — the city told through its appetite.",
    duration: "3.5–4.5 hours",
    pace: "Relaxed",
    bestFor: "Food lovers who want a sociable half-day with minimal transfer time",
    overview:
      "Málaga Food & Wine moves between the market, traditional bars and contemporary tasting rooms for a generous introduction to Andalusian flavours, all comfortably close to the ship.",
    body: [
      "A typical route begins around Atarazanas Market, where a Nasrid gateway frames stalls of olives, seafood and seasonal produce. Opening days matter, so weekend or holiday routes may use alternative stops.",
      "Tastings might include boquerones, jamón, local cheese, fried fish or small tapas, accompanied by regional wine. Málaga's historic sweet wines are distinctive, but dry options should also feature.",
      "The best tours explain how locals order and share rather than merely serving a fixed meal. Portions vary, though several stops usually replace lunch.",
      "Because the experience stays in the centre, it pairs well with an independent cathedral or Picasso Museum visit if the ship's schedule permits.",
    ],
    highlights: [
      "Atarazanas Market when open",
      "Multiple tapas tastings",
      "Málaga or Andalusian wine",
      "Old-town food culture and local stories",
    ],
    included: [
      "Local food guide",
      "Food tastings at several stops",
      "Wine or non-alcoholic alternatives as specified",
      "Return guidance to the terminal",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Eat a light breakfast because tastings can be substantial",
      "Declare allergies and dietary requirements before confirmation",
      "Check the minimum drinking age and request alcohol-free alternatives if needed",
    ],
    faqs: [
      {
        question: "Is the market always included?",
        answer:
          "No. Atarazanas has closing days and reduced hours, so responsible guides substitute suitable old-town stops when necessary.",
      },
      {
        question: "Is there enough food for lunch?",
        answer:
          "Usually yes, but portion sizes vary by operator. Check the number and style of tastings before booking.",
      },
      {
        question: "Can vegetarians join?",
        answer:
          "Often, with advance notice. Vegan, gluten-free and severe-allergy provision is more variable and needs explicit confirmation.",
      },
    ],
    relatedExcursionSlugs: [
      "historic-malaga-walking",
      "malaga-city-highlights",
      "alcazaba-cathedral-tour",
    ],
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "alcazaba-cathedral-tour",
    title: "Alcazaba & Málaga Cathedral",
    seoTitle: "Alcazaba & Málaga Cathedral Shore Excursion",
    metaDescription:
      "Explore Málaga's Moorish Alcazaba, Roman theatre and cathedral with a licensed guide on a focused cruise-port cultural tour.",
    category: "History & Culture",
    tagline:
      "Moorish gardens, Roman stones and Renaissance ambition — Málaga's history in three remarkable monuments.",
    duration: "4–5 hours",
    pace: "Moderate",
    bestFor: "History and architecture enthusiasts who prefer depth to a broad city circuit",
    overview:
      "Alcazaba & Málaga Cathedral concentrates on the city's most important historic monuments, giving their architecture and political history more time than a general highlights tour.",
    body: [
      "The Alcazaba rises above the Roman theatre in a sequence of gates, gardens and defensive courtyards. Its scale is intimate compared with the Alhambra, yet the sea views and surviving details are deeply rewarding.",
      "Below, the Roman theatre reveals an earlier Málaga before the route crosses the old town to the cathedral. A guided interior visit, when open, explains its choir, chapels and unfinished second tower.",
      "The tour involves slopes and stone surfaces at the fortress. Cathedral access can change during services or religious events, so a good operator states whether admission is confirmed or substitutes exterior interpretation.",
    ],
    highlights: [
      "Alcazaba palaces and gardens",
      "Roman theatre",
      "Málaga Cathedral interior when open",
      "Old-town architectural context",
    ],
    included: [
      "Licensed guide",
      "Monument admissions where explicitly specified",
      "Focused old-town walk",
      "Return guidance to the terminal",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Start early in hot weather because the Alcazaba climb is exposed",
      "Dress respectfully for cathedral entry",
      "Confirm lift or adapted-access arrangements before booking",
    ],
    faqs: [
      {
        question: "Is this a substitute for the Alhambra?",
        answer:
          "No, but it offers rewarding Moorish architecture without a three-to-four-hour return journey or scarce timed ticket.",
      },
      {
        question: "Are admissions included?",
        answer:
          "They vary by departure. Only assume entry when the operator lists and confirms it.",
      },
      {
        question: "How strenuous is the Alcazaba?",
        answer:
          "Moderate, with inclines, steps and uneven stone. The pace can sometimes be adapted, but it is not entirely step-free.",
      },
    ],
    relatedExcursionSlugs: [
      "malaga-city-highlights",
      "historic-malaga-walking",
      "granada-alhambra-full-day",
    ],
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "granada-alhambra-half-day",
    title: "Granada & Alhambra Express",
    seoTitle: "Granada & Alhambra Half-Day Shore Excursion from Málaga",
    metaDescription:
      "Understand the limits of an express Granada and Alhambra shore excursion from Málaga, including timed tickets, drive times and port-call suitability.",
    category: "Granada",
    tagline:
      "The Alhambra in an express format — possible on the right sailing, but never a casual half-day.",
    duration: "6.5–8 hours",
    pace: "Active",
    bestFor: "Passengers with a suitable port window and confirmed palace admission who accept a tightly paced day",
    overview:
      "Granada & Alhambra Express is labelled half-day only in contrast with a longer Granada programme. With 3–4 hours on the road, it is still a substantial excursion and should be chosen only when a timed ticket and cruise schedule align precisely.",
    body: [
      "The route travels directly between Málaga and the Alhambra with little or no independent city time. Entry sequencing is governed by the fixed Nasrid Palaces slot rather than by preference.",
      "A streamlined visit may cover the Nasrid Palaces, Generalife and selected exterior areas, but exact inclusions vary. There is no honest way to promise every corner of the complex in an express format.",
      "Lunch is normally quick or taken en route. Delays leave fewer options than on a Málaga tour, so an organised cruise-aware departure and an explicit return buffer are essential.",
      "For a fuller, more graceful experience, choose the full-day excursion. For port calls below roughly eight usable hours, remain in Málaga rather than forcing Granada into the schedule.",
    ],
    highlights: [
      "Direct Málaga–Granada routing",
      "Alhambra complex with confirmed timed admission",
      "Nasrid Palaces only when specified",
      "Generalife gardens as scheduling permits",
    ],
    included: [
      "Licensed guide",
      "Air-conditioned transport",
      "Admission only when explicitly confirmed",
      "Cruise-timed return planning",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Read 'half-day' as express, not as a four-hour excursion",
      "Verify the exact ticket type and named-entry requirements",
      "Bring water and a snack because meal time may be limited",
      "Choose the full-day version whenever your port call supports it",
    ],
    faqs: [
      {
        question: "Is this really a half-day?",
        answer:
          "Not in the usual sense. The minimum road journey makes it a 6.5–8 hour commitment even with a compressed visit.",
      },
      {
        question: "Will I see the Nasrid Palaces?",
        answer:
          "Only if the supplier confirms that specific timed admission. General Alhambra access does not necessarily include the Nasrid Palaces.",
      },
      {
        question: "Will there be time in Granada city?",
        answer:
          "Usually little or none. This route prioritises the palace and the ship's return margin.",
      },
    ],
    relatedExcursionSlugs: [
      "granada-alhambra-full-day",
      "alcazaba-cathedral-tour",
      "malaga-city-highlights",
    ],
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "andalusia-white-villages",
    title: "Andalusia's White Villages",
    seoTitle: "Andalusia White Villages Shore Excursion from Málaga",
    metaDescription:
      "Explore whitewashed Andalusian villages, mountain viewpoints and local squares on a scenic shore excursion from Málaga cruise port.",
    category: "Pueblos Blancos",
    tagline:
      "Limewashed houses, geranium balconies and mountain silence — a gentler portrait of inland Andalusia.",
    duration: "6–8 hours",
    pace: "Moderate",
    bestFor: "Repeat visitors, photographers and travellers drawn to village life over headline monuments",
    overview:
      "Andalusia's White Villages favours two well-chosen hill towns over the longer haul to Ronda, creating time for viewpoints, local streets and an unhurried lunch.",
    body: [
      "The precise villages should vary according to traffic, season and the ship's hours. Mijas offers coastal panoramas; Frigiliana brings steep Moorish-patterned lanes; inland alternatives can feel quieter when logistics permit.",
      "A guided orientation explains why these settlements cluster around defensible hillsides and how their white façades respond to the southern heat. Free time then allows for ceramics, coffee or photography.",
      "Village streets are often steep and stepped even when the overall day feels relaxed. The route is best judged by quality of time, not by the number of names on the itinerary.",
    ],
    highlights: [
      "Two contrasting white villages where timing permits",
      "Mountain or Mediterranean viewpoints",
      "Whitewashed lanes and flowered balconies",
      "Independent café or craft time",
    ],
    included: [
      "Local guide",
      "Air-conditioned transport",
      "Village orientation walks",
      "Return planned around the ship's all-aboard",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Ask for the confirmed village pair before booking",
      "Wear shoes suited to steep cobbled lanes",
      "Avoid itineraries claiming too many distant villages in one cruise day",
    ],
    faqs: [
      {
        question: "Which villages are included?",
        answer:
          "That depends on the departure. Mijas and Frigiliana are common from Málaga, while other combinations require more road time.",
      },
      {
        question: "How does this differ from Ronda & White Villages?",
        answer:
          "This route emphasises village atmosphere and gentler pacing; the Ronda tour is anchored by Puente Nuevo and a longer mountain drive.",
      },
      {
        question: "Is the route accessible?",
        answer:
          "Vehicle access can reduce walking, but most historic village centres include gradients, steps and uneven paving.",
      },
    ],
    relatedExcursionSlugs: [
      "mijas-costa-del-sol",
      "ronda-white-villages",
      "costa-del-sol-scenic",
    ],
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "costa-del-sol-scenic",
    title: "Scenic Costa del Sol",
    seoTitle: "Scenic Costa del Sol Shore Excursion from Málaga",
    metaDescription:
      "Enjoy Mediterranean viewpoints, a coastal town and relaxed promenade time on a scenic Costa del Sol excursion from Málaga cruise port.",
    category: "Costa del Sol",
    tagline:
      "Mediterranean blue, palm-lined promenades and hillside views — an easy-going day close to the ship.",
    duration: "4–6 hours",
    pace: "Relaxed",
    bestFor: "Families, mixed-mobility groups and passengers seeking a low-pressure scenic outing",
    overview:
      "Scenic Costa del Sol offers coastal viewpoints and an attractive town or marina without committing to the long roads inland. It is intentionally relaxed and works well for shorter port calls.",
    body: [
      "Routes may run west towards Benalmádena and Mijas viewpoints or east towards quieter coves, depending on the operator. The useful question is not how many resorts are named, but how much time is spent outside the vehicle.",
      "A typical day includes a panoramic stop, a promenade walk and free time for coffee or lunch. The coast is developed, yet careful routing still finds broad sea views and pleasant pockets of local life.",
      "This is not the choice for deep history; select Málaga City Highlights or the Alcazaba tour for that. It is a restorative option after busy days elsewhere in the itinerary.",
    ],
    highlights: [
      "Mediterranean coastal viewpoints",
      "Promenade or marina stop",
      "Relaxed café or shopping time",
      "Shorter road commitment than inland tours",
    ],
    included: [
      "Guide or driver-guide",
      "Air-conditioned transport",
      "Scenic stops",
      "Cruise-timed return",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Check whether the route includes Mijas Pueblo or remains entirely on the coast",
      "Bring sun protection even outside midsummer",
      "Choose a smaller vehicle if viewpoint access matters",
    ],
    faqs: [
      {
        question: "Does this include beach time?",
        answer:
          "Possibly a short waterfront stop, but swimming is not standard unless the itinerary explicitly says so.",
      },
      {
        question: "Is it suitable for limited mobility?",
        answer:
          "Usually more suitable than Ronda or Caminito, though step-free vehicle access and walking distances should still be confirmed.",
      },
      {
        question: "Will we visit Marbella?",
        answer:
          "Some routes do, others use Benalmádena, Mijas or nearer viewpoints. Confirm the named stops for your sailing.",
      },
    ],
    relatedExcursionSlugs: [
      "mijas-costa-del-sol",
      "andalusia-white-villages",
      "malaga-city-highlights",
    ],
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "exclusive-ronda-day",
    title: "The Ronda Day — Future Wow Experience",
    seoTitle: "Future Private Ronda Wow Experience from Málaga",
    metaDescription:
      "Preview a future editorial Ronda experience from Málaga, pairing private viewpoints, regional food and thoughtful cruise-day pacing.",
    category: "Future Wow Experience",
    tagline:
      "Ronda beyond the postcard — quiet viewpoints, a table worth travelling for and the gorge at golden hour.",
    duration: "8–9 hours",
    pace: "Moderate",
    bestFor: "Future guests seeking a highly curated private alternative to a standard Ronda coach tour",
    overview:
      "The Ronda Day is an editorial concept for a future Wow product. It imagines private transport, expert storytelling, a beautifully chosen meal and enough time to experience the gorge without racing between coach stops; it is not currently presented as a bookable exclusive.",
    body: [
      "The concept begins with an early departure and a quieter arrival point, followed by a narrative walk across Ronda rather than a checklist circuit. Viewpoints would be selected for light, access and crowd conditions.",
      "Lunch would be integral: seasonal Andalusian cooking, local wine and a table reserved to protect the day's rhythm. A craft, estate or village visit could be added only when it strengthens the route.",
      "The return would remain conservative, leaving Ronda early enough for a 60–90 minute terminal buffer. Premium design does not justify gambling with all-aboard.",
      "Supplier relationships, access and pricing are still to be developed. This page describes editorial intent, not current availability or guaranteed inclusions.",
    ],
    highlights: [
      "Future private Ronda storytelling concept",
      "Crowd-aware gorge viewpoints",
      "Curated regional lunch",
      "Conservative cruise return planning",
    ],
    included: [
      "Proposed private guide and vehicle",
      "Proposed curated lunch",
      "Proposed village or artisan element",
      "Final inclusions subject to future development",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Treat this as a preview, not a live product",
      "Use Ronda & the White Villages for currently available partner options",
      "Register interest with mobility and dietary preferences when enquiries open",
    ],
    faqs: [
      {
        question: "Is this excursion currently bookable?",
        answer:
          "No. It is a future Wow-product concept and no exclusive availability should be inferred.",
      },
      {
        question: "What would make it different from a standard Ronda tour?",
        answer:
          "The proposed difference is private pacing, crowd-aware routing and a curated meal, rather than simply a smaller coach.",
      },
      {
        question: "When will details be confirmed?",
        answer:
          "Only after suitable partners, access, standards and sailing-specific logistics have been validated.",
      },
    ],
    relatedExcursionSlugs: [
      "ronda-white-villages",
      "private-andalusia-discovery",
      "andalusia-white-villages",
    ],
    supplier: FUTURE_SUPPLIER,
  },
];

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((excursion) => excursion.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((excursion) => excursion.slug);
}

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((excursion) => excursion.featured);
}
