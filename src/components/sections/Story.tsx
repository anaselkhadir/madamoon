import Image from "next/image";

/* Brand Story — texte d'origine du site, hiérarchie éditoriale retravaillée */
export default function Story() {
  return (
    <section id="maison" className="bg-ivory py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div data-reveal-group className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Colonne éditoriale */}
          <div className="lg:col-span-5">
            <p className="reveal mb-8 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold-deep">
              <span className="inline-block h-px w-12 bg-gold" aria-hidden />
              La Maison
            </p>
            <h2 className="reveal font-serif text-5xl font-light leading-[1.05] text-ink md:text-6xl lg:text-7xl">
              Un écrin
              <br />
              d&rsquo;élégance
              <br />
              <em className="italic text-gold-deep">hors du temps.</em>
            </h2>

            <div className="reveal mt-10 space-y-6 text-[15px] font-light leading-[1.9] text-ink-soft">
              <p>
                Plongez dans l&rsquo;univers raffiné de notre boutique{" "}
                <strong className="font-medium text-ink">MADAMOON</strong> et
                découvrez nos collections d&rsquo;exception de robes de mariée,
                voiles et accessoires. Notre showroom, écrin d&rsquo;élégance
                classé monument historique au cœur du 10ᵉ arrondissement de
                Paris, vous ouvre ses portes pour une expérience unique et privée.
              </p>
              <p>
                Que vous soyez d&rsquo;Île-de-France ou de passage à Paris,
                laissez-vous séduire et prenez rendez-vous dès maintenant. Nous
                serons honorés de vous accompagner dans la création de votre
                look de mariée.
              </p>
            </div>

            <div className="reveal mt-12 border-l border-gold pl-6">
              <p className="font-serif text-2xl font-light italic leading-snug text-ink">
                « Une ambiance intimiste qui vous fait vous sentir littéralement
                hors du temps. »
              </p>
            </div>
          </div>

          {/* Image éditoriale majeure */}
          <div className="lg:col-span-7 lg:pl-10">
            <figure className="mask-img img-zoom relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/showroom.jpg"
                alt="Le showroom MADAMOON, ancien hôtel particulier de la maison Claverie — escalier d'époque et robes de mariée"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </figure>

            <div data-reveal-group className="mt-14 grid gap-10 md:grid-cols-2">
              <div className="reveal">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-gold-deep">
                  L&rsquo;héritage Claverie
                </p>
                <p className="text-[15px] font-light leading-[1.9] text-ink-soft">
                  La boutique MADAMOON s&rsquo;inscrit dans l&rsquo;héritage
                  d&rsquo;un lieu emblématique de la corseterie parisienne,
                  autrefois occupé par la maison Claverie, référence
                  incontournable du XIXᵉ siècle. Spécialisée dans la confection
                  de corsets sur mesure, cette enseigne historique a marqué
                  l&rsquo;histoire de la mode grâce à son savoir-faire artisanal
                  et son expertise de la silhouette féminine.
                </p>
              </div>
              <div className="reveal">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-gold-deep">
                  L&rsquo;esprit d&rsquo;excellence
                </p>
                <p className="text-[15px] font-light leading-[1.9] text-ink-soft">
                  MADAMOON perpétue aujourd&rsquo;hui cet esprit
                  d&rsquo;excellence en proposant des robes de mariée alliant
                  structure, élégance et précision des coupes. Ce lieu chargé
                  d&rsquo;histoire offre aux futures mariées une expérience
                  unique, où tradition et modernité se rencontrent pour créer un
                  moment magique et inoubliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
