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
            Sobre o consultório
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
            Bem-vindo(a) ao <span className="text-gradient-primary">Consultório Prof. Eduardo Moiolli</span>
          </h2>
          <div className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              Aqui, a sua saúde, o seu bem-estar e a sua qualidade de vida são a nossa prioridade.
              Nosso espaço foi cuidadosamente planejado para oferecer um atendimento acolhedor, humanizado e de excelência,
              unindo <strong className="text-foreground font-semibold">conhecimento científico, tecnologia e muito conforto</strong>.
            </p>
            <p>
              O Prof. Eduardo Moiolli é especialista e mestre em ortodontia e ortopedia facial e funcional dos maxilares,
              atuando nas áreas de disfunção da ATM, dor orofacial, distúrbios do sono, harmonização orofacial, ortodontia e ortopedia facial.
            </p>
            <p>
              Nosso compromisso é proporcionar soluções de saúde integradas que vão muito além dos dentes,
              focando no reequilíbrio funcional da sua face, no alívio da dor, na melhora do seu sono e na estética do seu sorriso.
            </p>
          </div>
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
