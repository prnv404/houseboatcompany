// Single source of truth for booking contact details.
export const PHONE_NUMBER = "+919995102845";
export const PHONE_DISPLAY = "+91 99951 02845";
export const WHATSAPP_NUMBER = "919995102845";

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
