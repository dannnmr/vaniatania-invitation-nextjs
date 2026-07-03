import { image } from "framer-motion/client";

export const baseTemplateConfig = {
  client: {
    name: "Tania y Vania",
    eventType: "XV Años",
    finalPhrase: "En una noche llena de magia, sueños y encanto, les invitamos a celebrar nuestros 15 años. Como en un cuento de hadas, viviremos juntos una velada inolvidable, llena de alegría, ilusión y momentos especiales.",
  },
  event: {
    date: new Date('2026-08-28T16:00:00'), // Fecha 28 de Agosto (Año tentativo 2026)
    ceremonyTime: '19:00',
    receptionTime: '16:00',
    locationName: 'Salón de Eventos Zafiro, Av. Cívica, Calle 4.',
    locationUrl: 'https://maps.app.goo.gl/yh3naEBWoaRXGPsRA?g_st=ac'
  },
  parents: {
    topLabel: 'Con la bendición de nuestros padres',
    fatherName: 'Moises Ilaya Nina',
    motherName: 'Miriam Rodriguez Álvarez',
    godparents: [
      { role: 'Padrinos de 15 Años', couple: 'William Rodriguez Álvarez & Tania Céspedes C.' },
      { role: 'Padrinos de 15 Años', couple: 'Teddy Rodriguez Álvarez & Gisel Miranda S.' },
      { role: 'Padrinos de Torta', couple: 'Carlos Ramirez Gutierrez & Zulema Rodriguez Álvarez' }
    ],
    invitationText: 'Acompáñanos a celebrar el comienzo de una nueva etapa...',
  },
  itinerary: [
    { time: '16:00', title: 'Recepción', description: 'Hora de recepción de invitados.', image:'https://res.cloudinary.com/dvaswskle/image/upload/v1783052817/botella_icon_qjgapj.webp' },
    { time: '19:00', title: 'Acto Central', description: 'Ceremonia principal.', image: 'https://res.cloudinary.com/dvaswskle/image/upload/v1783050384/acto_icon_qoe02j.webp' },
    { time: '21:00', title: 'Música en Vivo', description: 'Grupo musical.' , image:'https://res.cloudinary.com/dvaswskle/image/upload/v1783052818/grupo_musical_jqarzv.webp'},
    { time: '22:00', title: 'Torta', description: 'Corte de la torta.', image:'https://res.cloudinary.com/dvaswskle/image/upload/v1783052818/torta_icon_oo273h.webp' },
    { time: '23:00', title: 'Hora Loca', description: '¡A celebrar!', image:'https://res.cloudinary.com/dvaswskle/image/upload/v1783052818/hora_loca_ihjlvm.webp' },
    { time: '00:00', title: 'Despedida', description: 'Gracias por acompañarnos.', image: 'https://res.cloudinary.com/dvaswskle/image/upload/v1783053330/despedida_y1bz9z.webp' },
  ],
  dressCode: {
    description: 'Código de Vestimenta Formal',
    notes: 'Colores reservados para las quinceañeras: Palo de rosa y Verde esmeralda.',
    colors: ['#D49A9A', '#059669'] 
  },
  giftRegistry: {
    message: 'Tu presencia es nuestro mejor regalo. Si deseas tener un detalle:',
    banks: [
      { name: 'Banco Fiel', account: '1234567890', owner: 'Vania Daza' }
    ]
  },
  passes: {
    topLabel: 'Pase Personalizado',
    mainTitle: 'VIP Pass',
    ticketLabel: 'Invitado Especial',
    admitText: 'Admite',
    quantity: '1',
    unitText: 'Persona',
  },
  music: {
    ambientTrack: '/audio/disclosure.mp3',
    spotifyPlaylistUrl: 'https://open.spotify.com/playlist/0',
    suggestLabel: 'Sugiérenos una canción',
  },
  gallery: [
    '/images/gallery/1.jpg',
    '/images/gallery/2.jpg',
    '/images/gallery/3.jpg'
  ],
  rsvp: {
    deadline: new Date('2026-08-15T23:59:59'),
    webhookUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || '',
    successMessage: '¡Gracias por confirmar tu asistencia!',
  },
  theme: {
    colors: {
      primary: "#fdf4e2", // Nuevo fondo general
      secondary: "#ffffff", 
      accent: "#4DB6AC", // Verde agua
      gold: "#047857", // Esmeralda oscuro
      rose: "#a64d59", // Nuevo rosa oscuro de Save the Date
      black: "#050505"
    },
    fonts: {
      display: "var(--font-display)",
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
      mono: "var(--font-mono)",
      cormorant: "var(--font-cormorant)",
      pinyon: "var(--font-pinyon)",
    },
  },
  assets: {
    heroBackground: "/images/hero-bg.jpg",
    decorations: {
      stars: "/images/decorations/stars.png",
      bosque: "https://res.cloudinary.com/dvaswskle/image/upload/v1783099116/Dise%C3%B1o_sin_t%C3%ADtulo_sx9k9z.png",
      // bosque: "https://res.cloudinary.com/dvaswskle/image/upload/v1783049539/bg_original_kp1hum.webp",
      hada1: "https://res.cloudinary.com/dvaswskle/image/upload/v1782954142/fairy_rosa_qy7gav.webp",
      hada2: "https://res.cloudinary.com/dvaswskle/image/upload/v1782954123/fairy_verde_zu7mhw.webp",
      espejo: "https://res.cloudinary.com/dvaswskle/image/upload/v1782972472/espejo_dotzaz.webp",
      saveTheDate: "https://res.cloudinary.com/dvaswskle/image/upload/v1782954123/fairy_rosa2_unt14x.webp",
      acto_icon:"https://res.cloudinary.com/dvaswskle/image/upload/v1783050384/acto_icon_qoe02j.webp",
      tarjeta: "https://res.cloudinary.com/dvaswskle/image/upload/v1782970794/papel_lzaqob.webp",
      papel_abajo: "https://res.cloudinary.com/dvaswskle/image/upload/v1783054020/papel_cortado2_snl9da.webp",
      papel_arriba: "https://res.cloudinary.com/dvaswskle/image/upload/v1783053985/papel_cortado_1_fl4xvi.webp",
      flor_icon: "https://res.cloudinary.com/dvaswskle/image/upload/v1783054284/flor_icon_dz2pbr.webp",
      fairy:"https://res.cloudinary.com/dvaswskle/image/upload/v1783057779/hada_sentada2_ow4hfr.webp",
      letrero: "https://res.cloudinary.com/dvaswskle/image/upload/v1783054732/fairy_welcome_ups5uj.webp",
      arbol:"https://res.cloudinary.com/dvaswskle/image/upload/v1783054719/arbol_luces_fituh8.webp",
      corazon_verde:"https://res.cloudinary.com/dvaswskle/image/upload/v1783059207/corazon_verde_jdghle.webp",
      mariposa_rosa:"https://res.cloudinary.com/dvaswskle/image/upload/v1783060447/lado_derecho_16_eqtdhx.png",
      enredadera: "https://res.cloudinary.com/dvaswskle/image/upload/v1783061413/enderadera_bk5euj.webp",
      dress_code: "https://res.cloudinary.com/dvaswskle/image/upload/v1783061986/dress_etiqueta_s0qni6.webp",
      moño: "https://res.cloudinary.com/dvaswskle/image/upload/v1783062595/lado_derecho_17_te2y0f.png",
      footer: "https://res.cloudinary.com/dvaswskle/image/upload/v1783063549/image_fxbhss.webp",
      luces: "https://res.cloudinary.com/dvaswskle/image/upload/v1783096562/luces_colgantes_joeokd.webp",
      fairy_volando: "https://res.cloudinary.com/dvaswskle/image/upload/v1783096638/fairy_volando_vlvszy.webp"
    },
    envelope: {
      sello: "https://res.cloudinary.com/dvaswskle/image/upload/v1782961651/broche_hadas_1_usxpot.webp",
      envelope_complete: "https://res.cloudinary.com/dvaswskle/image/upload/v1782961651/bg_rosa_pgt1w4.webp",
      left: "https://res.cloudinary.com/dvaswskle/image/upload/v1782961651/lado_izquierdo_rosa_hgejtz.webp",
      right: "https://res.cloudinary.com/dvaswskle/image/upload/v1782961651/lado_derecho_rosa_mwkxon.webp"
    }
  },
};

