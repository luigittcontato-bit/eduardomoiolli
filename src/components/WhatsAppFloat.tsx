import { MessageCircle } from "lucide-react";
import { whatsappLink, SITE } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Iniciar atendimento no WhatsApp com ${SITE.shortName}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center gap-2 h-14 w-14 sm:h-auto sm:w-auto sm:px-5 sm:py-3.5 rounded-full bg-[var(--whatsapp)] text-white shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--whatsapp)_55%,transparent)] transition-all hover:bg-[var(--whatsapp-deep)] hover:scale-105"
    >
      <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-[var(--whatsapp)] opacity-30" />
      <MessageCircle className="h-6 w-6 relative" strokeWidth={2.2} />
      <span className="relative hidden sm:inline text-sm font-semibold">Iniciar atendimento</span>
    </a>
  );
}
