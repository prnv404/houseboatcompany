// Single source of truth for booking contact details.
export const PHONE_NUMBER = "+919567888245";
export const PHONE_DISPLAY = "+91 95678 88245";
export const WHATSAPP_NUMBER = "919567888245";

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
