import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkedWith } from './components/WorkedWith';
import { CaseStudyIndat } from './components/CaseStudyIndat';
import { CaseStudyViverent } from './components/CaseStudyViverent';
import { CaseStudyCoppel } from './components/CaseStudyCoppel';
import { CaseStudyEyeTracking } from './components/CaseStudyEyeTracking';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ScheduleModal } from './components/ScheduleModal';

export default function App() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState<boolean>(false);

  const scrollToCases = () => {
    const el = document.getElementById('casos');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#0A0A0A] selection:bg-[#0A0A0A] selection:text-[#F5F5F0]">
      
      {/* Editorial Navigation */}
      <Navbar onOpenSchedule={() => setScheduleModalOpen(true)} />

      {/* Main Content */}
      <main id="top">
        {/* Editorial Hero */}
        <Hero onExploreCases={scrollToCases} />

        {/* Worked With / Collaborations */}
        <WorkedWith />

        {/* Case Studies Section */}
        <section id="casos" className="py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
            
            {/* Casos Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16 pb-8 border-b border-[#0A0A0A]/10">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-[#0A0A0A]" />
                  <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#0A0A0A]/50 uppercase">
                    03 / Casos de estudio
                  </p>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.035em] text-[#0A0A0A] leading-[1.04]">
                  Datos puestos en contexto.
                </h2>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-end">
                <p className="font-serif italic text-lg sm:text-xl text-[#0A0A0A]/80 leading-relaxed max-w-xl">
                  Una selección de proyectos donde la investigación no terminó en un reporte: se convirtió en una decisión de producto, una intervención o una herramienta funcional.
                </p>
              </div>
            </div>

            {/* Case Studies List */}
            <div className="space-y-6">
              <CaseStudyIndat />
              <CaseStudyViverent />
              <CaseStudyCoppel />
              <CaseStudyEyeTracking />
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Contact Closing Section */}
        <ContactSection onOpenSchedule={() => setScheduleModalOpen(true)} />
      </main>

      {/* 20-min Conversation Scheduler Modal */}
      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </div>
  );
}
