import Reveal from "@/components/feature/Reveal";

export default function WhatIs() {
  return (
    <section id="programa" className="bg-background-100">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="order-2 lg:order-1 w-full">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary-700">
              ¿Qué es?
            </span>
            <h2 className="mt-4 font-heading font-extrabold text-2xl md:text-4xl text-foreground-950 leading-tight">
              Formación práctica para el cuidado diario
            </h2>
            <p className="mt-5 max-w-xl text-base md:text-lg text-foreground-600 leading-relaxed">
              Un programa diseñado para adquirir conocimientos básicos y prácticos de enfermería
              que pueden aplicarse en situaciones de cuidado domiciliar y cotidiano.
            </p>
            <div className="mt-6 h-1 w-20 rounded-full bg-accent-500"></div>
          </Reveal>

          <Reveal className="order-1 lg:order-2 w-full" delay={120}>
            <div className="w-full h-[280px] sm:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden bg-background-200">
              <img
                src="https://readdy.ai/api/search-image?query=Adult%20in%20casual%20clothing%20gently%20assisting%20an%20elderly%20relative%20at%20home%2C%20adjusting%20a%20blanket%20on%20a%20bright%20minimal%20living%20room%20sofa%2C%20warm%20natural%20light%2C%20soft%20neutral%20tones%2C%20realistic%20photography&width=1000&height=800&seq=homecare-01&orientation=landscape&nocache=true"
                alt="Cuidado de un adulto mayor en casa"
                title="Formación práctica para el cuidado diario"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}