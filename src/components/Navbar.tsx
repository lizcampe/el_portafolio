import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['casos', 'skills', 'experiencia', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F5F5F0]/95 backdrop-blur-md border-b border-[#0A0A0A]/10 shadow-xs'
          : 'bg-[#F5F5F0]/90 backdrop-blur-xs border-b border-[#0A0A0A]/10'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 h-[76px] flex items-center justify-between">
        
        {/* Editorial Brand Title */}
        <div className="flex items-baseline gap-3.5">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-sans font-black text-lg sm:text-xl tracking-tighter text-[#0A0A0A] hover:opacity-75 transition-opacity"
            id="nav-brand-logo"
          >
            LIZETTE CAMPECHANO.
          </a>
          <span className="hidden sm:inline-block font-sans text-[9px] uppercase tracking-[0.35em] text-[#0A0A0A]/45">
            Folio No. 04 · Insights
          </span>
        </div>

        {/* Editorial Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-[11px] uppercase tracking-[0.2em]" aria-label="Navegación principal">
          <button
            id="nav-link-casos"
            onClick={() => scrollTo('casos')}
            className={`transition-all cursor-pointer hover:line-through ${
              activeSection === 'casos' ? 'font-bold border-b border-[#0A0A0A] pb-0.5 text-[#0A0A0A]' : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
            }`}
          >
            Casos
          </button>
          <button
            id="nav-link-skills"
            onClick={() => scrollTo('skills')}
            className={`transition-all cursor-pointer hover:line-through ${
              activeSection === 'skills' ? 'font-bold border-b border-[#0A0A0A] pb-0.5 text-[#0A0A0A]' : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
            }`}
          >
            Skills
          </button>
          <button
            id="nav-link-experiencia"
            onClick={() => scrollTo('experiencia')}
            className={`transition-all cursor-pointer hover:line-through ${
              activeSection === 'experiencia' ? 'font-bold border-b border-[#0A0A0A] pb-0.5 text-[#0A0A0A]' : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
            }`}
          >
            Experiencia
          </button>
          <button
            id="nav-link-contacto"
            onClick={() => scrollTo('contacto')}
            className={`transition-all cursor-pointer hover:line-through ${
              activeSection === 'contacto' ? 'font-bold border-b border-[#0A0A0A] pb-0.5 text-[#0A0A0A]' : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
            }`}
          >
            Contacto
          </button>

          <button
            id="nav-cta-agendar"
            onClick={onOpenSchedule}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A0A0A] text-[#F5F5F0] hover:bg-[#252525] transition-all text-[10px] font-sans uppercase tracking-[0.25em] font-bold cursor-pointer"
          >
            <span>Agenda 20 min</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            id="nav-mobile-cta"
            onClick={onOpenSchedule}
            className="px-3 py-1.5 bg-[#0A0A0A] text-[#F5F5F0] text-[10px] font-sans uppercase tracking-wider font-bold cursor-pointer"
          >
            Contacto
          </button>
          <button
            id="nav-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0A0A0A] hover:opacity-70"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F5F0] border-b border-[#0A0A0A]/15 px-6 py-5 space-y-3 font-sans uppercase tracking-[0.2em] text-xs">
          <button
            onClick={() => scrollTo('casos')}
            className="block w-full text-left py-2 text-[#0A0A0A] hover:line-through"
          >
            03 · Casos de estudio
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="block w-full text-left py-2 text-[#0A0A0A] hover:line-through"
          >
            04 · Skills & Servicios
          </button>
          <button
            onClick={() => scrollTo('experiencia')}
            className="block w-full text-left py-2 text-[#0A0A0A] hover:line-through"
          >
            05 · Historial profesional
          </button>
          <button
            onClick={() => scrollTo('contacto')}
            className="block w-full text-left py-2 text-[#0A0A0A] hover:line-through"
          >
            06 · Contacto
          </button>
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full text-center py-3 bg-[#0A0A0A] text-[#F5F5F0] font-sans text-[10px] uppercase tracking-[0.25em] font-bold"
            >
              Agendar llamada de 20 min
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
