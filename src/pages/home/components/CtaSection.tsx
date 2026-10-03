import { WHATSAPP_LINK, WHATSAPP_DISPLAY, CTA_HIGHLIGHTS } from "@/mocks/program";
import Reveal from "@/components/feature/Reveal";

export default function CtaSection() {
  return (
    <section id="inscripcion" className="bg-background-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full py-16 md:py-24">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-background-200">
            <div className="relative min-h-[300px] lg:min-h-full bg-background-100">
              <img
                src="https://readdy.ai/api/search-image?query=Students%20in%20casual%20clothing%20practicing%20health%20care%20techniques%20on%20a%20training%20model%20at%20a%20light%20wooden%20table%20in%20a%20bright%20minimal%20room%2C%20notebooks%20and%20study%20materials%2C%20soft%20natural%20window%20light%2C%20white%20and%20light%20grey%20tones%2C%20realistic%20editorial%20photography&width=1200&height=1400&seq=cta-practice-hall-2026&orientation=portrait"
                alt="Estudiantes practicando técnicas de cuidado en un ambiente de formación"
                title="Formación práctica en cuidado domiciliar"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background-50/10"></div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-background-50/95 backdrop-blur px-4 py-2 border border-background-200">
                  <i className="ri-award-line text-accent-600"></i>
                  <span className="text-xs font-semibold text-foreground-800">
                    Práctica supervisada y diploma de participación
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-background-50 px-6 py-12 md:px-14 md:py-16 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-300 bg-accent-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-800 uppercase w-fit">
                <i className="ri-whatsapp-line"></i>
                Inscripciones por WhatsApp
              </span>

              <h2 className="mt-6 font-heading font-extrabold text-2xl md:text-4xl text-foreground-950 leading-tight">
                Da el primer paso hacia una atención más segura.
              </h2>

              <p className="mt-5 text-base md:text-lg text-foreground-600 leading-relaxed">
                Aprende conocimientos básicos de enfermería y desarrolla habilidades prácticas para
                el cuidado domiciliar. Hoy puedes empezar a formarte con confianza.
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {CTA_HIGHLIGHTS.map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm font-medium text-foreground-700">
                    <span className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-primary-700 shrink-0">
                      <i className={`${item.icon} text-base`}></i>
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-primary-700 px-8 py-4 text-base font-bold tracking-wide text-background-50 hover:bg-primary-800 transition-all duration-300 hover:gap-4 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-whatsapp-line text-xl"></i>
                  INSCRÍBETE POR WHATSAPP
                </a>
                <p className="mt-4 text-sm text-foreground-600">
                  Escríbenos y aclaramos todas tus dudas, sin compromiso.
                </p>
                <p className="mt-1 text-xs text-foreground-500">
                  WhatsApp Business: {WHATSAPP_DISPLAY}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}