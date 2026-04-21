export const SITE = {
  name: "Consultório Prof. Eduardo Moiolli",
  shortName: "Prof. Eduardo Moiolli",
  credentials: "DDS, MSc",
  whatsappNumber: "5511999999999", // TODO: substituir pelo número real
  whatsappMessage:
    "Olá! Gostaria de agendar uma consulta no consultório do Prof. Eduardo Moiolli.",
};

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg ?? SITE.whatsappMessage)}`;
