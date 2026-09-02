import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 md:py-28 border-t border-[#0A0A0A]/15">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16 pb-8 border-b border-[#0A0A0A]/10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#0A0A0A]" />
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#0A0A0A]/50 uppercase">
                05 / Historial Profesional
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.035em] text-[#0A0A0A] leading-[1.04]">
              Experiencia & Trayectoria.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="font-serif italic text-lg sm:text-xl text-[#0A0A0A]/80 leading-relaxed max-w-xl">
              Investigación aplicada, optimización de conversión y consultoría de comportamiento para marcas en México, Estados Unidos y Europa.
            </p>
          </div>
        </div>

        {/* Timeline list */}
        <div className="divide-y divide-[#0A0A0A]/15">
          {experienceData.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start group"
            >
              {/* Status Badge */}
              <div className="md:col-span-2 pt-1 font-sans">
                {item.status ? (
                  <span
                    className={`inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.25em] ${
                      item.status === 'Actual'
                        ? 'bg-[#0A0A0A] text-[#F5F5F0]'
                        : 'bg-[#EBEBE5] text-[#0A0A0A]'
                    }`}
                  >
                    {item.status}
                  </span>
                ) : (
                  <span className="font-mono text-[10px] text-[#0A0A0A]/40 uppercase tracking-widest">
                    Previo
                  </span>
                )}
              </div>

              {/* Role & Company */}
              <div className="md:col-span-4 space-y-3">
                <h3 className="font-serif text-2xl font-normal tracking-tight text-[#0A0A0A] leading-snug">
                  {item.role}
                </h3>
                
                <div className="space-y-1 font-sans text-xs text-[#0A0A0A]/70">
                  <p className="font-bold text-[#0A0A0A] flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
                    <Briefcase className="w-3 h-3" />
                    {item.company}
                  </p>
                  <p className="flex items-center gap-1.5 text-[11px]">
                    <Calendar className="w-3 h-3 text-[#0A0A0A]/40" />
                    {item.period}
                  </p>
                  <p className="flex items-center gap-1.5 text-[11px]">
                    <MapPin className="w-3 h-3 text-[#0A0A0A]/40" />
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="font-sans text-[#0A0A0A]/80 text-[14px] sm:text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
