import React, { useState } from 'react';
import { Eye, SlidersHorizontal, Info } from 'lucide-react';

export const CaseStudyEyeTracking: React.FC = () => {
  const [bgMode, setBgMode] = useState<'white' | 'grey'>('grey');
  const [showHeatmap, setShowHeatmap] = useState<boolean>(true);
  const [showFixationPoints, setShowFixationPoints] = useState<boolean>(true);

  return (
    <article id="caso-04" className="pt-16 pb-24 border-t border-[#0A0A0A]/15">
      
      {/* Editorial Topline */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-baseline mb-12 pb-6 border-b border-[#0A0A0A]/10 font-sans text-xs">
        <div className="sm:col-span-2 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#0A0A0A] flex items-center justify-center font-sans text-[10px] font-bold">
            04
          </div>
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#0A0A0A]/50">
            Case Study
          </span>
        </div>

        <div className="sm:col-span-5">
          <span className="block font-sans text-[9px] uppercase tracking-[0.25em] text-[#0A0A0A]/50 mb-1">
            Cliente
          </span>
          <span className="font-serif italic text-base text-[#0A0A0A]">Coppel</span>
        </div>

        <div className="sm:col-span-5">
          <span className="block font-sans text-[9px] uppercase tracking-[0.25em] text-[#0A0A0A]/50 mb-1">
            Mi rol
          </span>
          <span className="text-[#0A0A0A] font-medium">
            Líder de investigación · equipo de 2 researchers
          </span>
        </div>
      </div>

      {/* Grid: Narrative vs Heatmap Interactive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Story copy */}
        <div className="lg:col-span-7 space-y-6 text-[#0A0A0A]/80 leading-relaxed font-sans text-[15px]">
          
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#0A0A0A] leading-[1.08] mb-6">
            Lo que el usuario dice vs. lo que su mirada hace
          </h3>

          <p className="font-serif italic text-lg sm:text-xl text-[#0A0A0A] leading-relaxed">
            ¿El fondo de la foto de un producto —blanco o gris— cambia cómo el ojo lo percibe y su probabilidad de generar clic o compra?
          </p>

          <p>
            Diseñamos un estudio de eye tracking con 40 usuarios en tienda, combinado con think-aloud retrospectivo y un A/B test paralelo en el sitio.
          </p>

          <blockquote className="my-6 pl-5 border-l-2 border-[#0A0A0A] font-serif text-lg text-[#0A0A0A] italic">
            &ldquo;El hallazgo más interesante no fue el ganador, sino la contradicción entre el reporte verbal y el registro biométrico.&rdquo;
          </blockquote>

          <p>
            Los usuarios decían percibir mejor el producto en fondo gris, pero los datos fisiológicos —fijación de la mirada y dilatación de pupila— mostraban que el fondo blanco generaba una visualización más enfocada y directa sobre el producto.
          </p>

          <p className="font-serif text-lg font-bold text-[#0A0A0A]">
            Lo que alguien dice y lo que su cuerpo hace no siempre coinciden.
          </p>

          {/* Result */}
          <div className="mt-10 pt-6 border-t border-[#0A0A0A]">
            <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#0A0A0A]/50 uppercase block mb-2">
              Resultado & Recomendación Técnica
            </span>
            <p className="font-serif text-lg text-[#0A0A0A] leading-snug">
              Sin diferencia estadísticamente significativa en conversión general. Recomendación: no aplicar el cambio de forma masiva; validar categoría por categoría.
            </p>
          </div>
        </div>

        {/* Interactive Eye Tracking Stage */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 border border-[#0A0A0A]/20 bg-[#F5F5F0] p-6 shadow-xs">
          
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#0A0A0A]/10">
            <div className="flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-[#0A0A0A]" />
              <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-[#0A0A0A] uppercase">
                Estudio Biométrico · 40 Sujetos
              </span>
            </div>
            <span className="font-sans text-[9px] bg-[#0A0A0A] text-[#F5F5F0] font-bold px-2 py-0.5 uppercase tracking-wider">
              Tobii Eye Tracker Pro
            </span>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 p-2.5 bg-white border border-[#0A0A0A]/20 text-xs font-sans">
            <div className="flex items-center gap-1.5">
              <span className="text-[#0A0A0A]/60 font-bold text-[9px] uppercase tracking-wider">Fondo:</span>
              <button
                onClick={() => setBgMode('white')}
                className={`px-2.5 py-1 text-[10px] uppercase font-bold transition-all cursor-pointer ${
                  bgMode === 'white' ? 'bg-[#0A0A0A] text-[#F5F5F0]' : 'text-[#0A0A0A]/60 hover:text-black'
                }`}
              >
                Blanco
              </button>
              <button
                onClick={() => setBgMode('grey')}
                className={`px-2.5 py-1 text-[10px] uppercase font-bold transition-all cursor-pointer ${
                  bgMode === 'grey' ? 'bg-[#0A0A0A] text-[#F5F5F0]' : 'text-[#0A0A0A]/60 hover:text-black'
                }`}
              >
                Gris
              </button>
            </div>

            <div className="flex items-center gap-3 text-[10px] uppercase font-medium tracking-wider">
              <label className="flex items-center gap-1 text-[#0A0A0A] cursor-pointer">
                <input
                  type="checkbox"
                  checked={showHeatmap}
                  onChange={(e) => setShowHeatmap(e.target.checked)}
                  className="rounded-none accent-[#0A0A0A]"
                />
                Heatmap
              </label>
              <label className="flex items-center gap-1 text-[#0A0A0A] cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFixationPoints}
                  onChange={(e) => setShowFixationPoints(e.target.checked)}
                  className="rounded-none accent-[#0A0A0A]"
                />
                Fijaciones
              </label>
            </div>
          </div>

          {/* Product View Card Container */}
          <div className="relative aspect-[4/3] overflow-hidden border border-[#0A0A0A]/20 flex items-center justify-center p-6 transition-colors duration-300"
            style={{ backgroundColor: bgMode === 'white' ? '#ffffff' : '#e6e6e2' }}
          >
            {/* Simulated Product Subject */}
            <div className="relative w-28 sm:w-32 h-36 sm:h-44 bg-[#0A0A0A] flex flex-col items-center justify-between p-3 border border-white/20 shadow-md">
              <div className="w-8 h-4 bg-amber-400/90 border border-amber-600/50" />
              <div className="w-12 h-0.5 bg-white/40" />
              <div className="text-center font-sans">
                <span className="block text-[8px] font-black text-[#F5F5F0] tracking-[0.25em] uppercase">PARFUM</span>
                <span className="block text-[6px] tracking-widest text-[#F5F5F0]/60 uppercase">Edition No. 04</span>
              </div>
              <div className="w-full h-1.5 bg-white/20" />
            </div>

            {/* Heatmap Overlays */}
            {showHeatmap && (
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute w-28 h-28 rounded-full bg-red-600/35 blur-xl animate-gaze"
                  style={{
                    top: bgMode === 'white' ? '30%' : '35%',
                    left: bgMode === 'white' ? '45%' : '40%',
                  }}
                />
                <div
                  className="absolute w-36 h-36 rounded-full bg-amber-400/25 blur-2xl"
                  style={{
                    top: '25%',
                    left: '38%',
                  }}
                />
                <div
                  className="absolute w-20 h-20 rounded-full bg-neutral-900/30 blur-lg"
                  style={{
                    top: '55%',
                    left: '52%',
                  }}
                />
              </div>
            )}

            {/* Fixation path & sequential gaze dots */}
            {showFixationPoints && (
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full">
                  <line x1="45%" y1="35%" x2="52%" y2="48%" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="52%" y1="48%" x2="48%" y2="62%" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
                {/* Fixation 1 */}
                <div className="absolute top-[35%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-[#0A0A0A] bg-[#0A0A0A] flex items-center justify-center font-mono text-[9px] font-bold text-[#F5F5F0]">
                  1
                </div>
                {/* Fixation 2 */}
                <div className="absolute top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-[#0A0A0A] bg-[#0A0A0A] flex items-center justify-center font-mono text-[9px] font-bold text-[#F5F5F0]">
                  2
                </div>
                {/* Fixation 3 */}
                <div className="absolute top-[62%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-[#0A0A0A] bg-[#0A0A0A] flex items-center justify-center font-mono text-[8px] font-bold text-[#F5F5F0]">
                  3
                </div>
              </div>
            )}

            {/* Badge Indicator in visual */}
            <div className="absolute bottom-2 right-2 bg-[#0A0A0A] text-[#F5F5F0] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider">
              Fijación: {bgMode === 'white' ? '410ms (más foco)' : '320ms (disperso)'}
            </div>
          </div>

          {/* Analysis comparison box */}
          <div className="mt-4 p-3.5 bg-white border border-[#0A0A0A]/20 text-xs font-sans">
            <div className="flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-[#0A0A0A] shrink-0 mt-0.5" />
              <div className="text-[#0A0A0A]">
                <strong className="block font-bold uppercase text-[9px] tracking-wider mb-1">
                  Divergencia Declarativa vs Conductual
                </strong>
                <p className="text-[11px] text-[#0A0A0A]/70 leading-relaxed">
                  El 68% de los participantes opinó que el fondo gris se percibía &ldquo;más premium&rdquo;. Sin embargo, el registro biométrico demostró un tiempo de atención 28% mayor y menor dispersión en fondo blanco.
                </p>
              </div>
            </div>
          </div>

        </aside>

      </div>
    </article>
  );
};
