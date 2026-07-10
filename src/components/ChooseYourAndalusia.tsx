"use client";

import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const CHOOSE_CARDS = [
  {
    slug: "moorish-spain",
    emoji: "🏰",
    title: "Moorish Spain",
    tagline: "The Alhambra, Nasrid palaces and Granada's layered history — Andalusia at its most extraordinary.",
    highlights: [
      "Timed Alhambra and Nasrid Palaces admission",
      "Generalife gardens and Sierra Nevada views",
      "Granada's cathedral and Albaicín",
      "A full cruise day with realistic road timing",
      "Our Editor's Choice for long port calls",
    ],
    cta: "Discover the Alhambra",
    href: "/shore-excursions/granada-alhambra-full-day",
    imageKey: "alhambra",
    wide: true,
  },
  {
    slug: "adventure",
    emoji: "🥾",
    title: "Adventure & Caminito del Rey",
    tagline: "Cliff-hung boardwalks, turquoise water and immense rock walls on Andalusia's great active day.",
    highlights: [
      "The Gaitanes Gorge boardwalks",
      "A spectacular one-way walking route",
      "Timed entry and weather-aware planning",
      "Best for confident, active walkers",
      "Cruise-timed transport from Malaga",
    ],
    cta: "Plan the adventure",
    href: "/shore-excursions/caminito-del-rey",
    imageKey: "caminito",
    wide: true,
  },
  {
    slug: "coastal-andalusia",
    emoji: "🌊",
    title: "Coastal Andalusia",
    tagline: "Whitewashed Mijas, flowered lanes and Mediterranean views above the Costa del Sol.",
    highlights: [
      "Mijas Pueblo's whitewashed streets",
      "Mediterranean viewpoints",
      "A relaxed half-day alternative",
      "Craft shops and village cafés",
      "Less road time than Granada or Ronda",
    ],
    cta: "Discover Mijas",
    href: "/shore-excursions/mijas-costa-del-sol",
    imageKey: "mijas",
    wide: false,
  },
  {
    slug: "food-wine",
    emoji: "🍷",
    title: "Food & Wine",
    tagline: "Tapas, Atarazanas Market, espetos and Malaga wine — southern Spain by the plate.",
    highlights: [
      "Atarazanas Market when open",
      "Traditional tapas and local produce",
      "Andalusian and Malaga wines",
      "Old-town food culture",
      "Easy timing close to the ship",
    ],
    cta: "Taste Malaga",
    href: "/shore-excursions/malaga-food-wine",
    imageKey: "food",
    wide: false,
  },
  {
    slug: "historic-malaga",
    emoji: "🎨",
    title: "Historic Malaga",
    tagline: "Roman stones, Moorish ramparts, Picasso's birthplace and cathedral lanes within reach of the ship.",
    highlights: [
      "Alcazaba and Roman Theatre",
      "Malaga Cathedral",
      "Picasso's birthplace quarter",
      "Calle Larios and historic squares",
      "Ideal for independent exploration",
    ],
    cta: "Explore historic Malaga",
    href: "/shore-excursions/historic-malaga-walking",
    imageKey: "historic",
    wide: false,
  },
  {
    slug: "private",
    emoji: "🚗",
    title: "Private Andalusia",
    tagline: "Your vehicle, your pace and one carefully chosen route through Malaga, Ronda or the coast.",
    highlights: [
      "Flexible route and walking pace",
      "Useful for families and mixed mobility",
      "Photography and meal stops",
      "One realistic Andalusian anchor",
      "Cruise-first return planning",
    ],
    cta: "Compare private touring",
    href: "/compare/private-tour-vs-coach-tour",
    imageKey: "private",
    wide: false,
  },
] as const;

export function ChooseYourAndalusia() {
  return (
    <section id="choose" className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Choose Your Andalusia</p>
        <h2 className="section-title mt-2 max-w-3xl">
          How Would You Like to Experience Andalusia?
        </h2>
        <p className="section-subtitle">
          From Moorish palaces and mountain adventures to white villages, Mediterranean views and
          Malaga&apos;s food culture, choose the experience that best fits your interests and time ashore.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CHOOSE_CARDS.map((card) => {
            const image = subjectImages[card.imageKey] ?? subjectImages.alhambra;
            return (
              <Link
                key={card.slug}
                href={card.href}
                className={`card-editorial group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  card.wide ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${card.wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
                >
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-coastal-900/25 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-5 top-5 text-3xl" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base leading-relaxed text-gray-600 italic">
                    &ldquo;{card.tagline}&rdquo;
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                    {card.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-maple-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 text-sm font-semibold tracking-wide text-maple-600 group-hover:text-maple-500">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
