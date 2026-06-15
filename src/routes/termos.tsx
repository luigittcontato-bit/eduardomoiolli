import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Consultório Prof. Eduardo Moiolli" },
      {
        name: "description",
        content:
          "Termos de Uso do site do Consultório Prof. Eduardo Moiolli, Barra da Tijuca, Rio de Janeiro.",
      },
      { property: "og:title", content: "Termos de Uso — Prof. Eduardo Moiolli" },
      {
        property: "og:description",
        content: "Condições de uso do site institucional do Consultório Prof. Eduardo Moiolli.",
      },
      { property: "og:url", content: "https://eduardomoiolli.lovable.app/termos" },
    ],
    links: [{ rel: "canonical", href: "https://eduardomoiolli.lovable.app/termos" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
            Documento legal
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Termos de Uso</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Última atualização: 15 de junho de 2026
          </p>

          <div className="mt-10 space-y-8 text-foreground/85 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Aceitação</h2>
              <p>
                Ao acessar e utilizar o site do {SITE.name}, você declara estar de acordo com estes Termos de Uso
                e com a nossa Política de Privacidade. Caso não concorde, por favor não utilize o site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Natureza das informações</h2>
              <p>
                O conteúdo deste site tem caráter exclusivamente informativo e institucional. As informações apresentadas
                <strong> não substituem consulta, diagnóstico ou tratamento odontológico realizado presencialmente</strong>
                por profissional habilitado. Nenhuma informação aqui contida deve ser interpretada como recomendação clínica individual.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Atendimento</h2>
              <p>
                O atendimento clínico é realizado exclusivamente em caráter particular, com horário previamente
                agendado. A consulta inicial tem duração aproximada de 60 minutos. O agendamento pelo WhatsApp
                {" "}{SITE.whatsappDisplay} não constitui confirmação automática de horário — toda agenda é
                confirmada por nossa equipe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Propriedade intelectual</h2>
              <p>
                Todos os textos, imagens, marcas, logotipos e demais elementos deste site são protegidos por direitos
                autorais e de propriedade intelectual. É vedada a reprodução, total ou parcial, sem autorização prévia
                e por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Links externos</h2>
              <p>
                Este site pode conter links para sites de terceiros (como Google Maps, WhatsApp e Instagram).
                Não nos responsabilizamos pelo conteúdo, políticas ou práticas dessas plataformas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitação de responsabilidade</h2>
              <p>
                Empenhamo-nos para manter as informações atualizadas, mas não garantimos a ausência de eventuais
                imprecisões ou indisponibilidades técnicas. Em nenhuma hipótese seremos responsáveis por danos
                decorrentes do uso ou da impossibilidade de uso deste site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Alterações</h2>
              <p>
                Estes Termos de Uso podem ser alterados a qualquer momento. A versão vigente estará sempre disponível
                nesta página, identificada pela data de atualização.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Foro e legislação aplicável</h2>
              <p>
                Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca do Rio de Janeiro/RJ
                para dirimir quaisquer controvérsias decorrentes da sua utilização.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <Link to="/" className="text-primary hover:underline text-sm font-medium">
                ← Voltar para o início
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
