import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-andalusia-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureAndalusiaExperience = {
  slug: "signature-andalusia-experience",
  title: "Signature Andalusia Discovery",
  seoTitle: "Signature Andalusia Discovery — Future Ronda Experience",
  metaDescription:
    "Preview a future small-group Ronda shore experience from Malaga — maximum eight guests, luxury transport and flexible discovery. Not currently bookable.",
  tagline:
    "A future small-group journey to Ronda, scenic villages and the landscapes of inland Andalusia — designed around your ship, not a generic day tour.",
  overview:
    "Signature Andalusia Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Malaga to Ronda in a luxury vehicle, with scenic village and photography stops, a local lunch and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "🚐",
      title: "Luxury vehicle",
      description: "Comfortable transport planned for the mountain roads between Malaga, Ronda and selected villages.",
    },
    {
      emoji: "🌉",
      title: "Ronda at its heart",
      description: "Puente Nuevo, the Tajo gorge and the old town would form the core of the future itinerary.",
    },
    {
      emoji: "🏘️",
      title: "Scenic villages",
      description: "One carefully chosen white-village stop where port hours and road conditions permit.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description: "Time for gorge, mountain and village viewpoints rather than photographs through a coach window.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description: "A relaxed Andalusian lunch proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Routing designed to adapt to ship times, traffic, weather, mobility and the interests of each group.",
    },
    {
      emoji: "🚢",
      title: "Cruise-first timing",
      description: "The future operating plan will be built backwards from all-aboard with a conservative return margin.",
    },
  ] satisfies SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Andalusia Discovery now?",
      answer:
        "No. The experience is in preparation and is not currently available to book. This page describes the intended concept only.",
    },
    {
      question: "What would the future experience include?",
      answer:
        "The current concept includes a maximum of eight guests, luxury transport, Ronda, selected scenic villages, photography stops, a local lunch and flexible cruise-timed routing. Details may change before launch.",
    },
    {
      question: "Why focus on Ronda rather than Granada?",
      answer:
        "Ronda combines dramatic scenery, history, village landscapes and flexible outdoor stops. Unlike the Alhambra, the day is less dependent on a single timed palace admission, although road timing still requires careful planning.",
    },
    {
      question: "What should I book in the meantime?",
      answer:
        "Use our current shore-excursion guides and Editor's Collection to compare bookable Granada, Ronda, Malaga and Caminito del Rey options.",
    },
  ] satisfies FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    category: "best-got" as const,
    title: signatureAndalusiaExperience.title,
    description:
      "A future maximum-eight-guest Ronda and villages experience. In preparation and not currently bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
    comingSoon: true,
  };
}
