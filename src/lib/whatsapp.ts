import { siteConfig } from "@/config/site";

export function getWhatsAppUrl(message: string): string {
  // Membersihkan format nomor (hanya angka)
  const cleanNumber = siteConfig.whatsappNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message || siteConfig.defaultMessage);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

export function openWhatsApp(message: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
