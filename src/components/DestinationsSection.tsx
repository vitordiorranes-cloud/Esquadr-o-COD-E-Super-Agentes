import React, { useState } from "react";
import { Star, Euro, Sun, MapPin, ChevronRight, Sparkles, Trees, Waves, Building2, ArrowRight, Compass, Map } from "lucide-react";
import { TRIAD_DESTINATIONS, STRATEGIC_CITIES } from "../data/destinations";
import { SpainMap } from "./SpainMap";

export const DestinationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mapa" | "triade">("mapa");
  const [selectedCityId, setSelectedCityId] = useState<string>("barcelona");
  const [regionFilter, setRegionFilter] = useState<string>("todas");

  const filteredStrategic =
    regionFilter === "todas"
      ? STRATEGIC_CITIES
      : STRATEGIC_CITIES.filter((c) => c.category === regionFilter);

  return (
    <section id="destinos-da-travessia" className="py-12 sm:py-14 bg-[#F4EFE6] border-y border-[#E4DDCF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho Compacto */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A31E22] block mb-1">
            OS DESTINOS DA TRAVESSIA
          </span>
          <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#13213F] mb-2">
            Uma rota real, segura e perfeitamente possível com o planejamento e a estratégia certa.
          </h2>
          <p className="text-xs sm:text-sm text-[#5A554E] leading-relaxed max-w-2xl mx-auto">
            A escolha consciente do seu destino define o custo de vida, a estabilidade financeira e a velocidade da sua conquista.
          </p>

          {/* Abas Rápidas de Navegação: Mapa Interativo Primeiro, depois Tríade */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white border border-[#E0D7C6] shadow-xs mt-4">
            <button
              onClick={() => setActiveTab("mapa")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "mapa"
                  ? "bg-[#A31E22] text-white shadow-xs"
                  : "text-[#5A554E] hover:text-[#13213F]"
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Mapa Interativo & Polos Estratégicos</span>
            </button>
            <button
              onClick={() => setActiveTab("triade")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "triade"
                  ? "bg-[#13213F] text-white shadow-xs"
                  : "text-[#5A554E] hover:text-[#13213F]"
              }`}
            >
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Tríade Principal (Madrid, Barcelona, Valência)</span>
            </button>
          </div>
        </div>

        {/* Visualização da Tríade Principal */}
        {activeTab === "triade" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TRIAD_DESTINATIONS.map((dest, idx) => {
                const isSelected = selectedCityId === dest.id;
                return (
                  <div
                    key={dest.id}
                    id={`cidade-card-${dest.id}`}
                    onMouseEnter={() => setSelectedCityId(dest.id)}
                    className={`bg-white rounded-2xl overflow-hidden shadow-xs transition-all duration-300 flex flex-col justify-between border-2 ${
                      isSelected
                        ? "border-[#A31E22] ring-2 ring-[#A31E22]/20 shadow-md -translate-y-0.5"
                        : "border-[#E0D7C6] hover:border-[#A31E22]/60"
                    }`}
                  >
                    <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-800 group">
                      <img
                        src={dest.photoUrl}
                        alt={dest.photoAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#A31E22] text-white text-[10px] font-mono uppercase font-bold tracking-wider shadow-xs">
                        <span>Top #{idx + 1}</span>
                        <span>· {dest.name}</span>
                      </div>
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-amber-300 border border-amber-400/30 text-[10px] font-bold">
                        {dest.badge}
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3 text-white">
                        <span className="text-[9px] font-mono text-amber-200 block uppercase tracking-wider">
                          {dest.region}
                        </span>
                        <h3 className="font-serif-brand text-xl font-bold text-white">
                          {dest.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-semibold text-[#A31E22] mb-1.5">
                          {dest.keyFeature}
                        </p>
                        <p className="text-xs text-[#4A453E] leading-relaxed mb-3">
                          {dest.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-2.5 border-t border-[#EFE9DF]">
                        <div className="flex items-center justify-between text-xs p-1.5 rounded-lg bg-[#FAF7F2] border border-[#E0D7C6]">
                          <span className="text-slate-500 font-medium flex items-center gap-1 text-[11px]">
                            <Euro className="w-3 h-3 text-emerald-600" /> Aluguel Médio (2Q):
                          </span>
                          <span className="font-bold text-[#13213F] text-xs">
                            {dest.rentEstimate}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-[#A31E22] font-serif-brand italic font-semibold">
                          <span className="text-[11px]">{dest.waitingCall}</span>
                          <ArrowRight className="w-3 h-3 text-[#A31E22]" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Rodapé Dinâmico da Tríade com Convite ao Mapa */}
            <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#E0D7C6] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#A31E22] shrink-0" />
                <span className="text-[#4A453E]">
                  Quer ver cidades mais econômicas (Sevilha, Málaga, Bilbao, Alicante)?
                </span>
              </div>
              <button
                onClick={() => setActiveTab("mapa")}
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#13213F] hover:bg-[#0C162B] text-white font-bold text-xs cursor-pointer transition-all"
              >
                <span>Explorar Mapa & Cidades Alternativas</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
              </button>
            </div>
          </div>
        )}

        {/* Visualização do Mapa Interativo & Outros Polos */}
        {activeTab === "mapa" && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <SpainMap
              hoveredCityId={selectedCityId}
              onCitySelect={(cityId) => setSelectedCityId(cityId)}
            />

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-serif-brand text-base sm:text-lg font-bold text-[#13213F]">
                    Outros Destinos Estratégicos na Espanha
                  </h3>
                  <p className="text-xs text-[#6B655D]">
                    Cidades com menor custo de vida e aluguéis até 45% mais acessíveis:
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1">
                  <button
                    onClick={() => setRegionFilter("todas")}
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      regionFilter === "todas"
                        ? "bg-[#13213F] text-white"
                        : "bg-white text-[#5A554E] border border-[#E0D7C6]"
                    }`}
                  >
                    Todas ({STRATEGIC_CITIES.length})
                  </button>
                  <button
                    onClick={() => setRegionFilter("sul")}
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      regionFilter === "sul"
                        ? "bg-[#13213F] text-white"
                        : "bg-white text-[#5A554E] border border-[#E0D7C6]"
                    }`}
                  >
                    Sul
                  </button>
                  <button
                    onClick={() => setRegionFilter("norte")}
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      regionFilter === "norte"
                        ? "bg-[#13213F] text-white"
                        : "bg-white text-[#5A554E] border border-[#E0D7C6]"
                    }`}
                  >
                    Norte
                  </button>
                  <button
                    onClick={() => setRegionFilter("centro")}
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      regionFilter === "centro"
                        ? "bg-[#13213F] text-white"
                        : "bg-white text-[#5A554E] border border-[#E0D7C6]"
                    }`}
                  >
                    Centro
                  </button>
                  <button
                    onClick={() => setRegionFilter("mediterraneo")}
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      regionFilter === "mediterraneo"
                        ? "bg-[#13213F] text-white"
                        : "bg-white text-[#5A554E] border border-[#E0D7C6]"
                    }`}
                  >
                    Leste
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredStrategic.map((c) => {
                  const isHovered = selectedCityId === c.id;
                  return (
                    <div
                      key={c.id}
                      id={`cidade-card-${c.id}`}
                      onMouseEnter={() => setSelectedCityId(c.id)}
                      className={`bg-[#FCFBF8] rounded-xl p-3 shadow-xs transition-all duration-200 flex items-start gap-3 border ${
                        isHovered
                          ? "border-[#A31E22] ring-1 ring-[#A31E22]/20 bg-white"
                          : "border-[#E0D7C6] hover:border-[#A31E22]/40 bg-white"
                      }`}
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 shadow-xs border border-[#E0D7C6] bg-slate-200">
                        <img
                          src={c.photoUrl}
                          alt={c.photoAlt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="font-serif-brand text-sm font-bold text-[#13213F] truncate">
                            {c.name}
                          </h4>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200 shrink-0">
                            {c.rentEstimate}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono uppercase text-[#A31E22] font-semibold">
                          {c.region}
                        </span>
                        <p className="text-[11px] text-[#4A453E] line-clamp-2 mt-0.5 leading-snug">
                          {c.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
