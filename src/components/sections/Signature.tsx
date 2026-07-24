/* « Pourquoi Madamoon » — quatre signatures de la maison (contenu d'origine) */

const SIGNATURES = [
  {
    n: "01",
    title: "Essayage privé",
    text: "Dès votre rendez-vous confirmé, le showroom est entièrement privatisé pour vous pendant une heure. Venez accompagnée de votre famille ou de vos amies : ce moment n'appartient qu'à vous.",
  },
  {
    n: "02",
    title: "Confection sur mesure",
    text: "Chaque robe est réalisée selon vos mensurations pour un ajustement optimal, à partir de 1500 €. Les retouches sont incluses, jusqu'au dernier essayage.",
  },
  {
    n: "03",
    title: "Matières nobles",
    text: "Matières nobles, détails délicats et finitions d'exception se conjuguent pour donner vie à la robe dont vous rêvez, choisie parmi les plus belles maisons de couture.",
  },
  {
    n: "04",
    title: "Accompagnement personnalisé",
    text: "Une expertise dédiée vous conseille sur les coupes, les matières et les détails qui subliment votre silhouette — fluide, princesse, sirène, trapèze ou minimaliste — jusqu'aux accessoires.",
  },
];

export default function Signature() {
  return (
    <section id="savoir-faire" className="border-y border-line bg-pearl py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div data-reveal-group className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="reveal mb-8 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold-deep">
              <span className="inline-block h-px w-12 bg-gold" aria-hidden />
              Les signatures de la Maison
            </p>
            <h2 className="reveal max-w-2xl font-serif text-5xl font-light leading-[1.05] text-ink md:text-6xl">
              Pour des futures mariées{" "}
              <em className="italic text-gold-deep">exigeantes.</em>
            </h2>
          </div>
          <p className="reveal max-w-sm text-[15px] font-light leading-[1.9] text-ink-soft">
            Chez MADAMOON, chaque détail est soigneusement pensé pour que vous,
            comme vos accompagnantes, vous sentiez parfaitement à l&rsquo;aise.
          </p>
        </div>

        <div data-reveal-group className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {SIGNATURES.map((s) => (
            <article
              key={s.n}
              className="reveal group relative bg-pearl p-10 transition-colors duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:bg-ivory lg:p-12"
            >
              <span className="font-serif text-sm italic text-gold-deep">{s.n}</span>
              <h3 className="mt-6 font-serif text-[1.75rem] font-normal leading-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-5 text-sm font-light leading-[1.9] text-ink-soft">{s.text}</p>
              <span
                aria-hidden
                className="gold-rule absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
