export const uid = (prefix = '') => prefix + Math.random().toString(36).slice(2,9);

export function monthKeyFromISO(iso: string) {
  return iso.slice(0,7); // YYYY-MM
}

// Simple local hash for PINs (not secure; dev only)
export function simpleHash(s: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return (h >>> 0).toString(16);
}

