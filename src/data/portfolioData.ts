import { SkillItem, ExperienceItem } from '../types';

export const companies = [
  { name: 'SPEERO', tagline: 'CXL Agency · Product & CRO', role: 'Senior Analyst' },
  { name: 'COPPEL', tagline: 'Retail & Finanzas en México', role: 'UX Researcher' },
  { name: 'INDAT', tagline: 'Inteligencia & Estrategia', role: 'Research Director' },
  { name: 'BEWAY', tagline: 'Behavioral Science Consulting', role: 'Behavioral Consultant' },
];

export const skillsData: SkillItem[] = [
  {
    number: '01',
    title: 'Investigación de comportamiento del usuario',
    description: 'Entrevistas, social listening, etnografía digital y trabajo de campo para levantar la razón detrás del dato.',
    tools: ['Entrevistas a profundidad', 'Social Listening', 'Etnografía digital', 'Workshops'],
  },
  {
    number: '02',
    title: 'Analítica de producto y funnels',
    description: 'GA4, Amplitude y FullStory para encontrar en qué paso exacto del recorrido se pierde a la gente.',
    tools: ['GA4', 'Amplitude', 'FullStory', 'Hotjar'],
  },
  {
    number: '03',
    title: 'Diseño y priorización de experimentos A/B',
    description: 'De la hipótesis a la prueba: Optimizely, VWO y GrowthBook para validar antes de construir a gran escala.',
    tools: ['Optimizely', 'VWO', 'GrowthBook', 'Estadística Bayesiana / Frecuentista'],
  },
  {
    number: '04',
    title: 'Datos territoriales → decisiones de producto',
    description: 'Cruce de variables geográficas y de comportamiento en herramientas que alguien usa en campo, no solamente en un reporte.',
    tools: ['Geolocalización', 'Mapeo electoral & comercial', 'CUS / COS', 'UX en Movilidad'],
  },
  {
    number: '05',
    title: 'UX Writing colaborativo',
    description: 'Ajuste de microcopy y tono en momentos de fricción como checkout, formularios y cambios de precio.',
    tools: ['Pruebas de claridad', 'Copy de conversión', 'Microintervenciones conductuales'],
  },
  {
    number: '06',
    title: 'Comunicación ejecutiva de insights',
    description: 'Adaptar el mismo hallazgo según quién lo va a usar: consejo directivo, producto, diseño o ingeniería.',
    tools: ['Storytelling de datos', 'Reportes ejecutivos', 'Workshops de decisión'],
  },
  {
    number: '07',
    title: 'Investigación de campo',
    description: 'Recolección de datos in situ cuando todavía no existe una plataforma que los estructure: Excel, libreta y observación directa.',
    tools: ['Levantamiento in-situ', 'Think-aloud', 'Estudios de interceptación'],
  },
  {
    number: '08',
    title: 'Flujos de investigación acelerados con IA',
    description: 'ChatGPT, Claude y NotebookLM para sintetizar research más rápido sin perder rigor en el análisis.',
    tools: ['Sistemática de prompts', 'Síntesis cualitativa', 'NotebookLM', 'Claude'],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    status: 'Actual',
    role: 'Senior Analyst, Conversion Optimization & Product Insights',
    company: 'Speero',
    period: 'Julio 2022 — presente',
    location: 'USA / UE · Remoto',
    description: 'Analizo comportamiento de usuario, funnels de conversión y desempeño de producto para e-commerce, SaaS y lead generation, traduciendo señales de comportamiento en recomendaciones de experimentación, cambios de diseño y reportes ejecutivos.',
  },
  {
    status: 'Pasado',
    role: 'Behavioral Consultant',
    company: 'Beway · Contractor',
    period: 'Abril — diciembre 2024',
    location: 'España',
    description: 'Apliqué principios de ciencia conductual a productos y canales bancarios digitales; diseño y evaluación de intervenciones en sitio, app y email.',
  },
  {
    status: '',
    role: 'UX Researcher & Optimization Analyst',
    company: 'Coppel',
    period: 'Julio 2020 — enero 2023',
    location: 'México · Híbrido',
    description: 'Investigación de comportamiento en productos de e-commerce, crédito y pagos; usabilidad, encuestas y experimentación colaborando con Producto, BI, Data Science, Diseño e Ingeniería.',
  },
  {
    status: '',
    role: 'Strategic Research Direction',
    company: 'Indat',
    period: 'Febrero 2013 — julio 2020',
    location: 'México',
    description: 'Inteligencia de mercado y consumo para organizaciones públicas y privadas: social listening, análisis de sentimiento y etnografía digital para identificar tendencias y oportunidades.',
  },
];

export const viverentProperties = [
  { zone: 'Americana', rent: 8500, transport: 'Alta', cus: 2.4, occupancy: '96%', yield: '11.2%' },
  { zone: 'Centro Histórico', rent: 6900, transport: 'Alta', cus: 3.1, occupancy: '92%', yield: '12.8%' },
  { zone: 'Oblatos', rent: 4300, transport: 'Media', cus: 1.8, occupancy: '84%', yield: '9.5%' },
  { zone: 'Providencia', rent: 12400, transport: 'Media', cus: 2.0, occupancy: '94%', yield: '8.4%' },
  { zone: 'Moderna', rent: 7100, transport: 'Alta', cus: 2.7, occupancy: '98%', design: 'Modern', yield: '13.1%' },
  { zone: 'Analco', rent: 5200, transport: 'Media', cus: 2.4, occupancy: '89%', yield: '10.4%' },
  { zone: 'Chapultepec', rent: 9800, transport: 'Alta', cus: 2.9, occupancy: '97%', yield: '11.8%' },
];

export const contactInfo = {
  name: 'Lizette Campechano',
  role: 'Product Insights & Behavioral Research',
  email: 'lizette.campechano@gmail.com',
  linkedin: 'linkedin.com/in/lizette-campechano',
  location: 'CDMX · Remoto Global',
  availability: 'Lunes a Viernes · UTC-6 (Horario Centro)',
};

