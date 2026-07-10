import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Malaga cruise day." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "The Alhambra, Malaga's Alcazaba and Andalusia's layered past." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Independent", description: "A realistic self-guided Malaga day within easy reach of the ship." },
  { id: "best-coastal", label: "Best Coastal Experience", shortLabel: "Coastal", description: "Mijas, Mediterranean viewpoints and the Costa del Sol." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "Ronda's gorge, Caminito cliffs and Andalusia's mountain horizons." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Ronda-focused small-group flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Flexible Malaga and Mijas options with manageable travel and walking." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "Puente Nuevo, white villages and mountain viewpoints around Ronda." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Markets, tapas, espetos and Malaga's distinctive sweet wines." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Dedicated transport and flexible pacing for your own party." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "White villages and local stops beyond the standard coach route." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Malaga highlights for calls without enough usable time to travel inland." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Granada & Alhambra Full Day — Andalusia's defining monument on a carefully timed cruise excursion.",
    href: "/shore-excursions/granada-alhambra-full-day",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "🏰",
    label: "Best First-Time Tour",
    description: "Granada and the Alhambra for first-time visitors with a long port call and confirmed timed admission.",
    href: "/shore-excursions/granada-alhambra-full-day",
    cta: "Discover the Alhambra",
  },
  {
    id: "adventure",
    emoji: "🥾",
    label: "Best Adventure",
    description: "Caminito del Rey — a spectacular cliffside walk for active passengers who understand the timing and terrain.",
    href: "/shore-excursions/caminito-del-rey",
    cta: "Plan Caminito",
  },
  {
    id: "food-wine",
    emoji: "🍷",
    label: "Best Food & Wine",
    description: "Malaga market and tapas — Atarazanas produce, local plates and regional wine without leaving the city behind.",
    href: "/guides/best-food-in-malaga",
    cta: "Taste Malaga",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Private Tour",
    description: "Private Ronda and white villages — flexible viewpoints, lunch timing and a dedicated vehicle for your party.",
    href: "/shore-excursions/private-andalusia-discovery",
    cta: "View private tour",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Ronda — Puente Nuevo, the Tajo gorge and mountain panoramas provide the day's strongest photographs.",
    href: "/shore-excursions/ronda-white-villages",
    cta: "Photograph Ronda",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Malaga city or Mijas keeps road time sensible and allows mixed-age families to set an easier pace.",
    href: "/compare/best-andalusia-tour-first-time",
    cta: "Compare family days",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Best Independent Day",
    description: "Independent Malaga — Alcazaba, Roman Theatre, cathedral, market and waterfront with a generous ship buffer.",
    href: "/guides/independent-malaga-guide",
    cta: "Use the DIY guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Andalusia Experience",
    description: "Signature Andalusia Discovery — a future maximum-eight-guest Ronda day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
