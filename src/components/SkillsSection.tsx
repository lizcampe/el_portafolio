import React from 'react';
import { skillsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-[#0A0A0A]/15">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16 pb-8 border-b border-[#0A0A0A]/10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#0A0A0A]" />
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#0A0A0A]/50 uppercase">
                04 / Skills & Servicios
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.035em] text-[#0A0A0A] leading-[1.04]">
              Del comportamiento a una decisión ejecutable.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="font-serif italic text-lg sm:text-xl text-[#0A0A0A]/80 leading-relaxed max-w-xl">
              Métodos, analítica de producto y experimentación que utilizo para entender qué está ocurriendo, explicar por qué y convertirlo en algo que un equipo de producto pueda validar y construir.
            </p>
          </div>
        </div>

        {/* Editorial Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0A0A0A]/15 border border-[#0A0A0A]/15">
          {skillsData.map((skill) => (
            <article
              key={skill.number}
              className="bg-[#F5F5F0] hover:bg-white transition-colors duration-200 p-8 sm:p-10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full border border-[#0A0A0A]/30 flex items-center justify-center font-mono text-[10px] font-bold text-[#0A0A0A]">
                    {skill.number}
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#0A0A0A]/40">
                    Capability
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-[-0.02em] text-[#0A0A0A] mt-8 mb-4 leading-tight">
                  {skill.title}
                </h3>

                <p className="font-sans text-[14px] text-[#0A0A0A]/70 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {skill.tools && (
                <div className="mt-8 pt-4 border-t border-[#0A0A0A]/10 flex flex-wrap gap-1.5 font-sans">
                  {skill.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#EBEBE5] text-[#0A0A0A]/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
