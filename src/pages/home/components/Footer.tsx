import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from "@/mocks/program";

export default function Footer() {
  return (
    <footer className="bg-background-100 border-t border-background-200">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-primary-700 flex items-center justify-center text-background-50">
              <i className="ri-heart-pulse-line text-xl"></i>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-foreground-950 text-sm md:text-base">
                Diplomado en Enfermería Básica
              </span>
              <span className="text-xs text-foreground-600">Enfoque en Cuidado Domiciliar</span>
            </span>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-600 transition-colors cursor-pointer"
          >
            <i className="ri-whatsapp-line text-base"></i>
            WhatsApp Business: {WHATSAPP_DISPLAY}
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-background-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-foreground-500">
            Formación básica y práctica. No corresponde a una carrera profesional de enfermería.
          </p>
          <p className="text-xs text-foreground-500">
            © {new Date().getFullYear()} Diplomado en Enfermería Básica.
          </p>
        </div>
      </div>
    </footer>
  );
}