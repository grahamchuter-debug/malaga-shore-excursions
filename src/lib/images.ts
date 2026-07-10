export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img("hero-home", "Caminito del Rey walkway above the gorge — gateway to Andalusia from Malaga cruise port"),
  ogDefault: img("og-default", "Andalusia cruise planning — Alhambra, Ronda and Malaga from Malaga cruise port"),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Malaga Shore Excursions",
  },
  port: img("cruise-port", "Malaga cruise port waterfront — gateway to Andalusia"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  alhambra: img("alhambra", "Alhambra palace complex in Granada from Malaga cruise port"),
  granada: img("granada", "Granada cityscape and Albaicín from Malaga"),
  ronda: img("ronda", "Puente Nuevo bridge spanning El Tajo gorge in Ronda"),
  caminito: img("caminito", "Caminito del Rey cliff walkways near Malaga"),
  mijas: img("mijas", "Whitewashed streets of Mijas pueblo on the Costa del Sol"),
  historic: img("historic", "Malaga Cathedral in the historic centre"),
  alcazaba: img("alcazaba", "Alcazaba fortress overlooking Malaga harbour"),
  coast: img("coast", "Malaga waterfront and Mediterranean promenade from the cruise port"),
  "white-villages": img("white-villages", "Andalusian white village streets and terraces"),
  wine: img("wine", "Andalusian wine and food culture"),
  walking: img("walking", "Walking Malaga old town from the cruise terminal"),
  photography: img("photography", "Photography viewpoints in Ronda and Caminito del Rey"),
  private: img("private", "Private Andalusia shore excursion from Malaga"),
  food: img("food", "Andalusian tapas and food culture in Malaga"),
  family: img("family", "Family exploring Malaga and Andalusia from a cruise ship"),
  compare: img("compare", "Comparing Andalusia cruise excursion options from Malaga"),
  port: img("cruise-port", "Malaga cruise port terminal"),
  highlights: img("alhambra", "Andalusia highlights from Malaga cruise port"),
  city: img("historic", "Malaga historic centre from cruise port"),
  history: img("alcazaba", "Historic Malaga monuments and Moorish heritage"),
  "hero-home": img("hero-home", "Caminito del Rey — Andalusia gateway hero image"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "granada-alhambra-full-day": "alhambra",
  "ronda-white-villages": "ronda",
  "caminito-del-rey": "caminito",
  "malaga-city-highlights": "historic",
  "historic-malaga-walking": "walking",
  "mijas-costa-del-sol": "mijas",
  "private-andalusia-discovery": "private",
  "malaga-food-wine": "food",
  "alcazaba-cathedral-tour": "alcazaba",
  "granada-alhambra-half-day": "granada",
  "exclusive-ronda-day": "ronda",
  "exclusive-caminito": "caminito",
  "andalusia-white-villages": "white-villages",
  "costa-del-sol-scenic": "coast",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("alhambra");

const highlightImageKeys: Record<string, string> = {
  "granada-from-malaga-cruise-port": "alhambra",
  "ronda-shore-excursion-guide": "ronda",
  "caminito-del-rey-from-malaga": "caminito",
  "historic-malaga-guide": "historic",
  "mijas-from-malaga": "mijas",
};

const comparisonImageKeys: Record<string, string> = {
  "granada-or-ronda": "compare",
  "ronda-or-caminito-del-rey": "caminito",
  "can-you-explore-malaga-independently": "walking",
  "best-malaga-shore-excursion": "alhambra",
  "private-tour-vs-coach-tour": "private",
  "best-andalusia-tour-first-time": "alhambra",
  "one-day-in-malaga": "historic",
  "is-caminito-del-rey-worth-it": "caminito",
  "who-should-visit-caminito-del-rey": "caminito",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getGuideImage(key: string): SiteImage {
  return pick(key in subjectImages ? key : "historic");
}

export function getHotelImage(_slug: string): SiteImage {
  return pick("historic");
}

export function getTransferImage(_slug: string): SiteImage {
  return pick("coast");
}

export const guidesHubImage = pick("alhambra");
