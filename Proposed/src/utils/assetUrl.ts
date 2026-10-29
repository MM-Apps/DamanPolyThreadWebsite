/**
 * Resolves an asset path with the application base URL.
 * Ensures assets resolve correctly on GitHub Pages subpaths (e.g. /DamanPolyThreadWebsite/images/...)
 * as well as root domains (e.g. /images/...).
 */
export function assetUrl(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
