import { RDV_URL } from "@/lib/site";

/* L'Expérience Madamoon — le déroulement de A à Z (parcours réel de la maison) */

const STEPS = [
  {
    n: "I",
    title: "Prise de rendez-vous",
    text: "Tout commence par la réservation de votre premier rendez-vous d'essayage privé. Idéalement 8 à 9 mois avant la date du mariage — et si le temps manque, nous trouvons toujours une solution.",
  },
  {
    n: "II",
    title: "Essayage privé & sélection",
    text: "Le showroom est privatisé pour vous pendant une heure. Vous découvrez la collection et choisissez le modèle qui correspond parfaitement à votre style et à votre morphologie.",
  },
  {
    n: "III",
    title: "Prise des mensurations",
    text: "Une fois votre robe sélectionnée, nous prenons vos mensurations le jour même afin de lancer la confection, réalisée selon vos mesures pour un ajustement optimal.",
  },
  {
    n: "IV",
    title: "Confection à l'atelier",
    text: "Votre robe prend vie à l'atelier : matières nobles, détails délicats et finitions d'exception, dans la tradition du savoir-faire couture.",
  },
  {
    n: "V",
    title: "Essayage & retouches",
    text: "Un deuxième essayage est organisé pour essayer votre propre robe. Nos couturières effectuent sur place les éventuelles retouches nécessaires — incluses.",
  },
  {
    n: "VI",
    title: "Essayage final & jour J",
    text: "Un dernier essayage après retouches permet de finaliser chaque détail avant le retrait de votre robe : parfaitement ajustée, conçue pour sublimer votre silhouette le jour J.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-ink py-28 text-ivory md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div data-reveal-group className="mb-24 max-w-3xl">
          <p className="reveal mb-8 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            <span className="inline-block h-px w-12 bg-gold" aria-hidden />
            L&rsquo;Expérience Madamoon
          </p>
          <h2 className="reveal font-serif text-5xl font-light leading-[1.05] md:text-7xl">
            Le déroulement,
            <br />
            <em className="italic text-gold">de A à Z.</em>
          </h2>
          <p className="reveal mt-8 max-w-xl text-[15px] font-light leading-[1.9] text-ivory/70">
            Un parcours structuré et personnalisé pour trouver votre robe de
            mariée idéale — en toute confiance, avec l&rsquo;assurance d&rsquo;un
            rendu élégant, harmonieux et parfaitement ajusté.
          </p>
        </div>

        <ol data-reveal-group className="grid gap-x-14 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="reveal group border-t border-ivory/15 pt-8">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl font-light italic text-gold">{s.n}</span>
                <span
                  aria-hidden
                  className="h-px w-0 bg-gold transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:w-16"
                />
              </div>
              <h3 className="mt-6 font-serif text-[1.7rem] font-normal leading-tight">{s.title}</h3>
              <p className="mt-4 text-sm font-light leading-[1.9] text-ivory/65">{s.text}</p>
            </li>
          ))}
        </ol>

        <div data-reveal-group className="mt-24 flex flex-col items-center gap-6 border-t border-ivory/15 pt-16 text-center">
          <p className="reveal max-w-xl font-serif text-2xl font-light italic leading-snug text-ivory/85">
            « Prenez simplement rendez-vous, nous nous occupons du reste. »
          </p>
          <a
            href={RDV_URL}
            className="reveal inline-flex items-center justify-center bg-gold px-10 py-5 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:bg-ivory"
          >
            Commencer mon parcours
          </a>
        </div>
      </div>
    </section>
  );
}
