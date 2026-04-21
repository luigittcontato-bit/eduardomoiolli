import { ArrowRight, Clock } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function FinalCTA() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-[var(--primary-deep)] via-primary to-primary p-10 sm:p-14 lg:p-20 shadow-glow">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-white">
              <Clock className="h-3.5 w-3.5" />
              Agenda com vagas limitadas por semana
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05]">
              Pronto para tratar a causa — e não só os sintomas?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
              Fale agora com a equipe pelo WhatsApp, descreva seu caso e receba a melhor orientação para
              dar o próximo passo. Atendimento atencioso, sem compromisso para esclarecer dúvidas iniciais.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary-deep shadow-soft hover:bg-white/95 transition-all hover:scale-[1.02]"
              >
                Agendar minha consulta
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={whatsappLink("Olá! Tenho uma dúvida rápida antes de agendar.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/0 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Tirar uma dúvida primeiro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
