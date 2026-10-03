import { LEARNING_SCENARIOS } from "@/mocks/program";
import Reveal from "@/components/feature/Reveal";

export default function LearningScenarios() {
  return (
    <section className="bg-background-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary-700">
            Escenarios de clase
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-2xl md:text-4xl text-foreground-950 leading-tight">
            Técnicas y ambientes de aprendizaje
          </h2>
          <p className="mt-5 text-base md:text-lg text-foreground-600 leading-relaxed">
            Un recorrido por los espacios y las técnicas de aprendizaje que acompañan la formación.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {LEARNING_SCENARIOS.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <article className="h-full rounded-lg overflow-hidden border border-background-200 bg-background-50">
                <div className="w-full h-48 bg-background-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    title={`${item.title} - Diplomado en Enfermería Básica`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-heading font-semibold text-base text-foreground-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}