import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from "@/mocks/program";
import Reveal from "@/components/feature/Reveal";

export default function Hero() {
  return (
    <section id="top" className="bg-background-50 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full">
        <Reveal className="w-full">
          <div className="relative w-full min-h-[560px] md:min-h-[640px] rounded-2xl overflow-hidden flex items-center">
            <img
              src="https://readdy.ai/api/search-image?query=Bright%20modern%20health%20training%20classroom%20with%20adults%20in%20casual%20clothes%20attending%20a%20course%20at%20long%20tables%20with%20notebooks%20and%20learning%20materials%2C%20large%20windows%20with%20natural%20daylight%2C%20white%20walls%20and%20light%20wood%2C%20clean%20minimal%20academic%20atmosphere%2C%20realistic%20editorial%20photography&width=1600&height=1100&seq=hero-training-hall-2026&orientation=landscape"
              alt="Ambiente de formación con adultos participando en un curso de salud"
              title="Diplomado en Enfermería Básica formación práctica en aula"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-50 via-background-50/95 to-background-50/20 md:to-transparent"></div>
            <div className="relative z-10 w-full px-6 py-12 md:px-14 md:py-16">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-300 bg-background-50/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-800 uppercase backdrop-blur">
                  <i className="ri-time-line"></i>
                  40 horas de formación
                </span>

                <h1 className="mt-6 font-heading font-extrabold text-foreground-950 leading-[1.05] text-3xl sm:text-4xl md:text-5xl">
                  DIPLOMADO EN
                  <br />
                  <span className="text-primary-700">ENFERMERÍA BÁSICA</span>
                </h1>

                <p className="mt-4 font-heading font-semibold text-lg md:text-xl text-foreground-700">
                  Enfoque en Cuidado Domiciliar
                </p>

                <p className="mt-5 max-w-lg text-base text-foreground-600 leading-relaxed">
                  Aprende conocimientos esenciales de enfermería para brindar cuidados con mayor
                  seguridad en el hogar.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-md bg-primary-700 px-8 py-4 text-base font-bold tracking-wide text-background-50 hover:bg-primary-800 transition-all duration-300 hover:gap-4 whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-whatsapp-line text-xl"></i>
                    QUIERO INSCRIBIRME
                  </a>
                  <span className="text-sm text-foreground-500">
                    Atención personalizada por WhatsApp
                  </span>
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm text-foreground-600">
                  <span className="w-9 h-9 rounded-full bg-background-100 flex items-center justify-center shrink-0">
                    <i className="ri-phone-line text-secondary-700"></i>
                  </span>
                  WhatsApp Business: {WHATSAPP_DISPLAY}
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute bottom-8 right-8 z-10">
              <div className="inline-flex items-center gap-3 rounded-lg bg-background-50/95 backdrop-blur px-5 py-4 border border-background-200">
                <span className="w-11 h-11 rounded-md bg-accent-100 flex items-center justify-center text-accent-700 shrink-0">
                  <i className="ri-book-open-line text-2xl"></i>
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-heading font-bold text-sm text-foreground-950">
                    Formación práctica
                  </span>
                  <span className="text-xs text-foreground-600">Enfocada en el hogar</span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}