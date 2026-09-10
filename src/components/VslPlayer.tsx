import React, { useState, useRef, useEffect } from "react";
import { Upload, Link, X, Volume2, Video, Shield, ArrowRight, Check, RefreshCw } from "lucide-react";

export const DEFAULT_VSL_VIDEO = "https://player.vimeo.com/video/1225405238";
export const DEFAULT_VSL_TYPE = "embed";

interface VslPlayerProps {
  onCtaClick?: () => void;
  isAdmin?: boolean;
}

export const VslPlayer: React.FC<VslPlayerProps> = ({ onCtaClick, isAdmin = false }) => {
  const [videoUrl, setVideoUrl] = useState<string>(() => {
    return localStorage.getItem("cod_e_vsl_video_v5") || DEFAULT_VSL_VIDEO;
  });
  const [videoType, setVideoType] = useState<string>(() => {
    return localStorage.getItem("cod_e_vsl_type_v5") || DEFAULT_VSL_TYPE;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoUrl) {
      localStorage.setItem("cod_e_vsl_video_v5", videoUrl);
    } else {
      localStorage.removeItem("cod_e_vsl_video_v5");
    }
  }, [videoUrl]);

  useEffect(() => {
    if (videoType) {
      localStorage.setItem("cod_e_vsl_type_v5", videoType);
    } else {
      localStorage.removeItem("cod_e_vsl_type_v5");
    }
  }, [videoType]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setVideoUrl(blobUrl);
      setVideoType("upload");
    }
  };

  const handleSaveEmbed = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    let parsed = inputUrl.trim();

    // Normalizar Vimeo (ex: https://vimeo.com/1225405238?share=copy&fl=sv&fe=ci)
    if (parsed.includes("vimeo.com/") && !parsed.includes("player.vimeo.com")) {
      const match = parsed.match(/vimeo\.com\/(\d+)/);
      const videoId = match ? match[1] : parsed.split("vimeo.com/")[1]?.split("?")[0]?.replace(/\//g, "");
      parsed = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`;
    }
    // Normalizar YouTube
    else if (parsed.includes("youtube.com/watch?v=")) {
      const id = parsed.split("watch?v=")[1]?.split("&")[0];
      parsed = `https://www.youtube.com/embed/${id}?autoplay=1`;
    } else if (parsed.includes("youtu.be/")) {
      const id = parsed.split("youtu.be/")[1]?.split("?")[0];
      parsed = `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    setVideoUrl(parsed);
    setVideoType("embed");
    setIsModalOpen(false);
    setInputUrl("");
  };

  const handleResetToDefault = () => {
    setVideoUrl(DEFAULT_VSL_VIDEO);
    setVideoType(DEFAULT_VSL_TYPE);
    localStorage.removeItem("cod_e_vsl_video_v5");
    localStorage.removeItem("cod_e_vsl_type_v5");
  };

  const isEmbed =
    videoType === "embed" ||
    (videoUrl &&
      videoUrl.startsWith("http") &&
      (videoUrl.includes("vimeo") ||
        videoUrl.includes("youtube") ||
        videoUrl.includes("pandavideo") ||
        videoUrl.includes("embed")));

  const isCustom = videoUrl !== DEFAULT_VSL_VIDEO;

  return (
    <div className="w-full max-w-4xl mx-auto my-6 sm:my-8 px-2 sm:px-0">
      {/* Barra Superior da Apresentação */}
      <div className="bg-[#121D36] border border-slate-700/80 rounded-t-2xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-amber-300 font-bold uppercase tracking-wider">
            VÍDEO DE APRESENTAÇÃO
          </span>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-slate-300 text-xs hidden sm:inline">
            Apresentação Inicial Oficial
          </span>
        </div>

        {isAdmin && (
          <div className="flex items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="video/mp4,video/webm,video/ogg,video/quicktime"
              className="hidden"
              id="vsl-upload-input"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all border border-slate-600 cursor-pointer"
              title="Subir arquivo MP4"
            >
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Subir MP4</span>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-600 cursor-pointer"
              title="Alterar Link do Vídeo (Vimeo/YouTube)"
            >
              <Link className="w-3.5 h-3.5" />
              <span>Trocar Vídeo</span>
            </button>

            {isCustom && (
              <button
                onClick={handleResetToDefault}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-amber-900/60 text-slate-400 hover:text-amber-300 transition-colors"
                title="Restaurar vídeo original do Vimeo"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Container 16:9 com o Player do Vimeo */}
      <div className="relative aspect-video w-full bg-[#080E1C] border-x border-b border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        {videoUrl ? (
          isEmbed ? (
            <iframe
              src={videoUrl}
              title="Vídeo de Apresentação Código Europa"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          )
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
            <Volume2 className="w-8 h-8 text-amber-400 mb-2" />
            <span className="text-sm font-bold text-white">Carregando apresentação...</span>
          </div>
        )}
      </div>

      {/* Barra Inferior com CTA de Conversão */}
      <div className="bg-[#0C1527] border-x border-b border-slate-700/80 rounded-b-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold text-amber-300 mb-0.5">
            <Video className="w-3.5 h-3.5 text-red-400" />
            <span>APRESENTAÇÃO COMPLETA DO ESQUADRÃO COD-E</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            A rota comprovada para morar legalmente na Espanha e conquistar seu passaporte em 2 anos.
          </p>
        </div>

        <button
          onClick={onCtaClick}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] via-[#A31E22] to-[#B91C1C] hover:from-[#EF4444] hover:to-[#DC2626] text-white font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(220,38,38,0.7)] hover:shadow-[0_0_40px_rgba(239,68,68,0.95)] transition-all transform hover:scale-105 cursor-pointer shrink-0 border border-amber-300/60 btn-pulse-urgency group"
        >
          <Shield className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
          <span>QUERO MEU TIME DE AGENTES AGORA</span>
          <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Modal para Trocar Link se Necessário (Apenas Admin) */}
      {isAdmin && isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-md w-full p-6 text-white relative shadow-2xl animate-in fade-in zoom-in-95">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif-brand text-xl font-bold mb-2 text-amber-300">
              Trocar Link do Vídeo
            </h3>
            <p className="text-xs text-slate-300 mb-4">
              Cole o link do seu vídeo hospedado no Vimeo, YouTube ou link direto .mp4:
            </p>
            <form onSubmit={handleSaveEmbed} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  URL do Vídeo (Vimeo ou YouTube)
                </label>
                <input
                  type="url"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="https://vimeo.com/1225405238 ou https://youtube.com/..."
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-red-500 font-sans"
                  autoFocus
                />
              </div>
              <div className="flex gap-2 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white shadow-md flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  Salvar Vídeo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
