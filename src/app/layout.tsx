import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madamoon.fr"),
  title: "MADAMOON — Robes de mariée sur mesure à Paris | Maison de couture nuptiale",
  description:
    "Plongez dans l'univers raffiné de MADAMOON : robes de mariée modernes à l'élégance intemporelle, confection sur mesure, essayage privé dans un showroom classé monument historique au cœur de Paris.",
  keywords: [
    "robe de mariée Paris",
    "robe de mariée sur mesure",
    "boutique robe de mariée",
    "essayage privé",
    "Madamoon",
  ],
  openGraph: {
    title: "MADAMOON — L'Art de créer votre robe de mariée",
    description:
      "Des robes de mariée modernes à l'élégance intemporelle. Confection sur mesure, essayage privé, showroom classé monument historique à Paris.",
    locale: "fr_FR",
    type: "website",
    images: ["/images/dress-adularia.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${inter.variable} grain antialiased`}>
        {children}
      </body>
    </html>
  );
}
