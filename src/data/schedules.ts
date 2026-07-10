import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import malagaSchedule from "./imported-schedules/malaga.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Malaga cruise ship schedules?",
    answer:
      "These sample calls support planning and are updated from published information where available. Times, berths and even calls can change, so confirm with your cruise line before booking.",
  },
  {
    question: "Where do cruise ships berth in Malaga?",
    answer:
      "Most large ships use the Levante cruise terminals; selected smaller calls may use an inner berth near Muelle 2. Always check the assigned berth on the day.",
  },
  {
    question: "Is a Malaga call long enough for the Alhambra?",
    answer:
      "A long call can support a cruise-timed Granada excursion with confirmed admission. Calls with fewer than nine usable hours are better suited to Malaga, Mijas or another closer option.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Check whether your berth is at Levante or closer to Muelle 2 before estimating walking time",
  "Book timed Alhambra and Caminito del Rey excursions well before sailing",
  "Keep additional road contingency when returning from Granada, Ronda or Caminito del Rey",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "malaga",
    name: "Malaga",
    country: "Spain",
    seoTitle: "Malaga Cruise Ship Schedule — Andalusia Port Calls",
    metaDescription:
      "Malaga cruise ship schedule for 2026 and 2027 planning, with sample arrivals, departures and berths for Andalusia shore excursions.",
    intro:
      "Malaga is the cruise gateway to Andalusia, with central city sights close to the harbour and full-day routes to Granada, Ronda and Caminito del Rey.",
    description:
      "Where Southern Spain begins — walk into historic Malaga or use a long port call to reach Andalusia's great inland landscapes and monuments.",
    scheduleOverview:
      "Malaga receives ships throughout the year, with particularly busy Mediterranean and repositioning periods in spring and autumn.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  malaga: malagaSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}
