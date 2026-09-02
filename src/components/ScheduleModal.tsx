import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'conversion',
    preferredTime: 'morning',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-modal-title"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#F5F5F0] border border-[#0A0A0A] p-8 sm:p-10 shadow-2xl z-10 text-[#0A0A0A] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-14 h-14 bg-[#0A0A0A] text-[#F5F5F0] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#0A0A0A]/50 block">
                Confirmación
              </span>
              <h3 className="font-serif text-3xl text-[#0A0A0A]">
                ¡Solicitud recibida!
              </h3>
              <p className="font-sans text-sm text-[#0A0A0A]/70 max-w-md mx-auto leading-relaxed">
                Gracias, <strong className="text-[#0A0A0A]">{formData.name}</strong>. Te responderé a{' '}
                <span className="underline">{formData.email}</span> en menos de 24 horas para confirmar el enlace de la videollamada.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-[#0A0A0A] text-[#F5F5F0] font-sans font-bold text-[10px] uppercase tracking-[0.25em] cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 pb-4 border-b border-[#0A0A0A]/10">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-[#0A0A0A]" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A0A0A]/50">
                  Agendar Sesión
                </span>
              </div>
              <h3 id="schedule-modal-title" className="font-serif text-3xl sm:text-4xl text-[#0A0A0A] leading-tight">
                Conversemos 20 minutos
              </h3>
              <p className="font-sans text-xs text-[#0A0A0A]/70 mt-2">
                Revisemos tu reto de producto, optimización de funnel o investigación conductual.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="sched-name" className="block text-[10px] uppercase font-bold tracking-wider text-[#0A0A0A]">
                    Tu Nombre *
                  </label>
                  <input
                    id="sched-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Martín González"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#0A0A0A]/25 text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="sched-email" className="block text-[10px] uppercase font-bold tracking-wider text-[#0A0A0A]">
                    Correo Electrónico *
                  </label>
                  <input
                    id="sched-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="martin@empresa.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#0A0A0A]/25 text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="sched-topic" className="block text-[10px] uppercase font-bold tracking-wider text-[#0A0A0A]">
                    Tema Principal
                  </label>
                  <select
                    id="sched-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#0A0A0A]/25 text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                  >
                    <option value="conversion">Optimización de Conversión / Checkout</option>
                    <option value="research">Investigación de Usuarios / Biometría</option>
                    <option value="territory">Diseño Territorial / Gamificación</option>
                    <option value="hiring">Oportunidad Laboral / Contratación</option>
                    <option value="other">Otro tema</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="sched-time" className="block text-[10px] uppercase font-bold tracking-wider text-[#0A0A0A]">
                    Preferencia de Horario
                  </label>
                  <select
                    id="sched-time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#0A0A0A]/25 text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                  >
                    <option value="morning">Mañana (09:00 - 12:00 CDMX)</option>
                    <option value="afternoon">Tarde (13:00 - 17:00 CDMX)</option>
                    <option value="flexible">Cualquier horario disponible</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="sched-msg" className="block text-[10px] uppercase font-bold tracking-wider text-[#0A0A0A]">
                  Detalles breves de tu proyecto (opcional)
                </label>
                <textarea
                  id="sched-msg"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="¿En qué consiste el reto o qué métrica te gustaría mover?"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#0A0A0A]/25 text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0A0A0A] text-[#F5F5F0] hover:bg-[#252525] transition-colors font-sans font-bold text-[11px] uppercase tracking-[0.25em] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirmar solicitud de llamada</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10px] text-[#0A0A0A]/50 text-center uppercase tracking-wider">
                Sin costo ni compromiso · Respuesta directa por email
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
