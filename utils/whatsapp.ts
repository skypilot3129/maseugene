export const WHATSAPP_NUMBER = '6283817523403';

export function getWhatsAppLink(message?: string): string {
    const defaultMessage = 'Halo! Saya ingin konsultasi tentang pembuatan website/aplikasi untuk bisnis saya.';
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
