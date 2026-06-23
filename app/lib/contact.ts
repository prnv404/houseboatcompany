// Single source of truth for booking contact details.
export const PHONE_NUMBER = "+916282477940";
export const PHONE_DISPLAY = "+91 62824 77940";
export const WHATSAPP_NUMBER = "916282477940";

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
