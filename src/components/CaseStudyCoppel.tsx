import React, { useState } from 'react';
import { ShoppingCart, ShieldCheck, TrendingUp, AlertTriangle, Layers, Image as ImageIcon, ZoomIn } from 'lucide-react';

export const CaseStudyCoppel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'artifacts'>('simulator');
  const [cartAmount, setCartAmount] = useState<number>(350);
  const [copyVariant, setCopyVariant] = useState<'optimized' | 'original'>('optimized');
  const [zoomArtifact, setZoomArtifact] = useState<boolean>(false);

  const freeShippingThreshold = 499;
  const missingForFreeShipping = Math.max(0, freeShippingThreshold - cartAmount);
  const qualifiesForFreeShipping = cartAmount >= freeShippingThreshold;
  const shippingFee = qualifiesForFreeShipping ? 0 : 50;

  return (
    <article id="caso-03" className="pt-16 pb-24 border-t border-[#0A0A0A]/15">
      
      {/* Editorial Topline */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-baseline mb-12 pb-6 border-b border-[#0A0A0A]/10 font-sans text-xs">
        <div className="sm:col-span-2 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#0A0A0A] flex items-center justify-center font-sans text-[10px] font-bold">
            03
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
          <span className="text-[#0A0A0A] font-medium">Investigación y optimización de conversión</span>
        </div>
      </div>

      {/* Grid: Narrative + Editorial Metrics vs Checkout Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Story copy */}
        <div className="lg:col-span-7 space-y-6 text-[#0A0A0A]/80 leading-relaxed font-sans text-[15px]">
          
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#0A0A0A] leading-[1.08] mb-6">
            Comunicar un costo de envío sin romper la confianza
          </h3>

          <p className="font-serif italic text-lg sm:text-xl text-[#0A0A0A] leading-relaxed">
            Coppel decidió cobrar $50 de envío en compras menores a $499, tras detectar pérdidas superiores a los 10 millones de pesos.
          </p>

          <p>
            El reto era comunicar el cambio sin que se sintiera como una ruptura de la promesa de marca: los usuarios ya identificaban a Coppel como “la tienda que no cobra envío”.
          </p>

          <p>
            Investigué con entrevistas remotas, seis meses de social listening y una auditoría competitiva, y colaboré con UI y UX Writing para rediseñar cómo y cuándo se mostraba el costo.
          </p>

          <div className="pt-2">
            <h4 className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#0A0A0A] uppercase mb-3">
              Implementación & Iteración Conductual
            </h4>
            <p className="text-[14px] leading-relaxed">
              Mostramos cuánto le faltaba al usuario para llegar al envío gratis, avisamos desde el carrito y en las primeras fases del journey si la compra quedaba por debajo de $499, cambiamos el copy de “costo de envío” a “envío seguro” y mantuvimos siempre el costo visible en el resumen de compra.
            </p>
            <p className="text-[14px] leading-relaxed mt-3">
              En pruebas de usabilidad con 5 usuarios, el primer aviso pasaba desapercibido. Se ajustó con fondo contrastado, un botón de pago de alta visibilidad y el mensaje colocado arriba del pliegue antes de salir a producción.
            </p>
          </div>

          {/* Editorial Metrics Grid */}
          <div className="mt-8 pt-4">
            <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#0A0A0A]/50 uppercase block mb-3">
              Impacto Medido en Producción
            </span>

            <div className="grid grid-cols-2 gap-px bg-[#0A0A0A]/20 border border-[#0A0A0A]/20">
              <div className="bg-[#F5F5F0] p-5 flex flex-col justify-between">
                <span className="font-serif text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
                  52→25%
                </span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#0A0A0A]/60 mt-2">
                  abandono esperado vs. real
                </span>
              </div>

              <div className="bg-[#F5F5F0] p-5 flex flex-col justify-between">
                <span className="font-serif text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
                  $12.3→1.8M
                </span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#0A0A0A]/60 mt-2">
                  pérdida neta reducida
                </span>
              </div>

              <div className="bg-[#F5F5F0] p-5 flex flex-col justify-between">
                <span className="font-serif text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
                  $584→750
                </span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#0A0A0A]/60 mt-2">
                  ticket promedio
                </span>
              </div>

              <div className="bg-[#F5F5F0] p-5 flex flex-col justify-between">
                <span className="font-serif text-3xl sm:text-4xl text-[#0A0A0A] tracking-tight">
                  80+→7
                </span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-[#0A0A0A]/60 mt-2">
                  quejas esperadas vs. reales
                </span>
              </div>
            </div>
          </div>

          {/* Result & Learning */}
          <div className="mt-8 pt-6 border-t border-[#0A0A0A]">
            <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#0A0A0A]/50 uppercase block mb-2">
              Resultado
            </span>
            <p className="font-serif text-lg text-[#0A0A0A] leading-snug">
              Primer mes de implementación, sin apps: abandono de carrito de 25% frente a 52% esperado en compras menores a $499.
            </p>
          </div>

          <div className="p-5 border border-[#0A0A0A] bg-white text-[#0A0A0A]">
            <strong className="block font-sans text-[9px] font-bold tracking-[0.25em] uppercase mb-1">
              Aprendizaje Clave
            </strong>
            <p className="font-serif italic text-sm">
              &ldquo;Un equipo puede gestionar un cambio de negocio sensible a través de investigación rigurosa, microcopy transparente e iteración conductual.&rdquo;
            </p>
          </div>
        </div>

        {/* Interactive Aside: E-commerce Simulator OR Redesign Wireframes */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 border border-[#0A0A0A] bg-[#0A0A0A] text-[#F5F5F0] p-6 shadow-md">
          
          <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-[#333]">
            <div className="flex items-center gap-1 bg-[#1A1A1A] p-0.5">
              <button
                onClick={() => setActiveTab('simulator')}
                className={`font-sans text-[9px] uppercase tracking-wider px-2.5 py-1 transition-colors cursor-pointer ${
                  activeTab === 'simulator' ? 'bg-white text-black font-bold' : 'text-[#888] hover:text-white'
                }`}
              >
                Simulador
              </button>
              <button
                onClick={() => setActiveTab('artifacts')}
                className={`font-sans text-[9px] uppercase tracking-wider px-2.5 py-1 transition-colors cursor-pointer ${
                  activeTab === 'artifacts' ? 'bg-white text-black font-bold' : 'text-[#888] hover:text-white'
                }`}
              >
                Wireframes
              </button>
            </div>

            {activeTab === 'simulator' && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCopyVariant('optimized')}
                  className={`font-sans text-[9px] uppercase tracking-wider px-2 py-0.5 transition-colors cursor-pointer ${
                    copyVariant === 'optimized' ? 'bg-[#F5F5F0] text-[#0A0A0A] font-bold' : 'text-[#888] hover:text-white'
                  }`}
                >
                  Nudge
                </button>
                <button
                  onClick={() => setCopyVariant('original')}
                  className={`font-sans text-[9px] uppercase tracking-wider px-2 py-0.5 transition-colors cursor-pointer ${
                    copyVariant === 'original' ? 'bg-[#333] text-white font-bold' : 'text-[#888] hover:text-white'
                  }`}
                >
                  Sin Nudge
                </button>
              </div>
            )}
          </div>

          {activeTab === 'simulator' ? (
            <div>
              {/* Cart Slider */}
              <div className="mb-5 p-3.5 bg-[#141414] border border-[#262626]">
                <div className="flex justify-between items-center text-xs mb-2 font-sans">
                  <span className="text-[#888] uppercase text-[10px] tracking-wider">Monto en Carrito:</span>
                  <span className="font-mono text-base font-bold text-white">${cartAmount} MXN</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="750"
                  step="25"
                  value={cartAmount}
                  onChange={(e) => setCartAmount(Number(e.target.value))}
                  className="w-full h-1 bg-[#333] rounded-none appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[9px] text-[#777] mt-1 font-mono">
                  <span>$150</span>
                  <span className="text-white font-bold">Umbral: $499</span>
                  <span>$750</span>
                </div>
              </div>

              {/* Cart UI Mockup */}
              <div className="bg-[#F5F5F0] text-[#0A0A0A] p-4 space-y-3.5 border border-white/20">
                
                {/* Header / Brand */}
                <div className="flex items-center justify-between pb-2 border-b border-[#0A0A0A]/15">
                  <span className="font-sans text-xs font-black tracking-widest text-[#0A0A0A]">COPPEL.COM</span>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-[#0A0A0A]/60">1 artículo</span>
                </div>

                {/* Product row */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E5E5DE] border border-[#0A0A0A]/10 flex items-center justify-center text-base shrink-0">
                    👟
                  </div>
                  <div className="flex-1 min-w-0 font-sans">
                    <h5 className="text-xs font-bold text-[#0A0A0A] truncate">Calzado Deportivo Comfort</h5>
                    <p className="text-[11px] text-[#666] font-mono">${cartAmount}.00</p>
                  </div>
                </div>

                {/* Progress / Nudge Callout based on variant */}
                {copyVariant === 'optimized' ? (
                  <div
                    className={`p-2.5 border font-sans text-xs transition-all ${
                      qualifiesForFreeShipping
                        ? 'bg-white border-[#0A0A0A] text-[#0A0A0A]'
                        : 'bg-[#EBEBE5] border-[#0A0A0A]/20 text-[#0A0A0A]'
                    }`}
                  >
                    {qualifiesForFreeShipping ? (
                      <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[9.5px]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0A0A0A] shrink-0" />
                        <span>Envío Gratis garantizado</span>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-between text-[9.5px] uppercase font-bold tracking-wider mb-1">
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Faltan <strong className="font-mono">${missingForFreeShipping} MXN</strong> para envío gratis
                          </span>
                        </div>
                        {/* Progress bar */}
                        <div className="w-full h-1.5 bg-[#0A0A0A]/15 overflow-hidden">
                          <div
                            className="h-full bg-[#0A0A0A] transition-all duration-300"
                            style={{ width: `${Math.min(100, (cartAmount / freeShippingThreshold) * 100)}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-2 bg-[#EBEBE5] border border-[#0A0A0A]/30 text-[#0A0A0A] text-[9.5px] font-sans uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3 h-3 shrink-0 text-red-600" />
                    <span>Cargo por envío: $50 MXN al pagar.</span>
                  </div>
                )}

                {/* Order Summary */}
                <div className="space-y-1 pt-1.5 border-t border-[#0A0A0A]/10 text-xs font-sans">
                  <div className="flex justify-between text-[#0A0A0A]/70 text-[11px]">
                    <span>Subtotal</span>
                    <span className="font-mono">${cartAmount}.00</span>
                  </div>
                  <div className="flex justify-between text-[#0A0A0A]/70 text-[11px]">
                    <span>{copyVariant === 'optimized' ? 'Envío seguro' : 'Costo de envío'}</span>
                    <span className="font-mono font-bold text-[#0A0A0A]">
                      {qualifiesForFreeShipping ? 'GRATIS' : `$${shippingFee}.00`}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-[#0A0A0A] pt-1.5 border-t border-[#0A0A0A]">
                    <span>Total a pagar</span>
                    <span className="font-mono text-sm">${cartAmount + shippingFee}.00</span>
                  </div>
                </div>

                {/* Action CTA Button */}
                <button className="w-full py-2.5 bg-[#0A0A0A] text-[#F5F5F0] hover:bg-[#252525] font-sans font-bold text-[9px] uppercase tracking-[0.25em] transition-colors cursor-pointer">
                  Continuar al pago seguro
                </button>
              </div>
            </div>
          ) : (
            /* Wireframes & Redesign Comparison View */
            <div className="space-y-3">
              <div className="relative group bg-[#F5F5F0] border border-[#333] overflow-hidden">
                <img
                  src="/images/coppel-cart-redesign.svg"
                  alt="Rediseño de Carrito Coppel"
                  className="w-full h-[250px] object-contain bg-[#F5F5F0]"
                />
                <button
                  onClick={() => setZoomArtifact(true)}
                  className="absolute bottom-2 right-2 bg-black/80 text-white text-[9px] uppercase font-mono px-2 py-1 flex items-center gap-1 border border-white/20 hover:bg-black transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-3 h-3" /> Ampliar
                </button>
              </div>

              <div className="p-3 bg-[#141414] border border-[#262626] text-xs font-sans space-y-1 text-[#aaa]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-white flex items-center justify-between">
                  <span>Pruebas con 5 usuarios</span>
                  <span className="text-[#005CB9] bg-blue-100 px-1.5 py-0.5 rounded-xs font-mono text-[9px]">Coppel.com</span>
                </div>
                <p className="text-[11px] leading-tight text-[#ccc]">
                  Hallazgo: El primer banner pasaba desapercibido. Se implementó el botón amarillo/azul de alta visibilidad y el threshold bar por encima del pliegue.
                </p>
              </div>
            </div>
          )}

          <p className="font-sans text-[9px] uppercase tracking-widest text-[#777] text-center mt-3">
            {activeTab === 'simulator' ? 'Ajusta el slider para simular la compra' : 'Artefacto de diseño e iteración de usabilidad'}
          </p>

        </aside>

      </div>

      {/* Modal Zoom for Cart Redesign */}
      {zoomArtifact && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setZoomArtifact(false)}
        >
          <div
            className="bg-[#F5F5F0] max-w-4xl w-full border border-black p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 text-black">
              <div>
                <h4 className="font-serif text-lg">Coppel · Rediseño de Checkout e Impacto de Conversión</h4>
                <p className="font-sans text-xs text-[#555]">
                  Comparativa de wireframes antes/después del costo de envío y progreso para envío gratis
                </p>
              </div>
              <button
                onClick={() => setZoomArtifact(false)}
                className="font-mono text-sm px-3 py-1 bg-black text-white hover:bg-neutral-800 cursor-pointer"
              >
                ✕ Cerrar
              </button>
            </div>
            <img
              src="/images/coppel-cart-redesign.svg"
              alt="Comparativa de Wireframes Coppel"
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          </div>
        </div>
      )}
    </article>
  );
};
