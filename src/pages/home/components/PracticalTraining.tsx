import { TRAINING_STEPS } from "@/mocks/program";
import Reveal from "@/components/feature/Reveal";

export default function PracticalTraining() {
  return (
    <section id="practica" className="bg-background-100">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary-700">
            Formación práctica
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-2xl md:text-4xl text-foreground-950 leading-tight">
            Teoría y práctica en un mismo programa
          </h2>
          <p className="mt-5 text-base md:text-lg text-foreground-600 leading-relaxed">
            El diplomado combina conocimientos teóricos y práctica para que puedas aplicar lo
            aprendido con seguridad.
          </p>
        </Reveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block mt-16">
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-background-300"></div>
            <div className="relative grid grid-cols-5 gap-6">
              {TRAINING_STEPS.map((step, index) => (
                <Reveal key={step.number} delay={index * 90}>
                  <div className="flex flex-col items-center text-center">
                    <span className="w-16 h-16 rounded-full bg-background-50 border border-background-300 flex items-center justify-center text-primary-600 relative z-10">
                      <i className={`${step.icon} text-2xl`}></i>
                    </span>
                    <span className="mt-5 font-heading font-bold text-sm text-accent-700">
                      {step.number}
                    </span>
                    <h3 className="mt-1 font-heading font-semibold text-base text-foreground-900">
                      {step.title}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="lg:hidden mt-12">
          <div className="relative pl-6">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-background-300"></div>
            <div className="flex flex-col gap-8">
              {TRAINING_STEPS.map((step, index) => (
                <Reveal key={step.number} delay={index * 80}>
                  <div className="relative flex items-start gap-4">
                    <span className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-background-50 border border-background-300 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-accent-500"></span>
                    </span>
                    <span className="w-12 h-12 rounded-lg bg-background-50 border border-background-200 flex items-center justify-center text-primary-600 shrink-0">
                      <i className={`${step.icon} text-xl`}></i>
                    </span>
                    <div className="pt-1">
                      <span className="font-heading font-bold text-xs text-accent-700">
                        {step.number}
                      </span>
                      <h3 className="font-heading font-semibold text-base text-foreground-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}