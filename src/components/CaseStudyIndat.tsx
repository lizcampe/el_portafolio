import React, { useState } from 'react';
import { MapPin, Award, CheckCircle2, Navigation, Layers, Share2, Twitter, ZoomIn } from 'lucide-react';

export const CaseStudyIndat: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tablet' | 'network'>('tablet');
  const [selectedRoute, setSelectedRoute] = useState<'prioritaria' | 'completada' | 'todos'>('todos');
  const [activeZone, setActiveZone] = useState<number | null>(1);
  const [zoomGraph, setZoomGraph] = useState<boolean>(false);

  const zones = [
    {
      id: 1,
      district: 'Sección 0412 · Fracc. Jardines',
      priority: 'Alta',
      status: 'Puerta por tocar',
      voters: 340,
      affiliated: '12 simpatizantes',
      voterPattern: '64% participación histórica',
      gamificationPoints: '+25 pts',
      coords: { x: '24%', y: '28%' }
    },
    {
      id: 2,
      district: 'Sección 0418 · Col. Obrera',
      priority: 'Media',
      status: 'Visitado hoy',
      voters: 510,
      affiliated: '28 simpatizantes',
      voterPattern: 'Alta afinidad previa',
      gamificationPoints: '+40 pts',
      coords: { x: '52%', y: '58%' }
    },
    {
      id: 3,
      district: 'Sección 0425 · Villa Real',
      priority: 'Urgente',
      status: 'Por afiliar',
      voters: 290,
      affiliated: '3 simpatizantes',
      voterPattern: 'Voto indeciso 45%',
      gamificationPoints: '+50 pts',
      coords: { x: '73%', y: '36%' }
    }
  ];

  return (
    <article id="caso-01" className="pt-16 pb-24 border-t border-[#0A0A0A]/15">
      
      {/* Editorial Topline Metadata */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-baseline mb-12 pb-6 border-b border-[#0A0A0A]/10 font-sans text-xs">
        <div className="sm:col-span-2 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#0A0A0A] flex items-center justify-center font-sans text-[10px] font-bold">
            01
          </div>
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#0A0A0A]/50">
            Case Study
          </span>
        </div>

        <div className="sm:col-span-5">
          <span className="block font-sans text-[9px] uppercase tracking-[0.25em] text-[#0A0A0A]/50 mb-1">
            Cliente
          </span>
          <span className="font-serif italic text-base text-[#0A0A0A]">Indat / Movimiento Ciudadano</span>
        </div>

        <div className="sm:col-span-5">
          <span className="block font-sans text-[9px] uppercase tracking-[0.25em] text-[#0A0A0A]/50 mb-1">
            Mi rol
          </span>
          <span className="text-[#0A0A0A] font-medium">
            Strategic Research Direction + Co-diseño de producto de campo
          </span>
        </div>
      </div>

      {/* Grid: Narrative vs Interactive Territorial Mockup / Social Graph */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Story copy */}
        <div className="lg:col-span-7 space-y-6 text-[#0A0A0A]/80 leading-relaxed font-sans text-[15px]">
          
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#0A0A0A] leading-[1.08] mb-6">
            Inteligencia territorial y social listening para decisiones estratégicas
          </h3>

          <p className="font-serif italic text-lg sm:text-xl text-[#0A0A0A] leading-relaxed">
            En Indat articulamos dos frentes de investigación complementarios: analítica masiva en redes (social listening & grafos de interacción) y despliegue territorial en campo para brigadistas.
          </p>

          <p>
            Antes de una elección, el partido necesitaba que sus brigadistas recorrieran distritos casa por casa con información útil en la mano: cómo había votado esa zona, cuántos votantes había y si ya existía un simpatizante afiliado. Diseñé qué información vería el brigadista en la tableta y propuse una capa de gamificación: puntos, metas y comparativas entre brigadas para sostener el esfuerzo en jornadas largas de trabajo en campo.
          </p>

          <blockquote className="my-6 pl-5 border-l-2 border-[#0A0A0A] font-serif text-lg text-[#0A0A0A] italic">
            &ldquo;No era un dashboard analítico tradicional: era una herramienta para alguien caminando bajo el sol, tocando puertas con precisión de datos.&rdquo;
          </blockquote>

          <p>
            El reto real era traducir datos electorales y de opinión pública complejos en dos decisiones simples:{' '}
            <strong className="text-[#0A0A0A] font-bold">
              qué puerta tocar primero y si ya se había afiliado a alguien ahí.
            </strong>
          </p>

          {/* Social Listening Context Box */}
          <div className="p-5 border border-[#0A0A0A]/20 bg-[#EBEBE5]/40 mt-6">
            <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-[#0A0A0A] uppercase block mb-2">
              Etnografía Digital & Escucha Social en Indat
            </span>
            <p className="text-xs text-[#0A0A0A]/80 leading-relaxed">
              Como Directora de Investigación Estratégica, lideré análisis de grandes volúmenes de conversación en Twitter/X y medios digitales (ej. análisis de grafos del caso <em>#Ayotzinapa</em> con más de 800,000 menciones), mapeando comunidades de influencia e identificando cámaras de eco para orientar narrativas públicas.
            </p>
          </div>

          {/* Result callout */}
          <div className="mt-8 pt-6 border-t border-[#0A0A0A]">
            <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#0A0A0A]/50 uppercase block mb-2">
              Resultado
            </span>
            <p className="font-serif text-lg text-[#0A0A0A] leading-snug">
              Con el tiempo, este trabajo de campo y analítica de datos sentó las bases de una plataforma ciudadana posterior, alimentada por reportes de la propia comunidad.
            </p>
          </div>
        </div>

        {/* Interactive Aside: Tablet Simulation OR Social Listening Graph */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 border border-[#0A0A0A]/20 bg-[#F5F5F0] p-6 shadow-xs">
          
          {/* Main Visual Switcher */}
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#0A0A0A]/10">
            <div className="flex items-center gap-1 bg-[#EBEBE5] p-0.5">
              <button
                onClick={() => setActiveTab('tablet')}
                className={`font-sans text-[9px] uppercase tracking-wider px-2.5 py-1 transition-all cursor-pointer ${
                  activeTab === 'tablet'
                    ? 'bg-[#0A0A0A] text-[#F5F5F0] font-bold'
                    : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
                }`}
              >
                Tablet Campo
              </button>
              <button
                onClick={() => setActiveTab('network')}
                className={`font-sans text-[9px] uppercase tracking-wider px-2.5 py-1 transition-all cursor-pointer ${
                  activeTab === 'network'
                    ? 'bg-[#0A0A0A] text-[#F5F5F0] font-bold'
                    : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
                }`}
              >
                Grafo de Red
              </button>
            </div>

            {activeTab === 'tablet' ? (
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#0A0A0A] text-[#F5F5F0] text-[9px] font-sans font-bold uppercase tracking-wider">
                <Award className="w-3 h-3 text-amber-300" />
                <span>420 pts</span>
              </div>
            ) : (
              <span className="font-mono text-[9px] text-[#0A0A0A]/60 font-semibold">
                842K menciones
              </span>
            )}
          </div>

          {activeTab === 'tablet' ? (
            <div>
              {/* Filter Controls for Map simulation */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-sans text-[9px] text-[#0A0A0A]/50 font-bold uppercase tracking-widest">Filtro:</span>
                {(['todos', 'prioritaria', 'completada'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSelectedRoute(mode)}
                    className={`font-sans text-[9px] uppercase tracking-wider px-2 py-0.5 transition-all cursor-pointer ${
                      selectedRoute === mode
                        ? 'bg-[#0A0A0A] text-[#F5F5F0] font-bold'
                        : 'bg-[#EBEBE5] text-[#0A0A0A]/70 hover:bg-white'
                    }`}
                  >
                    {mode === 'todos' ? 'Todos' : mode === 'prioritaria' ? 'Prioritarios' : 'Visitados'}
                  </button>
                ))}
              </div>

              {/* Map Canvas Visual */}
              <div className="relative h-[250px] w-full bg-[#E5E5DE] overflow-hidden border border-[#0A0A0A]/20">
                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: `linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)`,
                    backgroundSize: '36px 36px'
                  }}
                />

                {/* Route lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path
                    d="M 90 70 Q 160 130 200 160 T 290 100"
                    fill="none"
                    stroke="#0A0A0A"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    className="opacity-60"
                  />
                </svg>

                {/* Interactive Pins */}
                {zones.map((zone) => {
                  const isVisible =
                    selectedRoute === 'todos' ||
                    (selectedRoute === 'prioritaria' && (zone.priority === 'Alta' || zone.priority === 'Urgente')) ||
                    (selectedRoute === 'completada' && zone.status === 'Visitado hoy');

                  if (!isVisible) return null;

                  const isSelected = activeZone === zone.id;

                  return (
                    <button
                      key={zone.id}
                      onClick={() => setActiveZone(zone.id)}
                      style={{ top: zone.coords.y, left: zone.coords.x }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-transform cursor-pointer group z-10 ${
                        isSelected ? 'scale-125' : 'hover:scale-110'
                      }`}
                      aria-label={`Seleccionar ${zone.district}`}
                    >
                      <div
                        className={`w-6 h-6 border flex items-center justify-center font-mono text-[10px] font-bold shadow-xs ${
                          isSelected
                            ? 'bg-[#0A0A0A] text-[#F5F5F0] border-[#0A0A0A]'
                            : 'bg-[#F5F5F0] text-[#0A0A0A] border-[#0A0A0A]'
                        }`}
                      >
                        {zone.id}
                      </div>
                      {isSelected && (
                        <span className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0A0A0A] text-[#F5F5F0] font-sans text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 shadow-md">
                          {zone.priority}
                        </span>
                      )}
                    </button>
                  );
                })}

                {/* Legend inside map */}
                <div className="absolute bottom-2 left-2 bg-[#F5F5F0]/95 px-2 py-0.5 text-[8px] font-sans uppercase tracking-wider text-[#0A0A0A] border border-[#0A0A0A]/20">
                  <span>● Sectores 1-3</span>
                </div>
              </div>

              {/* Active Sector Tablet Detail Card */}
              {activeZone && (
                <div className="mt-3 p-3.5 bg-white border border-[#0A0A0A]/20">
                  {(() => {
                    const cur = zones.find((z) => z.id === activeZone)!;
                    return (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-serif text-xs font-bold text-[#0A0A0A] flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#0A0A0A]" />
                            {cur.district}
                          </h4>
                          <span className="font-sans text-[8px] font-bold px-1.5 py-0.5 bg-[#0A0A0A] text-[#F5F5F0] uppercase tracking-widest">
                            {cur.gamificationPoints}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[10px] font-sans text-[#0A0A0A]/70 mb-2">
                          <div className="bg-[#F5F5F0] p-2 border border-[#0A0A0A]/10">
                            <span className="block text-[7.5px] text-[#0A0A0A]/50 uppercase font-bold tracking-wider">Votantes</span>
                            <span className="font-mono font-bold text-[#0A0A0A]">{cur.voters} personas</span>
                          </div>
                          <div className="bg-[#F5F5F0] p-2 border border-[#0A0A0A]/10">
                            <span className="block text-[7.5px] text-[#0A0A0A]/50 uppercase font-bold tracking-wider">Afiliación</span>
                            <span className="font-mono font-bold text-[#0A0A0A]">{cur.affiliated}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[9px] font-sans pt-1.5 border-t border-[#0A0A0A]/10">
                          <span className="flex items-center gap-1 text-[#0A0A0A] font-medium">
                            <Navigation className="w-2.5 h-2.5" /> {cur.voterPattern}
                          </span>
                          <span className="flex items-center gap-1 text-[#0A0A0A] font-bold uppercase tracking-wider">
                            <CheckCircle2 className="w-2.5 h-2.5" /> {cur.status}
                          </span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          ) : (
            /* Social Listening Network Artifact Visual */
            <div className="space-y-3">
              <div className="relative group bg-[#0A0A0A] border border-[#0A0A0A] overflow-hidden">
                <img
                  src="/images/indat-network-graph.svg"
                  alt="Grafo de Red Social Listening Indat"
                  className="w-full h-[240px] object-cover"
                />
                <button
                  onClick={() => setZoomGraph(true)}
                  className="absolute bottom-2 right-2 bg-black/80 text-white text-[9px] uppercase font-mono px-2 py-1 flex items-center gap-1 border border-white/20 hover:bg-black transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-3 h-3" /> Ampliar
                </button>
              </div>

              {/* Tweet / Publication Card Artifact */}
              <div className="p-3 bg-white border border-[#0A0A0A]/20 font-sans text-xs">
                <div className="flex items-center gap-2 mb-1.5 text-[11px]">
                  <div className="w-6 h-6 rounded-full bg-[#0A0A0A] text-[#F5F5F0] flex items-center justify-center font-bold text-[9px]">
                    IN
                  </div>
                  <div>
                    <span className="font-bold text-[#0A0A0A]">Indat</span>
                    <span className="text-[#888] text-[10px] ml-1">@WeAreIndat</span>
                  </div>
                </div>
                <p className="text-[#0A0A0A] text-[11px] leading-snug">
                  Caso <strong className="text-[#0A0A0A]">#Ayotzinapa</strong>: Indignación masiva en las redes. Análisis de comunidades y flujo de opinión pública.
                </p>
                <div className="mt-2 pt-2 border-t border-[#0A0A0A]/10 flex items-center justify-between text-[9px] text-[#666] font-mono">
                  <span>Análisis de redes complejas</span>
                  <span>Indat Digital</span>
                </div>
              </div>
            </div>
          )}

          <p className="font-sans text-[10px] uppercase tracking-widest text-[#0A0A0A]/40 text-center mt-3">
            {activeTab === 'tablet' ? 'Interactúa con los puntos para simular la ruta' : 'Visualización de datos de escucha social'}
          </p>

        </aside>

      </div>

      {/* Modal Zoom for Network Graph */}
      {zoomGraph && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setZoomGraph(false)}
        >
          <div
            className="bg-[#0A0A0A] max-w-4xl w-full border border-white/20 p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 text-white">
              <div>
                <h4 className="font-serif text-lg">Indat · Grafo de Interacciones de Red</h4>
                <p className="font-sans text-xs text-[#888]">
                  Análisis de comunidades en Twitter para el caso #Ayotzinapa (Nodos clave: Aristegui, La Jornada, Universal, Presidencia)
                </p>
              </div>
              <button
                onClick={() => setZoomGraph(false)}
                className="font-mono text-sm px-3 py-1 bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                ✕ Cerrar
              </button>
            </div>
            <img
              src="/images/indat-network-graph.svg"
              alt="Grafo de Red Complejo Indat"
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          </div>
        </div>
      )}
    </article>
  );
};
