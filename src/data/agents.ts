import { Agent, AgentMascot } from "../types";

export const AGENTS_DATA: Agent[] = [
  {
    id: "capitao",
    number: "01",
    name: "O CAPITÃO",
    initial: "C",
    role: "Por onde começar · estratégia e ordem da travessia",
    isCommander: true,
    enemy: "Começar pela etapa errada",
    resolves:
      "O cérebro do esquadrão, e o único que enxerga o tabuleiro inteiro. Ele lê o seu caso de ponta a ponta — idade, profissão, formação, reserva, família, urgência — e monta o seu plano de travessia em ordem: o que se faz agora, o que se faz depois, e o que você pode simplesmente parar de se preocupar por enquanto. Depois ele aciona os outros seis. Manda o ESTRATEGISTA encontrar a sua via, o DESPACHANTE abrir a pasta certa, o FINANCEIRO fechar a conta. Você não precisa saber com qual agente falar — o CAPITÃO sabe.",
    relieves:
      "Tira das suas costas a paralisia do primeiro passo e a confusão de quem tem dez dúvidas ao mesmo tempo.",
    quote:
      "Tenho 34 anos, sou enfermeira, sem cidadania, R$ 20 mil guardados e uma filha de 7. Por onde eu começo?",
    costAlone:
      "Sozinho, esse é o erro mais caro da travessia: começar pela etapa errada — e descobrir isso um ano e várias taxas depois."
  },
  {
    id: "estrategista",
    number: "02",
    name: "O ESTRATEGISTA",
    initial: "E",
    role: "Qual visto é o seu · a porta certa pro seu perfil",
    isCommander: false,
    enemy: "Tentar forçar a porta de outra pessoa",
    resolves:
      "Existe uma porta pra cada perfil, e uma que abre mais fácil que as outras. Ele cruza a sua situação com as vias disponíveis e devolve as que realmente se aplicam a você, em ordem de probabilidade, com o que falta pra cada uma e o que te desqualifica em cada uma — incluindo o critério que quase ninguém olha na hora de escolher: o que cada porta significa pro seu tempo do lado de lá.",
    relieves:
      "Tira das suas costas a ilusão de conselhos genéricos de fórum e a tentativa de forçar visto de turista sem amparo legal.",
    quote:
      "Trabalho remoto pra uma empresa brasileira. Isso me serve como base de pedido, ou eu preciso de outra via?",
    costAlone:
      "Sozinho: tentar forçar a porta de outra pessoa — o erro mais comum e o mais caro da internet brasileira."
  },
  {
    id: "despachante",
    number: "03",
    name: "O DESPACHANTE",
    initial: "D",
    role: "Sua papelada, na ordem certa · documentos e prazos",
    isCommander: false,
    enemy: "Documento vencido e semanas de garimpo",
    resolves:
      "Apostila de Haia, tradução juramentada, antecedentes criminais, certidões, diploma e histórico, passaporte, seguro-saúde e seguro viagem, procuração pra quem fica, documentos das crianças e do pet. Ele monta a sua lista pela via escolhida e te diz o que fazer primeiro — porque documento tem prazo, um depende do outro, e papel vencido derruba processo que levou meses pra montar. Tudo o que se resolve com o pé ainda no Brasil passa por ele.",
    relieves:
      "Tira das suas costas o desespero de comparecer ao consulado e ser recusado por uma certidão emitida fora do prazo legal.",
    quote:
      "Meu diploma precisa de apostila? E o atestado de antecedentes, vale por quanto tempo?",
    costAlone:
      "Sozinho: semanas de garimpo e o risco de refazer tradução juramentada que já custou caro uma vez."
  },
  {
    id: "financeiro",
    number: "04",
    name: "O FINANCEIRO",
    initial: "F",
    role: "Quanto custa de verdade · em euro e em real",
    isCommander: false,
    enemy: "Descobrir a conta real quando o dinheiro já acabou",
    resolves:
      "A conta da travessia inteira, cenário por cenário — sozinho, casal, com filho. Comprovação de meios exigida pela via escolhida, custo dos documentos, passagens, os três primeiros meses do outro lado (que é onde a maioria quebra), fiança e depósito do aluguel, câmbio e remessa, reserva de emergência. E a conta que ninguém faz na hora de sonhar: o custo de voltar, se der errado.",
    relieves:
      "Tira das suas costas a surpresa com cauções de moradia, taxas alfandegárias e perdas severas em operações de câmbio impulsivas.",
    quote:
      "Quanto eu preciso ter na conta pra isso não virar tragédia no terceiro mês?",
    costAlone:
      "Sozinho: descobrir a conta real quando o dinheiro já acabou — do outro lado do oceano, que é o pior lugar do mundo pra fazer essa descoberta."
  },
  {
    id: "bussola",
    number: "05",
    name: "A BÚSSOLA",
    initial: "B",
    role: "Onde morar · a cidade, o bairro e o muro do aluguel",
    isCommander: false,
    enemy: "Escolher a cidade pela foto e assinar contrato que vai querer desfazer",
    resolves:
      "Ela cruza o seu perfil — profissão, orçamento, família, clima, ritmo — com as cidades reais da Espanha, e vai até o bairro. Custo de vida comparado, perfil de cada zona, onde os brasileiros já estão e onde compensa não estar. E a parte que ninguém conta: alugar sem holerite espanhol e sem fiador é o gargalo de verdade de quem chega. Ela te mostra quais portais usar, como funcionam fiança e depósito, o que um proprietário espanhol pede de um recém-chegado, e as saídas legítimas de quem ainda não tem contrato — temporada, coliving, aluguel de quarto, aval bancário.",
    relieves:
      "Tira das suas costas o erro clássico de alugar à distância em bairros barulhentos, sem transporte ou longe de boas escolas públicas.",
    quote:
      "Barcelona ou Valência pra quem tem filho pequeno e não vai ter contrato de trabalho no começo?",
    costAlone:
      "Sozinho: escolher a cidade pela foto e assinar um contrato de um ano que você vai passar doze meses querendo desfazer."
  },
  {
    id: "joselito",
    number: "06",
    name: "JOSELITO",
    initial: "J",
    role: "Seu amigo espanhol · costume, cidade e vida real",
    isCommander: false,
    enemy: "Morar seis meses numa cidade sem nunca entrar nela",
    resolves:
      "Por que a cidade desacelera à tarde. Por que ninguém janta antes das nove. O que é o menú del día e por que ele é o maior truque de economia da Espanha. As regras que pegam brasileiro desprevenido e vêm com multa junto — patinete, barulho depois das dez, lixo separado por cor, e a tal da cita previa, que é o motivo de você não conseguir simplesmente chegar e ser atendido. Calendário de festivos explicado um por um, agenda da sua cidade, o que fazer no fim de semana, o que é de graça, desconto pra quem tem filho. É o único do esquadrão que você vai abrir por prazer, e não por necessidade.",
    relieves:
      "Tira das suas costas o choque cultural e a sensação de ser um turista eterno sem entender as regras da Espanha.",
    quote:
      "Chego numa quinta à noite. Vale a pena tentar resolver alguma coisa na sexta ou já era?",
    costAlone:
      "Sozinho: morar seis meses numa cidade sem nunca entrar nela — e achar que Espanha era só isso."
  },
  {
    id: "comissario",
    number: "07",
    name: "O COMISSÁRIO DE BORDO",
    initial: "CB",
    role: "Do embarque ao pouso · a semana do voo e as primeiras horas",
    isCommander: false,
    enemy: "Improvisar na fila mais importante da sua vida",
    resolves:
      "Ele te pega na semana mais ansiosa da travessia e não solta até você pisar do outro lado. O que precisa estar impresso e o que pode ficar no celular, franquia e peso de bagagem, o que nunca vai no porão, e a mala de mão de quem está mudando de país — que não é a de quem vai passear. Conferência final dos seguros: emitidos, válidos na data certa, com a cobertura que a sua via exige. E a fila da imigração, que é onde dá o frio na barriga: o que costumam perguntar, quais documentos deixar na mão antes de entrar na fila, e como se portar. Sem script decorado e sem enrolação — orientação pra você chegar preparado e responder com a verdade, porque é a verdade que sustenta a sua entrada.",
    relieves:
      "Tira das suas costas o pânico da véspera do voo e a insegurança na cabine de controle de passaportes.",
    quote:
      "O que eu levo na bagagem de mão e o que acontece se me pararem na imigração?",
    costAlone:
      "Sozinho: improvisar na fila mais importante da sua vida, depois de meses planejando tudo o resto."
  }
];

export const MASCOTS_CONFIG: Record<string, AgentMascot> = {
  capitao: {
    mascotName: "O Capitão",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/40",
    accentHex: "#A31E22",
    cardBg: "from-[#1F1826] to-[#121A2D]",
    borderColor: "border-[#A31E22]",
    glowColor: "shadow-[0_0_30px_rgba(163,30,34,0.35)]",
    superpower: "Estratégia & Ordem Cronológica da Travessia",
    personality: "O cérebro do esquadrão. Lê o caso inteiro e aciona os outros seis."
  },
  estrategista: {
    mascotName: "O Estrategista",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    accentHex: "#F59E0B",
    cardBg: "from-[#13203D] to-[#0F172A]",
    borderColor: "border-amber-500/70",
    glowColor: "shadow-[0_0_30px_rgba(245,158,11,0.25)]",
    superpower: "Qual Visto é o Seu · A Porta Certa pro Seu Perfil",
    personality: "Mapeia as vias em ordem de probabilidade matemática."
  },
  despachante: {
    mascotName: "O Despachante",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    accentHex: "#DC2626",
    cardBg: "from-[#24131A] to-[#0F172A]",
    borderColor: "border-rose-600/70",
    glowColor: "shadow-[0_0_30px_rgba(220,38,38,0.25)]",
    superpower: "Sua Papelada na Ordem Certa · Documentos & Prazos",
    personality: "Tudo o que se resolve com o pé ainda no Brasil passa por ele."
  },
  financeiro: {
    mascotName: "O Financeiro",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    accentHex: "#10B981",
    cardBg: "from-[#102422] to-[#0F172A]",
    borderColor: "border-emerald-500/70",
    glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.25)]",
    superpower: "Quanto Custa de Verdade · em Euro e em Real",
    personality: "A conta da travessia inteira, cenário por cenário, antes de gastar um centavo."
  },
  bussola: {
    mascotName: "A Bússola",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    accentHex: "#0284C7",
    cardBg: "from-[#122238] to-[#0F172A]",
    borderColor: "border-sky-400/70",
    glowColor: "shadow-[0_0_30px_rgba(2,132,199,0.25)]",
    superpower: "Onde Morar · A Cidade, o Bairro e o Muro do Aluguel",
    personality: "Cruza estilo de vida e destrava o aluguel sem holerite local."
  },
  joselito: {
    mascotName: "Joselito",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
    accentHex: "#EAB308",
    cardBg: "from-[#2A2312] to-[#0F172A]",
    borderColor: "border-yellow-500/70",
    glowColor: "shadow-[0_0_30px_rgba(234,179,8,0.25)]",
    superpower: "Seu Amigo Espanhol · Costumes, Festivos & Menú del Día",
    personality: "O único do esquadrão que você vai abrir por prazer, e não por necessidade."
  },
  comissario: {
    mascotName: "O Comissário de Bordo",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
    accentHex: "#3B82F6",
    cardBg: "from-[#141C30] to-[#0F172A]",
    borderColor: "border-blue-500/70",
    glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.25)]",
    superpower: "Do Embarque ao Pouso · A Semana do Voo & Fila da Imigração",
    personality: "Te pega na semana mais ansiosa da travessia e não solta até você pisar lá."
  }
};
