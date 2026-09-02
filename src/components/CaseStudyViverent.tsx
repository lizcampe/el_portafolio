import React, { useState } from 'react';
import { ArrowUpDown, Table, Search } from 'lucide-react';
import { viverentProperties } from '../data/portfolioData';

export const CaseStudyViverent: React.FC = () => {
  const [sortField, setSortField] = useState<'rent' | 'cus' | 'zone'>('rent');
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sortedData = [...viverentProperties]
    .filter((item) => item.zone.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

      if (typeof valA === 'string') {
        return sortAsc
          ? (valA as string).localeCompare(valB as string)
          : (valB as string).localeCompare(valA as string);
      }
      return sortAsc ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
    });

  const toggleSort = (field: 'rent' | 'cus' | 'zone') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    <article id="caso-02" className="pt-16 pb-24 border-t border-[#0A0A0A]/15">
      
      {/* Editorial Topline */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-baseline mb-12 pb-6 border-b border-[#0A0A0A]/10 font-sans text-xs">
        <div className="sm:col-span-2 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#0A0A0A] flex items-center justify-center font-sans text-[10px] font-bold">
            02
          </div>
          <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#0A0A0A]/50">
            Case Study
          </span>
        </div>

        <div className="sm:col-span-5">
          <span className="block font-sans text-[9px] uppercase tracking-[0.25em] text-[#0A0A0A]/50 mb-1">
            Cliente
          </span>
          <span className="font-serif italic text-base text-[#0A0A0A]">Comunidad Vive de las Rentas / Viverent</span>
        </div>

        <div className="sm:col-span-5">
          <span className="block font-sans text-[9px] uppercase tracking-[0.25em] text-[#0A0A0A]/50 mb-1">
            Mi rol
          </span>
          <span className="text-[#0A0A0A] font-medium">Recolección de datos en campo</span>
        </div>
      </div>

      {/* Grid: Narrative vs Spreadsheet visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Copy */}
        <div className="lg:col-span-7 space-y-6 text-[#0A0A0A]/80 leading-relaxed font-sans text-[15px]">
          
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#0A0A0A] leading-[1.08] mb-6">
            Zonas de oportunidad para inversión y renta
          </h3>

          <p className="font-serif italic text-lg sm:text-xl text-[#0A0A0A] leading-relaxed">
            Una comunidad de personas buscaba dónde invertir en cuartos y propiedades para renta, en un mercado donde lo más popular o lo más caro no siempre es lo mejor ubicado.
          </p>

          <p>
            Levanté manualmente, zona por zona, las variables que de verdad importaban: transporte, precio de renta, CUS y COS —coeficientes de uso y ocupación del suelo—.
          </p>

          <blockquote className="my-6 pl-5 border-l-2 border-[#0A0A0A] font-serif text-lg text-[#0A0A0A] italic">
            &ldquo;Una búsqueda que empieza en el dato territorial y normativo, no en la fotografía de la propiedad.&rdquo;
          </blockquote>

          {/* Result */}
          <div className="mt-10 pt-6 border-t border-[#0A0A0A]">
            <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#0A0A0A]/50 uppercase block mb-2">
              Resultado
            </span>
            <p className="font-serif text-lg text-[#0A0A0A] leading-snug">
              Ese directorio inicial de zonas fue la fase local y base estructurada para el modelo posterior de Viverent.
            </p>
          </div>
        </div>

        {/* Interactive Spreadsheet Visual */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 border border-[#0A0A0A]/20 bg-[#F5F5F0] p-6 shadow-xs">
          
          <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#0A0A0A]/10">
            <div className="flex items-center gap-2">
              <Table className="w-3.5 h-3.5 text-[#0A0A0A]" />
              <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-[#0A0A0A] uppercase">
                Matriz Territorial · Coeficientes CUS
              </span>
            </div>
            <div className="font-sans text-[9px] text-[#0A0A0A] uppercase tracking-wider bg-[#EBEBE5] px-2 py-0.5 font-bold">
              {sortedData.length} zonas analizadas
            </div>
          </div>

          {/* Search bar inside spreadsheet */}
          <div className="relative mb-3">
            <Search className="w-3.5 h-3.5 text-[#0A0A0A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filtrar por nombre de zona..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 font-sans text-xs bg-white border border-[#0A0A0A]/20 text-[#0A0A0A] placeholder-[#0A0A0A]/40 focus:outline-none focus:border-[#0A0A0A]"
            />
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto border border-[#0A0A0A]/20 bg-white">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#EBEBE5] border-b border-[#0A0A0A]/15 text-[#0A0A0A] font-sans font-bold text-[9px] uppercase tracking-wider">
                  <th
                    onClick={() => toggleSort('zone')}
                    className="py-2.5 px-3 cursor-pointer hover:bg-black hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      <span>Zona</span>
                      <ArrowUpDown className="w-2.5 h-2.5 opacity-60" />
                    </div>
                  </th>
                  <th
                    onClick={() => toggleSort('rent')}
                    className="py-2.5 px-3 cursor-pointer hover:bg-black hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      <span>Renta</span>
                      <ArrowUpDown className="w-2.5 h-2.5 opacity-60" />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">Transp.</th>
                  <th
                    onClick={() => toggleSort('cus')}
                    className="py-2.5 px-3 cursor-pointer hover:bg-black hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      <span>CUS</span>
                      <ArrowUpDown className="w-2.5 h-2.5 opacity-60" />
                    </div>
                  </th>
                  <th className="py-2.5 px-3 text-right">Yield</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0A0A0A]/10 font-sans text-xs">
                {sortedData.map((row, idx) => (
                  <tr
                    key={row.zone}
                    className={`hover:bg-[#F5F5F0] transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF7]'
                    }`}
                  >
                    <td className="py-2 px-3 font-medium text-[#0A0A0A]">{row.zone}</td>
                    <td className="py-2 px-3 font-mono font-bold text-[#0A0A0A]">
                      ${row.rent.toLocaleString()}
                    </td>
                    <td className="py-2 px-3">
                      <span className="font-sans text-[9px] uppercase tracking-wider text-[#0A0A0A]/70">
                        {row.transport}
                      </span>
                    </td>
                    <td className="py-2 px-3 font-mono font-medium text-[#0A0A0A]/80">{row.cus.toFixed(1)}</td>
                    <td className="py-2 px-3 text-right font-mono font-bold text-[#0A0A0A]">
                      {row.yield}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 pt-2 border-t border-[#0A0A0A]/10 flex items-center justify-between font-sans text-[9px] text-[#0A0A0A]/50 uppercase tracking-wider">
            <span>CUS: Coef. Utilización Suelo</span>
            <span>Orden: <strong className="text-[#0A0A0A]">{sortField}</strong></span>
          </div>

        </aside>

      </div>
    </article>
  );
};
