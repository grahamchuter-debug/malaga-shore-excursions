import Link from "next/link";

export function HonestAdvice() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Honest advice</p>
        <h2 className="section-title mt-2">Do You Need a Shore Excursion in Malaga?</h2>
        <p className="section-subtitle">
          The honest answer: you can enjoy Malaga independently. An excursion becomes worthwhile when
          you want to reach the wider landscapes and landmark destinations of Andalusia.
        </p>

        <div className="mt-10 space-y-8">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">
              You can explore Malaga independently — and many passengers do
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Malaga&apos;s historic centre is compact and close to the port, making an independent day
              realistic for most passengers:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Old Town and Calle Larios
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Cathedral and Picasso Museum
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Atarazanas Market and restaurants
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Port, Muelle Uno and Malagueta Beach
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.
            </p>
          </div>

          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">
              The wider region needs more planning
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Andalusia&apos;s great inland sights are too far from the terminal for casual exploration.
              Organised transport and disciplined timing matter for:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Granada and the Alhambra</strong> — timed admission and a long return journey
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Ronda</strong> — mountain roads, Puente Nuevo and the El Tajo gorge
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Caminito del Rey</strong> — controlled entry, trail logistics and weather
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>White villages and the Costa del Sol</strong> — best reached with a realistic route
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compare/granada-or-ronda" className="btn-secondary text-sm">
            Granada or Ronda?
          </Link>
          <Link href="/compare/can-you-explore-malaga-independently" className="btn-secondary text-sm">
            Explore independently?
          </Link>
          <Link href="/guides/independent-malaga-guide" className="btn-secondary text-sm">
            Independent Malaga guide
          </Link>
        </div>
      </div>
    </section>
  );
}
