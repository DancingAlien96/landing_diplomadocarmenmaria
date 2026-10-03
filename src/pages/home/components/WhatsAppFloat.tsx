import { WHATSAPP_LINK } from "@/mocks/program";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex items-center gap-3 rounded-full pl-3 pr-4 py-3 text-white shadow-lg hover:scale-105 transition-transform cursor-pointer"
      style={{ backgroundColor: "#25D366" }}
    >
      <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
        <i className="ri-whatsapp-line text-2xl"></i>
      </span>
      <span className="hidden sm:block text-sm font-semibold whitespace-nowrap">
        Escríbenos
      </span>
    </a>
  );
}