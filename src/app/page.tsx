import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ChooseYourAndalusia } from "@/components/ChooseYourAndalusia";
import { SpiritOfAndalusia } from "@/components/SpiritOfAndalusia";
import { WowCollectionFeature } from "@/components/WowCollectionFeature";
import { SignatureAndalusiaFeature } from "@/components/SignatureAndalusiaFeature";
import { EditorsCollection } from "@/components/EditorsCollection";
import { HonestAdvice } from "@/components/HonestAdvice";
import { ExperienceSelector } from "@/components/ExperienceSelector";
import { CruisePassengerRatings } from "@/components/CruisePassengerRatings";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { coreSections, getHomepageFaqs, homepageTagline } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { siteImages, getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";
import { AndalusiaLinks } from "@/components/AndalusiaLinks";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Malaga — Gateway to Andalusia | Shore Excursions",
  description:
    "Explore carefully selected Malaga shore excursions, independent cruise advice and unforgettable Andalusian experiences.",
  path: "/",
  keywords: [
    "Gateway to Andalusia",
    "Malaga cruise port",
    "Malaga shore excursions",
    "Alhambra from Malaga",
    "Ronda shore excursion",
    "Caminito del Rey cruise excursion",
  ],
});

const SITE_DESCRIPTION =
  "The gateway to Andalusia — carefully selected Malaga shore excursions, independent cruise advice and unforgettable experiences across Granada, Ronda, Caminito del Rey and the Costa del Sol.";

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions().slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Malaga — Gateway to Andalusia",
            description: SITE_DESCRIPTION,
            path: "/",
          }),
        ]}
      />

      <PreloadImage base={siteImages.hero.base} role="hero" />

      {/* Hero — Gateway positioning */}
      <section className="home-hero">
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100 animate-fade-up">Gateway to Andalusia</p>
          <h1 className="home-hero-heading animate-fade-up-delay">{homepageTagline}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg animate-fade-up-delay">
            Explore carefully selected Malaga shore excursions, independent cruise advice and
            unforgettable Andalusian experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/shore-excursions" className="btn-accent">
              Explore Shore Excursions
            </Link>
            <Link
              href="/compare"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Help Me Choose My Andalusian Adventure
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80 animate-fade-up-delay-2">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">🥾</span> Caminito
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">🏰</span> Alhambra
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">🌉</span> Ronda
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">🎨</span> Malaga
            </span>
          </div>
        </div>
      </section>

      <ChooseYourAndalusia />
      <SpiritOfAndalusia />
      <WowCollectionFeature />
      <SignatureAndalusiaFeature />
      <EditorsCollection />
      <HonestAdvice />

      {/* Featured excursions */}
      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="section-eyebrow text-coastal-200">When you&apos;re ready</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Featured shore excursions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Once you know which experience suits your day, these cruise-timed tours are designed for
              passengers who already understand which Andalusian experience fits their port day.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((e) => {
              const image = getExcursionImage(e.slug);
              const isEditorsChoice = e.slug === "granada-alhambra-full-day";
              return (
                <Link
                  key={e.slug}
                  href={`/shore-excursions/${e.slug}`}
                  className="card-editorial group overflow-hidden bg-white/5 border-white/10 hover:bg-white/10"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    {isEditorsChoice && (
                      <span className="absolute left-3 top-3 badge-editors-choice">
                        ⭐ Editor&apos;s Choice
                      </span>
                    )}
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="font-display text-lg font-bold group-hover:text-maple-300">{e.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{e.tagline}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-maple-300">
                      Discover more →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/shore-excursions" className="btn-accent">
              All Shore Excursions
            </Link>
          </div>
        </div>
      </section>

      <ExperienceSelector />

      <CruisePassengerRatings />

      {/* Independent Malaga guide teaser */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <div className="card-accent">
            <p className="section-eyebrow">Independent exploring</p>
            <h2 className="section-title mt-2">Can you explore Malaga without a tour?</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Yes. Malaga&apos;s Old Town, cathedral, Alcazaba, Picasso Museum, Atarazanas Market,
              Muelle Uno and Malagueta Beach can all fit a sensible independent port day. Our guide
              explains the walk from the terminal, practical sequencing and return buffers.
            </p>
            <Link href="/guides/independent-malaga-guide" className="btn-secondary mt-6 inline-flex text-sm">
              Read the independent Malaga guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison guides */}
      <section className="section-padding bg-coastal-50">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">Granada or Ronda?</h3>
            <p className="mt-3 text-gray-700">
              Moorish palace architecture versus dramatic mountain scenery — compare road time,
              ticketing, walking and flexibility before choosing.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/compare/granada-or-ronda" className="btn-secondary text-sm">
                Compare options
              </Link>
              <Link href="/compare/best-malaga-shore-excursion" className="btn-secondary text-sm">
                Best excursion guide
              </Link>
            </div>
          </div>
          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">Private tour or large coach?</h3>
            <p className="mt-3 text-gray-700">
              Prefer exclusive small-group pacing? Compare private touring with standard coach
              excursions — and see how The Wow Collection is being prepared for passengers who want
              Andalusia experienced thoughtfully.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/compare/private-tour-vs-coach-tour" className="btn-secondary text-sm">
                Private vs coach
              </Link>
              <Link href="/wow-collection" className="btn-secondary text-sm">
                The Wow Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Planning hub */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Plan your port day</p>
          <h2 className="section-title mt-2">Everything you need to choose the right Andalusia experience</h2>
          <p className="section-subtitle">
            Not just an excursion catalogue — comparisons, guides, schedules and honest advice because
            the best bookings start with genuine understanding.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreSections.map((s) => (
              <Link key={s.slug} href={s.href} className="nav-card group flex h-full flex-col">
                <span className="font-display text-2xl font-bold text-coastal-200">{s.number}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{s.description}</p>
                <span className="mt-3 text-sm font-semibold text-maple-600">{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cruise schedule teaser */}
      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            See which ships call at Malaga
          </h2>
          <p className="mt-4 text-white/85">
            Check cruise ship schedules before you book Granada, Ronda or Caminito del Rey. Times are
            indicative — always confirm with your cruise line.
          </p>
          <Link href="/ship-schedules/malaga" className="btn-accent mt-8 inline-flex">
            View Malaga ship schedules
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} title="Malaga & Andalusia — FAQs" />
        </div>
      </section>

      <AndalusiaLinks />

      {/* Trust */}
      <section className="section-padding bg-coastal-50 border-t border-coastal-100">
        <div className="container-wide max-w-3xl text-center">
          <p className="section-eyebrow">Why trust us</p>
          <h2 className="section-title mt-2">Independent editorial advice</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {SITE.name} is an independent planning resource — not affiliated with any cruise line or the
            Port of Malaga. We recommend honestly, build return-to-ship buffers into every guide, and
            never imply a product exists before it is ready to book.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-600">
            <span className="pill">Cruise-focused planning</span>
            <span className="pill">Carefully selected excursions</span>
            <span className="pill">Honest recommendations</span>
            <span className="pill">Independent advice</span>
            <span className="pill">Local expertise</span>
            <span className="pill">Secure booking partners</span>
          </div>
        </div>
      </section>
    </>
  );
}
