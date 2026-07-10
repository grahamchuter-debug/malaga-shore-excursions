import Link from "next/link";

const ANDALUSIA_LINKS = [
  {
    title: "Granada or Ronda?",
    description:
      "Compare Andalusia's two great inland days — Alhambra timing versus Ronda's gorge and mountain roads.",
    href: "/compare/granada-or-ronda",
  },
  {
    title: "Is Caminito del Rey worth it?",
    description:
      "Honest guidance on the spectacular gorge walk, advance planning and who should skip it.",
    href: "/compare/is-caminito-del-rey-worth-it",
  },
  {
    title: "Independent Malaga guide",
    description:
      "Walk the Old Town, Alcazaba, Picasso Museum and port with a realistic return-to-ship plan.",
    href: "/guides/independent-malaga-guide",
  },
  {
    title: "Compare Andalusia experiences",
    description:
      "Choose between Granada, Ronda, Caminito del Rey, Malaga and the coast with candid trade-offs.",
    href: "/compare",
  },
  {
    title: "Private or coach touring",
    description:
      "Compare private vs coach pacing and short-port realism before you book an Andalusia day.",
    href: "/compare/private-tour-vs-coach-tour",
  },
  {
    title: "Malaga cruise schedules",
    description:
      "Check your published port hours before committing to Granada, Ronda or Caminito del Rey.",
    href: "/ship-schedules/malaga",
  },
];

export function AndalusiaLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Andalusia planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you stay in Malaga or travel inland.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ANDALUSIA_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Malaga planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}
