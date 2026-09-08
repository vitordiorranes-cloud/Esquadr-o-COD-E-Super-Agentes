import React from "react";

interface AgentAvatarProps {
  agentId: string;
  className?: string;
  size?: number;
}

export const AgentAvatar: React.FC<AgentAvatarProps> = ({
  agentId,
  className = "",
  size = 120,
}) => {
  switch (agentId) {
    case "capitao":
      return (
        <div
          className={`relative inline-flex items-center justify-center ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 160 160"
            fill="none"
            className="w-full h-full drop-shadow-lg transform transition-transform duration-300 group-hover:scale-105"
          >
            <ellipse cx="80" cy="150" rx="42" ry="8" fill="#000" fillOpacity="0.25" />
            {/* Capa de Comandante */}
            <path d="M42 66 C28 92 24 136 32 144 C42 148 54 130 58 116 Z" fill="#781114" />
            <path d="M118 66 C132 92 136 136 128 144 C118 148 106 130 102 116 Z" fill="#781114" />
            <path d="M48 68 C35 98 32 132 40 142 C50 144 60 120 62 105 Z" fill="#A31E22" />
            <path d="M112 68 C125 98 128 132 120 142 C110 144 100 120 98 105 Z" fill="#A31E22" />
            {/* Pernas */}
            <rect x="64" y="106" width="12" height="34" rx="6" fill="#13213F" />
            <rect x="84" y="106" width="12" height="34" rx="6" fill="#13213F" />
            <path d="M62 128 C62 125 78 125 78 128 L79 144 C79 146 72 148 60 148 L62 128 Z" fill="#A31E22" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M82 128 C82 125 98 125 98 128 L100 148 C88 148 81 146 81 144 L82 128 Z" fill="#A31E22" stroke="#F59E0B" strokeWidth="1.5" />
            {/* Tronco */}
            <path d="M56 68 C56 62 104 62 104 68 L98 108 C98 110 62 110 62 108 Z" fill="#13213F" stroke="#F59E0B" strokeWidth="2" />
            {/* Insígnia do Capitão (C) */}
            <circle cx="80" cy="85" r="15" fill="#A31E22" stroke="#F59E0B" strokeWidth="2" />
            <polygon points="80,72 83,82 93,85 83,88 80,98 77,88 67,85 77,82" fill="#F59E0B" />
            <text x="80" y="89" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">C</text>
            <rect x="60" y="102" width="40" height="7" rx="3.5" fill="#F59E0B" />
            <circle cx="80" cy="105.5" r="5" fill="#A31E22" stroke="#FFFFFF" strokeWidth="1.5" />
            {/* Braços */}
            <path d="M58 72 L44 88 L52 100" stroke="#13213F" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M102 72 L116 88 L108 100" stroke="#13213F" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="52" cy="100" r="6" fill="#A31E22" stroke="#F59E0B" strokeWidth="1.5" />
            <circle cx="108" cy="100" r="6" fill="#A31E22" stroke="#F59E0B" strokeWidth="1.5" />
            {/* Pescoço & Rosto */}
            <rect x="74" y="52" width="12" height="12" rx="3" fill="#FBCFE8" />
            <circle cx="80" cy="40" r="24" fill="#FED7AA" />
            <path d="M56 36 C56 20 72 14 84 14 C98 14 106 24 104 38 C102 32 94 28 88 28 C80 28 72 32 68 36 C64 36 60 38 56 36 Z" fill="#5C2E0B" />
            {/* Chapéu de Capitão Militar */}
            <path d="M54 34 C54 22 72 18 80 18 C88 18 106 22 106 34 L104 38 C94 40 66 40 56 38 Z" fill="#13213F" stroke="#F59E0B" strokeWidth="1.5" />
            <rect x="62" y="32" width="36" height="5" rx="2" fill="#A31E22" />
            <circle cx="80" cy="27" r="4" fill="#F59E0B" />
            {/* Olhos & Sorriso */}
            <ellipse cx="71" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="72" cy="38" r="2.5" fill="#13213F" />
            <ellipse cx="89" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="88" cy="38" r="2.5" fill="#13213F" />
            <path d="M74 50 Q80 55 86 50" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );

    case "estrategista":
      return (
        <div
          className={`relative inline-flex items-center justify-center ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 160 160"
            fill="none"
            className="w-full h-full drop-shadow-lg transform transition-transform duration-300 group-hover:scale-105"
          >
            <ellipse cx="80" cy="150" rx="40" ry="7" fill="#000" fillOpacity="0.25" />
            <path d="M46 68 C34 94 30 134 38 142 C48 144 58 126 62 110 Z" fill="#D97706" />
            <path d="M114 68 C126 94 130 134 122 142 C112 144 102 126 98 110 Z" fill="#D97706" />
            <rect x="65" y="106" width="11" height="34" rx="5" fill="#0F172A" />
            <rect x="84" y="106" width="11" height="34" rx="5" fill="#0F172A" />
            <rect x="63" y="128" width="15" height="18" rx="4" fill="#F59E0B" />
            <rect x="82" y="128" width="15" height="18" rx="4" fill="#F59E0B" />
            <path d="M58 68 C58 62 102 62 102 68 L96 108 C96 110 64 110 64 108 Z" fill="#1E40AF" stroke="#38BDF8" strokeWidth="1.5" />
            {/* Emblema Chave Mestra / Estratégia */}
            <circle cx="80" cy="86" r="14" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="77" cy="83" r="4.5" stroke="#F59E0B" strokeWidth="2" fill="none" />
            <path d="M81 87 L87 93 M84 90 L87 87" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <rect x="62" y="102" width="36" height="7" rx="3.5" fill="#334155" />
            <rect x="76" y="101" width="8" height="9" rx="2" fill="#F59E0B" />
            <path d="M58 72 L46 88 L56 96" stroke="#1E40AF" strokeWidth="8" strokeLinecap="round" />
            <path d="M102 72 L114 84 L122 76" stroke="#1E40AF" strokeWidth="8" strokeLinecap="round" />
            <circle cx="56" cy="96" r="6" fill="#F59E0B" />
            <circle cx="122" cy="76" r="6" fill="#F59E0B" />
            {/* Cabeça */}
            <circle cx="80" cy="40" r="23" fill="#FED7AA" />
            <path d="M57 36 C55 22 66 12 80 12 C96 12 105 22 103 36 C99 26 89 22 80 24 C72 22 62 28 57 36 Z" fill="#EAB308" />
            <path d="M58 34 C64 30 96 30 102 34 L100 44 C90 46 70 46 60 44 Z" fill="#F59E0B" stroke="#FDE047" strokeWidth="1.5" />
            <ellipse cx="71" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="72" cy="38" r="2.5" fill="#0F172A" />
            <ellipse cx="89" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="88" cy="38" r="2.5" fill="#0F172A" />
            <path d="M75 52 Q82 58 87 50" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );

    case "despachante":
      return (
        <div
          className={`relative inline-flex items-center justify-center ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 160 160"
            fill="none"
            className="w-full h-full drop-shadow-lg transform transition-transform duration-300 group-hover:scale-105"
          >
            <ellipse cx="80" cy="150" rx="40" ry="7" fill="#000" fillOpacity="0.25" />
            <path d="M44 68 C30 96 28 136 36 145 C48 148 58 126 62 110 Z" fill="#991B1B" />
            <path d="M116 68 C130 96 132 136 124 145 C112 148 102 126 98 110 Z" fill="#991B1B" />
            <rect x="65" y="106" width="11" height="34" rx="5" fill="#1E293B" />
            <rect x="84" y="106" width="11" height="34" rx="5" fill="#1E293B" />
            <rect x="63" y="128" width="15" height="18" rx="4" fill="#991B1B" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="82" y="128" width="15" height="18" rx="4" fill="#991B1B" stroke="#E2E8F0" strokeWidth="1" />
            <path d="M58 68 C58 62 102 62 102 68 L96 108 C96 110 64 110 64 108 Z" fill="#450A0A" stroke="#EF4444" strokeWidth="1.5" />
            {/* Carimbo / Selo de Haia */}
            <circle cx="80" cy="85" r="14" fill="#DC2626" stroke="#FEF2F2" strokeWidth="2" />
            <polygon points="80,75 83,82 90,83 85,88 86,95 80,91 74,95 75,88 70,83 77,82" fill="#FEF2F2" />
            {/* Pasta de Documentos na Mão */}
            <rect x="30" y="80" width="20" height="26" rx="3" fill="#F8FAFC" stroke="#DC2626" strokeWidth="1.5" />
            <line x1="34" y1="86" x2="46" y2="86" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="34" y1="91" x2="44" y2="91" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="34" y1="96" x2="42" y2="96" stroke="#DC2626" strokeWidth="1.5" />
            <path d="M58 72 L42 85 L44 98" stroke="#450A0A" strokeWidth="8" strokeLinecap="round" />
            <path d="M102 72 L116 86 L108 98" stroke="#450A0A" strokeWidth="8" strokeLinecap="round" />
            <circle cx="108" cy="98" r="6" fill="#DC2626" />
            {/* Cabeça */}
            <circle cx="80" cy="40" r="23" fill="#FED7AA" />
            <path d="M57 36 C55 20 68 14 80 14 C94 14 105 22 103 36 C99 28 89 24 80 24 C71 24 63 28 57 36 Z" fill="#18181B" />
            <path d="M60 36 C64 30 76 30 80 34 C84 30 96 30 100 36 C98 44 84 46 80 43 C76 46 62 44 60 36 Z" fill="#991B1B" stroke="#FCA5A5" strokeWidth="1.5" />
            <ellipse cx="71" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="71.5" cy="38" r="2.5" fill="#000000" />
            <ellipse cx="89" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="88.5" cy="38" r="2.5" fill="#000000" />
            <path d="M75 52 Q80 56 85 52" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );

    case "financeiro":
      return (
        <div
          className={`relative inline-flex items-center justify-center ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 160 160"
            fill="none"
            className="w-full h-full drop-shadow-lg transform transition-transform duration-300 group-hover:scale-105"
          >
            <ellipse cx="80" cy="150" rx="40" ry="7" fill="#000" fillOpacity="0.25" />
            <path d="M46 68 C34 94 30 134 38 142 C48 144 58 126 62 110 Z" fill="#047857" />
            <path d="M114 68 C126 94 130 134 122 142 C112 144 102 126 98 110 Z" fill="#047857" />
            <rect x="65" y="106" width="11" height="34" rx="5" fill="#064E3B" />
            <rect x="84" y="106" width="11" height="34" rx="5" fill="#064E3B" />
            <rect x="63" y="128" width="15" height="18" rx="4" fill="#059669" stroke="#34D399" strokeWidth="1" />
            <rect x="82" y="128" width="15" height="18" rx="4" fill="#059669" stroke="#34D399" strokeWidth="1" />
            <path d="M58 68 C58 62 102 62 102 68 L96 108 C96 110 64 110 64 108 Z" fill="#065F46" stroke="#34D399" strokeWidth="1.5" />
            {/* Símbolo do Euro & Escudo Financeiro */}
            <path d="M80 72 L94 77 C94 92 86 100 80 102 C74 100 66 92 66 77 Z" fill="#059669" stroke="#FDE047" strokeWidth="2" />
            <text x="80" y="93" textAnchor="middle" fill="#FDE047" fontSize="16" fontWeight="bold">€</text>
            <rect x="62" y="103" width="36" height="6" rx="3" fill="#EAB308" />
            <circle cx="80" cy="106" r="4.5" fill="#065F46" stroke="#FDE047" strokeWidth="1.5" />
            <path d="M58 72 L44 86 L54 98" stroke="#065F46" strokeWidth="8" strokeLinecap="round" />
            <path d="M102 72 L116 86 L106 98" stroke="#065F46" strokeWidth="8" strokeLinecap="round" />
            <circle cx="54" cy="98" r="6" fill="#10B981" />
            <circle cx="106" cy="98" r="6" fill="#10B981" />
            {/* Cabeça */}
            <circle cx="80" cy="40" r="23" fill="#FED7AA" />
            <path d="M57 36 C55 20 68 14 80 14 C94 14 105 22 103 36 C99 28 89 24 80 24 C71 24 63 28 57 36 Z" fill="#9A3412" />
            <path d="M60 36 C64 30 76 30 80 34 C84 30 96 30 100 36 C98 44 84 46 80 43 C76 46 62 44 60 36 Z" fill="#059669" stroke="#34D399" strokeWidth="1.5" />
            <ellipse cx="71" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="71.5" cy="38" r="2.5" fill="#064E3B" />
            <ellipse cx="89" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="88.5" cy="38" r="2.5" fill="#064E3B" />
            <path d="M74 52 Q80 57 86 52" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );

    case "bussola":
      return (
        <div
          className={`relative inline-flex items-center justify-center ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 160 160"
            fill="none"
            className="w-full h-full drop-shadow-lg transform transition-transform duration-300 group-hover:scale-105"
          >
            <ellipse cx="80" cy="150" rx="40" ry="7" fill="#000" fillOpacity="0.25" />
            <path d="M42 66 C22 86 20 126 34 136 C46 138 56 120 62 108 Z" fill="#0284C7" />
            <path d="M118 66 C138 86 140 126 126 136 C114 138 104 120 98 108 Z" fill="#0284C7" />
            <rect x="65" y="106" width="11" height="34" rx="5" fill="#0C4A6E" />
            <rect x="84" y="106" width="11" height="34" rx="5" fill="#0C4A6E" />
            <rect x="63" y="128" width="15" height="18" rx="4" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
            <rect x="82" y="128" width="15" height="18" rx="4" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
            <path d="M58 68 C58 62 102 62 102 68 L96 108 C96 110 64 110 64 108 Z" fill="#0369A1" stroke="#38BDF8" strokeWidth="1.5" />
            {/* Rosa dos Ventos / Bússola */}
            <circle cx="80" cy="86" r="14" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="2" />
            <polygon points="80,74 83,84 93,86 83,88 80,98 77,88 67,86 77,84" fill="#38BDF8" />
            <polygon points="80,74 83,84 80,86 77,84" fill="#EF4444" />
            <rect x="62" y="103" width="36" height="6" rx="3" fill="#F0F9FF" />
            <circle cx="80" cy="106" r="4.5" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
            <path d="M58 72 L42 84 L46 96" stroke="#0369A1" strokeWidth="8" strokeLinecap="round" />
            <path d="M102 72 L118 80 L126 72" stroke="#0369A1" strokeWidth="8" strokeLinecap="round" />
            <circle cx="46" cy="96" r="6" fill="#38BDF8" />
            <circle cx="126" cy="72" r="6" fill="#38BDF8" />
            {/* Cabeça */}
            <circle cx="80" cy="40" r="23" fill="#FED7AA" />
            <path d="M57 36 C55 20 68 14 80 14 C94 14 105 22 103 36 C99 28 89 24 80 24 C71 24 63 28 57 36 Z" fill="#292524" />
            <rect x="66" y="24" width="28" height="8" rx="4" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
            <path d="M60 36 C64 30 76 30 80 34 C84 30 96 30 100 36 C98 44 84 46 80 43 C76 46 62 44 60 36 Z" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
            <ellipse cx="71" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="72" cy="38" r="2.5" fill="#0C4A6E" />
            <ellipse cx="89" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="88" cy="38" r="2.5" fill="#0C4A6E" />
            <path d="M74 52 Q80 57 86 52" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );

    case "joselito":
      return (
        <div
          className={`relative inline-flex items-center justify-center ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 160 160"
            fill="none"
            className="w-full h-full drop-shadow-lg transform transition-transform duration-300 group-hover:scale-105"
          >
            <ellipse cx="80" cy="150" rx="40" ry="7" fill="#000" fillOpacity="0.25" />
            {/* Jaqueta descontraída / Amigo local */}
            <path d="M44 68 C32 94 30 134 38 142 C48 144 58 126 62 110 Z" fill="#CA8A04" />
            <path d="M116 68 C128 94 130 134 122 142 C112 144 102 126 98 110 Z" fill="#CA8A04" />
            <rect x="65" y="106" width="11" height="34" rx="5" fill="#1C1917" />
            <rect x="84" y="106" width="11" height="34" rx="5" fill="#1C1917" />
            <rect x="63" y="128" width="15" height="18" rx="4" fill="#EAB308" />
            <rect x="82" y="128" width="15" height="18" rx="4" fill="#EAB308" />
            <path d="M58 68 C58 62 102 62 102 68 L96 108 C96 110 64 110 64 108 Z" fill="#854D0E" stroke="#FDE047" strokeWidth="1.5" />
            {/* Emblema Joselito (Taça de café espanhol / Menú del día) */}
            <circle cx="80" cy="86" r="14" fill="#422006" stroke="#FDE047" strokeWidth="2" />
            <text x="80" y="92" textAnchor="middle" fill="#FDE047" fontSize="14" fontWeight="900">J</text>
            {/* Braços com café / boas vindas */}
            <path d="M58 72 L42 86 L50 96" stroke="#CA8A04" strokeWidth="8" strokeLinecap="round" />
            <path d="M102 72 L118 82 L124 74" stroke="#CA8A04" strokeWidth="8" strokeLinecap="round" />
            <circle cx="50" cy="96" r="6" fill="#FDE047" />
            <circle cx="124" cy="74" r="6" fill="#FDE047" />
            {/* Cabeça & Sorriso Amigável */}
            <circle cx="80" cy="40" r="23" fill="#FED7AA" />
            <path d="M57 36 C55 20 68 14 80 14 C94 14 105 22 103 36 C99 28 89 24 80 24 C71 24 63 28 57 36 Z" fill="#451A03" />
            <path d="M60 34 C64 28 76 28 80 32 C84 28 96 28 100 34 Z" fill="#EAB308" />
            <ellipse cx="71" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="71.5" cy="38" r="2.5" fill="#1C1917" />
            <ellipse cx="89" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="88.5" cy="38" r="2.5" fill="#1C1917" />
            {/* Grande Sorriso */}
            <path d="M72 50 Q80 60 88 50" stroke="#9A3412" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <circle cx="68" cy="47" r="2" fill="#F87171" opacity="0.6" />
            <circle cx="92" cy="47" r="2" fill="#F87171" opacity="0.6" />
          </svg>
        </div>
      );

    case "comissario":
      return (
        <div
          className={`relative inline-flex items-center justify-center ${className}`}
          style={{ width: size, height: size }}
        >
          <svg
            viewBox="0 0 160 160"
            fill="none"
            className="w-full h-full drop-shadow-lg transform transition-transform duration-300 group-hover:scale-105"
          >
            <ellipse cx="80" cy="150" rx="40" ry="7" fill="#000" fillOpacity="0.25" />
            <path d="M46 68 C34 94 30 134 38 142 C48 144 58 126 62 110 Z" fill="#1E3A8A" />
            <path d="M114 68 C126 94 130 134 122 142 C112 144 102 126 98 110 Z" fill="#1E3A8A" />
            <rect x="65" y="106" width="11" height="34" rx="5" fill="#0F172A" />
            <rect x="84" y="106" width="11" height="34" rx="5" fill="#0F172A" />
            <rect x="63" y="128" width="15" height="18" rx="4" fill="#3B82F6" stroke="#93C5FD" strokeWidth="1" />
            <rect x="82" y="128" width="15" height="18" rx="4" fill="#3B82F6" stroke="#93C5FD" strokeWidth="1" />
            {/* Uniforme de Aviação */}
            <path d="M58 68 C58 62 102 62 102 68 L96 108 C96 110 64 110 64 108 Z" fill="#1E3A8A" stroke="#93C5FD" strokeWidth="1.5" />
            {/* Asas da Aviação no Peito */}
            <circle cx="80" cy="86" r="14" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M72 86 Q76 82 80 86 Q84 82 88 86 Q84 90 80 87 Q76 90 72 86 Z" fill="#F59E0B" />
            <circle cx="80" cy="86" r="2.5" fill="#FFFFFF" />
            <rect x="62" y="103" width="36" height="6" rx="3" fill="#F59E0B" />
            {/* Braços com prancheta de embarque */}
            <path d="M58 72 L44 86 L52 96" stroke="#1E3A8A" strokeWidth="8" strokeLinecap="round" />
            <path d="M102 72 L116 84 L110 96" stroke="#1E3A8A" strokeWidth="8" strokeLinecap="round" />
            <circle cx="52" cy="96" r="6" fill="#60A5FA" />
            <circle cx="110" cy="96" r="6" fill="#60A5FA" />
            {/* Cabeça & Quepe de Piloto/Comissário */}
            <circle cx="80" cy="40" r="23" fill="#FED7AA" />
            <path d="M57 36 C55 20 68 14 80 14 C94 14 105 22 103 36 C99 28 89 24 80 24 C71 24 63 28 57 36 Z" fill="#334155" />
            {/* Quepe de Comissário de Bordo */}
            <path d="M56 30 C56 20 72 16 80 16 C88 16 104 20 104 30 L102 34 C94 36 66 36 58 34 Z" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
            <rect x="64" y="28" width="32" height="4" rx="1.5" fill="#F59E0B" />
            <ellipse cx="71" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="71.5" cy="38" r="2.5" fill="#0F172A" />
            <ellipse cx="89" cy="38" rx="4" ry="4.5" fill="#FFFFFF" />
            <circle cx="88.5" cy="38" r="2.5" fill="#0F172A" />
            <path d="M74 52 Q80 57 86 52" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
