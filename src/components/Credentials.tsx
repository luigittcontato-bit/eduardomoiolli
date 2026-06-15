import { GraduationCap, BookOpen, Award } from "lucide-react";

const groups = [
  {
    icon: GraduationCap,
    title: "Especialidades clínicas",
    items: [
      "Especialista em Ortodontia e Ortopedia Facial — PUC-RJ",
      "Especialista em Ortopedia Funcional dos Maxilares — CFO",
      "Mestre em Ortodontia e Ortopedia Facial — Universidade Paulista",
      "Formação em Harmonização Orofacial — M.A.R.C. Institute, Miami, FL, EUA",
    ],
  },
  {
    icon: BookOpen,
    title: "Atuação acadêmica",
    items: [
      "Prof. Coordenador do Curso de Especialização em Harmonização Orofacial — ABCD-RJ",
      "Prof. Coordenador do Curso de Especialização em Ortopedia Funcional dos Maxilares — Universidade Veiga de Almeida",
      "Prof. Coordenador do Curso de Especialização em DTM e Dor Orofacial — ABCD-RJ",
      "Ex-professor das Faculdades UNIFLU, UNIFAA e UNIG",
    ],
  },
  {
    icon: Award,
    title: "Cargos e reconhecimentos",
    items: [
      "Presidente da ABCD-RJ (Associação Brasileira de Cirurgiões-Dentistas — RJ)",
      "Presidente do Colégio Brasileiro de Harmonização Orofacial (CBHOF)",
      "Membro Fundador e Titular da Cadeira Nº 6 do Colégio Brasileiro de Harmonização Orofacial",
      "Acadêmico Titular da Academia Brasileira de Medicina Militar",
      "Acadêmico Titular da Academia Brasileira de Odontologia Militar",
      "Autor de artigos e capítulos de livros publicados no Brasil e no exterior",
      "Palestrante em cursos e congressos no Brasil e no exterior",
    ],
  },
];

export function Credentials() {
  return (
    <section id="formacao" className="py-20 sm:py-28 bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
            Formação e títulos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
            Formação, títulos e <span className="text-gradient-primary">atuação acadêmica</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Uma trajetória de 44 anos dedicada à odontologia especializada.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/30 transition-colors flex flex-col"
            >
              <div className="h-11 w-11 rounded-xl bg-primary-soft flex items-center justify-center mb-4">
                <g.icon className="h-5.5 w-5.5 text-primary" strokeWidth={2.2} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{g.title}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
