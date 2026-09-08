import React, { useState } from "react";
import { Sparkles, Zap, ChevronRight, Shield, X, AlertTriangle, CircleHelp } from "lucide-react";
import { AGENTS_DATA, MASCOTS_CONFIG } from "../data/agents";
import { AgentAvatar } from "./AgentAvatar";
import { Agent } from "../types";

interface AgentsSectionProps {
  onCtaClick?: () => void;
}

export const AgentsSection: React.FC<AgentsSectionProps> = ({ onCtaClick }) => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  return (
    <section
      id="esquadrao-agentes"
      className="py-20 bg-[#0A101D] text-[#F7F3EC] relative overflow-hidden border-b border-slate-800"
    >
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#A31E22]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#1E3A8A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-[#059669]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Cabeçalho do Esquadrão */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A31E22]/20 border border-[#A31E22]/60 text-[#FCA5A5] text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>O Esquadrão COD-E · 7 Super Agentes</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Sete agentes.<br />
            Um esquadrão.<br />
            <span className="text-[#DC2626]">Nenhuma etapa sozinho.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            E tem um deles que comanda os outros seis. O Capitão lê o seu tabuleiro inteiro,
            monta a sua rota e aciona cada agente na hora exata da sua travessia.
          </p>
        </div>

        {/* Grid dos 7 Agentes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {AGENTS_DATA.map((agent) => {
            const mascot = MASCOTS_CONFIG[agent.id] || {
              mascotName: agent.name,
              badgeColor: "bg-slate-700 text-slate-200 border-slate-600",
              accentHex: "#F59E0B",
              cardBg: "from-[#131D33] to-[#0F172A]",
              borderColor: "border-slate-700",
              glowColor: "",
              superpower: agent.role,
              personality: agent.resolves,
            };
            const isCommander = agent.isCommander;

            return (
              <div
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className={`group relative rounded-2xl p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between bg-gradient-to-b ${mascot.cardBg} border-2 ${mascot.borderColor} ${mascot.glowColor} hover:-translate-y-1.5 hover:shadow-2xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-black text-slate-400 group-hover:text-amber-300 transition-colors">
                      #{agent.number}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${mascot.badgeColor}`}
                    >
                      {isCommander ? "⭐ Comandante" : mascot.mascotName}
                    </span>
                  </div>

                  <div className="flex justify-center my-3 relative">
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity"
                      style={{ backgroundColor: mascot.accentHex }}
                    />
                    <AgentAvatar agentId={agent.id} size={110} />
                  </div>

                  <div className="text-center mb-3">
                    <h3 className="font-serif-brand text-xl font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                      {agent.name}
                    </h3>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mt-0.5">
                      {agent.role}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 mb-3">
                    <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1 mb-1">
                      <Zap className="w-3 h-3 text-amber-400 shrink-0" />
                      {mascot.superpower}
                    </span>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {agent.resolves}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-bold group-hover:text-amber-300">
                  <span>Abrir ficha do herói</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloco de Chamada Inferior */}
        <div className="mt-14 text-center bg-gradient-to-r from-[#141E34] via-[#1A2642] to-[#141E34] border border-[#A31E22]/60 rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold uppercase mb-3">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Acesso Vitalício aos 7 Heróis + Confraria Europa</span>
          </div>
          <h3 className="font-serif-brand text-xl sm:text-2xl font-bold text-white mb-2">
            Eles trabalham 24 horas por dia para a sua família.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-xl mx-auto">
            Sem mensalidades, sem custos surpresa por hora de consultoria. Você adquire uma vez e usa por toda a jornada até o passaporte europeu.
          </p>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#A31E22] to-[#B91C1C] hover:from-[#EF4444] hover:to-[#DC2626] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(220,38,38,0.7)] hover:scale-105 transition-all cursor-pointer border border-amber-300/40"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>CONVOCAR MEU TIME DE SUPER AGENTES</span>
          </button>
        </div>
      </div>

      {/* Modal Ficha do Agente */}
      {selectedAgent && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedAgent(null)}
        >
          <div
            className="bg-[#121A2D] border-2 border-slate-600 w-full max-w-lg rounded-3xl p-6 sm:p-8 text-white relative shadow-[0_25px_60px_rgba(0,0,0,0.8)] my-8 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAgent(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
              aria-label="Fechar ficha"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-5 mb-6 pb-6 border-b border-slate-700 text-center sm:text-left">
              <div className="relative shrink-0">
                <div
                  className="absolute inset-0 rounded-full blur-lg opacity-40"
                  style={{
                    backgroundColor:
                      MASCOTS_CONFIG[selectedAgent.id]?.accentHex || "#F59E0B",
                  }}
                />
                <AgentAvatar agentId={selectedAgent.id} size={110} />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="font-mono text-xs text-amber-400 font-bold">
                    AGENTE #{selectedAgent.number}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      MASCOTS_CONFIG[selectedAgent.id]?.badgeColor
                    }`}
                  >
                    {MASCOTS_CONFIG[selectedAgent.id]?.mascotName}
                  </span>
                </div>
                <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-white">
                  {selectedAgent.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                  {selectedAgent.role}
                </p>
                <p className="text-xs text-amber-300/90 mt-1 font-sans italic">
                  “{MASCOTS_CONFIG[selectedAgent.id]?.personality}”
                </p>
              </div>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="p-3.5 rounded-xl bg-[#19243C] border border-slate-700/80">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  O que ele resolve & Função
                </span>
                <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">
                  {selectedAgent.resolves}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#132A26] border border-emerald-900/60">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  O peso que tira das suas costas
                </span>
                <p className="text-emerald-100 leading-relaxed text-xs sm:text-sm">
                  {selectedAgent.relieves}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#2A1519] border border-red-900/60">
                <span className="text-xs font-bold text-red-300 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  Vilão / Inimigo Combatido
                </span>
                <p className="text-red-200 leading-relaxed text-xs sm:text-sm">
                  {selectedAgent.enemy}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <CircleHelp className="w-3.5 h-3.5 text-amber-400" />
                  Exemplo de comando real enviado a ele
                </span>
                <p className="italic text-slate-300 text-xs sm:text-sm">
                  “{selectedAgent.quote}”
                </p>
              </div>

              <div className="text-xs text-slate-400 pt-2 border-t border-slate-700">
                <strong className="text-slate-200">Custo de tentar sem ele: </strong>
                {selectedAgent.costAlone}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSelectedAgent(null);
                  onCtaClick?.();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#A31E22] hover:from-[#EF4444] hover:to-[#DC2626] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all cursor-pointer"
              >
                QUERO ESTE AGENTE NO MEU TIME
              </button>
              <button
                onClick={() => setSelectedAgent(null)}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
