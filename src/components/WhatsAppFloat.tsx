import { MessageCircle } from "lucide-react";
import { whatsappLink, SITE } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Iniciar atendimento no WhatsApp com ${SITE.shortName}`}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-3.5 text-white shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--whatsapp)_55%,transparent)] transition-all hover:bg-[var(--whatsapp-deep)] hover:scale-105 sm:px-5"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--whatsapp)] opacity-30" />
      <MessageCircle className="h-6 w-6 relative" strokeWidth={2.2} />
      <span className="relative hidden sm:inline text-sm font-semibold">Iniciar atendimento</span>
    </a>
  );
}
