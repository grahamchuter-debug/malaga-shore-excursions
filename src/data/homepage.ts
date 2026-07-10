import type { ExperienceCard, FAQ, VisitorType } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export const homepageTagline = "Discover the Best of Andalusia from Malaga";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Malaga for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to a realistic Malaga, Granada, Ronda or Caminito del Rey day with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Andalusia",
    shortLabel: "First visit",
    description:
      "Compare the Alhambra, Malaga and Ronda before choosing the experience that best fits your first visit.",
    href: "/compare/best-andalusia-tour-first-time",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Walk into Malaga's historic centre for the Alcazaba, cathedral, markets and waterfront at your own pace.",
    href: "/guides/independent-malaga-guide",
    cta: "Explore independently",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and budget for a tailored Andalusia plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const experienceCards: ExperienceCard[] = [
  {
    slug: "historic-malaga",
    title: "Historic Malaga",
    description: "Alcazaba walls, Roman stones, Picasso's city and cathedral lanes within easy reach of the ship.",
    href: "/guides/one-day-in-malaga",
    cta: "Explore Malaga",
    imageKey: "historic",
  },
  {
    slug: "granada-alhambra",
    title: "Granada & the Alhambra",
    description: "Nasrid palaces, Generalife gardens and Granada's great skyline on Andalusia's landmark day.",
    href: "/shore-excursions/granada-alhambra-full-day",
    cta: "Discover Granada",
    imageKey: "alhambra",
  },
  {
    slug: "ronda",
    title: "Ronda",
    description: "A white town split by a spectacular gorge, with Puente Nuevo views and mountain roads.",
    href: "/shore-excursions/ronda-white-villages",
    cta: "Visit Ronda",
    imageKey: "ronda",
  },
  {
    slug: "caminito-del-rey",
    title: "Caminito del Rey",
    description: "Cliff-hugging walkways and reservoir scenery for active passengers with enough port time.",
    href: "/shore-excursions/caminito-del-rey",
    cta: "Plan the adventure",
    imageKey: "caminito",
  },
  {
    slug: "mijas-coast",
    title: "Mijas & the Coast",
    description: "Whitewashed lanes, Mediterranean viewpoints and a gentler alternative to a long inland day.",
    href: "/shore-excursions/mijas-costa-del-sol",
    cta: "See the coast",
    imageKey: "coast",
  },
  {
    slug: "food-wine",
    title: "Food & Wine",
    description: "Atarazanas Market, espetos, tapas and sweet Malaga wine — Southern Spain by the plate.",
    href: "/guides/best-food-in-malaga",
    cta: "Taste Malaga",
    imageKey: "food",
  },
  {
    slug: "private-tours",
    title: "Private Tours",
    description: "A dedicated vehicle, flexible stops and routing shaped around your party and ship.",
    href: "/compare/private-tour-vs-coach-tour",
    cta: "Compare private tours",
    imageKey: "private",
  },
  {
    slug: "walking-tours",
    title: "Walking Tours",
    description: "Discover Malaga's compact centre on foot, from the port promenade to Roman and Moorish landmarks.",
    href: "/shore-excursions/historic-malaga-walking",
    cta: "Walk Malaga",
    imageKey: "walking",
  },
];

export const coreSections: HomeSection[] = [
  {
    slug: "shore-excursions",
    number: "01",
    title: "Shore Excursions",
    description: "Granada, Ronda, Caminito del Rey, Malaga and the coast — matched to cruise-port timings.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "cruise-port-guide",
    number: "02",
    title: "Malaga Cruise Port Guide",
    description: "Terminals, walking routes, taxis, city access and practical return-to-ship planning.",
    href: "/cruise-port-guide",
    cta: "Read the port guide",
  },
  {
    slug: "compare",
    number: "03",
    title: "Compare Your Options",
    description: "Alhambra or Ronda? Malaga or Caminito? Clear comparisons without overselling.",
    href: "/compare",
    cta: "Compare day trips",
  },
  {
    slug: "independent",
    number: "04",
    title: "Explore Independently",
    description: "A walkable Malaga itinerary with transport, food and return-buffer advice.",
    href: "/guides/independent-malaga-guide",
    cta: "Plan a DIY day",
  },
  {
    slug: "ship-schedules",
    number: "05",
    title: "Ship Schedules",
    description: "Check published Malaga arrivals and departures before committing to a long inland excursion.",
    href: "/ship-schedules/malaga",
    cta: "View schedules",
  },
  {
    slug: "faq",
    number: "06",
    title: "Malaga FAQs",
    description: "Honest answers on port access, Alhambra tickets, Caminito logistics and timing.",
    href: "/faq",
    cta: "Read the FAQs",
  },
  {
    slug: "signature",
    number: "07",
    title: "Signature Andalusia Experience",
    description: "A future Ronda-focused small-group flagship, currently in preparation.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
  },
  {
    slug: "wow-collection",
    number: "08",
    title: "The Wow Collection",
    description: "Future exclusive small-group Andalusia experiences designed around cruise passengers.",
    href: "/wow-collection",
    cta: "Discover the collection",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I walk from Malaga cruise port to the city centre?",
      answer:
        "Yes. From the Palmeral and Muelle 2 area it is roughly 10–20 minutes to Calle Larios; ships berthed farther along the Levante quay may use a port shuttle. Confirm your berth on arrival.",
    },
    {
      question: "Is the Alhambra realistic from Malaga on a cruise day?",
      answer:
        "Yes on a long call with timed Alhambra admission and organised transport. Granada is about 125 km away and the road journey is usually 1 hour 30 minutes to 2 hours each way. It is not a sensible last-minute DIY trip.",
    },
    {
      question: "Should first-time visitors choose Malaga, Granada or Ronda?",
      answer:
        "Choose Malaga for a relaxed, low-risk city day; Granada for the Alhambra if you have a long call and confirmed tickets; Ronda for dramatic scenery and a smaller-city feel.",
    },
    {
      question: "Is Caminito del Rey suitable for every cruise passenger?",
      answer:
        "No. It requires advance entry, firm footwear, a head for heights and enough time for road transfers and the one-way walking route. Weather or access restrictions can also affect the day.",
    },
    {
      question: "How early should I return to the ship in Malaga?",
      answer:
        "Aim to reach the terminal 60–90 minutes before all-aboard. Allow more margin when returning from Granada, Ronda or Caminito del Rey because motorway traffic and rural access can delay the journey.",
    },
  ];
}
