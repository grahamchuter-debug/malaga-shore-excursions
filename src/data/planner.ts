import { SIGNATURE_EXPERIENCE_PATH, signatureAndalusiaExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Malaga explorer",
    description: "A low-risk city day using walking, taxis and your own return buffer.",
  },
  {
    id: "granada",
    label: "First-time Alhambra visitor",
    description: "A long guided day for passengers with enough port time and confirmed timed admission.",
  },
  {
    id: "ronda",
    label: "Scenery and photography traveller",
    description: "A full-day road journey to Ronda's gorge, old town and mountain viewpoints.",
  },
  {
    id: "caminito",
    label: "Active adventure traveller",
    description: "A timed, weather-dependent walking day for passengers comfortable with heights.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "malaga", label: "Historic Malaga" },
  { id: "alhambra", label: "Granada & the Alhambra" },
  { id: "ronda", label: "Ronda & white villages" },
  { id: "caminito", label: "Caminito del Rey adventure" },
  { id: "coast", label: "Mijas & the Costa del Sol" },
  { id: "food", label: "Food & wine" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "granada" | "ronda" | "caminito";

export const MALAGA_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Historic Malaga",
    summary:
      "The most flexible choice: walk from the port to the Roman Theatre, Alcazaba, cathedral, market and waterfront.",
    minimumHours: 4,
    links: [
      {
        label: "Independent Malaga Guide",
        href: "/guides/independent-malaga-guide",
        why: "Walking route, food stops and return-to-ship timing.",
      },
      {
        label: "Malaga Walking Tour",
        href: "/shore-excursions/historic-malaga-walking",
        why: "Guided context without committing to a long road day.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Walk or take the port shuttle towards Muelle 2 and Plaza de la Marina." },
      { time: "Morning", text: "Roman Theatre and Alcazaba before the heat and larger groups build." },
      { time: "Midday", text: "Cathedral quarter, Calle Larios and lunch around Atarazanas Market." },
      { time: "Afternoon", text: "Picasso Museum area or an easy Muelle Uno waterfront walk." },
    ],
  },
  granada: {
    headline: "Granada & Alhambra Full Day",
    summary:
      "The first-time landmark choice when your call is long enough and timed Nasrid Palaces admission is confirmed.",
    minimumHours: 9,
    links: [
      {
        label: "Granada & Alhambra Full Day",
        href: "/shore-excursions/granada-alhambra-full-day",
        why: "Cruise-timed transport and advance Alhambra access.",
      },
      {
        label: "Alhambra or Ronda?",
        href: "/compare/granada-or-ronda",
        why: "Compare monument access, road time, scenery and flexibility.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the organised excursion promptly at the confirmed terminal point." },
      { time: "Morning", text: "Drive to Granada; the exact Alhambra sequence follows the timed ticket." },
      { time: "Midday", text: "Nasrid Palaces and Generalife, with lunch timed around admission." },
      { time: "Afternoon", text: "Brief Granada context if time permits, then direct return to Malaga." },
    ],
  },
  ronda: {
    headline: "Ronda & Mountain Scenery",
    summary:
      "Choose Ronda for Puente Nuevo, gorge photography and a more flexible open-air day than the Alhambra.",
    minimumHours: 8,
    links: [
      {
        label: "Ronda Full Day",
        href: "/shore-excursions/ronda-white-villages",
        why: "Gorge viewpoints, old town and road timing from Malaga.",
      },
      {
        label: "Private Ronda & White Villages",
        href: "/shore-excursions/private-andalusia-discovery",
        why: "Flexible photography and lunch stops for one party.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the guide and leave Malaga before city traffic builds." },
      { time: "Morning", text: "Scenic inland drive and first Puente Nuevo or valley viewpoint." },
      { time: "Midday", text: "Ronda old town, gorge walks and an unhurried local lunch." },
      { time: "Afternoon", text: "Final photography stop, then return by the operator's traffic-buffered route." },
    ],
  },
  caminito: {
    headline: "Caminito del Rey Adventure",
    summary:
      "For fit passengers comfortable with heights, advance entry and a day whose exact operation depends on weather.",
    minimumHours: 8,
    links: [
      {
        label: "Caminito del Rey",
        href: "/shore-excursions/caminito-del-rey",
        why: "Timed access, trail transfers and cruise-port return planning.",
      },
      {
        label: "Caminito or Ronda?",
        href: "/compare/ronda-or-caminito-del-rey",
        why: "Compare physical demand, weather risk and scenery.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the organised transfer; confirm that the route is open and entry remains valid." },
      { time: "Morning", text: "Drive to the reservoir landscape and transfer to the correct trail entrance." },
      { time: "Midday", text: "Complete the one-way cliffside walkway at the guide's safe pace." },
      { time: "Afternoon", text: "Exit transfer and direct return to Malaga with a conservative margin." },
    ],
  },
};

function usableHours(input: PlannerInput): number {
  if (!input.arrivalTime || !input.departureTime) return 7.5;
  const [arrivalHour, arrivalMinute] = input.arrivalTime.split(":").map(Number);
  const [departureHour, departureMinute] = input.departureTime.split(":").map(Number);
  const elapsed = departureHour * 60 + departureMinute - arrivalHour * 60 - arrivalMinute;
  return Math.max(0, elapsed / 60 - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("malaga") ||
    hours < 8
  ) {
    return "independent";
  }
  if (interests.includes("caminito") && input.mobility === "full" && input.children === 0) return "caminito";
  if (interests.includes("ronda") || interests.includes("photography")) return "ronda";
  if (interests.includes("alhambra") && hours >= 9) return "granada";
  return hours >= 9 ? "granada" : "ronda";
}

export function generateMalagaPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = MALAGA_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureAndalusiaExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Ronda concept — in preparation and not bookable.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend, so choose Malaga instead.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Malaga Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal walking times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Malaga Ship Schedule",
        href: "/ship-schedules/malaga",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Andalusia",
        href: "/compare",
        why: "Review honest trade-offs before booking a long inland day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Malaga terminal 60–90 minutes before all-aboard; long inland excursions require additional road contingency.",
      },
    ],
  };
}
