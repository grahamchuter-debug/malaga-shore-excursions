/**
 * World 2.0 destination identity — Málaga is the prototype for the future
 * network-wide logo system.
 *
 * Intended future pattern (do not implement other destinations here):
 *   MÁLAGA  / SHORE EXCURSIONS / GATEWAY TO ANDALUSIA
 *   LIVORNO / SHORE EXCURSIONS / Gateway to Tuscany
 *   CORFU   / SHORE EXCURSIONS / The Emerald Island
 *
 * Strapline is stored in title case for accessibility; the logo component
 * renders it as light tracked uppercase for the wordmark.
 *
 * Swap `logoConcept` to compare prototype marks without a public selector.
 */
export type LogoConcept = "anchor-arch" | "harbour-m";
export type LogoVariant = "full" | "compact" | "mark";
export type LogoTone = "default" | "on-dark";

export const destinationIdentity = {
  destination: "Málaga",
  descriptor: "Shore Excursions",
  /** Displayed as tracked uppercase in the wordmark (e.g. GATEWAY TO ANDALUSIA). */
  strapline: "Gateway to Andalusia",
  /** Accessible full brand name for screen readers / link labels */
  accessibleName: "Málaga Shore Excursions",
  accent: "terracotta" as const,
  /**
   * Active prototype: Anchor Arch — refined Andalusian arch with a minimal
   * cruise anchor. Strong silhouette, destination + cruise without clutter.
   * Alternative: "harbour-m" (stylised M with harbour/wave base).
   */
  logoConcept: "anchor-arch" as LogoConcept,
  iconStyle: "anchor-arch" as const,
} as const;
