import Image from "next/image";

/* Galerie Instagram — maçonnerie éditoriale, liens vers @madamoon.paris */

const INSTAGRAM_URL = "https://www.instagram.com/madamoon.paris/";

const SHOTS = [
  { src: "/images/dress-carrie-2.jpg", alt: "Robe Carrie — détail dentelle", ratio: "aspect-[2/3]" },
  { src: "/images/showroom.jpg", alt: "Le showroom MADAMOON à Paris", ratio: "aspect-[4/3]" },
  { src: "/images/dress-shiloh-2.jpg", alt: "Robe Shiloh — silhouette sirène", ratio: "aspect-[2/3]" },
  { src: "/images/hero-editorial.jpg", alt: "Editorial MADAMOON au crépuscule", ratio: "aspect-[4/3]" },
  { src: "/images/dress-pendant.jpg", alt: "Robe Pendant en dentelle", ratio: "aspect-[2/3]" },
  { src: "/images/dress-adularia.jpg", alt: "Robe Adularia en satin", ratio: "aspect-[2/3]" },
];

export default function Instagram() {
  return (
    <section id="instagram" className="border-t border-line bg-pearl py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div data-reveal-group className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="reveal mb-8 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold-deep">
              <span className="inline-block h-px w-12 bg-gold" aria-hidden />
              Rejoindre la communauté
            </p>
            <h2 className="reveal font-serif text-5xl font-light leading-[1.05] text-ink md:text-6xl">
              <em className="italic text-gold-deep">@madamoon.paris</em>
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal inline-flex w-max items-center justify-center border border-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:bg-ink hover:text-ivory"
          >
            Suivre sur Instagram
          </a>
        </div>

        <div className="columns-2 gap-5 md:columns-3 [&>a]:mb-5 [&>a]:block">
          {SHOTS.map((s) => (
            <a
              key={s.src + s.alt}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.alt} — voir sur Instagram`}
              className="img-zoom group relative overflow-hidden bg-line"
            >
              <span className={`relative block ${s.ratio}`}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:bg-ink/30 group-hover:opacity-100"
                >
                  <span className="border border-white/70 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white">
                    Voir sur Instagram
                  </span>
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
