import { useState } from "react";
import { FAQ_ITEMS, WHATSAPP_LINK } from "@/mocks/program";
import Reveal from "@/components/feature/Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="preguntas" className="bg-background-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-1">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary-700">
              Preguntas comunes
            </span>
            <h2 className="mt-4 font-heading font-extrabold text-2xl md:text-4xl text-foreground-950 leading-tight">
              Resolvemos tus dudas
            </h2>
            <p className="mt-5 text-base text-foreground-600 leading-relaxed">
              Si tu pregunta no está aquí, escríbenos por WhatsApp y te ayudamos.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary-300 px-5 py-3 text-sm font-semibold text-primary-700 hover:bg-primary-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-base"></i>
              Preguntar por WhatsApp
            </a>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={120}>
            <div className="flex flex-col divide-y divide-background-200 border-y border-background-200">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                    >
                      <span className="font-heading font-semibold text-base md:text-lg text-foreground-900">
                        {item.question}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-background-100 flex items-center justify-center text-primary-700 shrink-0">
                        <i className={`${isOpen ? "ri-subtract-line" : "ri-add-line"} text-lg`}></i>
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-60 pb-5 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm md:text-base text-foreground-600 leading-relaxed pr-10">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}