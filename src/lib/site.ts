export const SITE = {
  name: "Consultório Prof. Eduardo Moiolli",
  shortName: "Prof. Eduardo Moiolli",
  credentials: "DDS, MSc",
  cro: "CRO 11805-RJ",
  whatsappNumber: "5521967252288",
  whatsappDisplay: "(21) 96725-2288",
  instagramHandle: "@eduardomoiolli",
  instagramUrl: "https://instagram.com/eduardomoiolli",
  address: {
    line1: "Av. das Américas, 3333 — Grupo 1501",
    line2: "Barra da Tijuca, Rio de Janeiro — RJ",
    mapsQuery: "Av. das Américas, 3333, Grupo 1501, Rio de Janeiro - RJ",
  },
  whatsappMessage:
    "Olá! Gostaria de agendar uma consulta com o Prof. Eduardo Moiolli.",
};

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg ?? SITE.whatsappMessage)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.mapsQuery)}&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address.mapsQuery)}`;
