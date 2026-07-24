import { RDV_URL } from "@/lib/site";

/* Invitation finale — conversion vers la prise de rendez-vous */
export default function FinalCta() {
  return (
    <section id="rendez-vous" className="relative overflow-hidden bg-ivory py-32 md:py-48">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[28vw] font-light italic leading-none text-ink/[0.025]"
      >
        Madamoon
      </div>

      <div data-reveal-group className="relative mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <p className="reveal mb-10 inline-flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold-deep">
          <span className="inline-block h-px w-12 bg-gold" aria-hidden />
          Votre histoire commence ici
          <span className="inline-block h-px w-12 bg-gold" aria-hidden />
        </p>

        <h2 className="reveal mx-auto max-w-4xl font-serif text-5xl font-light leading-[1.08] text-ink md:text-7xl">
          Nous serons honorés de vous accompagner dans la création de{" "}
          <em className="italic text-gold-deep">votre look de mariée.</em>
        </h2>

        <p className="reveal mx-auto mt-10 max-w-xl text-[15px] font-light leading-[1.9] text-ink-soft">
          Essayages sur rendez-vous uniquement, dans l&rsquo;intimité de notre
          showroom parisien. Lundi de 12h à 21h, du mardi au samedi de 10h à 19h.
        </p>

        <div className="reveal mt-14">
          <a
            href={RDV_URL}
            className="inline-flex items-center justify-center bg-ink px-14 py-6 text-[11px] font-medium uppercase tracking-[0.3em] text-ivory transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:bg-gold-deep"
          >
            Prendre rendez-vous
          </a>
        </div>

        <p className="reveal mt-10 text-[13px] font-light tracking-wide text-ink-soft">
          234, rue du Faubourg Saint-Martin, 75010 Paris —{" "}
          <a href="tel:+33641243847" className="underline decoration-gold underline-offset-4 transition-colors hover:text-ink">
            +33 6 41 24 38 47
          </a>
        </p>
      </div>
    </section>
  );
}
