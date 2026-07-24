// Loader utilisé uniquement pour l'export GitHub Pages :
// préfixe les images avec le basePath /madamoon (non appliqué par défaut en mode unoptimized).
export default function pagesImageLoader({ src }: { src: string }) {
  return `/madamoon${src}`;
}
