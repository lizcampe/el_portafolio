import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreCases: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCases }) => {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-76px)] flex flex-col justify-between py-12 md:py-20 border-b border-[#0A0A0A]/10">
      
      {/* 12-Column Architectural Backdrop Lines (very subtle) */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-6 sm:grid-cols-12 px-6 sm:px-10 opacity-[0.03] -z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-[#0A0A0A] h-full first:border-l" />
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 w-full flex-1 flex flex-col justify-between">
        
        {/* Editorial Eyebrow & Issue Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#0A0A0A]/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-[#0A0A0A]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#0A0A0A]/70 font-semibold">
              Product Insights · Behavioral Research · Conversion Optimization
            </span>
          </div>

          <div className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#0A0A0A]/50">
            01 / Introduction
          </div>
        </div>

        {/* Main Editorial Hero Typography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-12 md:py-16 items-start">
          
          {/* Left Column: Foreword quote */}
          <div className="lg:col-span-4 lg:border-r lg:border-[#0A0A0A]/10 lg:pr-10 flex flex-col justify-between space-y-8">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] block mb-4 text-[#0A0A0A]/50">
                The Thesis
              </span>
              <p className="font-serif text-xl sm:text-2xl leading-snug italic text-[#0A0A0A] pr-4">
                &ldquo;Los datos muestran qué ocurrió. La investigación conductual revela por qué, y el buen diseño decide qué hacer al respecto.&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-[#0A0A0A]/10 space-y-3 font-sans text-xs">
              <div className="space-y-1">
                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#0A0A0A]/50 block">
                  Disciplina
                </span>
                <p className="text-[#0A0A0A] font-medium">Conversion Optimization & Behavioral Analysis</p>
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#0A0A0A]/50 block">
                  Ubicación & Modalidad
                </span>
                <p className="text-[#0A0A0A] font-medium">CDMX · Remoto Global (USA / UE / LATAM)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Statement */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-10">
            <div>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[84px] leading-[0.98] tracking-[-0.035em] text-[#0A0A0A]">
                Diseño productos que traducen{' '}
                <span className="italic font-serif font-normal underline decoration-[#0A0A0A]/30 decoration-1 underline-offset-8">
                  datos
                </span>
                : de comportamiento o de negocio, en decisiones simples para quien los usa.
              </h1>
            </div>

            {/* Impact statement box */}
            <div className="max-w-2xl pt-6 border-t border-[#0A0A0A]/15 space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#0A0A0A]/50 block">
                Impacto Clave
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#0A0A0A]/90 leading-relaxed">
                En mi último proyecto de e-commerce, ayudé a bajar el abandono de carrito de un{' '}
                <strong className="font-sans font-bold bg-[#0A0A0A] text-[#F5F5F0] px-2 py-0.5 text-base sm:text-lg tracking-tight inline-block align-middle">
                  52% esperado a 25% real
                </strong>
                , solo cambiando cómo se comunicaba un costo antes del checkout.
              </p>
            </div>
          </div>

        </div>

        {/* Hero Footer Bar */}
        <div className="pt-8 border-t border-[#0A0A0A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#0A0A0A] rounded-full animate-pulse" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#0A0A0A]/70">
              Disponible para proyectos selectos & consultoría
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded-full border border-[#0A0A0A]/30 flex items-center justify-center font-sans text-[10px]">01</span>
              <span className="w-8 h-8 rounded-full border border-[#0A0A0A]/30 flex items-center justify-center font-sans text-[10px]">02</span>
              <span className="w-8 h-8 rounded-full border border-[#0A0A0A]/30 flex items-center justify-center font-sans text-[10px]">03</span>
              <span className="w-8 h-8 rounded-full border border-[#0A0A0A]/30 flex items-center justify-center font-sans text-[10px]">04</span>
            </div>

            <button
              id="hero-scroll-btn"
              onClick={onExploreCases}
              className="group inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-[#0A0A0A] hover:opacity-70 transition-opacity cursor-pointer"
            >
              <span>Ver casos</span>
              <ArrowDown className="w-3.5 h-3.5 animate-float-arrow" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
