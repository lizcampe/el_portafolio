import React from 'react';
import { companies } from '../data/portfolioData';

export const WorkedWith: React.FC = () => {
  return (
    <section
      id="worked-with"
      className="py-10 bg-[#EBEBE5]/60 border-b border-[#0A0A0A]/10"
      aria-label="Empresas donde he trabajado"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8">
          
          <div className="lg:col-span-3">
            <span className="font-sans text-[9px] font-bold tracking-[0.35em] text-[#0A0A0A]/50 uppercase block mb-1">
              02 / Trayectoria
            </span>
            <p className="font-serif italic text-base text-[#0A0A0A]">
              Colaboraciones & organizaciones:
            </p>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#0A0A0A]/15 border border-[#0A0A0A]/15">
            {companies.map((co) => (
              <div
                key={co.name}
                className="group bg-[#F5F5F0] hover:bg-white transition-colors duration-200 p-5 flex flex-col justify-center items-center text-center min-h-[96px]"
              >
                {co.name === 'SPEERO' ? (
                  <div className="h-6 flex items-center justify-center mb-1">
                    <img
                      src="/images/speero-logo.svg"
                      alt="Speero Logo"
                      className="h-5 w-auto max-w-[100px] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ) : (
                  <span className="font-sans text-xs md:text-sm font-black tracking-[0.2em] text-[#0A0A0A]">
                    {co.name}
                  </span>
                )}
                <span className="font-sans text-[9px] uppercase tracking-widest text-[#0A0A0A]/50 mt-1 line-clamp-1">
                  {co.tagline}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
