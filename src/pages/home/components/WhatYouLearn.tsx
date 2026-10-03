import { LEARNING_CONTENTS } from "@/mocks/program";
import Reveal from "@/components/feature/Reveal";

export default function WhatYouLearn() {
  return (
    <section id="contenidos" className="bg-background-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary-700">
            ¿Qué aprenderás?
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-2xl md:text-4xl text-foreground-950 leading-tight">
            Contenidos principales del diplomado
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {LEARNING_CONTENTS.map((item, index) => (
            <Reveal key={item.number} delay={index * 70} className="h-full">
              <article className="group h-full rounded-lg border border-background-200 bg-background-50 p-6 md:p-7 transition-colors hover:border-primary-300">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-lg bg-background-100 flex items-center justify-center text-primary-700 transition-colors group-hover:text-primary-600">
                    <i className={`${item.icon} text-2xl`}></i>
                  </span>
                  <span className="font-heading font-bold text-2xl text-background-300 group-hover:text-accent-500 transition-colors">
                    {item.number}
                  </span>
                </div>
                <h3 className="mt-6 font-heading font-semibold text-base md:text-lg text-foreground-900 leading-snug">
                  {item.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}