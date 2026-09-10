import React, { useState, useEffect } from "react";
import {
  Users,
  Sparkles,
  CheckCircle2,
  Heart,
  ZoomIn,
  X,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { DEFAULT_TESTIMONIALS, getTestimonialImage } from "../data/testimonialsData";
import { TestimonialItem } from "../types";

interface ChatReaction {
  sender: string;
  role: string;
  text: string;
  tagColor: string;
}

const LIVE_CHAT_REACTIONS: ChatReaction[] = [
  {
    sender: "July G.",
    role: "Membro Confraria",
    text: "Live maravilhosa!!!! 👏👏👏",
    tagColor: "bg-amber-400/20 text-amber-300 border-amber-400/30",
  },
  {
    sender: "Moisés B.",
    role: "Aluno COD-E",
    text: "Obrigado pela live!!! Muita clareza.",
    tagColor: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
  },
  {
    sender: "Rafael M.",
    role: "Comunidade Ativa",
    text: "Top 🚀 Vamos com tudo!",
    tagColor: "bg-sky-400/20 text-sky-300 border-sky-400/30",
  },
  {
    sender: "Darlan P.",
    role: "Membro Confraria",
    text: "Top demais, clareza total na rota!",
    tagColor: "bg-purple-400/20 text-purple-300 border-purple-400/30",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(DEFAULT_TESTIMONIALS);
  const [selectedPrint, setSelectedPrint] = useState<TestimonialItem | null>(null);

  // Carregar imagens do localStorage caso tenham sido customizadas no admin
  useEffect(() => {
    const loadImages = () => {
      setTestimonials(
        DEFAULT_TESTIMONIALS.map((t) => ({
          ...t,
          defaultImage: getTestimonialImage(t.id, t.defaultImage),
        }))
      );
    };

    loadImages();
    window.addEventListener("storage", loadImages);
    return () => window.removeEventListener("storage", loadImages);
  }, []);

  const filteredTestimonials =
    activeCategory === "todos"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <section
      id="confraria-em-acao"
      className="py-16 sm:py-20 bg-[#0A1122] text-white border-b border-slate-800 relative overflow-hidden"
    >
      {/* Luz ambiente sutil de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#A31E22]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Users className="w-3.5 h-3.5 text-amber-300" />
            <span>CONFRARIA EUROPA EM AÇÃO</span>
          </div>
          <h2 className="font-serif-brand text-2xl sm:text-4xl font-bold text-white leading-tight mb-3">
            Quem assiste, entende que a travessia é real.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
            Prints e relatos reais de alunos e participantes que acompanham Vitor Diorranes e decidiram planejar a mudança de vida e geração com o Esquadrão COD-E.
          </p>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveCategory("todos")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "todos"
                  ? "bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <span>Todos os Prints Reais ({testimonials.length})</span>
            </button>
            <button
              onClick={() => setActiveCategory("familia")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "familia"
                  ? "bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <span>Planejamento Familiar (2)</span>
            </button>
            <button
              onClick={() => setActiveCategory("transicao")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "transicao"
                  ? "bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <span>Transição Portugal / Espanha (1)</span>
            </button>
            <button
              onClick={() => setActiveCategory("estrategia")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "estrategia"
                  ? "bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <span>Live & Estratégia (3)</span>
            </button>
          </div>
        </div>

        {/* Grid de Depoimentos com a Imagem Original e Moldura Real do WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredTestimonials.map((item) => {
            const currentImg = getTestimonialImage(item.id, item.defaultImage);
            return (
              <div
                key={item.id}
                className="bg-[#0D1527] border border-slate-700/80 hover:border-emerald-400/60 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col justify-between relative group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  {/* Cabeçalho do Card estilo WhatsApp Oficial */}
                  <div className="flex items-center justify-between gap-2.5 mb-3 pb-2.5 border-b border-slate-800">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-full bg-gradient-to-br ${item.avatarBg} p-0.5 shadow-md flex items-center justify-center shrink-0 border border-emerald-400/40`}
                      >
                        <div className="w-full h-full rounded-full bg-[#0E1729] flex items-center justify-center text-amber-200 font-bold text-xs font-mono">
                          {item.initials}
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-white truncate">
                            {item.name}
                          </h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400">
                          <span className="truncate">{item.location}</span>
                          <span>·</span>
                          <span className="text-emerald-400 font-mono font-semibold">
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Print Real
                    </span>
                  </div>

                  {/* IMAGEM ORIGINAL DO DEPOIMENTO / WHATSAPP SCREENSHOT REAL */}
                  <div
                    onClick={() => setSelectedPrint(item)}
                    className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-[#0B141A] shadow-inner mb-3.5 cursor-pointer group/img transition-all hover:border-emerald-400/70"
                    title="Clique para examinar o print original em tela cheia"
                  >
                    {/* Barra de Status estilo WhatsApp Dark */}
                    <div className="bg-[#1F2C34] px-3 py-1.5 flex items-center justify-between text-[10px] text-slate-300 border-b border-slate-800">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                        <MessageCircle className="w-3 h-3 text-emerald-400" />
                        <span>Conversa WhatsApp</span>
                      </div>
                      <span className="text-slate-400 font-mono text-[9px]">
                        Toque para ampliar
                      </span>
                    </div>

                    {/* Foto Real do WhatsApp */}
                    <div className="relative bg-[#070D18] flex items-center justify-center max-h-60 overflow-hidden">
                      <img
                        src={currentImg}
                        alt={`Print original do depoimento de ${item.name}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover object-top transition-transform duration-300 group-hover/img:scale-[1.03]"
                      />
                    </div>

                    {/* Overlay de Ampliação */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-center pb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F2C34] border border-emerald-400/60 text-emerald-300 text-xs font-semibold shadow-lg">
                        <ZoomIn className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Ver print original em alta resolução</span>
                      </span>
                    </div>
                  </div>

                  {/* Citação em Destaque */}
                  <div className="bg-[#121E36]/80 rounded-xl p-3 border border-slate-800/80 mb-2">
                    <p className="font-serif-brand text-xs sm:text-sm text-slate-100 italic leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Rodapé do Card */}
                <div className="pt-2.5 border-t border-slate-800/90 flex items-center justify-between text-[11px]">
                  <span className="inline-flex items-center gap-1.5 text-slate-400 text-[10px] font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.badge}</span>
                  </span>
                  <button
                    onClick={() => setSelectedPrint(item)}
                    className="text-emerald-400 hover:text-emerald-300 text-[11px] font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Ampliar print</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloco de "Prova de Comunidade Ativa" */}
        <div className="bg-[#0D1629] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <h3 className="font-serif-brand text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span>Reações ao Vivo na Comunidade</span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </h3>
                <p className="text-xs text-slate-400">
                  Mensagens instantâneas registradas no chat durante as nossas lives e transmissões
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 text-xs font-mono">
              <MessageCircle className="w-3.5 h-3.5 text-amber-300" />
              <span>Burburinho da Comunidade</span>
            </div>
          </div>

          {/* Grid de Balões de Chat ao Vivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {LIVE_CHAT_REACTIONS.map((rx, i) => (
              <div
                key={i}
                className="bg-[#142038] hover:bg-[#182744] border border-slate-700/60 rounded-xl p-3.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-amber-200">
                      {rx.sender.slice(0, 1)}
                    </div>
                    <span className="text-xs font-semibold text-slate-200">
                      {rx.sender}
                    </span>
                  </div>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full border font-mono ${rx.tagColor}`}>
                    Ao vivo
                  </span>
                </div>

                <div className="bg-[#0B1222] rounded-lg p-2.5 border border-slate-800">
                  <p className="text-xs text-amber-100 font-medium leading-snug">
                    &ldquo;{rx.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Micro-aviso de privacidade */}
          <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-rose-400" />
              <span>Ambiente exclusivo de acolhimento e suporte para futuros residentes na Espanha</span>
            </span>
            <span className="text-slate-500 font-mono text-[10px]">
              🔒 Telefones e dados privados omitidos para preservar a segurança dos participantes
            </span>
          </div>
        </div>
      </div>

      {/* MODAL LIGHTBOX PARA VER O PRINT ORIGINAL EM TAMANHO GRANDE */}
      {selectedPrint && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedPrint(null)}
        >
          <div
            className="bg-[#0B141A] border-2 border-slate-700 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra Superior do Modal */}
            <div className="bg-[#1F2C34] px-4 py-3 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                  {selectedPrint.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {selectedPrint.name}
                  </h4>
                  <p className="text-[10px] text-emerald-400 font-mono">
                    Print Original · {selectedPrint.badge}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedPrint(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Imagem Ampliada */}
            <div className="p-3 bg-[#0B141A] max-h-[75vh] overflow-y-auto flex items-center justify-center">
              <img
                src={getTestimonialImage(selectedPrint.id, selectedPrint.defaultImage)}
                alt={`Print completo de ${selectedPrint.name}`}
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg shadow-lg border border-slate-800"
              />
            </div>

            {/* Rodapé com Citação e Proteção de Privacidade */}
            <div className="bg-[#121B22] p-4 border-t border-slate-800 text-xs text-slate-300 space-y-1">
              <p className="italic text-amber-200">
                &ldquo;{selectedPrint.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 font-mono">
                <span>🛡️ Dados sensíveis protegidos</span>
                <span className="text-emerald-400">Verificação Confraria Europa</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
