import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { MalagaCruisePlanner } from "@/components/MalagaCruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Malaga cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored Andalusia recommendations.";

export const metadata = buildMetadata({
  title: "Malaga Cruise Planner — Andalusia Port Day Itinerary",
  description,
  path,
  keywords: ["Malaga cruise planner", "Andalusia cruise day plan", "Malaga port day itinerary", "Alhambra from Malaga planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Malaga Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Malaga Cruise Planner", description, path })]} />
      <PageHero
        title="Malaga Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for Granada, Ronda, Caminito del Rey, Malaga, Mijas and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <MalagaCruisePlanner />
        </div>
      </section>
    </>
  );
}
