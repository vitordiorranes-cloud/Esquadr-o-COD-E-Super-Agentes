import React, { useState, useEffect } from "react";
import { Sparkles, ChevronRight, CheckCircle2, Shield, AlertTriangle, Flag } from "lucide-react";

interface Step {
  step: number;
  kicker: string;
  title: string;
  desc: string;
  badge: string;
  heroQuote: string;
  highlight?: boolean;
}

// Boneco do Herói ilustrado em SVG: Capa vermelha, armadura náutica, escudo e expressão confiante
const HeroDoll: React.FC<{ size?: number; className?: string }> = ({ size = 52, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Boneco do Herói"
  >
    {/* Sombra suave no solo */}
    <ellipse cx="32" cy="60" rx="14" ry="3" fill="#13213F" opacity="0.25" />

    {/* Capa Heróica Vermelha Esvoaçante */}
    <path
      d="M20 25 C14 32, 10 46, 13 55 C16 54, 22 45, 25 36 Z"
      fill="#DC2626"
    />
    <path
      d="M17 28 C13 36, 11 48, 14 55 C15 54, 19 46, 21 38 Z"
      fill="#991B1B"
      opacity="0.6"
    />

    {/* Pernas e Botas Heróicas */}
    <rect x="25" y="44" width="5.5" height="11" rx="2" fill="#13213F" />
    <rect x="33.5" y="44" width="5.5" height="11" rx="2" fill="#13213F" />
    <rect x="23" y="52" width="7.5" height="4.5" rx="2" fill="#A31E22" />
    <rect x="33.5" y="52" width="7.5" height="4.5" rx="2" fill="#A31E22" />

    {/* Tronco / Armadura do Argonauta */}
    <rect x="22" y="24" width="20" height="21" rx="5" fill="#13213F" stroke="#E4DDCF" strokeWidth="1.5" />
    {/* Cinto e Brasão */}
    <rect x="22" y="36" width="20" height="4" fill="#A31E22" />
    <circle cx="32" cy="38" r="3" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />

    {/* Pescoço */}
    <rect x="29" y="21" width="6" height="4" fill="#FCD34D" />

    {/* Cabeça do Herói */}
    <circle cx="32" cy="15" r="9.5" fill="#FDF2E9" stroke="#13213F" strokeWidth="1.8" />

    {/* Cabelo e Elmo/Crista do Herói */}
    <path
      d="M23 14 C23 8, 30 5, 36 6 C40 8, 41 12, 41 14 C38 12, 34 11, 29 13 Z"
      fill="#A31E22"
    />
    <path d="M30 4 C31 2, 33 2, 34 4 L33 7 L31 7 Z" fill="#F59E0B" />

    {/* Olhos determinados e confiantes */}
    <circle cx="28.5" cy="14.5" r="1.3" fill="#13213F" />
    <circle cx="35.5" cy="14.5" r="1.3" fill="#13213F" />
    <circle cx="29" cy="14" r="0.5" fill="#FFFFFF" />
    <circle cx="36" cy="14" r="0.5" fill="#FFFFFF" />

    {/* Sorriso do Herói */}
    <path d="M29 18 Q32 21 35 18" stroke="#13213F" strokeWidth="1.4" strokeLinecap="round" />

    {/* Escudo Dourado de Proteção (com brasão espanhol / COD-E) */}
    <g transform="translate(37, 24)">
      <path
        d="M6 1 C12 1, 14 6, 12 14 C10 19, 6 23, 6 23 C6 23, 2 19, 0 14 C-2 6, 0 1, 6 1 Z"
        fill="#F59E0B"
        stroke="#92400E"
        strokeWidth="1.2"
      />
      <path d="M6 5 L6 19 M2 11 L10 11" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="6" cy="11" r="2.2" fill="#DC2626" />
    </g>

    {/* Braço Esquerdo empunhando a rota */}
    <path d="M22 26 L17 32 L20 35" stroke="#13213F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const STEPS: Step[] = [
  {
    step: 1,
    kicker: "Etapa 1 · O Chamado",
    title: "A Porta Certa (Cada Visto Tem Sua Regra)",
    desc: "Você descobre qual via de entrada existe para o seu perfil e sua especificidade jurídica. ATENÇÃO: nem todo visto dá direito à nacionalidade em 2 anos — visto de estudante (estância), por exemplo, não conta tempo para o Art. 22 do Código Civil Espanhol, enquanto vistos de residência (Nômade Digital, Não Lucrativa, etc.) contam. O Esquadrão mapeia a via exata para o seu objetivo.",
    badge: "No Brasil",
    heroQuote: "Mapeamento da via compatível: residência legal qualificada vs. simples estância."
  },
  {
    step: 2,
    kicker: "Etapa 2 · A Travessia",
    title: "O Pouso & Fixação Legal",
    desc: "Você desembarca e passa a viver na Espanha como residente legal qualificado. É aqui que o relógio oficial do seu tipo de visto começa a correr — cada modalidade tem suas próprias regras de renda mínima comprovada, tributação e documentação municipal.",
    badge: "Ano 0",
    heroQuote: "NIE, TIE, empadronamento municipal e cumprimento dos requisitos da sua via."
  },
  {
    step: 3,
    kicker: "Etapa 3 · A Provação",
    title: "A Contagem Silenciosa (Residência Efetiva)",
    desc: "A etapa mais longa e silenciosa. Residência legal e continuada mantida. Cada tipo de visto impõe limites específicos de ausências do território espanhol: exceder o teto de dias fora do país zera a contagem e compromete o direito aos 2 anos.",
    badge: "24 Meses",
    heroQuote: "Gestão do teto de ausências e renovações dentro das normas da sua modalidade."
  },
  {
    step: 4,
    kicker: "Etapa 4 · A Consagração",
    title: "O Protocolo de Nacionalidade",
    desc: "Cumprido o período de 2 anos de residência legal qualificada (privilégio do Art. 22 do Código Civil Espanhol para cidadãos de países ibero-americanos), você protocola a cidadania. Vistos de estância prévia exigem modificação formal antes da contagem.",
    badge: "Art. 22 CC",
    heroQuote: "Exame DELE A2, teste CCSE de conhecimentos constitucionais e pasta blindada."
  },
  {
    step: 5,
    kicker: "O Destino · A Glória",
    title: "O Passaporte Europeu",
    desc: "Cidadania espanhola concedida pelo Ministério da Justiça e, com ela, a cidadania plena da União Europeia: viver, trabalhar, empreender e circular livremente nos 27 países do bloco europeu. Um legado vitalício e hereditário para seus filhos.",
    badge: "União Europeia",
    heroQuote: "Passaporte vermelho na mão para você e segurança de vida para as próximas gerações.",
    highlight: true
  }
];

export const HeroJourneySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const current = STEPS[activeStep - 1];

  // Percentual para a barra de progresso
  const progressPercent = ((activeStep - 1) / (STEPS.length - 1)) * 100;

  return (
    <section className="py-20 bg-[#F7F3EC] border-b border-[#E4DDCF] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#A31E22] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A31E22]" />
            <span>A Jornada do Herói · 5 Etapas em Ordem</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold text-[#13213F] leading-tight tracking-tight mb-4">
            Da decisão ao passaporte.<br />
            Cinco etapas, <span className="text-[#A31E22] italic">em ordem</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#6B655D] leading-relaxed max-w-2xl font-sans">
            Imigrar não é um salto no escuro. É a rota do herói com começo, meio e vitória — e a ordem importa mais do que a pressa. Veja onde você está hoje e como cada modalidade de visto se encaixa no caminho.
          </p>
        </div>

        {/* Trilha do Herói Interativa */}
        <div className="bg-white border border-[#E4DDCF] rounded-3xl p-6 sm:p-10 shadow-sm mb-8">
          {/* Barra de Progresso Superior com o Boneco do Herói em Movimento */}
          <div className="relative mb-14 sm:mb-20 pt-8">
            <div className="h-2.5 bg-[#E4DDCF] rounded-full w-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#13213F] via-[#A31E22] to-[#DC2626] transition-all duration-700 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Marcador Flutuante: Boneco do Herói Avançando na Trilha */}
            <div
              className="absolute -top-6 -translate-x-1/2 flex flex-col items-center transition-all duration-700 ease-out"
              style={{ left: `${Math.max(4, Math.min(96, progressPercent))}%` }}
            >
              <div className="relative transition-transform duration-300 transform hover:scale-110">
                <HeroDoll size={54} className="drop-shadow-md animate-bounce" />
              </div>
              <span className="text-[10px] font-mono font-black uppercase text-[#A31E22] bg-white px-2.5 py-0.5 rounded-full border border-[#E4DDCF] shadow-sm whitespace-nowrap mt-0.5">
                Herói na Etapa {activeStep}
              </span>
            </div>
          </div>

          {/* Grid dos 5 Degraus Interativos */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5 mb-8">
            {STEPS.map((s) => {
              const isCurrent = s.step === activeStep;
              const isPast = s.step < activeStep;

              return (
                <button
                  key={s.step}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveStep(s.step);
                  }}
                  className={`relative text-left p-4 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    isCurrent
                      ? "bg-[#13213F] text-white border-[#13213F] shadow-md scale-[1.02]"
                      : isPast
                      ? "bg-[#F7F3EC] text-[#13213F] border-[#E4DDCF] hover:border-[#13213F]"
                      : "bg-white text-[#6B655D] border-[#E4DDCF] hover:border-slate-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-serif-brand font-bold text-sm ${
                        isCurrent
                          ? "bg-[#A31E22] text-white"
                          : isPast
                          ? "bg-[#13213F] text-white"
                          : "bg-[#E4DDCF] text-[#6B655D]"
                      }`}
                    >
                      {isPast ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                        isCurrent
                          ? "bg-white/20 text-white"
                          : "bg-[#E4DDCF]/60 text-[#6B655D]"
                      }`}
                    >
                      {s.badge}
                    </span>
                  </div>

                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider block mb-1 font-bold ${
                      isCurrent ? "text-amber-300" : "text-[#A31E22]"
                    }`}
                  >
                    {s.kicker.split("·")[1] || s.kicker}
                  </span>

                  <h3
                    className={`font-serif-brand text-base font-bold leading-tight ${
                      isCurrent ? "text-white" : "text-[#13213F]"
                    }`}
                  >
                    {s.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Destaque Detalhado da Etapa Selecionada com o Boneco do Herói em Destaque */}
          <div className="bg-[#FAF7F2] border-2 border-[#E4DDCF] rounded-2xl p-6 sm:p-8 relative">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-[#A31E22] text-white">
                    {current.kicker}
                  </span>
                  <span className="text-xs text-[#6B655D] font-mono">
                    Marco {current.step} de 5
                  </span>
                </div>
                <h4 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#13213F]">
                  {current.title}
                </h4>
                <p className="text-sm sm:text-base text-[#6B655D] leading-relaxed">
                  {current.desc}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#13213F]">
                  <Shield className="w-4 h-4 text-[#A31E22] shrink-0" />
                  <span>{current.heroQuote}</span>
                </div>
              </div>

              {/* Controles de Rota e Visualização do Boneco do Herói */}
              <div className="flex flex-col items-center sm:items-end gap-3 shrink-0 bg-white p-4 rounded-xl border border-[#E4DDCF]">
                <div className="flex items-center gap-3">
                  <HeroDoll size={48} />
                  <div className="text-left">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#A31E22] block">
                      Argonauta COD-E
                    </span>
                    <span className="text-xs font-serif-brand font-bold text-[#13213F]">
                      Etapa {activeStep}: {current.badge}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 w-full pt-2 border-t border-[#E4DDCF]">
                  <button
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#13213F] hover:bg-[#0C162B] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                  >
                    <span>{activeStep === 5 ? "Recomeçar" : "Avançar"}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
                  </button>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="px-3 py-2 text-xs font-mono font-bold rounded-lg border border-[#E4DDCF] text-[#6B655D] hover:text-[#13213F] bg-[#FAF7F2] cursor-pointer"
                    title={isAutoPlaying ? "Pausar" : "Simular jornada"}
                  >
                    {isAutoPlaying ? "⏸" : "▶"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BOX CRÍTICO: ESPECIFICIDADE JURÍDICA DOS VISTOS & OS 2 ANOS */}
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#FFFBEB] border-2 border-[#F59E0B]/50 text-[#13213F]">
            <div className="flex items-start gap-3.5">
              <AlertTriangle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
              <div className="space-y-2 text-xs sm:text-sm leading-relaxed">
                <div className="flex flex-wrap items-center gap-2">
                  <strong className="font-serif-brand text-sm sm:text-base text-[#92400E]">
                    Aviso Jurídico Crucial: Nem todo tipo de visto conta para a cidadania em 2 anos
                  </strong>
                  <span className="px-2 py-0.5 rounded bg-[#FDE68A] text-[#92400E] font-mono text-[10px] font-bold uppercase">
                    Art. 22 Código Civil Espanhol
                  </span>
                </div>
                <p className="text-[#78350F]">
                  A regra especial dos <strong>2 anos para brasileiros</strong> exige <strong>residência legal e continuada</strong> em solo espanhol. Cada via tem sua especificidade e seu tempo de validação:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1 text-xs text-[#78350F]">
                  <li className="flex items-start gap-2 bg-white/70 p-2.5 rounded-lg border border-[#FDE68A]">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>
                      <strong>Vistos de Residência Qualificada:</strong> Nômade Digital (Lei de Startups), Residência Não Lucrativa, Trabalho por Conta Própria/Alheia e Empreendedor <em>computam residência legal</em> para os 2 anos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 bg-white/70 p-2.5 rounded-lg border border-[#FDE68A]">
                    <span className="text-red-500 font-bold">⚠️</span>
                    <span>
                      <strong>Visto de Estudante (Estância):</strong> É classificado como <em>estância por estudos</em>, NÃO como residência. Portanto, <em>não conta diretamente</em> para os 2 anos, a não ser após modificação legal para residência.
                    </span>
                  </li>
                </ul>
                <p className="text-[11px] text-[#92400E] font-medium pt-1">
                  É exatamente por isso que <strong>O ESTRATEGISTA</strong> e <strong>O CAPITÃO</strong> do Esquadrão COD-E avaliam previamente sua renda e seu objetivo para você não queimar tempo nem dinheiro na porta errada.
                </p>
              </div>
            </div>
          </div>

          {/* Nota Estratégica: Onde o Esquadrão Atua */}
          <div className="mt-6 pt-5 border-t border-[#E4DDCF] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#13213F] leading-relaxed">
            <p className="max-w-2xl">
              <strong>Onde o Esquadrão entra:</strong> os 7 Super Agentes caminham com você da
              <strong> Etapa 1 à Etapa 2</strong> — da decisão ao pouso seguro. É o trecho mais curto da linha do tempo e o único em que uma escolha errada de visto custa anos de atraso.
            </p>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#A31E22]/10 border border-[#A31E22]/30 text-[#A31E22] font-mono text-xs font-bold">
                <Flag className="w-3.5 h-3.5" />
                Blindagem Preventiva
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
