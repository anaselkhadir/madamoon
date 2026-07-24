/*
 * Témoignages — ⚠️ CONTENU PROVISOIRE.
 * Le site actuel ne publie pas d'avis clients : remplacer ces citations
 * par de véritables avis Google / Instagram de la maison avant mise en ligne.
 */

const TESTIMONIALS = [
  {
    initials: "S.L.",
    name: "Sarah L.",
    context: "Mariée en juin",
    quote:
      "Un moment suspendu. Le showroom privatisé, les conseils sur ma morphologie, la robe ajustée au millimètre — je me suis sentie unique du premier essayage au jour J.",
  },
  {
    initials: "C.M.",
    name: "Camille M.",
    context: "Mariée en septembre",
    quote:
      "L'accompagnement est d'une délicatesse rare. On m'a guidée vers une coupe que je n'aurais jamais osée, et c'était exactement moi. Les retouches incluses, tout était fluide.",
  },
  {
    initials: "I.B.",
    name: "Inès B.",
    context: "Mariée en mai",
    quote:
      "Le lieu est magique, chargé d'histoire. Trois rendez-vous, zéro stress : ma robe sur mesure était prête en temps et en heure, parfaitement ajustée.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold" role="img" aria-label="Cinq étoiles sur cinq">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="temoignages" className="bg-ivory py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div data-reveal-group className="mb-20 text-center">
          <p className="reveal mb-8 inline-flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold-deep">
            <span className="inline-block h-px w-12 bg-gold" aria-hidden />
            Elles nous ont confié leur jour J
            <span className="inline-block h-px w-12 bg-gold" aria-hidden />
          </p>
          <h2 className="reveal mx-auto max-w-2xl font-serif text-5xl font-light leading-[1.05] text-ink md:text-6xl">
            Des mariées <em className="italic text-gold-deep">comblées.</em>
          </h2>
        </div>

        <div data-reveal-group className="grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="reveal group flex flex-col justify-between border border-line bg-pearl p-10 transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-40px_rgba(17,17,17,0.25)] lg:p-12"
            >
              <div>
                <Stars />
                <blockquote className="mt-8 font-serif text-[1.35rem] font-light italic leading-[1.6] text-ink">
                  « {t.quote} »
                </blockquote>
              </div>
              <figcaption className="mt-10 flex items-center gap-4 border-t border-line pt-8">
                <span
                  aria-hidden
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gold font-serif text-sm italic text-gold-deep"
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-medium tracking-wide text-ink">{t.name}</p>
                  <p className="mt-1 text-[11px] font-light uppercase tracking-[0.2em] text-ink-soft">
                    {t.context}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
