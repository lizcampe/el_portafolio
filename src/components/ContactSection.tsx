import React from 'react';
import { Mail, Linkedin, ArrowUpRight, Clock, MapPin, Calendar } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenSchedule: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenSchedule }) => {
  return (
    <footer id="contacto" className="bg-[#EBEBE5]/80 pt-20 pb-16 border-t border-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#0A0A0A]/15">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#0A0A0A]" />
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#0A0A0A]/50 uppercase">
                06 / Contacto & Colaboración
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.035em] text-[#0A0A0A] leading-[1.04]">
              ¿Tienes un problema de producto o comportamiento por resolver?
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#0A0A0A]/80 leading-relaxed max-w-xl">
              Hablemos 20 minutos sin compromiso para revisar si puedo ayudarte a desbloquear una decisión o entender a tus usuarios.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                id="contact-schedule-cta"
                onClick={onOpenSchedule}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0A0A0A] text-[#F5F5F0] hover:bg-[#252525] transition-all font-sans font-bold text-[11px] uppercase tracking-[0.25em] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar llamada (20 min)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F5F5F0] transition-all font-sans font-bold text-[11px] uppercase tracking-[0.25em]"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar correo directo</span>
              </a>
            </div>
          </div>

          {/* Direct channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:border-l lg:border-[#0A0A0A]/15 lg:pl-12">
            <div>
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#0A0A0A]/50 block mb-4">
                Información de contacto
              </span>
              
              <div className="space-y-4 font-sans text-sm">
                <div>
                  <span className="block text-[9px] text-[#0A0A0A]/50 uppercase font-bold tracking-wider mb-0.5">
                    Correo electrónico
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-serif text-lg text-[#0A0A0A] hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div>
                  <span className="block text-[9px] text-[#0A0A0A]/50 uppercase font-bold tracking-wider mb-0.5">
                    Red profesional
                  </span>
                  <a
                    href={`https://${contactInfo.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-serif text-lg text-[#0A0A0A] hover:underline"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>{contactInfo.linkedin}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0A0A]/50" />
                  </a>
                </div>

                <div className="pt-2">
                  <span className="block text-[9px] text-[#0A0A0A]/50 uppercase font-bold tracking-wider mb-0.5">
                    Zona horaria & Disponibilidad
                  </span>
                  <p className="text-xs text-[#0A0A0A]/70 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#0A0A0A]" />
                    <span>{contactInfo.availability}</span>
                  </p>
                  <p className="text-xs text-[#0A0A0A]/70 flex items-center gap-2 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0A0A0A]" />
                    <span>{contactInfo.location}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border border-[#0A0A0A]/15 text-xs font-sans">
              <span className="font-bold text-[#0A0A0A] uppercase tracking-wider text-[9px] block mb-1">
                Nota para reclutadores & líderes de producto
              </span>
              <p className="text-[#0A0A0A]/70 text-[11px] leading-relaxed">
                Disponible para roles estratégicos de Product Research, Conversion Optimization y Behavioral Insights en esquemas remoto o híbrido.
              </p>
            </div>

          </div>

        </div>

        {/* Editorial Sub-Footer */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans text-[10px] uppercase tracking-[0.25em] text-[#0A0A0A]/50">
          <p>© {new Date().getFullYear()} Lizette Campechano. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Portfolio Edition No. 04</span>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#0A0A0A] hover:underline font-bold"
            >
              Volver arriba ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
