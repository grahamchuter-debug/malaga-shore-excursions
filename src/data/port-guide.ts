import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Malaga Cruise Port Guide",
  subtitle:
    "Terminals, walking times, historic Malaga, food, transport and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Levante Cruise Terminals",
      quay: "Outer eastern harbour breakwater, including the main cruise terminal buildings",
      usedBy: "Most medium, large and mega-ships calling at Malaga",
      cityAccess:
        "Approximately 25–35 minutes on foot to Calle Larios, depending on berth and terminal exit; port shuttle and taxis are commonly available",
    },
    {
      name: "Muelle 2 / Palmeral",
      quay: "Inner harbour beside the Palmeral de las Sorpresas and Muelle Uno",
      usedBy: "Smaller ships and selected calls when inner berths are assigned",
      cityAccess:
        "About 10–15 minutes on foot to Calle Larios, the cathedral quarter and the Roman Theatre",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Malaga",
      paragraphs: [
        "Most ships dock at the Levante cruise facilities on Malaga harbour's eastern breakwater. The exact walk depends on the berth: outer terminals are farther from the centre, while occasional inner-harbour berths sit beside Muelle 2.",
        "Check the ship's daily programme and signs in the terminal before setting out. Port shuttles may run between outer berths and a stop nearer the city, but service and pricing can vary by call.",
        "Malaga is one of the easiest major Andalusian ports for a city day because the historic centre begins just beyond the harbour. Granada, Ronda and Caminito del Rey are inland full-day journeys and need different timing.",
      ],
    },
    {
      heading: "Walking from the port",
      paragraphs: [
        "From Muelle 2, follow the Palmeral de las Sorpresas towards Plaza de la Marina. Calle Larios begins across the main road, while the cathedral is a short walk east through the old centre.",
        "From the outer Levante terminals, allow roughly 25–35 minutes to central Malaga if walking the full distance. The route is mostly level and follows the harbour, but summer heat can make a shuttle or taxi worthwhile.",
        "Muelle Uno's restaurants, shops and marina promenade are useful at the end of the day because they remain close to the route back to the ship.",
      ],
    },
    {
      heading: "Historic Malaga highlights",
      paragraphs: [
        "The Roman Theatre and Alcazaba sit together below Gibralfaro. The theatre is easy to view from street level; the Alcazaba rewards a longer visit but includes slopes, steps and uneven surfaces.",
        "Malaga Cathedral, often called La Manquita, anchors the old centre near Calle Larios. Allow time for the surrounding lanes rather than treating the building as a quick photograph.",
        "The Picasso Museum is in the historic centre near the artist's birthplace at Plaza de la Merced. Timed or advance tickets are sensible on busy cruise days, especially if the museum is your main priority.",
      ],
    },
    {
      heading: "Markets, food and local flavour",
      paragraphs: [
        "Atarazanas Market is the best compact introduction to Malaga produce, seafood, olives and cured meats. It is primarily a daytime market, so visit before a late afternoon return.",
        "For a quick local lunch, look for fried fish, porra antequerana or tapas in the old centre. Espetos are traditionally grilled by the beach and suit passengers with time for a taxi to a nearby seafront district.",
        "Sweet Malaga wine is distinctive but strong. Keep tastings moderate on a walking day and check that any food tour finishes with ample time to reach the terminal.",
      ],
    },
    {
      heading: "Transport beyond the city",
      paragraphs: [
        "Taxis wait at or near the terminal when ships are in port. Confirm the fare or meter and show the terminal name for the return, because 'Malaga port' covers several possible access points.",
        "The main railway and bus stations are west of the historic centre. Local trains work well along parts of the Costa del Sol, but public transport is not the best cruise-day method for the Alhambra, Ronda or Caminito del Rey.",
        "Granada is generally 1 hour 30 minutes to 2 hours by road each way; Ronda is similar on more winding roads. Caminito del Rey requires timed access plus coordination between trail entrances, so transport cannot be treated as a simple return taxi.",
      ],
    },
    {
      heading: "A realistic independent city day",
      paragraphs: [
        "Start with the Roman Theatre and Alcazaba before the hottest part of the day. Continue through the cathedral quarter and Calle Larios to Atarazanas Market for lunch or tastings.",
        "Use the afternoon for the Picasso Museum, Plaza de la Merced or an unhurried waterfront walk. Trying to include every museum and Gibralfaro Castle will make an otherwise easy port day feel rushed.",
        "Keep the final hour ashore close to Muelle Uno and the Palmeral so that an unexpected queue or wrong turn does not threaten all-aboard.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm the ship's all-aboard time, which is earlier than the published departure. For a city day, plan to reach the terminal 60–90 minutes before all-aboard.",
        "For Granada, Ronda or Caminito del Rey, the operator should plan backwards from the ship with motorway, parking and access contingencies. A journey time shown by a map app is not an adequate return plan.",
        "Independent travellers are responsible for reaching the ship. If a long inland trip does not leave a conservative margin, choose Malaga city or the nearby coast instead.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Malaga from the cruise terminal?",
      answer:
        "Yes. Allow around 10–15 minutes from Muelle 2 or 25–35 minutes from the outer Levante terminals. A shuttle or taxi may be available.",
    },
    {
      question: "What can I see close to Malaga port?",
      answer:
        "Calle Larios, the cathedral, Roman Theatre, Alcazaba, Picasso Museum area, Atarazanas Market and Muelle Uno are all in or beside the compact centre.",
    },
    {
      question: "Do I need transport for the Alcazaba?",
      answer:
        "Usually not. It is walkable from the harbour and city centre, though the site itself includes uphill paths and steps.",
    },
    {
      question: "Is Granada an easy independent trip from the port?",
      answer:
        "No. The distance, timed Alhambra entry and return risk make an organised cruise-timed excursion the more realistic approach.",
    },
    {
      question: "How early should I be back?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger road contingency for inland excursions.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
