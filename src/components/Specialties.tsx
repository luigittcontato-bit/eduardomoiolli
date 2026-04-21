import {
  Activity,
  Bone,
  Brain,
  Moon,
  AudioLines,
  Smile,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { whatsappLink } from "@/lib/site";

const items = [
  {
    icon: Brain,
    title: "Dor orofacial",
    desc: "Tratamento de dores no rosto, cabeça e músculos da face que não passam com remédios comuns e atrapalham o seu dia a dia.",
    highlight: true,
  },
  {
    icon: Activity,
    title: "Problemas na mandíbula (ATM)",
    desc: "Cuidado para estalos, travamentos e dores ao abrir a boca ou mastigar — com diagnóstico preciso e alívio duradouro.",
    highlight: true,
  },
  {
    icon: AudioLines,
    title: "Ronco e apneia do sono",
    desc: "Aparelhos sob medida que reduzem o ronco e melhoram a respiração durante o sono, devolvendo noites de descanso de verdade.",
    highlight: true,
  },
  {
    icon: Moon,
    title: "Distúrbios do sono",
    desc: "Avaliação completa do sono em parceria com médicos especializados, para tratar a causa e não só o sintoma.",
    highlight: true,
  },
  {
    icon: Smile,
    title: "Ortodontia",
    desc: "Alinhamento dos dentes e correção da mordida com técnicas modernas e planejamento individual para cada paciente.",
  },
  {
    icon: Bone,
    title: "Ortopedia funcional dos maxilares",
    desc: "Tratamento que corrige o crescimento e o equilíbrio da face em crianças, adolescentes e adultos.",
  },
  {
    icon: Sparkles,
    title: "Harmonização facial",
    desc: "Procedimentos sutis para equilibrar traços do rosto, sempre com critério clínico e foco na saúde.",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="py-20 sm:py-28 bg-section-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
            Especialidades
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
            Cuidado especializado para o que{" "}
            <span className="text-gradient-primary">a odontologia comum não resolve</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Atendimento com foco em <strong className="text-foreground font-semibold">diagnóstico preciso e resultados reais</strong>.
            Diferencial em dor orofacial, ATM, ronco e apneia do sono.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <article
              key={it.title}
              className={`group relative rounded-2xl border bg-card p-6 sm:p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow ${
                it.highlight ? "border-primary/25" : "border-border"
              }`}
            >
              {it.highlight && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary-soft px-2 py-0.5 rounded-full">
                  Diferencial
                </span>
              )}
              <div
                className={`h-12 w-12 rounded-xl flex items-center justify-center mb-5 ${
                  it.highlight
                    ? "bg-gradient-to-br from-primary to-[var(--primary-deep)] text-primary-foreground shadow-soft"
                    : "bg-primary-soft text-primary"
                }`}
              >
                <it.icon className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </article>
          ))}

          <a
            href={whatsappLink("Olá! Tenho dúvidas sobre as especialidades do consultório.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary to-[var(--primary-deep)] p-7 text-primary-foreground shadow-glow flex flex-col justify-between min-h-[200px]"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] opacity-80 mb-3">Não sabe por onde começar?</div>
              <h3 className="text-xl font-semibold leading-snug">Converse com a equipe e receba orientação inicial.</h3>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
              Falar no WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
