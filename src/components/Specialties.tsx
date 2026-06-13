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
    desc: "Tratamentos conservadores para o alívio de dores de cabeça — que se confundem com enxaqueca pela intensidade —, dores na face, estalos ao mastigar e tensões musculares. Devolvemos o conforto e a função ao seu dia a dia.",
    highlight: true,
  },
  {
    icon: Activity,
    title: "Disfunção da ATM",
    desc: "Cuidado especializado para estalos, travamentos e dores ao abrir a boca ou mastigar. Diagnóstico preciso e tratamento direcionado para restaurar a função da articulação temporomandibular.",
    highlight: true,
  },
  {
    icon: AudioLines,
    title: "Ronco e apneia do sono",
    desc: "Terapias e dispositivos intraorais sob medida para desobstruir as vias aéreas e regular a respiração durante a noite. Garantimos sono reparador, combatemos o cansaço diurno e protegemos a sua saúde sistêmica.",
    highlight: true,
  },
  {
    icon: Moon,
    title: "Distúrbios do sono",
    desc: "Avaliação completa em parceria com médicos especializados para tratar a causa — não só o sintoma — e devolver noites de descanso de verdade.",
    highlight: true,
  },
  {
    icon: Smile,
    title: "Ortodontia",
    desc: "Correção do posicionamento dos dentes com tecnologias modernas e aparelhos adequados ao seu perfil. Um sorriso bonito e uma oclusão eficiente e saudável.",
  },
  {
    icon: Bone,
    title: "Ortopedia facial e funcional dos maxilares",
    desc: "Intervenções direcionadas ao correto desenvolvimento ósseo, muscular e postural da face. Redirecionamos o crescimento e corrigimos desequilíbrios esqueléticos para promover harmonia facial e mastigatória plena.",
  },
  {
    icon: Sparkles,
    title: "Harmonização orofacial",
    desc: "Procedimentos estéticos e funcionais minimamente invasivos que valorizam a sua beleza natural, prevenem os sinais do envelhecimento e criam o equilíbrio perfeito entre o sorriso e os traços do rosto.",
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
