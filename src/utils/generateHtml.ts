import { AGENTS_DATA } from "../data/agents";
import { FAQ_DATA } from "../data/faq";

export function generateHtml(S: string = "https://pay.hotmart.com/COLE-SEU-LINK-AQUI", N: string = "/assets/vitor-diorranes.jpg"): string{const D=N||"/assets/vitor-diorranes.jpg",f=[{id:"barcelona",name:"Barcelona",region:"CATALUÑA · CAPITAL MEDITERRÂNEA",photo:"https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80",desc:"O café no balcão de pedra do bairro, a brisa do mar descendo pela avenida e a segurança de voltar a pé para casa às dez da noite sem olhar para trás.",badge:"Polo Global & Praias",rent:"€ 1.400 - 1.800/mês",keyFeature:"Hub tecnológico europeu, praias urbanas e alta oferta internacional.",tag:"Top #1 · Cosmopolita"},{id:"madrid",name:"Madrid",region:"COMUNIDAD DE MADRID · CENTRO ECONÔMICO",photo:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",desc:"O ritmo cosmopolita das grandes alamedas, o metrô pontual que cruza a capital em vinte minutos e a certeza de viver no centro onde circulam os maiores salários.",badge:"Centro Financeiro & Conexões",rent:"€ 1.300 - 1.750/mês",keyFeature:"Sede de multinacionais, maiores faixas salariais e conexões globais.",tag:"Top #2 · Carreira"},{id:"valencia",name:"Valencia",region:"COMUNIDAD VALENCIANA · QUALIDADE DE VIDA",photo:"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Valencia-_Plaza_del_Ayuntamiento_%2825311977285%29.jpg/960px-Valencia-_Plaza_del_Ayuntamiento_%2825311977285%29.jpg",desc:"Mais de trezentos dias de sol ao ano, os 9km verdes dos jardins do Turia e o custo de vida equilibrado que devolve o tempo para almoçar com calma com os filhos.",badge:"300 Dias de Sol & Equilíbrio",rent:"€ 900 - 1.250/mês",keyFeature:"Equilíbrio perfeito de metrópole, custo de vida e praia.",tag:"Top #3 · Família & Sol"}],F=[{id:"malaga",name:"Málaga & Costa del Sol",region:"ANDALUZIA · POLO TECNOLÓGICO & MAR",photo:"https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=300&q=80",desc:"O Vale do Silício do sul da Europa. Sede de gigantes de tecnologia (Google, Vodafone), clima temperado e custo atrativo à beira-mar.",badge:"Silicon Valley Espanhol",rent:"€ 850 - 1.200"},{id:"galicia",name:"Galícia (Vigo & Santiago)",region:"GALÍCIA · NATUREZA & CUSTO ACESSÍVEL",photo:"https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=300&q=80",desc:"Gastronomia farta, segurança total e aluguéis até 45% mais baixos que Madrid. Laços históricos profundos com a comunidade brasileira.",badge:"Custo Acessível & Calma",rent:"€ 600 - 850"},{id:"zaragoza",name:"Zaragoza",region:"ARAGÃO · ESTRATÉGIA LOGÍSTICA",photo:"https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Basilica_del_Pilar_%28Zaragoza%2C_Aragon%29.jpg/960px-Basilica_del_Pilar_%28Zaragoza%2C_Aragon%29.jpg",desc:"A 1h15 de trem-bala entre Madrid e Barcelona. Custo de moradia moderado, grandes universidades e vida tranquila.",badge:"Polo Logístico Central",rent:"€ 700 - 950"},{id:"sevilha",name:"Sevilha",region:"ANDALUZIA · HISTÓRIA & ENGENHARIA",photo:"https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg/960px-Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg",desc:"Ruas históricas de laranjeiras, arquitetura imponente e acolhimento caloroso. Polo aeroespacial e aluguéis menores.",badge:"Capital Andaluza",rent:"€ 750 - 1.050"},{id:"alicante",name:"Alicante & Costa Blanca",region:"COMUNIDAD VALENCIANA · ÁGUAS CALMAS",photo:"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Vista_de_Alicante%2C_Espa%C3%B1a%2C_2014-07-04%2C_DD_67-70_PAN.JPG/960px-Vista_de_Alicante%2C_Espa%C3%B1a%2C_2014-07-04%2C_DD_67-70_PAN.JPG",desc:"Águas cristalinas, aeroporto internacional com voos para toda a Europa e uma das melhores proporções de custo e lazer.",badge:"Costa Blanca & Praia",rent:"€ 750 - 1.000"},{id:"bilbao",name:"Bilbao & País Basco",region:"PAÍS BASCO · INDÚSTRIA & ALTA RENDA",photo:"https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Guggenheim_Museum_Bilbao%2C_exterior.jpg/960px-Guggenheim_Museum_Bilbao%2C_exterior.jpg",desc:"A mais alta média salarial da Espanha e o melhor sistema de saúde público regional. Referência global em inovação.",badge:"Maior Renda Média",rent:"€ 950 - 1.350"},{id:"granada",name:"Granada",region:"ANDALUZIA · UNIVERSIDADE & SERRA",photo:"https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Alhambra_evening_panorama_Mirador_San_Nicolas_sRGB-1.jpg/960px-Alhambra_evening_panorama_Mirador_San_Nicolas_sRGB-1.jpg",desc:"Aos pés das montanhas de neve e a 40 minutos do mar. Vida universitária vibrante, aluguéis convidativos e cultura rica.",badge:"Cidade Histórica & Charme",rent:"€ 650 - 900"}];return`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Código Europa · COD-E | A Máquina de Vendas do Esquadrão</title>
  <meta name="description" content="O time de 7 Super Agentes de IA que planeja, valida e executa sua travessia legal para a Espanha em 24 meses.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --navy: #13213F;
      --navy-deep: #0C1527;
      --red: #A31E22;
      --red-bright: #DC2626;
      --cream: #F8F5EF;
      --cream-card: #FAF7F2;
      --gold: #D4AF37;
      --amber: #F59E0B;
      --gray: #4A453E;
      --line: #E4DDCF;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: var(--cream);
      color: #1B1B18;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      padding-bottom: 90px;
    }

    h1, h2, h3, .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }

    .container {
      max-width: 1140px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .text-center { text-align: center; }

    /* Botão CTA Oficial */
    .btn-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: linear-gradient(135deg, var(--red-bright), var(--red));
      color: #FFFFFF !important;
      text-decoration: none;
      font-weight: 800;
      font-size: 16px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 18px 36px;
      border-radius: 16px;
      border: 1px solid rgba(245, 158, 11, 0.4);
      box-shadow: 0 8px 30px rgba(220, 38, 38, 0.6);
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .btn-cta:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 12px 40px rgba(220, 38, 38, 0.85);
      background: linear-gradient(135deg, #EF4444, #DC2626);
    }

    /* Grids */
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }

    /* City Row Card with Small Photo */
    .city-card-small {
      background: #FFFFFF;
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 16px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
      transition: transform 0.25s, box-shadow 0.25s;
    }

    .city-card-small:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.06);
      border-color: rgba(163, 30, 34, 0.4);
    }

    .city-thumb {
      width: 90px;
      height: 90px;
      border-radius: 12px;
      object-fit: cover;
      flex-shrink: 0;
      border: 1px solid var(--line);
    }

    .agent-card {
      background: #131D33;
      border: 2px solid #334155;
      border-radius: 20px;
      padding: 20px;
      color: #FFFFFF;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
    }

    .agent-card:hover {
      transform: translateY(-4px);
      border-color: var(--amber);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    .agent-card.featured {
      border-color: var(--red);
      box-shadow: 0 0 25px rgba(163, 30, 34, 0.4);
    }

    /* Modal */
    .modal-overlay {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(4px);
      z-index: 1000;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal-content {
      background: #121A2D;
      border: 2px solid #475569;
      border-radius: 24px;
      max-width: 520px;
      width: 100%;
      padding: 28px;
      color: #FFFFFF;
      position: relative;
    }

    .sticky-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #0A101D;
      border-top: 2px solid var(--red-bright);
      padding: 12px 20px;
      z-index: 500;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 -4px 20px rgba(0,0,0,0.5);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-grid { grid-template-columns: 1fr !important; }
      .sticky-bar { flex-direction: column; gap: 8px; text-align: center; }
      .btn-cta { width: 100%; font-size: 15px; padding: 15px 20px; }
      .city-card-small { flex-direction: column; }
      .city-thumb { width: 100%; height: 140px; }
    }
  </style>
</head>
<body>

  <!-- HERO SECTION -->
  <header style="padding: 50px 0 60px; background: linear-gradient(180deg, #FAF7F2 0%, #F4EFE6 100%); border-bottom: 1px solid var(--line);">
    <div class="container text-center" style="max-width: 900px; margin: 0 auto;">
      <span style="display: inline-block; font-family: monospace; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: var(--red); background: rgba(163,30,34,0.1); padding: 4px 14px; border-radius: 20px; margin-bottom: 16px;">
        O Esquadrão Código Europa · COD-E
      </span>
      <h1 style="font-size: 42px; line-height: 1.15; color: var(--navy); margin-bottom: 18px;">
        Não é uma viagem.<br>
        É uma mudança de vida.<br>
        <span style="color: var(--red);">E de geração.</span>
      </h1>
      <p style="font-size: 18px; color: var(--gray); margin-bottom: 24px; line-height: 1.6; max-width: 750px; margin-left: auto; margin-right: auto;">
        A escola do seu filho. A rua por onde ele volta a pé à noite sem você olhar no retrovisor com medo. O passaporte que ele carrega no bolso para 27 países da União Europeia.
      </p>

      <div style="background: #FFFFFF; border-left: 4px solid var(--red); padding: 14px 20px; border-radius: 8px; margin: 0 auto 30px; max-width: 700px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
        <p style="font-family: Georgia, serif; font-size: 17px; color: var(--navy); font-style: italic;">
          &ldquo;Um voo dura onze horas. Essa decisão dura três gerações. Seja o herói da sua própria jornada.&rdquo;
        </p>
      </div>

      <!-- ======================================================== -->
      <!-- ESPAÇO VSL: COLE SEU VÍDEO AQUI (YOUTUBE, VIMEO OU <video>) -->
      <!-- ======================================================== -->
      <div id="vsl-player-container" style="max-width: 860px; margin: 30px auto 28px; background: #080E1C; border: 2px solid #334155; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
        <!-- BARRA SUPERIOR DA VSL -->
        <div style="background: #121D36; padding: 10px 18px; display: flex; justify-content: space-between; align-items: center; color: #FFF; font-size: 12px; border-bottom: 1px solid #334155;">
          <span style="color: #F59E0B; font-family: monospace; font-weight: bold;">🔴 APRESENTAÇÃO OFICIAL DA VSL</span>
          <span style="color: #94A3B8;">Ligue o som · HD 1080p</span>
        </div>

        <!-- CONTAINER DO VÍDEO (16:9 RESPONSIVO) -->
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; background: #000;">
          <!-- COLOQUE AQUI O SEU CÓDIGO EMBED DO YOUTUBE/VIMEO/PANDAVIDEO OU UMA TAG <video>: -->
          <iframe id="vsl-iframe" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&rel=0" style="position: absolute; top:0; left:0; width:100%; height:100%; border:0;" title="Apresentação do Esquadrão Código Europa" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div style="background: #0C1527; padding: 14px 20px; text-align: center; color: #CBD5E1; font-size: 13px;">
          🔊 <strong>Importante:</strong> Assista até o fim para entender a rota jurídica de 2 anos e ter acesso ao time completo.
        </div>
      </div>

      <div>
        <a href="${S}" target="_blank" class="btn-cta" style="margin-bottom: 12px;">
          🛡️ QUERO MEU TIME DE SUPER AGENTES
        </a>
        <div style="font-size: 13px; color: #64748B; margin-top: 8px;">
          ✓ Acesso vitalício aos 7 agentes &nbsp;·&nbsp; 🔒 7 dias de garantia incondicional &nbsp;·&nbsp; Apenas 12x de R$ 29,64
        </div>
      </div>
    </div>
  </header>

  <!-- O TIME DE SUPER-HERÓIS (ESQUADRÃO COD-E) -->
  <section style="padding: 70px 0; background: var(--navy-deep); color: #FFFFFF;" id="esquadrao">
    <div class="container">
      <div class="text-center" style="max-width: 650px; margin: 0 auto 40px;">
        <span style="font-family: monospace; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #FCA5A5; background: rgba(163,30,34,0.3); padding: 4px 12px; border-radius: 20px; display: inline-block; margin-bottom: 12px;">
          O Esquadrão COD-E · Mascotes da Confraria
        </span>
        <h2 style="font-size: 38px; color: #FFFFFF; margin-bottom: 12px;">
          Sete agentes.<br>Um esquadrão.<br><span style="color: var(--red-bright);">Nenhuma etapa sozinho.</span>
        </h2>
        <p style="font-size: 16px; color: #94A3B8;">
          E tem um deles que comanda os outros seis. O Capitão lê o seu tabuleiro inteiro, monta a sua rota e aciona cada agente na hora exata.
        </p>
      </div>

      <div class="grid-4">
        ${AGENTS_DATA.map(E=>`
          <div class="agent-card ${E.isCommander?"featured":""}" onclick="openAgentModal('${E.id}')">
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                <span style="font-family: monospace; font-size: 12px; font-weight: bold; color: #94A3B8;">#${E.number}</span>
                <span style="font-size: 10px; background: ${E.isCommander?"var(--red)":"#1E293B"}; color: #FFF; padding: 2px 8px; border-radius: 10px; font-weight: bold; text-transform: uppercase; border: 1px solid #475569;">
                  ${E.isCommander?"⭐ Comandante":"Super Agente"}
                </span>
              </div>
              <div style="text-align: center; margin-bottom: 14px;">
                <div style="width: 64px; height: 64px; border-radius: 50%; background: ${E.isCommander?"linear-gradient(135deg, #A31E22, #DC2626)":"#1E293B"}; border: 2px solid ${E.isCommander?"#F59E0B":"#64748B"}; margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; font-size: 26px; font-weight: 900; color: #FFF; box-shadow: 0 4px 15px rgba(0,0,0,0.4);">
                  ${E.initial}
                </div>
                <h3 style="font-size: 20px; font-weight: bold; color: #FFFFFF;">${E.name}</h3>
                <span style="font-size: 11px; text-transform: uppercase; color: #94A3B8; font-weight: bold; display: block; margin-top: 2px;">${E.role}</span>
              </div>
              <p style="font-size: 12px; color: #CBD5E1; line-height: 1.5; margin-bottom: 14px; text-align: center;">
                ${E.resolves}
              </p>
            </div>
            <div style="border-top: 1px solid #334155; padding-top: 10px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: var(--amber); font-weight: bold;">
              <span>Abrir ficha do herói</span>
              <span>→</span>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="text-center" style="margin-top: 48px;">
        <a href="${S}" target="_blank" class="btn-cta">
          ⚡ CONVOCAR MEU TIME DE SUPER AGENTES
        </a>
      </div>
    </div>
  </section>

  <!-- GRÁFICOS E DADOS COMPARATIVOS: BRASIL 🇧🇷 vs ESPANHA 🇪🇸 -->
  <section style="padding: 60px 0; background: #FAF7F2; border-bottom: 1px solid var(--line);">
    <div class="container">
      <div class="text-center" style="max-width: 650px; margin: 0 auto 36px;">
        <span style="font-family: monospace; font-size: 12px; font-weight: bold; text-transform: uppercase; color: var(--red); display: block; margin-bottom: 6px;">
          INDICADORES REAIS & AUDITADOS
        </span>
        <h2 style="font-size: 30px; color: var(--navy);">
          A diferença real entre viver em alerta e viver em paz
        </h2>
        <p style="font-size: 14px; color: var(--gray); margin-top: 8px;">
          Dados oficiais e auditados pelos órgãos governamentais de estatística da Espanha (INE, Eurostat) e do Brasil (IBGE, IPEA).
        </p>
      </div>

      <div class="grid-3">
        <!-- Longevidade -->
        <div style="background: #FFFFFF; border: 1px solid var(--line); border-radius: 18px; padding: 24px;">
          <span style="font-size: 11px; font-family: monospace; color: var(--gray); text-transform: uppercase;">INE Espanha vs IBGE Brasil</span>
          <h3 style="font-size: 20px; color: var(--navy); margin: 6px 0 10px;">Esperança de Vida</h3>
          <div style="font-size: 34px; font-weight: 900; color: var(--red); margin-bottom: 8px;">+8,0 anos</div>
          <p style="font-size: 13px; color: var(--gray); margin-bottom: 16px;">
            Mais 8 anos ao lado dos seus netos com saúde pública universal e alimentação mediterrânea.
          </p>
          <div style="background: #F8F5EF; padding: 14px; border-radius: 12px; border: 1px solid #EAE3D6;">
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
              <span>🇪🇸 <strong>Espanha (INE)</strong></span><span style="color:#059669; font-family: monospace; font-weight:bold;">84,0 anos</span>
            </div>
            <div style="height: 10px; background: #E0D7C6; border-radius: 5px; overflow: hidden; margin-bottom: 12px;">
              <div style="width: 100%; height: 100%; background: #059669;"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
              <span>🇧🇷 <strong>Brasil (IBGE)</strong></span><span style="color:#DC2626; font-family: monospace; font-weight:bold;">76,0 anos</span>
            </div>
            <div style="height: 10px; background: #E0D7C6; border-radius: 5px; overflow: hidden;">
              <div style="width: 88%; height: 100%; background: #DC2626;"></div>
            </div>
          </div>
        </div>

        <!-- Cidadania -->
        <div style="background: #FFFFFF; border: 1px solid var(--line); border-radius: 18px; padding: 24px;">
          <span style="font-size: 11px; font-family: monospace; color: var(--gray); text-transform: uppercase;">Art. 22.1 Código Civil Espanhol</span>
          <h3 style="font-size: 20px; color: var(--navy); margin: 6px 0 10px;">Cidadania Ibero-Americana</h3>
          <div style="font-size: 34px; font-weight: 900; color: var(--amber); margin-bottom: 8px;">Apenas 2 Anos</div>
          <p style="font-size: 13px; color: var(--gray); margin-bottom: 16px;">
            Brasileiros têm o menor prazo de toda a Europa para ter o passaporte europeu na mão.
          </p>
          <div style="background: #F8F5EF; padding: 14px; border-radius: 12px; border: 1px solid #EAE3D6;">
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
              <span>🇪🇸 <strong>Espanha (Brasileiros)</strong></span><span style="color:#059669; font-family: monospace; font-weight:bold;">2 Anos</span>
            </div>
            <div style="height: 10px; background: #E0D7C6; border-radius: 5px; overflow: hidden; margin-bottom: 12px;">
              <div style="width: 20%; height: 100%; background: #059669;"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
              <span>🇪🇺 <strong>Regra Geral Europa</strong></span><span style="color:#DC2626; font-family: monospace; font-weight:bold;">10 Anos</span>
            </div>
            <div style="height: 10px; background: #E0D7C6; border-radius: 5px; overflow: hidden;">
              <div style="width: 100%; height: 100%; background: #DC2626;"></div>
            </div>
          </div>
        </div>

        <!-- Segurança -->
        <div style="background: #FFFFFF; border: 1px solid var(--line); border-radius: 18px; padding: 24px;">
          <span style="font-size: 11px; font-family: monospace; color: var(--gray); text-transform: uppercase;">Eurostat vs IPEA / FBSP</span>
          <h3 style="font-size: 20px; color: var(--navy); margin: 6px 0 10px;">Segurança Pública</h3>
          <div style="font-size: 34px; font-weight: 900; color: #059669; margin-bottom: 8px;">34x Mais Seguro</div>
          <p style="font-size: 13px; color: var(--gray); margin-bottom: 16px;">
            Celular na mão no transporte público e volta a pé à meia-noite sem medo de assalto.
          </p>
          <div style="background: #F8F5EF; padding: 14px; border-radius: 12px; border: 1px solid #EAE3D6;">
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
              <span>🇧🇷 <strong>Brasil (IPEA)</strong></span><span style="color:#DC2626; font-family: monospace; font-weight:bold;">20,4 / 100k</span>
            </div>
            <div style="height: 10px; background: #E0D7C6; border-radius: 5px; overflow: hidden; margin-bottom: 12px;">
              <div style="width: 90%; height: 100%; background: #DC2626;"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
              <span style="color:#059669; font-weight:bold;">🇪🇸 Espanha (Eurostat)</span><span style="color:#059669; font-weight:bold; font-family: monospace;">0,6 / 100k</span>
            </div>
            <div style="height: 10px; background: #E0D7C6; border-radius: 5px; overflow: hidden;">
              <div style="width: 6%; height: 100%; background: #059669;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- DESTINOS DA TRAVESSIA: TRÍADE PRINCIPAL, MAPA DINÂMICO E OUTROS POLOS -->
  <section style="padding: 60px 0; background: #F4EFE6; border-bottom: 1px solid var(--line);" id="destinos">
    <div class="container">
      <div class="text-center" style="max-width: 700px; margin: 0 auto 36px;">
        <span style="font-family: monospace; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: var(--red); display: block; margin-bottom: 8px;">
          OS DESTINOS DA TRAVESSIA
        </span>
        <h2 style="font-size: 32px; color: var(--navy); margin-bottom: 12px;">
          A Espanha não é um conceito abstrato. É uma terça-feira real.
        </h2>
        <p style="font-size: 15px; color: var(--gray);">
          A escolha da cidade define a sua rotina, o custo de vida e a velocidade da sua adaptação. Conheça a <strong>Tríade Principal de Desembarque</strong>, explore o mapa dinâmico e veja os outros polos estratégicos:
        </p>
      </div>

      <!-- 1. A TRÍADE PRINCIPAL EM MÁXIMO DESTAQUE (BARCELONA, MADRID, VALENCIA) -->
      <div style="margin-bottom: 40px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <h3 style="font-size: 20px; color: var(--navy); font-weight: bold;">
            ⭐ A Tríade Principal de Desembarque
          </h3>
          <span style="font-size: 11px; font-family: monospace; color: var(--red); font-weight: bold; background: rgba(163,30,34,0.1); padding: 3px 10px; border-radius: 12px;">
            80% dos Brasileiros Escolhem Aqui
          </span>
        </div>

        <div class="grid-3">
          ${f.map(E=>`
            <div style="background: #FFFFFF; border: 2px solid var(--line); border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s;" onmouseover="this.style.borderColor='var(--red)'" onmouseout="this.style.borderColor='var(--line)'">
              <div style="position: relative; height: 190px; overflow: hidden; background: #0F172A;">
                <img src="${E.photo}" alt="${E.name}" style="width: 100%; height: 100%; object-fit: cover;">
                <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%);"></div>
                <div style="position: absolute; top: 10px; left: 10px; background: var(--red); color: #FFF; font-size: 10px; font-weight: bold; font-family: monospace; padding: 3px 8px; border-radius: 6px;">
                  ${E.tag}
                </div>
                <div style="position: absolute; bottom: 10px; left: 14px; right: 14px; color: #FFF;">
                  <span style="font-size: 10px; font-family: monospace; color: #FDE68A; text-transform: uppercase;">${E.region}</span>
                  <h4 style="font-size: 22px; font-weight: bold; margin-top: 2px;">${E.name}</h4>
                </div>
              </div>
              <div style="padding: 18px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="font-size: 12px; font-weight: bold; color: var(--red); margin-bottom: 6px;">
                    ${E.keyFeature}
                  </div>
                  <p style="font-size: 13px; color: #3E3A35; line-height: 1.5; margin-bottom: 14px;">
                    ${E.desc}
                  </p>
                </div>
                <div style="border-top: 1px solid var(--line); padding-top: 10px; display: flex; justify-content: space-between; align-items: center; font-size: 12px;">
                  <span style="color: #64748B;">Aluguel (2Q): <strong>${E.rent}</strong></span>
                  <span style="color: var(--red); font-weight: bold; font-style: italic;">Analisar ➔</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- 2. MAPA DINÂMICO DA ESPANHA COM INTERAÇÃO -->
      <div style="background: #10192E; border: 1px solid #334155; border-radius: 24px; padding: 24px; color: #FFF; margin-bottom: 40px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
          <div>
            <span style="font-family: monospace; font-size: 11px; color: #FDE68A; text-transform: uppercase;">NAVEGAÇÃO GEOGRÁFICA</span>
            <h3 style="font-size: 20px; font-weight: bold; margin-top: 2px;">Mapa Interativo das Cidades Espanholas</h3>
          </div>
          <span style="font-size: 12px; color: #94A3B8;">Passe o mouse pelos pontos para ver o polo</span>
        </div>

        <div style="position: relative; max-width: 540px; margin: 0 auto; aspect-ratio: 4/3; background: #0A101D; border-radius: 16px; border: 1px solid #1E293B; overflow: hidden; padding: 12px;">
          <svg viewBox="0 0 500 380" style="width: 100%; height: 100%;" xmlns="http://www.w3.org/2000/svg">
            <path d="M 55 110 L 105 115 L 115 170 L 125 240 L 95 300 L 75 305 L 55 270 L 45 190 Z" fill="#0D1525" stroke="#1E293B" stroke-width="1.5" opacity="0.6"/>
            <text x="75" y="210" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">PORTUGAL</text>
            <path d="M 60 70 C 100 65, 140 60, 200 60 C 240 60, 260 55, 290 65 C 320 75, 360 85, 415 90 L 425 110 C 420 140, 400 170, 395 210 C 390 230, 370 255, 345 275 C 320 295, 275 315, 240 325 C 200 335, 180 330, 160 320 C 140 310, 125 305, 120 280 C 115 220, 105 160, 95 115 C 80 110, 65 95, 60 70 Z" fill="#18233A" stroke="#334B73" stroke-width="2"/>
            <ellipse cx="435" cy="220" rx="16" ry="11" fill="#18233A" stroke="#334B73" stroke-width="1.5"/>
            <text x="250" y="30" fill="#384C6E" font-size="10" font-weight="bold" text-anchor="middle">MAR CANTÁBRICO</text>
            <text x="440" y="160" fill="#384C6E" font-size="10" font-weight="bold" text-anchor="middle">MEDITERRÂNEO</text>
          </svg>

          <!-- PINS DO MAPA COM HOVER DINÂMICO -->
          <div style="position: absolute; left: 82%; top: 35%; transform: translate(-50%, -50%); cursor: pointer;" title="Barcelona: Polo Cosmopolita">
            <span style="display: block; width: 14px; height: 14px; background: #DC2626; border: 2px solid #FDE68A; border-radius: 50%; box-shadow: 0 0 10px #DC2626;"></span>
            <span style="position: absolute; top: 16px; left: 50%; transform: translateX(-50%); font-size: 9px; background: rgba(0,0,0,0.8); color: #FFF; padding: 1px 4px; border-radius: 4px; white-space: nowrap;">Barcelona</span>
          </div>

          <div style="position: absolute; left: 48%; top: 49%; transform: translate(-50%, -50%); cursor: pointer;" title="Madrid: Centro Financeiro">
            <span style="display: block; width: 14px; height: 14px; background: #DC2626; border: 2px solid #FDE68A; border-radius: 50%; box-shadow: 0 0 10px #DC2626;"></span>
            <span style="position: absolute; top: 16px; left: 50%; transform: translateX(-50%); font-size: 9px; background: rgba(0,0,0,0.8); color: #FFF; padding: 1px 4px; border-radius: 4px; white-space: nowrap;">Madrid</span>
          </div>

          <div style="position: absolute; left: 71%; top: 57%; transform: translate(-50%, -50%); cursor: pointer;" title="Valencia: 300 Dias de Sol">
            <span style="display: block; width: 14px; height: 14px; background: #DC2626; border: 2px solid #FDE68A; border-radius: 50%; box-shadow: 0 0 10px #DC2626;"></span>
            <span style="position: absolute; top: 16px; left: 50%; transform: translateX(-50%); font-size: 9px; background: rgba(0,0,0,0.8); color: #FFF; padding: 1px 4px; border-radius: 4px; white-space: nowrap;">Valencia</span>
          </div>

          <div style="position: absolute; left: 39%; top: 84%; transform: translate(-50%, -50%); cursor: pointer;" title="Málaga: Silicon Valley do Sul">
            <span style="display: block; width: 10px; height: 10px; background: #22D3EE; border-radius: 50%;"></span>
            <span style="position: absolute; top: 12px; left: 50%; transform: translateX(-50%); font-size: 8px; color: #CBD5E1; white-space: nowrap;">Málaga</span>
          </div>

          <div style="position: absolute; left: 27%; top: 79%; transform: translate(-50%, -50%); cursor: pointer;" title="Sevilha: Capital Andaluza">
            <span style="display: block; width: 10px; height: 10px; background: #22D3EE; border-radius: 50%;"></span>
            <span style="position: absolute; top: 12px; left: 50%; transform: translateX(-50%); font-size: 8px; color: #CBD5E1; white-space: nowrap;">Sevilha</span>
          </div>

          <div style="position: absolute; left: 13%; top: 20%; transform: translate(-50%, -50%); cursor: pointer;" title="Galícia: Custo Acessível">
            <span style="display: block; width: 10px; height: 10px; background: #22D3EE; border-radius: 50%;"></span>
            <span style="position: absolute; top: 12px; left: 50%; transform: translateX(-50%); font-size: 8px; color: #CBD5E1; white-space: nowrap;">Galícia</span>
          </div>

          <div style="position: absolute; left: 52%; top: 16%; transform: translate(-50%, -50%); cursor: pointer;" title="Bilbao: Maior Renda Média">
            <span style="display: block; width: 10px; height: 10px; background: #22D3EE; border-radius: 50%;"></span>
            <span style="position: absolute; top: 12px; left: 50%; transform: translateX(-50%); font-size: 8px; color: #CBD5E1; white-space: nowrap;">Bilbao</span>
          </div>

          <div style="position: absolute; left: 65%; top: 34%; transform: translate(-50%, -50%); cursor: pointer;" title="Zaragoza: Trem-bala Central">
            <span style="display: block; width: 10px; height: 10px; background: #22D3EE; border-radius: 50%;"></span>
            <span style="position: absolute; top: 12px; left: 50%; transform: translateX(-50%); font-size: 8px; color: #CBD5E1; white-space: nowrap;">Zaragoza</span>
          </div>
        </div>
      </div>

      <!-- 3. OUTROS DESTINOS ESTRATÉGICOS (ABAIXO E MENORES, COM FOTOS PEQUENAS LATERAIS) -->
      <div>
        <div style="margin-bottom: 16px;">
          <h3 style="font-size: 20px; color: var(--navy); font-weight: bold;">
            Outros Destinos Estratégicos na Espanha (Menor Custo de Vida)
          </h3>
          <p style="font-size: 13px; color: var(--gray); margin-top: 4px;">
            Aluguéis até 45% mais acessíveis e alta qualidade de vida:
          </p>
        </div>

        <div class="grid-2">
          ${F.map(E=>`
            <div class="city-card-small">
              <img src="${E.photo}" alt="${E.name}" class="city-thumb">
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <h4 style="font-size: 16px; color: var(--navy); font-weight: bold;">${E.name}</h4>
                  <span style="font-size: 10px; background: #DCFCE7; color: #166534; padding: 2px 6px; border-radius: 6px; font-weight: bold;">
                    ${E.rent}
                  </span>
                </div>
                <span style="font-family: monospace; font-size: 9px; color: var(--red); font-weight: bold; display: block; margin-bottom: 4px;">
                  ${E.region}
                </span>
                <p style="font-size: 12px; color: #3E3A35; line-height: 1.4; margin-bottom: 6px;">
                  ${E.desc}
                </p>
                <div style="display: flex; justify-content: space-between; font-size: 10px; color: var(--red); font-weight: bold;">
                  <span>${E.badge}</span>
                  <span style="color: #94A3B8;">BÚSSOLA analisa ➔</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Box 8.000 municípios -->
      <div style="margin-top: 30px; background: #FFFFFF; border: 1px solid var(--line); border-radius: 16px; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
        <div>
          <strong style="color: var(--navy); font-size: 15px;">Mais de 8.000 municípios espanhóis ao seu alcance</strong>
          <p style="color: var(--gray); font-size: 13px; margin-top: 4px;">
            A Espanha possui 17 Comunidades Autônomas com leis regionais e benefícios próprios. O Agente BÚSSOLA (#05) cruza seu perfil, profissão e orçamento para encontrar o município perfeito para sua família.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- A JORNADA DO HERÓI: ETAPAS DA CONQUISTA -->
  <section class="tl-sec">
    <style>
      .tl-sec{background:#F7F3EC;padding:96px 0;border-bottom:1px solid #E4DDCF;}
      .tl-in{max-width:1120px;margin:0 auto;padding:0 24px;}
      .tl-kick{font-size:12px;letter-spacing:.22em;text-transform:uppercase;
        color:#A31E22;font-weight:700;margin-bottom:18px;}
      .tl-h2{font-family:Georgia,var(--font-serif);font-weight:700;color:#13213F;
        font-size:clamp(30px,4.4vw,52px);line-height:1.12;margin:0 0 18px;letter-spacing:-.01em;}
      .tl-h2 em{font-style:normal;color:#A31E22;}
      .tl-sub{color:#6B655D;font-size:17px;line-height:1.65;max-width:640px;margin:0 0 64px;}

      .tl-rail{position:relative;display:grid;gap:36px;
        grid-template-columns:repeat(5,minmax(0,1fr));}
      .tl-rail::before{content:"";position:absolute;left:0;right:0;top:19px;height:2px;
        background:#E4DDCF;}
      .tl-step{position:relative;padding-right:12px;}
      .tl-dot{position:relative;z-index:2;width:40px;height:40px;border-radius:50%;
        background:#13213F;color:#F7F3EC;display:flex;align-items:center;justify-content:center;
        font-family:Georgia,serif;font-size:16px;font-weight:700;margin-bottom:22px;transition:transform .3s ease;}
      .tl-step:hover .tl-dot{transform:scale(1.1);background:#A31E22;}
      .tl-step--end .tl-dot{background:#A31E22;}
      .tl-when{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#A31E22;
        font-weight:700;margin-bottom:9px;}
      .tl-t{font-family:Georgia,var(--font-serif);font-size:20px;font-weight:700;
        color:#13213F;margin:0 0 10px;line-height:1.25;}
      .tl-step--end .tl-t{color:#A31E22;}
      .tl-p{font-size:14px;line-height:1.62;color:#6B655D;margin:0;}

      .tl-visa-alert{margin-top:48px;padding:24px;border-radius:16px;background:#FFFBEB;border:2px solid #F59E0B;color:#78350F;font-size:14px;line-height:1.6;}
      .tl-visa-alert strong{color:#92400E;}
      .tl-visa-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:12px;}
      .tl-visa-item{background:rgba(255,255,255,0.8);padding:12px 14px;border-radius:10px;border:1px solid #FDE68A;font-size:13px;line-height:1.5;}

      .tl-note{margin-top:36px;padding-top:24px;border-top:2px solid #E4DDCF;
        font-size:15px;line-height:1.65;color:#13213F;max-width:760px;}
      .tl-note strong{font-weight:700;}

      @media (max-width:900px){
        .tl-sec{padding:72px 0;}
        .tl-rail{grid-template-columns:1fr;gap:0;padding-left:0;}
        .tl-rail::before{left:19px;right:auto;top:0;bottom:0;width:2px;height:auto;}
        .tl-step{padding:0 0 38px 62px;}
        .tl-step:last-child{padding-bottom:0;}
        .tl-dot{position:absolute;left:0;top:0;margin-bottom:0;}
        .tl-sub{margin-bottom:48px;}
        .tl-visa-grid{grid-template-columns:1fr;}
      }
    </style>

    <div class="tl-in">
      <div class="tl-kick">A jornada do herói · Etapas em Ordem</div>
      <h2 class="tl-h2">Da decisão ao passaporte.<br>Cinco etapas, <em>em ordem</em>.</h2>
      <p class="tl-sub">Imigrar não é um salto no escuro. É uma sequência da rota do herói — e a ordem importa mais do que a pressa. Veja onde você está hoje e como cada modalidade de visto se encaixa no caminho.</p>

      <div class="tl-rail">
        <div class="tl-step">
          <div class="tl-dot">1</div>
          <div class="tl-when">Etapa 1 · O Chamado</div>
          <h3 class="tl-t">A porta certa</h3>
          <p class="tl-p">Você descobre qual via de entrada existe para o seu perfil e sua especificidade jurídica. A documentação é montada ainda no Brasil, na sequência certa — porque papel vencido derruba processo que levou meses.</p>
        </div>

        <div class="tl-step">
          <div class="tl-dot">2</div>
          <div class="tl-when">Etapa 2 · A Travessia</div>
          <h3 class="tl-t">O pouso & fixação</h3>
          <p class="tl-p">Você desembarca e passa a viver na Espanha com autorização legal. É aqui que o relógio oficial do seu visto começa a correr — cada modalidade tem regras próprias de renda, solvência e empadronamento.</p>
        </div>

        <div class="tl-step">
          <div class="tl-dot">3</div>
          <div class="tl-when">Etapa 3 · A Provação</div>
          <h3 class="tl-t">A contagem silenciosa</h3>
          <p class="tl-p">A etapa mais longa e silenciosa. Residência legal e continuada mantida. Cada tipo de visto impõe limites específicos de ausências do país para não zerar a contagem.</p>
        </div>

        <div class="tl-step">
          <div class="tl-dot">4</div>
          <div class="tl-when">Etapa 4 · A Consagração</div>
          <h3 class="tl-t">O protocolo</h3>
          <p class="tl-p">Cumpridos os 2 anos de residência legal qualificada (privilégio do Artigo 22 do Código Civil espanhol para nacionais de países ibero-americanos), você protocola a nacionalidade. Aos dois anos você pede — a análise tem prazo próprio.</p>
        </div>

        <div class="tl-step tl-step--end">
          <div class="tl-dot">✦</div>
          <div class="tl-when">O Destino · A Glória</div>
          <h3 class="tl-t">O passaporte</h3>
          <p class="tl-p">Cidadania espanhola concedida e, com ela, a europeia: viver, trabalhar e circular nos 27 países da União Europeia por gerações.</p>
        </div>
      </div>

      <!-- ALERTA DE ESPECIFICIDADE JURÍDICA DOS VISTOS -->
      <div class="tl-visa-alert">
        <strong>⚖️ Aviso Jurídico Crucial: Nem todo tipo de visto conta para a cidadania em 2 anos</strong>
        <p style="margin: 6px 0 0 0;">A regra de 2 anos (Artigo 22 do Código Civil Espanhol) é exclusiva para cidadãos ibero-americanos (como o Brasil) e exige <strong>residência legal e continuada</strong>:</p>
        <div class="tl-visa-grid">
          <div class="tl-visa-item">
            <strong style="color: #047857;">✓ Vistos de Residência Qualificada:</strong> Nômade Digital (Lei de Startups), Residência Não Lucrativa, Trabalho por Conta Própria/Alheia e Empreendedor <em>computam residência legal</em> para os 2 anos.
          </div>
          <div class="tl-visa-item">
            <strong style="color: #B91C1C;">⚠️ Visto de Estudante (Estância):</strong> Trata-se de <em>estância por estudos</em>, NÃO de residência legal. Por isso, <em>não conta para os 2 anos</em> sem modificação formal posterior para residência de trabalho/nômade.
          </div>
        </div>
      </div>

      <p class="tl-note"><strong>Onde eu entro:</strong> os sete agentes caminham com você da Etapa 1 à Etapa 2 — da decisão ao pouso seguro. É o trecho mais curto da linha do tempo e o único em que uma escolha equivocada de visto custa anos de atraso.</p>
    </div>
  </section>
  <!-- QUEM TREINOU O ESQUADRÃO: VITOR DIORRANES & AUTORIDADE -->
  <section style="padding: 70px 0; background: #10192E; color: #FFFFFF; border-bottom: 1px solid #334155;" id="autoridade">
    <div class="container">
      <div class="hero-grid" style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 40px; align-items: center;">
        <div>
          <div style="border-radius: 24px; overflow: hidden; border: 2px solid #475569; box-shadow: 0 20px 40px rgba(0,0,0,0.5); position: relative;">
            <img src="${D}" alt="Vitor Diorranes - Fundador do Código Europa" style="width: 100%; height: 380px; object-fit: cover; object-position: top;">
            <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.7); padding: 4px 10px; border-radius: 8px; font-size: 11px; color: #F59E0B; font-weight: bold;">
              Barcelona · Espanha
            </div>
          </div>
        </div>
        <div>
          <span style="display: inline-block; font-family: monospace; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: #FCA5A5; background: rgba(163,30,34,0.3); padding: 4px 12px; border-radius: 20px; margin-bottom: 16px;">
            Mentor & Criador do Esquadrão COD-E
          </span>
          <h2 style="font-size: 32px; line-height: 1.25; color: #FFFFFF; margin-bottom: 16px;">
            &ldquo;Eu não li sobre a Espanha na internet. Eu moro nela e treino quem decide vencer.&rdquo;
          </h2>
          <p style="font-size: 15px; color: #CBD5E1; margin-bottom: 16px; line-height: 1.6;">
            Mineiro, gestor internacional, <strong>33 países no passaporte</strong>, hoje vivendo em Barcelona. Carreira construída dentro de lugares onde pouca gente senta: <strong>Cruzeiro EC, Seleção Brasileira de Futsal (CBFS) e Penalty</strong>. Vestiário, escritório e mesa de negociação internacional.
          </p>
          <p style="font-size: 14px; color: #CBD5E1; margin-bottom: 20px; line-height: 1.6;">
            Quando desembarcou na Espanha com a família, aprendeu cada etapa no próprio couro: contratos de aluguel, empadronamento, homologação de diplomas e protocolos do Ministério de Justiça. Criou a <strong>Confraria Europa</strong> para transformar a imigração em uma ciência exata.
          </p>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="https://www.linkedin.com/in/vitordiorranes/" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: #0A66C2; color: #FFF; text-decoration: none; padding: 10px 18px; border-radius: 12px; font-size: 13px; font-weight: bold;">
              LinkedIn Vitor Diorranes ↗
            </a>
            <a href="https://www.instagram.com/vitordiorranes/" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(45deg, #F09433, #E6683C, #DC2743, #CC2366, #BC1888); color: #FFF; text-decoration: none; padding: 10px 18px; border-radius: 12px; font-size: 13px; font-weight: bold;">
              Instagram @vitordiorranes ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- OFERTA & COMPRA EM DESTAQUE -->
  <section style="padding: 80px 0; background: linear-gradient(180deg, #FAF7F2 0%, #EAE4D7 100%);" id="oferta">
    <div class="container" style="max-width: 820px;">
      <div style="background: #0E1729; border: 2px solid var(--red); border-radius: 28px; padding: 48px 32px; color: #FFFFFF; text-align: center; box-shadow: 0 25px 60px rgba(0,0,0,0.4); position: relative;">

        <!-- O risco é meu -->
        <div style="margin-bottom: 24px;">
          <div style="font-size: 36px; margin-bottom: 8px;">🛡️</div>
          <h3 style="font-size: 24px; color: var(--amber); font-weight: bold; margin-bottom: 8px;">
            O risco é meu.
          </h3>
          <p style="font-size: 15px; color: #CBD5E1; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            Instala o esquadrão, testa os 8 super agentes, simula seus vistos e suas rotas. Se em 7 dias você achar que não vale pelo menos 10x o que pagou, eu devolvo 100% do seu dinheiro. Sem letras miúdas.
          </p>
        </div>

        <div style="display: inline-block; background: rgba(163,30,34,0.3); border: 1px solid var(--red); padding: 6px 18px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #FCA5A5; margin-bottom: 16px;">
          ACESSO VITALÍCIO · ATUALIZAÇÕES INCLUSAS
        </div>

        <h2 style="font-size: 34px; color: #FFFFFF; margin-bottom: 8px;">
          Esquadrão Código Europa · COD-E
        </h2>
        <p style="font-size: 14px; color: #94A3B8; margin-bottom: 28px;">
          Os 7 Super Agentes de IA + Acesso à Confraria Europa (Os Argonautas)
        </p>

        <!-- Preço e Parcelas -->
        <div style="background: #15223D; border: 1px solid #334155; border-radius: 20px; padding: 28px; max-width: 500px; margin: 0 auto 32px;">
          <div style="font-size: 13px; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">
            Por apenas
          </div>
          <div style="font-size: 48px; font-weight: 900; color: #F59E0B; line-height: 1;">
            12x R$ 29,64
          </div>
          <div style="font-size: 15px; color: #E2E8F0; margin-top: 8px;">
            ou <strong>R$ 297,00 à vista</strong> (menos de 1 café por dia)
          </div>
        </div>

        <!-- Botão Principal de Compra -->
        <div>
          <a href="${S}" target="_blank" class="btn-cta" style="width: 100%; max-width: 480px; font-size: 18px; padding: 20px;">
            ⚡ QUERO MEU TIME DE SUPER AGENTES AGORA
          </a>
        </div>

        <div style="display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; margin-top: 24px; font-size: 12px; color: #94A3B8;">
          <span>🔒 Pagamento Seguro Hotmart</span>
          <span>🛡️ 7 Dias de Garantia Total</span>
          <span>♾️ Acesso Vitalício</span>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section style="padding: 70px 0; background: var(--cream);" id="faq">
    <div class="container" style="max-width: 780px;">
      <div class="text-center" style="margin-bottom: 40px;">
        <span style="font-family: monospace; font-size: 12px; font-weight: bold; text-transform: uppercase; color: var(--red);">
          DÚVIDAS FREQUENTES
        </span>
        <h2 style="font-size: 32px; color: var(--navy); margin-top: 8px;">
          Perguntas Frequentes sobre o Esquadrão
        </h2>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        ${FAQ_DATA.map((E,Y)=>`
          <details style="background: #FFFFFF; border: 1px solid var(--line); border-radius: 14px; padding: 18px 22px; cursor: pointer;">
            <summary style="font-weight: 700; color: var(--navy); font-size: 16px; outline: none;">
              ${E.question}
            </summary>
            <p style="margin-top: 12px; font-size: 14px; color: var(--gray); line-height: 1.6; border-top: 1px solid var(--line); padding-top: 12px;">
              ${E.answer}
            </p>
          </details>
        `).join("")}
      </div>
    </div>
  </section>

  <!-- STICKY CTA FLUTUANTE -->
  <div class="sticky-bar">
    <div style="display: flex; align-items: center; gap: 12px;">
      <span style="width: 10px; height: 10px; border-radius: 50%; background: #22C55E; display: inline-block;"></span>
      <div style="color: #FFF; font-size: 13px;">
        <strong>Esquadrão COD-E: 7 Super Agentes</strong> · <span style="color: #F59E0B;">Acesso Vitalício + Confraria</span>
      </div>
    </div>
    <a href="${S}" target="_blank" class="btn-cta" style="padding: 12px 28px; font-size: 14px;">
      QUERO MEU TIME DE AGENTES →
    </a>
  </div>

  <script>
    // Modal Ficha do Herói
    const agentsData = ${JSON.stringify(AGENTS_DATA)};
    function openAgentModal(id) {
      const agent = agentsData.find(a => a.id === id);
      if (!agent) return;
      alert("Super Agente #" + agent.number + ": " + agent.name + " (" + agent.role + ")\\n\\n" + agent.resolves + "\\n\\nFrase do Herói: " + agent.signaturePhrase);
    }
  <\/script>
</body>
</html>`}
