import Image from "next/image";
import { RDV_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="accueil"
      data-hero
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          data-hero-img
          src="/images/hero-editorial.jpg"
          alt="Robe de mariée MADAMOON portée au crépuscule"
          fill
          priority
          quality={60}
          sizes="100vw"
          className="hero-settle object-cover object-[center_30%]"
        />
        {/* Cinematic veil for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <p
          style={{ animationDelay: "0.35s" }}
          className="hero-rise mb-8 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold"
        >
          <span className="inline-block h-px w-12 bg-gold" aria-hidden />
          Maison de couture nuptiale — Paris
        </p>

        <h1
          style={{ animationDelay: "0.5s" }}
          className="hero-rise max-w-5xl font-serif text-[13vw] font-light leading-[0.98] text-white sm:text-7xl md:text-8xl lg:text-[6.5rem]"
        >
          L&rsquo;Art de créer
          <br />
          <em className="font-light italic text-gold">votre robe de mariée.</em>
        </h1>

        <p
          style={{ animationDelay: "0.65s" }}
          className="hero-rise mt-8 max-w-xl text-base font-light leading-relaxed text-white/85 md:text-lg"
        >
          Des robes de mariée modernes à l&rsquo;élégance intemporelle, façonnées
          sur mesure dans un showroom classé monument historique, au cœur de Paris.
        </p>

        <div style={{ animationDelay: "0.8s" }} className="hero-rise mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={RDV_URL}
            className="inline-flex items-center justify-center bg-white px-10 py-5 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:bg-gold"
          >
            Prendre rendez-vous
          </a>
          <a
            href="#collections"
            className="inline-flex items-center justify-center border border-white/50 px-10 py-5 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:border-white hover:bg-white/10"
          >
            Découvrir la collection
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{ animationDelay: "1.2s" }}
        aria-hidden
        className="hero-rise absolute bottom-8 right-8 hidden flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Défiler</span>
        <span className="block h-14 w-px animate-pulse bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  );
}
