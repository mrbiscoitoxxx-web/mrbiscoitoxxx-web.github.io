/* ═══════════════════════════════════════════════════════════════
   LAIZ EVENTS
   ═══════════════════════════════════════════════════════════════ */

const CONFIG = {
  /* Para a mensagem entrar JÁ ESCRITA no WhatsApp, põe aqui o número
     com indicativo do país, só dígitos.  Ex.: '351912345678'
     Se ficar vazio, o site copia a mensagem e abre o teu perfil. */
  phone: '351961039001',

  /* Link curto do perfil de WhatsApp Business. É este que abre os botões
     simples de "WhatsApp". Não aceita mensagem pré-escrita — por isso o
     formulário usa o número acima, que aceita. */
  profileLink: 'https://api.whatsapp.com/message/2DVRTS4D55OAC1?autoload=1&app_absent=0',

  /* Música de entrada.
     src    : nome do ficheiro de áudio (mp3/m4a) na mesma pasta.
              Deixa vazio e não há som nenhum — o botão nem aparece.
              Usa só música que possas licenciar para um site público.
     volume : 0 a 1. Começa em silêncio e sobe até este valor. */
  audio: { src: '', volume: 0.32 },

  /* Quanto tempo vale a confirmação de idade, em dias.
     30 = só volta a perguntar ao fim de um mês. 0 = pergunta sempre. */
  ageGateDays: 30,

  /* Duração da vinheta de abertura, em milissegundos (o desenho das letras
     e o brilho ocupam ~2,7s; o resto é a pausa antes da abertura). */
  introHoldMs: 2780,

  /* Redes sociais. Cada entrada vira uma ligação discreta por baixo do
     formulário. Lista vazia = não aparece nada.
     Ex.: [{ label: 'Threads', handle: '@nome', url: 'https://www.threads.com/@nome' }] */
  social: [],

  /* Faixa de galeria. Põe aqui os nomes dos ficheiros de imagem que
     estiverem na mesma pasta e a secção aparece sozinha.
     Ex.: ['gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg']
     Lista vazia = sem galeria. */
  gallery: ['gallery-0.jpg', 'gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg']
};

/* ─────────────── Textos ─────────────── */

const translations = {
  en: {
    metaTitle: 'Laiz Lux Events | Social company for international visitors in Lisbon & Cascais',
    metaDescription: 'English-speaking, strictly non-sexual social company for international visitors and residents in Lisbon, Cascais, Estoril, Ericeira and Comporta. 18+.',

    skip: 'Skip to content',
    navAbout: 'About', navGallery: 'Gallery', navHow: 'How it works', navFaq: 'FAQ', navContact: 'Contact',
    age: '18+ · Adults only',
    eyebrow: 'Lisbon · Cascais', kicker: 'For international visitors & residents',
    title: 'Your occasion in Lisbon, made easy.',
    body: 'Warm, strictly non-sexual social company for international men visiting or living in Lisbon and Cascais — for dinners, cultural events and celebrations.',
    whatsapp: 'WhatsApp', plan: 'Plan an occasion', planShort: 'Plan an occasion',
    micro: 'Usually replies within the hour · Lisbon & Cascais · 18+',
    trust: 'Respectful · Discreet · Clearly arranged',
    location: 'Lisbon & Cascais',

    areasKicker: 'Service area · Google Maps',
    areasTitle: 'Across Lisbon and the coast.',
    areasBody: 'Available by arrangement in Lisbon, Cascais, Estoril, Ericeira and Comporta. Open any destination in Google Maps.',

    aboutKicker: 'A local contact you can trust',
    aboutTitle: 'Good company, clearly arranged.',
    aboutBody: 'For international men travelling, working or living in Lisbon and Cascais who would like friendly company at a dinner, cultural event or celebration. Every arrangement starts with clear expectations and mutual respect.',
    aboutAlt: 'Laiz seated in a black armchair, studio portrait',
    card1Title: 'Dinners', card1Body: 'Relaxed social company for a restaurant reservation or special evening.',
    card2Title: 'Culture & events', card2Body: 'Company for exhibitions, performances, receptions and public events.',
    card3Title: 'Celebrations', card3Body: 'A friendly presence for parties and respectful social occasions.',

    galleryKicker: 'Moments',
    galleryTitle: 'Lisbon, at its best hours.',
    galleryAlt: 'Laiz — studio portrait',

    howKicker: 'How it works',
    howTitle: 'Three steps, no guesswork.',
    howBody: 'From the first message to the evening itself, everything is agreed in advance — so you know exactly what to expect.',
    step1Title: 'Send the details',
    step1Body: 'A short WhatsApp message with the date, the city, the type of occasion and how long you would like company for.',
    step2Title: 'Confirm together',
    step2Body: 'We agree the meeting point, the timing and what is included. Any questions are answered before anything is confirmed.',
    step3Title: 'Meet and enjoy the evening',
    step3Body: 'We meet at the agreed public venue at the agreed time. Warm, easy company — nothing more, nothing less.',

    eveningKicker: 'The city',
    eveningTitle: 'An evening in Lisbon.',
    eveningIntro: 'If you are planning the evening rather than just the company, here is how the city tends to work.',
    eveningAlt: 'Laiz in a black blazer, studio portrait',
    ev1Title: 'Dinner runs late',
    ev1Body: 'Lisbon sits down to dinner around nine. The tables worth having are in Príncipe Real, Chiado and along the Avenida da Liberdade, and the good ones are booked a few days ahead — worth doing before we confirm a date.',
    ev2Title: 'The coast is close',
    ev2Body: 'Cascais and Estoril are about forty minutes from Cais do Sodré, the train running the whole way along the river. Ericeira lies north past Sintra; Comporta is south, over the bridge, and is an afternoon and an evening rather than a dinner.',
    ev3Title: 'Openings and seasons',
    ev3Body: 'Galleries, concert halls and hotel receptions fill the calendar from September through June. August empties the city and moves everything to the sea.',

    detailsKicker: 'Before we meet',
    detailsTitle: 'Simple, clear and comfortable.',
    detailsBody: 'Please share your date, location, type of occasion, expected duration, preferred language and whether you are visiting or living locally. Meetings take place in agreed public venues.',
    boundaryTitle: 'Clear boundaries',
    boundaryBody: 'This page is exclusively for non-sexual social companionship at events and public occasions. No intimate services are offered, requested or negotiated.',

    faqKicker: 'Questions',
    faqTitle: 'Everything worth asking first.',
    q1: 'What exactly is included?',
    a1: 'Friendly, attentive company at a public occasion — conversation, a warm presence at the table and someone who knows the city. Nothing else is offered or implied.',
    q2: 'Is this an escort or intimate service?',
    a2: 'No. This is strictly non-sexual social company. Requests of an intimate nature are declined and end the conversation.',
    q3: 'How do I book?',
    a3: 'Send the details on WhatsApp using the form on this page. Messages usually get a reply within the hour. Booking a day or two ahead is best, though same-day is sometimes possible.',
    q4: 'Where do we meet?',
    a4: 'Always at an agreed public venue — a restaurant, a hotel lobby, or the entrance of the event itself.',
    q5: 'How is the fee arranged?',
    a5: 'The rate depends on the duration and location and is agreed on WhatsApp before anything is confirmed. No surprises and nothing negotiated on the night.',
    q6: 'Which languages can we speak?',
    a6: 'English and Portuguese, whichever you are more comfortable in.',
    q7: 'Do you travel outside Lisbon?',
    a7: 'Cascais, Estoril, Ericeira and Comporta are all available by arrangement. Anywhere further can be discussed, with travel agreed in advance.',
    q8: 'How discreet is this?',
    a8: 'Completely. Your details are never shared and nothing is published about an occasion without your agreement.',

    contactKicker: 'Start with the details',
    contactTitle: 'Let’s arrange your occasion.',
    contactBody: 'Fill in what you know and the message is written for you — then send it on WhatsApp in one tap.',

    fDate: 'Date', fCity: 'City', fOccasion: 'Occasion', fDuration: 'Duration',
    fLanguage: 'Preferred language', fStatus: 'You are', fNotes: 'Anything else (optional)',
    cLisbon: 'Lisbon',
    optOther: 'Other', optDinner: 'Dinner', optCulture: 'Cultural event', optCelebration: 'Celebration',
    optEvening: 'Full evening', optUndecided: 'Not sure yet', optEither: 'Either',
    optVisiting: 'Visiting Portugal', optLiving: 'Living in Portugal',
    alsoOn: 'Also on', previewLabel: 'Your message',
    sendWhatsapp: 'Send on WhatsApp', copyInquiry: 'Copy message', copied: 'Copied',

    soundOn: 'Turn the music on', soundOff: 'Turn the music off',
    gateTitle: 'Are you 18 or older?',
    gateBody: 'This site is intended for adults only. Please confirm your age to continue.',
    gateYes: 'Yes, I am 18 or older',
    gateNo: 'No, I am under 18',
    gateLegalA: 'By continuing you confirm that you are of legal age to view this content and accept the',
    gateTerms: 'Terms of Use', gateLegalB: 'and the', gatePrivacy: 'Privacy Policy',
    footTerms: 'Terms of Use', footPrivacy: 'Privacy Policy',

    msgVisiting: 'Hello Laiz — I’m visiting Portugal and would like to arrange an occasion.',
    msgLiving: 'Hello Laiz — I live in Portugal and would like to arrange an occasion.',
    lDate: 'Date', lCity: 'City', lOccasion: 'Occasion', lDuration: 'Duration',
    lLanguage: 'Language', lNotes: 'Notes', lToConfirm: 'to confirm'
  },

  pt: {
    metaTitle: 'Laiz Lux Events | Companhia social para visitantes internacionais em Lisboa e Cascais',
    metaDescription: 'Companhia social acolhedora e exclusivamente não sexual para visitantes e residentes internacionais em Lisboa, Cascais, Estoril, Ericeira e Comporta. 18+.',

    skip: 'Ir para o conteúdo',
    navAbout: 'Sobre', navGallery: 'Galeria', navHow: 'Como funciona', navFaq: 'Perguntas', navContact: 'Contacto',
    age: '18+ · Somente adultos',
    eyebrow: 'Lisboa · Cascais', kicker: 'Para visitantes e residentes internacionais',
    title: 'A sua ocasião em Lisboa, sem complicação.',
    body: 'Companhia social acolhedora e exclusivamente não sexual para homens estrangeiros que visitam ou vivem em Lisboa e Cascais — em jantares, eventos culturais e celebrações.',
    whatsapp: 'WhatsApp', plan: 'Combinar uma ocasião', planShort: 'Combinar',
    micro: 'Normalmente responde em até uma hora · Lisboa e Cascais · 18+',
    trust: 'Respeito · Discrição · Tudo combinado com clareza',
    location: 'Lisboa e Cascais',

    areasKicker: 'Área de atendimento · Google Maps',
    areasTitle: 'Lisboa e toda a costa.',
    areasBody: 'Disponível mediante combinação em Lisboa, Cascais, Estoril, Ericeira e Comporta. Abra qualquer destino no Google Maps.',

    aboutKicker: 'Um contacto local de confiança',
    aboutTitle: 'Boa companhia, tudo combinado com clareza.',
    aboutBody: 'Para homens estrangeiros em viagem, trabalho ou a viver em Lisboa e Cascais, que procuram companhia amigável num jantar, evento cultural ou celebração. Cada encontro começa com expectativas claras e respeito mútuo.',
    aboutAlt: 'Laiz sentada num cadeirão preto, retrato de estúdio',
    card1Title: 'Jantares', card1Body: 'Companhia social descontraída para uma reserva ou noite especial.',
    card2Title: 'Cultura e eventos', card2Body: 'Companhia para exposições, espetáculos, receções e eventos públicos.',
    card3Title: 'Celebrações', card3Body: 'Uma presença amigável em festas e ocasiões sociais respeitosas.',

    galleryKicker: 'Momentos',
    galleryTitle: 'Lisboa, nas suas melhores horas.',
    galleryAlt: 'Laiz — retrato de estúdio',

    howKicker: 'Como funciona',
    howTitle: 'Três passos, sem dúvidas.',
    howBody: 'Da primeira mensagem até à própria noite, fica tudo combinado à partida — para saber exatamente o que esperar.',
    step1Title: 'Envie os detalhes',
    step1Body: 'Uma mensagem curta no WhatsApp com a data, a cidade, o tipo de ocasião e durante quanto tempo gostaria de companhia.',
    step2Title: 'Confirmamos juntos',
    step2Body: 'Combinamos o ponto de encontro, os horários e o que está incluído. Todas as dúvidas são esclarecidas antes de confirmar.',
    step3Title: 'Encontramo-nos e aproveita a noite',
    step3Body: 'Encontramo-nos no local público combinado, à hora combinada. Companhia calorosa e tranquila — nada mais, nada menos.',

    eveningKicker: 'A cidade',
    eveningTitle: 'Uma noite em Lisboa.',
    eveningIntro: 'Se está a planear a noite e não apenas a companhia, é assim que a cidade costuma funcionar.',
    eveningAlt: 'Laiz de blazer preto, retrato de estúdio',
    ev1Title: 'Janta-se tarde',
    ev1Body: 'Lisboa senta-se à mesa por volta das nove. As mesas que valem a pena estão no Príncipe Real, no Chiado e ao longo da Avenida da Liberdade, e as boas reservam-se com alguns dias de antecedência — vale a pena tratar disso antes de fecharmos a data.',
    ev2Title: 'A costa fica perto',
    ev2Body: 'Cascais e Estoril ficam a cerca de quarenta minutos do Cais do Sodré, com o comboio a correr sempre junto ao rio. A Ericeira fica a norte, depois de Sintra; a Comporta fica a sul, do outro lado da ponte, e dá uma tarde e uma noite, não um jantar.',
    ev3Title: 'Inaugurações e estações',
    ev3Body: 'Galerias, salas de concerto e receções de hotel enchem o calendário de setembro a junho. Agosto esvazia a cidade e leva tudo para o mar.',

    detailsKicker: 'Antes do encontro',
    detailsTitle: 'Simples, claro e confortável.',
    detailsBody: 'Informe a data, localização, tipo de ocasião, duração prevista, idioma preferido e se está de visita ou vive em Portugal. Os encontros acontecem em locais públicos previamente combinados.',
    boundaryTitle: 'Limites claros',
    boundaryBody: 'Esta página destina-se exclusivamente a companhia social não sexual em eventos e ocasiões públicas. Não são oferecidos, pedidos ou negociados serviços íntimos.',

    faqKicker: 'Perguntas',
    faqTitle: 'Tudo o que vale a pena perguntar primeiro.',
    q1: 'O que está exatamente incluído?',
    a1: 'Companhia amigável e atenta numa ocasião pública — conversa, uma presença calorosa à mesa e alguém que conhece a cidade. Nada além disso é oferecido ou sugerido.',
    q2: 'Isto é um serviço de acompanhante íntimo?',
    a2: 'Não. É companhia social exclusivamente não sexual. Pedidos de natureza íntima são recusados e encerram a conversa.',
    q3: 'Como faço a marcação?',
    a3: 'Envie os detalhes pelo WhatsApp através do formulário desta página. As mensagens costumam ter resposta em menos de uma hora. O ideal é marcar com um ou dois dias de antecedência, embora no próprio dia seja por vezes possível.',
    q4: 'Onde nos encontramos?',
    a4: 'Sempre num local público combinado — um restaurante, o lobby de um hotel ou a entrada do próprio evento.',
    q5: 'Como funciona o valor?',
    a5: 'O valor depende da duração e do local e é combinado no WhatsApp antes de qualquer confirmação. Sem surpresas e sem nada a negociar na própria noite.',
    q6: 'Em que idiomas podemos falar?',
    a6: 'Inglês e português, aquele em que se sentir mais à vontade.',
    q7: 'Desloca-se para fora de Lisboa?',
    a7: 'Cascais, Estoril, Ericeira e Comporta estão disponíveis mediante combinação. Destinos mais distantes podem ser conversados, com a deslocação combinada à partida.',
    q8: 'Qual é o nível de discrição?',
    a8: 'Total. Os seus dados nunca são partilhados e nada é publicado sobre uma ocasião sem o seu acordo.',

    contactKicker: 'Comece pelos detalhes',
    contactTitle: 'Vamos combinar a sua ocasião.',
    contactBody: 'Preencha o que já souber e a mensagem é escrita por si — depois é só enviar no WhatsApp com um toque.',

    fDate: 'Data', fCity: 'Cidade', fOccasion: 'Ocasião', fDuration: 'Duração',
    fLanguage: 'Idioma preferido', fStatus: 'Está', fNotes: 'Mais alguma coisa (opcional)',
    cLisbon: 'Lisboa',
    optOther: 'Outro', optDinner: 'Jantar', optCulture: 'Evento cultural', optCelebration: 'Celebração',
    optEvening: 'Noite completa', optUndecided: 'Ainda não sei', optEither: 'Indiferente',
    optVisiting: 'De visita a Portugal', optLiving: 'A viver em Portugal',
    alsoOn: 'Também em', previewLabel: 'A sua mensagem',
    sendWhatsapp: 'Enviar no WhatsApp', copyInquiry: 'Copiar mensagem', copied: 'Copiado',

    soundOn: 'Ligar a música', soundOff: 'Desligar a música',
    gateTitle: 'Tem 18 anos ou mais?',
    gateBody: 'Este site destina-se exclusivamente a maiores de 18 anos. Confirme a sua idade para continuar.',
    gateYes: 'Sim, tenho 18 anos ou mais',
    gateNo: 'Não, sou menor de 18 anos',
    gateLegalA: 'Ao continuar, confirma que tem idade legal para aceder a este conteúdo e aceita os',
    gateTerms: 'Termos de Utilização', gateLegalB: 'e a', gatePrivacy: 'Política de Privacidade',
    footTerms: 'Termos de Utilização', footPrivacy: 'Política de Privacidade',

    msgVisiting: 'Olá Laiz — estou de visita a Portugal e gostava de combinar uma ocasião.',
    msgLiving: 'Olá Laiz — vivo em Portugal e gostava de combinar uma ocasião.',
    lDate: 'Data', lCity: 'Cidade', lOccasion: 'Ocasião', lDuration: 'Duração',
    lLanguage: 'Idioma', lNotes: 'Notas', lToConfirm: 'a confirmar'
  }
};

/* ─────────────── Idioma ─────────────── */

const STORAGE_KEY = 'laiz-language';
let language = 'en';

function detectLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'pt' || fromUrl === 'en') return fromUrl;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch (e) { /* localStorage indisponível */ }

  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  return nav.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

function setLanguage(next, remember) {
  language = next;
  const dict = translations[next];

  document.documentElement.lang = next;
  document.title = dict.metaTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', dict.metaDescription);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value) el.textContent = value;
  });

  const sound = document.getElementById('sound-toggle');
  if (sound) {
    const playing = sound.getAttribute('aria-pressed') === 'true';
    sound.setAttribute('aria-label', playing ? dict.soundOff : dict.soundOn);
  }

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const value = dict[el.dataset.i18nAlt];
    if (value) el.setAttribute('alt', value);
  });

  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === next;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  if (remember) {
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignorar */ }
  }

  updateMessage();
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language, true));
});

/* ─────────────── Menu no telemóvel ─────────────── */

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
  mainNav.classList.toggle('open', !open);
});

mainNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mainNav.classList.contains('open')) {
    navToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
    navToggle.focus();
  }
});

/* ─────────────── Redes sociais ─────────────── */

(function social() {
  const line = document.getElementById('social-line');
  if (!line || !CONFIG.social || !CONFIG.social.length) return;
  const holder = line.querySelector('.social-links');

  CONFIG.social.forEach((entry) => {
    const link = document.createElement('a');
    link.href = entry.url;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = entry.handle ? `${entry.label} ${entry.handle}` : entry.label;
    holder.appendChild(link);
  });

  line.hidden = false;
})();

/* ─────────────── Galeria ───────────────
   A faixa aparece sozinha quando houver ficheiros em CONFIG.gallery. */

(function setUpGallery() {
  const section = document.getElementById('gallery');
  const strip = document.getElementById('gallery-strip');
  const navLink = document.querySelector('.nav-gallery');
  if (!section || !strip || !CONFIG.gallery.length) return;

  CONFIG.gallery.forEach((file) => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = file;
    img.loading = 'lazy';
    img.width = 800;
    img.height = 1000;
    img.dataset.i18nAlt = 'galleryAlt';
    img.alt = translations[language].galleryAlt;
    figure.appendChild(img);
    strip.appendChild(figure);
  });

  section.hidden = false;
  if (navLink) navLink.hidden = false;
})();

/* ─────────────── Mensagem de WhatsApp ─────────────── */

const form = document.getElementById('inquiry-form');
const preview = document.getElementById('message-preview');
const sendButton = document.getElementById('send-whatsapp');
const copyButton = document.getElementById('copy-inquiry');

function labelOf(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].textContent.trim();
}

function formatDate(value) {
  if (!value) return null;
  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
}

function buildMessage() {
  const dict = translations[language];
  const status = document.getElementById('f-status').value;
  const date = formatDate(document.getElementById('f-date').value);
  const notes = document.getElementById('f-notes').value.trim();

  const lines = [status === 'living' ? dict.msgLiving : dict.msgVisiting, ''];
  lines.push(`• ${dict.lDate}: ${date || dict.lToConfirm}`);
  lines.push(`• ${dict.lCity}: ${labelOf('f-city')}`);
  lines.push(`• ${dict.lOccasion}: ${labelOf('f-occasion')}`);
  lines.push(`• ${dict.lDuration}: ${labelOf('f-duration')}`);
  lines.push(`• ${dict.lLanguage}: ${labelOf('f-language')}`);
  if (notes) lines.push(`• ${dict.lNotes}: ${notes}`);

  return lines.join('\n');
}

function whatsappLink(text) {
  if (CONFIG.phone) {
    return `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(text)}`;
  }
  return CONFIG.profileLink;
}

function updateMessage() {
  const message = buildMessage();
  preview.textContent = message;
  sendButton.href = whatsappLink(message);
}

form.addEventListener('input', updateMessage);
form.addEventListener('change', updateMessage);

async function copyMessage(button) {
  const dict = translations[language];
  const label = button.querySelector('[data-i18n]');
  const message = buildMessage();

  try {
    await navigator.clipboard.writeText(message);
    if (label) {
      label.textContent = dict.copied;
      window.setTimeout(() => { label.textContent = dict.copyInquiry; }, 1800);
    }
    return true;
  } catch (e) {
    window.prompt(dict.copyInquiry, message);
    return false;
  }
}

copyButton.addEventListener('click', () => copyMessage(copyButton));

/* Sem número configurado, o wa.me não aceita texto pré-escrito:
   copiamos a mensagem para o utilizador só ter de colar. */
sendButton.addEventListener('click', () => {
  if (!CONFIG.phone) {
    navigator.clipboard && navigator.clipboard.writeText(buildMessage()).catch(() => {});
  }
});

/* Data mínima: hoje */
const dateField = document.getElementById('f-date');
dateField.min = new Date().toISOString().split('T')[0];

/* ─────────────── Arranque ─────────────── */

/* Botões simples: perfil de negócio. Formulário: número, que leva a
   mensagem já escrita. */
const plainLink = CONFIG.profileLink || (CONFIG.phone ? `https://wa.me/${CONFIG.phone}` : '');
if (plainLink) {
  document.querySelectorAll('.js-wa').forEach((link) => { link.href = plainLink; });
}

setLanguage(detectLanguage(), false);

/* ═══════════════════════════════════════════════════════════════
   VINHETA DE ABERTURA  →  CONFIRMAÇÃO DE IDADE  →  SITE
   ═══════════════════════════════════════════════════════════════ */

(function intro() {
  const root = document.documentElement;
  const splash = document.getElementById('splash');
  const gate = document.getElementById('agegate');
  const AGE_KEY = 'laiz-age-ok';
  const SHIELDED = ['.site-header', 'main', 'footer', '.mobile-bar'];

  /* ── memória da confirmação ── */

  function ageConfirmed() {
    if (!CONFIG.ageGateDays) return false;
    try {
      const until = Number(window.localStorage.getItem(AGE_KEY));
      if (!until) return false;
      if (Date.now() > until) { window.localStorage.removeItem(AGE_KEY); return false; }
      return true;
    } catch (e) { return false; }
  }

  function rememberAge() {
    try {
      const until = Date.now() + CONFIG.ageGateDays * 86400000;
      window.localStorage.setItem(AGE_KEY, String(until));
    } catch (e) { /* navegação privada: volta a perguntar */ }
  }

  function shield(on) {
    SHIELDED.forEach((selector) => {
      const el = document.querySelector(selector);
      if (!el) return;
      if (on) el.setAttribute('inert', ''); else el.removeAttribute('inert');
    });
  }

  /* ── partículas douradas ── */

  function startDust() {
    const canvas = document.getElementById('splash-dust');
    if (!canvas || !canvas.getContext) return { stop() {} };

    const ctx = canvas.getContext('2d');
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    let running = true;
    let frame = 0;

    function resize() {
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.shadowColor = 'rgba(226, 197, 121, .85)';
      ctx.shadowBlur = 7;
    }
    resize();

    const count = window.innerWidth < 700 ? 28 : 50;
    const motes = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.35,
      base: Math.random() * 0.42 + 0.12,
      vy: -(Math.random() * 0.2 + 0.04),
      vx: (Math.random() - 0.5) * 0.13,
      phase: Math.random() * Math.PI * 2
    }));

    function tick() {
      if (!running) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const m of motes) {
        m.y += m.vy; m.x += m.vx; m.phase += 0.028;
        if (m.y < -8) { m.y = window.innerHeight + 8; m.x = Math.random() * window.innerWidth; }
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 197, 121, ${m.base * (0.55 + 0.45 * Math.sin(m.phase))})`;
        ctx.fill();
      }
      frame = window.requestAnimationFrame(tick);
    }
    tick();
    window.addEventListener('resize', resize);

    return {
      stop() {
        running = false;
        window.cancelAnimationFrame(frame);
        window.removeEventListener('resize', resize);
      }
    };
  }

  /* ── confirmação de idade ── */

  function openGate() {
    if (!gate) return;
    root.classList.add('gate-on');
    shield(true);
    gate.hidden = false;
    window.requestAnimationFrame(() => gate.classList.add('is-open'));

    const yes = document.getElementById('gate-yes');
    const no = document.getElementById('gate-no');

    window.setTimeout(() => { try { yes.focus(); } catch (e) {} }, 420);

    /* o foco não sai do diálogo enquanto não houver resposta */
    gate.addEventListener('keydown', (event) => {
      if (event.key !== 'Tab') return;
      event.preventDefault();
      (document.activeElement === yes ? no : yes).focus();
    });

    yes.addEventListener('click', () => {
      /* dentro do clique: é a única altura em que o navegador deixa tocar som */
      document.dispatchEvent(new CustomEvent('laiz:enter'));
      rememberAge();
      gate.classList.add('is-closing');
      window.setTimeout(() => {
        root.classList.remove('gate-on');
        shield(false);
        gate.remove();
      }, 440);
    });

    no.addEventListener('click', () => {
      window.location.replace('saida.html');
    });
  }

  /* ── vinheta ── */

  function playSplash(onVeilsPart, onDone) {
    const dust = startDust();
    let holdTimer = 0;
    let endTimer = 0;
    let finished = false;

    splash.classList.add('is-playing');

    function leave() {
      if (finished) return;
      finished = true;
      window.clearTimeout(holdTimer);
      splash.classList.add('is-leaving');
      onVeilsPart();
      endTimer = window.setTimeout(() => {
        dust.stop();
        splash.remove();
        root.classList.remove('splash-on');
        onDone();
      }, 950);
    }

    holdTimer = window.setTimeout(leave, CONFIG.introHoldMs);
    splash.addEventListener('click', leave);
    splash.addEventListener('touchstart', leave, { passive: true });
    document.addEventListener('keydown', function once(event) {
      if (event.key === 'Tab') return;
      document.removeEventListener('keydown', once);
      leave();
    });

    return () => window.clearTimeout(endTimer);
  }

  function whenFontsReady(run) {
    if (!document.fonts || !document.fonts.ready) { run(); return; }
    Promise.race([
      document.fonts.ready,
      new Promise((resolve) => window.setTimeout(resolve, 700))
    ]).then(run);
  }

  /* ── sequência ── */

  const wantsGate = !ageConfirmed();
  const wantsSplash = root.classList.contains('splash-on') && splash;

  if (!wantsSplash) {
    if (splash) splash.remove();
    root.classList.remove('splash-on');
    if (wantsGate) openGate(); else if (gate) gate.remove();
    return;
  }

  if (wantsGate) shield(true);

  whenFontsReady(() => {
    playSplash(
      /* as cortinas abrem já sobre a confirmação de idade */
      () => { if (wantsGate) openGate(); },
      () => {
        try { window.sessionStorage.setItem('laiz-intro', '1'); } catch (e) {}
        if (!wantsGate && gate) gate.remove();
        if (!wantsGate) document.dispatchEvent(new CustomEvent('laiz:enter'));
      }
    );
  });
})();

/* ═══════════════════════════════════════════════════════════════
   MÚSICA DE ENTRADA
   Arranca no clique de confirmação de idade (é a única altura em que
   os navegadores deixam um site começar a tocar som) e lembra-se da
   escolha. Sem ficheiro em CONFIG.audio.src, nada disto existe.
   ═══════════════════════════════════════════════════════════════ */

(function music() {
  const button = document.getElementById('sound-toggle');
  const settings = CONFIG.audio || {};
  if (!button) return;
  if (!settings.src) { button.remove(); return; }

  const KEY = 'laiz-sound';
  const target = Math.min(Math.max(Number(settings.volume) || 0.3, 0), 1);

  const track = new Audio(settings.src);
  track.loop = true;
  track.preload = 'auto';
  track.volume = 0;

  let fade = 0;

  function slideTo(to, ms, after) {
    window.clearInterval(fade);
    const from = track.volume;
    const started = performance.now();
    fade = window.setInterval(() => {
      const t = Math.min((performance.now() - started) / ms, 1);
      track.volume = from + (to - from) * t;
      if (t === 1) { window.clearInterval(fade); if (after) after(); }
    }, 40);
  }

  function label(on) {
    const dict = translations[language];
    button.setAttribute('aria-pressed', String(on));
    button.setAttribute('aria-label', on ? dict.soundOff : dict.soundOn);
  }

  function start() {
    return track.play().then(() => { label(true); slideTo(target, 1400); })
                       .catch(() => { label(false); });
  }

  function stop() {
    slideTo(0, 400, () => track.pause());
    label(false);
  }

  let wanted = true;
  try { wanted = window.localStorage.getItem(KEY) !== 'off'; } catch (e) {}

  button.hidden = false;
  label(false);

  button.addEventListener('click', () => {
    const on = button.getAttribute('aria-pressed') === 'true';
    if (on) { stop(); wanted = false; } else { start(); wanted = true; }
    try { window.localStorage.setItem(KEY, wanted ? 'on' : 'off'); } catch (e) {}
  });

  document.addEventListener('laiz:enter', () => { if (wanted) start(); }, { once: true });
})();
