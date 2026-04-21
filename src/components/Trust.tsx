import { Award, HeartHandshake, Target, Microscope } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Especialização avançada",
    desc: "Formação clínica e acadêmica (DDS, MSc) com foco em áreas que exigem alto domínio técnico.",
  },
  {
    icon: Microscope,
    title: "Diagnóstico criterioso",
    desc: "Avaliação detalhada antes de qualquer tratamento, para entender a causa real do seu caso.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    desc: "Escuta atenta, explicações claras e plano de tratamento construído junto com você.",
  },
  {
    icon: Target,
    title: "Foco em resultado",
    desc: "Condutas baseadas em evidência científica, priorizando alívio real e qualidade de vida.",
  },
];

export function Trust() {
  return (
    <section id="confianca" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
            Por que escolher o consultório
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
            Cuidado clínico de <span className="text-gradient-primary">excelência</span>, do diagnóstico ao resultado.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            O consultório foi pensado para oferecer um atendimento diferenciado, com tempo dedicado a cada
            paciente, tecnologia adequada e condutas guiadas por ciência. Isso faz diferença, principalmente
            em casos de dor crônica, ATM, ronco e apneia.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/30 transition-colors"
            >
              <div className="h-11 w-11 rounded-xl bg-primary-soft flex items-center justify-center mb-4">
                <p.icon className="h-5.5 w-5.5 text-primary" strokeWidth={2.2} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
