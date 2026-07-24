import Image from "next/image";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/madamoon.paris/" },
  { label: "TikTok", href: "https://www.tiktok.com/@madamoon.paris" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100094615813297" },
];

const PAGES = [
  { label: "Accueil", href: "#accueil" },
  { label: "Votre morphologie", href: "https://madamoon.fr/votre-morphologie/" },
  { label: "Catalogue des robes", href: "https://madamoon.fr/catalogue-des-robes/" },
  { label: "FAQ", href: "https://madamoon.fr/faq/" },
  { label: "Prendre rendez-vous", href: "https://madamoon.fr/prise-de-rendez-vous/" },
];

export default function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-24 text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-14 border-b border-ivory/15 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo.png"
              alt="MADAMOON Paris"
              width={860}
              height={172}
              className="h-8 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm font-light leading-[1.9] text-ivory/60">
              Des robes de mariée modernes à l&rsquo;élégance intemporelle.
              Maison de couture nuptiale au cœur de Paris.
            </p>
          </div>

          <div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
              La Maison
            </p>
            <ul className="space-y-3 text-sm font-light text-ivory/70">
              {PAGES.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="transition-colors duration-300 hover:text-gold">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
              Service client
            </p>
            <ul className="space-y-3 text-sm font-light text-ivory/70">
              <li>234, rue du Faubourg Saint-Martin</li>
              <li>75010 Paris</li>
              <li>
                <a href="tel:+33641243847" className="transition-colors duration-300 hover:text-gold">
                  +33 6 41 24 38 47
                </a>
              </li>
              <li>
                <a href="mailto:contact@madamoon.fr" className="transition-colors duration-300 hover:text-gold">
                  contact@madamoon.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
              Horaires — sur rendez-vous
            </p>
            <ul className="space-y-3 text-sm font-light text-ivory/70">
              <li className="flex justify-between gap-6">
                <span>Lundi</span>
                <span>12h — 21h</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Mardi à samedi</span>
                <span>10h — 19h</span>
              </li>
            </ul>
            <div className="mt-8 flex gap-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium uppercase tracking-[0.25em] text-ivory/70 transition-colors duration-300 hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[11px] font-light tracking-wide text-ivory/65 md:flex-row">
          <p>© {new Date().getFullYear()} MADAMOON Paris — Tous droits réservés.</p>
          <p className="font-serif italic text-ivory/65">
            L&rsquo;Art de créer votre robe de mariée.
          </p>
        </div>
      </div>
    </footer>
  );
}
