import Image from "next/image";

/* Collections — galerie éditoriale asymétrique, robes réelles du catalogue */

const DRESSES = [
  {
    src: "/images/dress-adularia.jpg",
    name: "Robe Adularia",
    detail: "Robe de mariée fluide charmeuse",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/dress-pendant.jpg",
    name: "Robe Pendant",
    detail: "Robe trapèze A-line en dentelle",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/dress-sienna.jpg",
    name: "Robe Sienna",
    detail: "Silhouette structurée, taffetas",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/dress-carrie.jpg",
    name: "Robe Carrie",
    detail: "Dentelle délicate, dos ouvert",
    ratio: "aspect-[2/3]",
  },
  {
    src: "/images/dress-shiloh.jpg",
    name: "Robe Shiloh",
    detail: "Sirène en dentelle",
    ratio: "aspect-[2/3]",
  },
];

const MAISONS = [
  "Watters Designs",
  "Casablanca Bridal",
  "Olya Mak",
  "Angeola Biarritz",
  "Monica Loretti",
];

function DressCard({ dress, sizes }: { dress: (typeof DRESSES)[number]; sizes: string }) {
  return (
    <figure className="group">
      <div className={`mask-img img-zoom relative ${dress.ratio} overflow-hidden bg-line`}>
        <Image
          src={dress.src}
          alt={`${dress.name} — ${dress.detail}`}
          fill
          sizes={sizes}
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-ink/0 transition-colors duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:bg-ink/10"
        />
      </div>
      <figcaption className="mt-5 flex items-baseline justify-between border-b border-line pb-5">
        <span className="font-serif text-2xl font-light text-ink">{dress.name}</span>
        <span className="text-[11px] font-light uppercase tracking-[0.2em] text-ink-soft opacity-0 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100">
          {dress.detail}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Collections() {
  return (
    <section id="collections" className="bg-ivory py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div data-reveal-group className="mb-24">
          <p className="reveal mb-8 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold-deep">
            <span className="inline-block h-px w-12 bg-gold" aria-hidden />
            Nos collections sur mesure
          </p>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="reveal max-w-3xl font-serif text-5xl font-light leading-[1.05] text-ink md:text-7xl">
              Des créations qui révèlent
              <br />
              <em className="italic text-gold-deep">votre singularité.</em>
            </h2>
            <p className="reveal max-w-sm text-[15px] font-light leading-[1.9] text-ink-soft">
              Des créations alliant avec finesse modernité et intemporalité,
              conçues pour sublimer chaque silhouette — et donner vie à la robe
              dont vous rêvez.
            </p>
          </div>
        </div>

        {/* Galerie éditoriale décalée */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-14 lg:gap-x-24">
          <div className="space-y-16 md:space-y-24">
            <DressCard dress={DRESSES[0]} sizes="(min-width: 768px) 45vw, 100vw" />
            <DressCard dress={DRESSES[3]} sizes="(min-width: 768px) 45vw, 100vw" />
          </div>
          <div className="space-y-16 md:mt-40 md:space-y-24">
            <DressCard dress={DRESSES[1]} sizes="(min-width: 768px) 45vw, 100vw" />
            <div className="md:px-10 lg:px-16">
              <DressCard dress={DRESSES[2]} sizes="(min-width: 768px) 35vw, 100vw" />
            </div>
          </div>
        </div>

        <div className="mt-16 md:-mt-10 md:grid md:grid-cols-2 md:gap-x-14 lg:gap-x-24">
          <div className="md:col-start-1 md:px-16 lg:px-24">
            <DressCard dress={DRESSES[4]} sizes="(min-width: 768px) 30vw, 100vw" />
          </div>
        </div>

        {/* Maisons de couture */}
        <div data-reveal-group className="mt-28 border-t border-line pt-14 md:mt-36">
          <p className="reveal text-center text-[11px] font-medium uppercase tracking-[0.35em] text-ink-soft">
            Une sélection raffinée parmi les plus belles maisons de couture
          </p>
          <ul className="reveal mt-10 flex flex-wrap items-baseline justify-center gap-x-12 gap-y-4">
            {MAISONS.map((m) => (
              <li key={m} className="font-serif text-2xl font-light italic text-ink/70 md:text-3xl">
                {m}
              </li>
            ))}
          </ul>
          <div className="reveal mt-14 text-center">
            <a
              href="https://madamoon.fr/catalogue-des-robes/"
              className="inline-flex items-center justify-center border border-ink px-10 py-5 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:bg-ink hover:text-ivory"
            >
              Explorer le catalogue des robes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
