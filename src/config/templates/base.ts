export const baseTemplateConfig = {
  client: {
    name: "Tania y Vania",
    eventType: "Nuestros XV Años",
    finalPhrase: "En una noche llena de magia, sueños y encanto les invitamos a celebrar nuestros 15 años; como en un cuento de hadas viviremos juntos una velada inolvidable llena de alegria, ilusion y momentos especiales",
  },
  event: {
    date: new Date('2026-08-28T16:00:00'), // Fecha 28 de Agosto (Año tentativo 2026)
    ceremonyTime: '19:00',
    receptionTime: '16:00',
    locationName: 'Salon de Eventos Zafiro, Av. Civica Calle 4',
    locationUrl: 'https://maps.app.goo.gl/yh3naEBWoaRXGPsRA?g_st=ac'
  },
  parents: {
    topLabel: 'Con la bendición de nuestros padres',
    fatherName: 'Moises Ilaya Nina',
    motherName: 'Miriam Rodriguez Álvarez',
    godparents: [
      'William Rodriguez Álvarez y Tania Céspedes C. (15 Años)', 
      'Teddy Rodriguez Álvarez y Gisel Miranda S. (15 Años)',
      'Carlos Ramirez Gutierrez y Zulema Rodriguez Álvarez (Torta)'
    ],
    invitationText: 'Acompáñanos a celebrar el comienzo de una nueva etapa...',
  },
  itinerary: [
    { time: '16:00', title: 'Recepción', description: 'Hora de recepción de invitados.', image:'https://res.cloudinary.com/dvaswskle/image/upload/v1782970794/papel_lzaqob.webp' },
    { time: '19:00', title: 'Acto Central', description: 'Ceremonia principal.' },
    { time: '21:00', title: 'Música en Vivo', description: 'Grupo musical.' },
    { time: '22:00', title: 'Torta', description: 'Corte de la torta.' },
    { time: '23:00', title: 'Hora Loca', description: '¡A celebrar!' },
    { time: '00:00', title: 'Despedida', description: 'Gracias por acompañarnos.' },
  ],
  dressCode: {
    description: 'Código de Vestimenta Formal',
    notes: 'Colores reservados para las quinceañeras: Palo de rosa y Verde esmeralda.',
    colors: ['#D49A9A', '#059669', '#050505'] 
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
    ambientTrack: '/audio/song.mp3',
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
      primary: "#FDF5F6", // Rosa perla
      secondary: "#ffffff", 
      accent: "#4DB6AC", // Verde agua
      gold: "#047857", // Esmeralda oscuro
      rose: "#D49A9A", // Palo de rosa (para decoraciones suaves)
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
      bosque: "https://res.cloudinary.com/dvaswskle/image/upload/v1782971453/bg_bosque2_ukrfep.webp",
      hada1: "https://res.cloudinary.com/dvaswskle/image/upload/v1782954142/fairy_rosa_qy7gav.webp",
      hada2: "https://res.cloudinary.com/dvaswskle/image/upload/v1782954123/fairy_verde2_ufafz9.webp",
      espejo: "https://res.cloudinary.com/dvaswskle/image/upload/v1782972472/espejo_dotzaz.webp",
      saveTheDate: "https://res.cloudinary.com/dvaswskle/image/upload/v1782954123/fairy_rosa2_unt14x.webp",
    },
    envelope: {
      sello: "https://res.cloudinary.com/dvaswskle/image/upload/v1782961651/broche_hadas_1_usxpot.webp",
      envelope_complete: "https://res.cloudinary.com/dvaswskle/image/upload/v1782961651/bg_rosa_pgt1w4.webp",
      left: "https://res.cloudinary.com/dvaswskle/image/upload/v1782961651/lado_izquierdo_rosa_hgejtz.webp",
      right: "https://res.cloudinary.com/dvaswskle/image/upload/v1782961651/lado_derecho_rosa_mwkxon.webp"
    }
  },
};

