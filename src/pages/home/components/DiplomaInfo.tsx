import { DIPLOMA_INFO } from "@/mocks/program";
import Reveal from "@/components/feature/Reveal";

export default function DiplomaInfo() {
  return (
    <section id="informacion" className="bg-background-100">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary-700">
            Información del diplomado
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-2xl md:text-4xl text-foreground-950 leading-tight">
            Lo esencial, claro y directo
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {DIPLOMA_INFO.map((item, index) => (
            <Reveal key={item.value} delay={index * 70} className="h-full">
              <article className="h-full rounded-lg border border-background-200 bg-background-50 p-7 md:p-8">
                <span className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-700">
                  <i className={`${item.icon} text-2xl`}></i>
                </span>
                <h3 className="mt-6 font-heading font-bold text-xl md:text-2xl text-foreground-950">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm md:text-base text-foreground-600 leading-relaxed">
                  {item.label}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={350} className="h-full">
            <div className="h-full rounded-lg border border-accent-200 bg-accent-50 p-7 md:p-8 flex flex-col justify-between">
              <span className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center text-accent-700">
                <i className="ri-question-answer-line text-2xl"></i>
              </span>
              <div className="mt-6">
                <h3 className="font-heading font-bold text-lg text-foreground-950">
                  ¿Tienes dudas?
                </h3>
                <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
                  Escríbenos por WhatsApp y te damos toda la información.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}