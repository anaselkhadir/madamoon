"use client";

import { useEffect, useRef, useState } from "react";
import { RDV_URL } from "@/lib/site";

/*
 * Conseillère virtuelle MADAMOON — assistante guidée 100 % côté client.
 * Base de connaissances : page « Votre morphologie » + contenus réels du site.
 */

type Option = { label: string; next?: string; href?: string };
type Message = { from: "bot" | "user"; text?: string; rich?: React.ReactNode };

const MORPHOS: Record<
  string,
  { name: string; desc: string; objectif: string; coupes: string[]; robes: string }
> = {
  O: {
    name: "Morphologie en O (ou ronde)",
    desc: "Courbes généreuses, poitrine et ventre souvent marqués.",
    objectif:
      "Allonger la silhouette et mettre en valeur vos atouts, sans marquer les zones sensibles.",
    coupes: [
      "Robe empire — tissu fluide et tombé léger pour camoufler le ventre",
      "Robe A-line (trapèze) — équilibre parfait entre structure et confort",
      "Décolleté en V ou cœur — met en valeur la poitrine",
    ],
    robes: "Robe Pendant (trapèze dentelle), Robe Hélène (fluide mousseline), Robe Mathilda (empire)",
  },
  A: {
    name: "Morphologie en A (ou pyramide)",
    desc: "Épaules plus étroites que les hanches, taille bien dessinée.",
    objectif: "Harmoniser la silhouette en attirant l'attention vers le haut du corps.",
    coupes: [
      "Robe princesse — bustier travaillé, jupe évasée qui équilibre les hanches",
      "Encolure bateau ou bustier droit — élargit visuellement les épaules",
      "À éviter : les robes moulantes type sirène, qui insistent sur les hanches",
    ],
    robes: "Robe Amandine (princesse dentelle), Robe Marie (A-line épurée), Robe Sienna",
  },
  V: {
    name: "Morphologie en V",
    desc: "Épaules larges, hanches plus étroites.",
    objectif: "Adoucir le haut du corps et apporter du volume au bas.",
    coupes: [
      "Robe fluide ou empire — structure légère et féminine",
      "Jupes volumineuses (forme A ou princesse)",
      "Décolletés en V, asymétriques ou croisés — cassent la largeur des épaules",
    ],
    robes: "Robe Adularia (fluide charmeuse), Robe Hélène (fluide mousseline), Robe Amandine (princesse)",
  },
  H: {
    name: "Morphologie en H",
    desc: "Silhouette droite, taille peu marquée.",
    objectif: "Créer de la féminité et de la courbe.",
    coupes: [
      "Robe empire ou fluide — idéale pour allonger la silhouette",
      "Modèles cintrés à la taille ou avec ceinture",
      "Robe sirène légère — pour dessiner les courbes",
    ],
    robes: "Robe Adularia (fluide), Robe Rowan (sirène en soie), Robe Dove (satin)",
  },
  "8": {
    name: "Morphologie en 8 (ou sablier)",
    desc: "Épaules et hanches équilibrées, taille marquée.",
    objectif: "Sublimer l'harmonie naturelle du corps.",
    coupes: [
      "Robe sirène ou fourreau — épouse parfaitement les courbes",
      "Bustier cœur ou encolure en V — féminine et élégante",
      "Robe cintrée à la taille — accentue l'équilibre naturel",
    ],
    robes: "Robe Shiloh (sirène dentelle), Robe Charlize (sirène corset), Robe Siddalee",
  },
  X: {
    name: "Morphologie en X",
    desc: "Silhouette équilibrée, courbes douces, taille fine.",
    objectif: "Valoriser la silhouette sans en faire trop.",
    coupes: [
      "Bonne nouvelle : presque toutes les coupes vous vont !",
      "Robe princesse, sirène, empire ou fluide — tout est permis",
      "Laissez le style de votre mariage guider votre choix",
    ],
    robes: "Robe Carrie, Robe Adularia, Robe Shiloh, Robe Amandine… selon vos envies",
  },
};

const FAQ: Record<string, { q: string; a: string }> = {
  prix: {
    q: "Quels sont vos prix ?",
    a: "Nos robes de mariée sur mesure sont proposées à partir de 1500 €, retouches incluses jusqu'au dernier essayage. Chaque robe est confectionnée selon vos mensurations.",
  },
  delais: {
    q: "Quand commencer les essayages ?",
    a: "L'idéal est de prendre rendez-vous 8 à 9 mois avant la date du mariage : trois rendez-vous rythment le parcours (sélection, essayage de votre robe, retouches finales). Si le temps manque, nous trouvons toujours une solution.",
  },
  horaires: {
    q: "Horaires & adresse",
    a: "Le showroom vous reçoit sur rendez-vous uniquement : lundi de 12h à 21h, du mardi au samedi de 10h à 19h — au 234, rue du Faubourg Saint-Martin, 75010 Paris (lieu classé monument historique).",
  },
  maisons: {
    q: "Quelles maisons de couture ?",
    a: "Nos robes sont choisies parmi les plus belles maisons : Watters Designs, Casablanca Bridal, Olya Mak, Angeola Biarritz, Monica Loretti… avec un service de confection sur mesure.",
  },
};

const CATALOGUE_URL = "https://madamoon.fr/catalogue-des-robes/";

export default function Conseillere() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const later = (fn: () => void, ms: number) => {
    timeouts.current.push(setTimeout(fn, ms));
  };

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, options]);

  useEffect(() => () => timeouts.current.forEach(clearTimeout), []);

  const say = (texts: (string | React.ReactNode)[], opts: Option[], delay = 650) => {
    setOptions([]);
    setTyping(true);
    texts.forEach((t, i) => {
      later(() => {
        setMessages((m) => [
          ...m,
          typeof t === "string" ? { from: "bot", text: t } : { from: "bot", rich: t },
        ]);
        if (i === texts.length - 1) {
          setTyping(false);
          setOptions(opts);
        }
      }, delay * (i + 1));
    });
  };

  const go = (node: string) => {
    switch (node) {
      case "root":
        say(
          [
            "Bonjour ✨ Je suis la conseillère virtuelle de la maison MADAMOON.",
            "Je peux vous aider à identifier la coupe qui vous sublimera le jour J, répondre à vos questions, ou organiser votre premier essayage privé. Par où commençons-nous ?",
          ],
          [
            { label: "Trouver ma coupe idéale", next: "morpho" },
            { label: "Prendre rendez-vous", next: "rdv" },
            { label: "Questions pratiques", next: "faq" },
          ]
        );
        break;

      case "morpho":
        say(
          [
            "Chez MADAMOON, nous savons que chaque femme est unique : l'essentiel est de trouver la robe qui met en valeur votre silhouette tout en correspondant à votre personnalité.",
            "Connaissez-vous déjà votre morphologie ?",
          ],
          [
            { label: "Oui, je la connais", next: "pick" },
            { label: "Pas vraiment, guidez-moi", next: "q1" },
          ]
        );
        break;

      case "pick":
        say(
          ["Très bien ! Laquelle est la vôtre ?"],
          [
            { label: "En O (ronde)", next: "result:O" },
            { label: "En A (pyramide)", next: "result:A" },
            { label: "En V", next: "result:V" },
            { label: "En H", next: "result:H" },
            { label: "En 8 (sablier)", next: "result:8" },
            { label: "En X", next: "result:X" },
          ]
        );
        break;

      case "q1":
        say(
          ["Pas de panique, on vous guide pas à pas 🌿", "Comment décririez-vous vos épaules par rapport à vos hanches ?"],
          [
            { label: "Plus étroites que mes hanches", next: "result:A" },
            { label: "Plus larges que mes hanches", next: "result:V" },
            { label: "Alignées, équilibrées", next: "q2" },
            { label: "Des courbes généreuses", next: "result:O" },
          ]
        );
        break;

      case "q2":
        say(
          ["Et votre taille, est-elle marquée ?"],
          [
            { label: "Oui, bien marquée", next: "q3" },
            { label: "Peu marquée, silhouette droite", next: "result:H" },
          ]
        );
        break;

      case "q3":
        say(
          ["Dernière question : vos courbes sont plutôt…"],
          [
            { label: "Prononcées, harmonieuses", next: "result:8" },
            { label: "Douces, silhouette fine", next: "result:X" },
          ]
        );
        break;

      case "rdv":
        say(
          [
            "Avec plaisir ✨ Lors de votre rendez-vous, le showroom est entièrement privatisé pour vous pendant une heure — venez accompagnée de vos proches.",
            "Sur rendez-vous uniquement : lundi 12h–21h, mardi au samedi 10h–19h, au 234 rue du Faubourg Saint-Martin, Paris 10ᵉ.",
          ],
          [
            { label: "Réserver en ligne", href: RDV_URL },
            { label: "Appeler la boutique", href: "tel:+33641243847" },
            { label: "Écrire à la maison", href: "mailto:contact@madamoon.fr?subject=Demande%20de%20rendez-vous%20%E2%80%94%20essayage%20priv%C3%A9" },
            { label: "← Retour", next: "root" },
          ]
        );
        break;

      case "faq":
        say(
          ["Bien sûr — que souhaitez-vous savoir ?"],
          [
            ...Object.entries(FAQ).map(([k, v]) => ({ label: v.q, next: `faq:${k}` })),
            { label: "← Retour", next: "root" },
          ]
        );
        break;

      default: {
        if (node.startsWith("result:")) {
          const m = MORPHOS[node.slice(7)];
          say(
            [
              <div key={m.name}>
                <p className="font-serif text-lg font-normal italic text-ink">{m.name}</p>
                <p className="mt-1 text-[13px] text-ink-soft">{m.desc}</p>
                <p className="mt-3 text-[13px]">
                  <span className="font-medium">L&rsquo;objectif :</span> {m.objectif}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {m.coupes.map((c) => (
                    <li key={c} className="flex gap-2 text-[13px]">
                      <span className="text-gold-deep">✦</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 border-t border-line pt-3 text-[13px]">
                  <span className="font-medium">Dans notre collection :</span> {m.robes}.
                </p>
              </div>,
              "Le plus beau reste l'essayage : nos conseillères vous guident en boutique selon votre morphologie, vos envies et votre personnalité — avec un peu de magie ✨",
            ],
            [
              { label: "Prendre rendez-vous", next: "rdv" },
              { label: "Voir le catalogue", href: CATALOGUE_URL },
              { label: "Refaire le diagnostic", next: "q1" },
            ],
            750
          );
        } else if (node.startsWith("faq:")) {
          const f = FAQ[node.slice(4)];
          say(
            [f.a],
            [
              { label: "Prendre rendez-vous", next: "rdv" },
              { label: "Autre question", next: "faq" },
              { label: "Trouver ma coupe idéale", next: "morpho" },
            ]
          );
        }
      }
    }
  };

  const choose = (o: Option) => {
    if (o.href) {
      window.open(o.href, o.href.startsWith("http") ? "_blank" : "_self");
      return;
    }
    setMessages((m) => [...m, { from: "user", text: o.label }]);
    if (o.next) go(o.next);
  };

  const toggle = () => {
    setOpen((v) => !v);
    if (!started) {
      setStarted(true);
      go("root");
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-label={open ? "Fermer la conseillère virtuelle" : "Ouvrir la conseillère virtuelle"}
        className="fixed bottom-6 right-6 z-[70] flex h-16 w-16 items-center justify-center rounded-full bg-ink text-gold shadow-[0_18px_45px_-12px_rgba(17,17,17,0.45)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:bg-gold-deep hover:text-ivory md:bottom-8 md:right-8"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden>
            <path d="M21 12c0 4.1-4 7.4-9 7.4-1 0-2-.13-2.9-.38L4 21l1.6-3.4C4 16.2 3 14.2 3 12c0-4.1 4-7.4 9-7.4s9 3.3 9 7.4Z" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* Fenêtre de conversation */}
      <div
        role="dialog"
        aria-label="Conseillère virtuelle MADAMOON"
        aria-hidden={!open}
        className={`fixed z-[70] flex flex-col overflow-hidden border border-line bg-ivory shadow-[0_40px_90px_-30px_rgba(17,17,17,0.4)] transition-all duration-600 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        } inset-x-0 bottom-0 top-16 md:inset-auto md:bottom-28 md:right-8 md:h-[620px] md:max-h-[calc(100dvh-9rem)] md:w-[400px]`}
      >
        {/* En-tête */}
        <div className="flex items-center gap-4 border-b border-line bg-pearl px-6 py-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold font-serif text-base italic text-gold-deep" aria-hidden>
            M
          </span>
          <div>
            <p className="font-serif text-lg leading-tight text-ink">Conseillère Madamoon</p>
            <p className="mt-0.5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-ink-soft">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              À votre écoute
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer"
            className="ml-auto p-2 text-ink-soft transition-colors hover:text-ink md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div ref={listRef} data-lenis-prevent className="flex-1 space-y-4 overflow-y-auto px-5 py-6">
          {messages.map((m, i) =>
            m.from === "bot" ? (
              <div key={i} className="max-w-[85%] border border-line bg-pearl px-4 py-3 text-[13.5px] font-light leading-relaxed text-ink">
                {m.rich ?? m.text}
              </div>
            ) : (
              <div key={i} className="ml-auto max-w-[85%] bg-ink px-4 py-3 text-[13.5px] font-light leading-relaxed text-ivory">
                {m.text}
              </div>
            )
          )}
          {typing && (
            <div className="flex w-max items-center gap-1.5 border border-line bg-pearl px-4 py-3" aria-label="La conseillère écrit">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-deep"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Choix rapides */}
        {options.length > 0 && (
          <div className="flex flex-wrap gap-2 border-t border-line bg-ivory px-5 py-4">
            {options.map((o) => (
              <button
                key={o.label}
                type="button"
                onClick={() => choose(o)}
                className="border border-gold px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-ink transition-all duration-400 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:bg-gold hover:text-ink"
              >
                {o.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
