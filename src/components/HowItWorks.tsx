import { MessageSquare, HelpCircle, CalendarCheck } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const steps = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Entre em contato",
    desc: "Mande uma mensagem no WhatsApp contando rapidamente o que está sentindo ou o que procura.",
  },
  {
    n: "02",
    icon: HelpCircle,
    title: "Tire suas dúvidas",
    desc: "A equipe responde com clareza, explica como funciona o atendimento e tira as principais dúvidas iniciais.",
  },
  {
    n: "03",
    icon: CalendarCheck,
    title: "Agende sua consulta",
    desc: "Escolha o melhor horário disponível e venha para uma avaliação completa e personalizada.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-section-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
            Como funciona
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
            Simples, direto e <span className="text-gradient-primary">sem burocracia</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            Em três passos você sai da dúvida e parte para o tratamento certo.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="rounded-2xl border border-border bg-card p-7 shadow-card h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-[var(--primary-deep)] flex items-center justify-center shadow-soft">
                    <s.icon className="h-5.5 w-5.5 text-primary-foreground" strokeWidth={2.2} />
                  </div>
                  <span className="text-3xl font-bold text-primary/15">{s.n}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 h-px w-6 bg-gradient-to-r from-primary/40 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_32px_-10px_color-mix(in_oklab,var(--whatsapp)_60%,transparent)] hover:bg-[var(--whatsapp-deep)] transition-all hover:scale-[1.02]"
          >
            Agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  );
}
