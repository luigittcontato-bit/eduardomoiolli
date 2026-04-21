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
    icon: Activity,
    title: "Disfunção da ATM",
    desc: "Diagnóstico e tratamento de dores e travamentos da articulação temporomandibular, com abordagem clínica especializada.",
    highlight: true,
  },
  {
    icon: Brain,
    title: "Dor Orofacial",
    desc: "Tratamento de dores faciais persistentes, cefaleias e disfunções musculares que comprometem qualidade de vida.",
    highlight: true,
  },
  {
    icon: AudioLines,
    title: "Ronco",
    desc: "Avaliação e dispositivos intraorais sob medida para reduzir ronco e melhorar a qualidade do sono.",
    highlight: true,
  },
  {
    icon: Moon,
    title: "Apneia Obstrutiva do Sono",
    desc: "Tratamento odontológico da apneia com aparelhos de avanço mandibular, em parceria com médicos do sono.",
    highlight: true,
  },
  {
    icon: Smile,
    title: "Ortodontia",
    desc: "Correção do alinhamento dentário e da mordida com técnicas modernas e planejamento individualizado.",
  },
  {
    icon: Bone,
    title: "Ortopedia Facial e Funcional",
    desc: "Tratamento ortopédico dos maxilares para crianças, adolescentes e adultos, corrigindo desequilíbrios funcionais.",
  },
  {
    icon: Sparkles,
    title: "Harmonização Orofacial",
    desc: "Procedimentos minimamente invasivos para equilíbrio facial, sempre com critério clínico e foco na saúde.",
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
            Tratamento que vai{" "}
            <span className="text-gradient-primary">muito além do consultório comum</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Áreas de atuação selecionadas para cuidar de casos que exigem conhecimento clínico aprofundado.
            Destaque para ATM, dor orofacial, ronco e apneia.
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
