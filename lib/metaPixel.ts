type MetaPixelEvent = 'PageView' | 'Lead' | 'Contact';

declare global {
  interface Window {
    fbq?: (command: 'track', event: MetaPixelEvent) => void;
  }
}

function trackMetaPixelEvent(event: MetaPixelEvent) {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', event);
}

export function trackMetaLead() {
  trackMetaPixelEvent('Lead');
}

export function trackMetaContact() {
  trackMetaPixelEvent('Contact');
}
