import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Malaga?",
    answer:
      "Most cruise ships use the Levante cruise terminals on the eastern harbour breakwater. Some smaller ships berth closer to Muelle 2 and the Palmeral de las Sorpresas. Berths change, so check your ship's information on arrival.",
  },
  {
    question: "How far is Malaga cruise port from the historic centre?",
    answer:
      "Calle Larios is roughly 10–20 minutes on foot from Muelle 2 and usually 25–35 minutes from the outer Levante terminals. A port shuttle or taxi may shorten the first section.",
  },
  {
    question: "Can I explore Malaga independently?",
    answer:
      "Yes. The historic centre is compact and the cathedral, Picasso Museum area, Roman Theatre, Alcazaba, Atarazanas Market and waterfront can fit into one well-paced walking day.",
  },
  {
    question: "What is the best independent Malaga itinerary?",
    answer:
      "Walk from the port to the Roman Theatre and Alcazaba in the morning, continue through the cathedral quarter, lunch near Atarazanas Market, then return via Calle Larios, Muelle Uno and the waterfront.",
  },
  {
    question: "How far is Granada from Malaga cruise port?",
    answer:
      "Granada is about 125 km from Malaga. Coaches and private vehicles normally take 1 hour 30 minutes to 2 hours each way, depending on traffic and the final drop-off point.",
  },
  {
    question: "Do I need advance tickets for the Alhambra?",
    answer:
      "Yes. Nasrid Palaces entry is timed and can sell out weeks or months ahead. Do not travel from the ship expecting to buy suitable tickets at the gate.",
  },
  {
    question: "Can I visit Granada and Malaga city in one port day?",
    answer:
      "Only as a brief combination on a long call. A proper Alhambra visit already uses most of the day once transfers, timed entry and return margin are included. Do not sacrifice the ship buffer for a rushed city stop.",
  },
  {
    question: "How far is Ronda from Malaga?",
    answer:
      "Ronda is roughly 100 km away. The drive commonly takes around 1 hour 30 minutes to 2 hours each way on winding inland roads. It suits a full-day excursion rather than casual independent travel.",
  },
  {
    question: "Is Ronda or the Alhambra better for a first visit?",
    answer:
      "The Alhambra is Andalusia's great monument and our first-time choice when tickets and port hours align. Ronda offers stronger open-air scenery, fewer timed-entry constraints and a more flexible day.",
  },
  {
    question: "Can cruise passengers visit Caminito del Rey safely?",
    answer:
      "Yes if they meet the operator's age, footwear, mobility and height-exposure requirements. The route is linear, entry is timed and closures can occur in bad weather, so organised logistics are strongly preferable on a port day.",
  },
  {
    question: "How difficult is Caminito del Rey?",
    answer:
      "The maintained walkway is not technical climbing, but the outing involves several kilometres of walking, steps, exposed boardwalks and limited opportunities to turn back. It is unsuitable for significant mobility limitations or severe fear of heights.",
  },
  {
    question: "What happens if Caminito del Rey closes because of weather?",
    answer:
      "Access can close in strong wind, heavy rain or unsafe conditions. Check the operator's cancellation and alternative-itinerary policy before booking; no website should promise that the route will always open.",
  },
  {
    question: "Is Mijas a good choice for families?",
    answer:
      "Often, yes. Mijas Pueblo offers whitewashed streets and viewpoints with less road time than Granada or Ronda. Families may still prefer central Malaga if they need pushchair-friendly flexibility and an easy return.",
  },
  {
    question: "What food should I try in Malaga?",
    answer:
      "Look for espetos de sardinas, fried fish, porra antequerana, aubergine with cane honey, local almonds and sweet Malaga wine. Atarazanas Market is useful for a compact introduction.",
  },
  {
    question: "Can I combine a food tour with Malaga sightseeing?",
    answer:
      "Yes. A market or tapas tour can anchor a city day because most central landmarks are close together. Leave time for the Alcazaba before lunch and return along the waterfront afterwards.",
  },
  {
    question: "Should I book through the cruise line or independently?",
    answer:
      "Ship excursions offer the clearest protection if an organised tour is delayed. Reputable independent operators may offer smaller groups and better value, but you must check their port-day experience, cancellation terms and return guarantee.",
  },
  {
    question: "How much return-to-ship buffer should I allow?",
    answer:
      "For Malaga city, aim to be at the terminal 60–90 minutes before all-aboard. For Granada, Ronda or Caminito del Rey, build the route backwards with additional motorway and access contingency.",
  },
  {
    question: "Are Malaga shore excursions accessible?",
    answer:
      "Central Malaga and the waterfront have accessible sections, but the Alcazaba includes slopes and uneven surfaces. Ronda has cobbles and gradients; the Alhambra is extensive; Caminito del Rey is not suitable for limited mobility. Discuss exact needs before booking.",
  },
  {
    question: "What currency and language are used in Malaga?",
    answer:
      "Spain uses the euro. Spanish is the local language, and English is widely understood in major visitor areas. Cards are common, but carrying a small amount of cash is useful for markets and cafés.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
