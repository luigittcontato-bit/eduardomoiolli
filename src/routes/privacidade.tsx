import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Consultório Prof. Eduardo Moiolli" },
      {
        name: "description",
        content:
          "Política de Privacidade do Consultório Prof. Eduardo Moiolli, em conformidade com a LGPD (Lei nº 13.709/2018).",
      },
      { property: "og:title", content: "Política de Privacidade — Prof. Eduardo Moiolli" },
      {
        property: "og:description",
        content:
          "Como tratamos seus dados pessoais e de saúde, em conformidade com a LGPD.",
      },
      { property: "og:url", content: "https://eduardomoiolli.lovable.app/privacidade" },
    ],
    links: [{ rel: "canonical", href: "https://eduardomoiolli.lovable.app/privacidade" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-5 sm:px-8 prose-legal">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
            Documento legal
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Política de Privacidade</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Última atualização: 15 de junho de 2026
          </p>

          <div className="mt-10 space-y-8 text-foreground/85 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Quem somos</h2>
              <p>
                O {SITE.name} ({SITE.cro}), com sede em {SITE.address.line1}, {SITE.address.line2},
                é o controlador dos dados pessoais tratados por meio deste site e durante o atendimento clínico,
                nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Dados que coletamos</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Dados de contato:</strong> nome, telefone, e-mail e mensagens enviadas pelo WhatsApp
                  ou formulários do site.
                </li>
                <li>
                  <strong>Dados clínicos (dados sensíveis):</strong> histórico de saúde, exames, fotos clínicas,
                  diagnósticos e plano de tratamento, coletados durante o atendimento.
                </li>
                <li>
                  <strong>Dados de navegação:</strong> informações técnicas (IP, dispositivo, páginas visitadas)
                  coletadas por cookies essenciais e de análise.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Por que tratamos seus dados</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Agendamento, confirmação e realização de consultas e tratamentos odontológicos.</li>
                <li>Cumprimento de obrigações legais, regulatórias e do Conselho Federal de Odontologia.</li>
                <li>Comunicação sobre retornos, orientações pós-tratamento e informações administrativas.</li>
                <li>Aprimoramento contínuo da qualidade do atendimento e do site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Bases legais</h2>
              <p>
                O tratamento de dados sensíveis de saúde é realizado com base no consentimento do titular e
                para a tutela da saúde, em procedimento realizado por profissional de saúde, conforme art. 11 da LGPD.
                Demais dados são tratados com base na execução de contrato, no legítimo interesse e no cumprimento de obrigação legal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Com quem compartilhamos</h2>
              <p>
                Seus dados não são vendidos. Podem ser compartilhados apenas com:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Profissionais e laboratórios envolvidos no seu tratamento, sob dever de sigilo.</li>
                <li>Operadores de tecnologia (hospedagem, mensageria, agendamento) sob contrato e medidas de segurança.</li>
                <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Retenção</h2>
              <p>
                O prontuário odontológico é mantido pelo prazo mínimo de 20 anos a contar do último registro,
                conforme normativas do Conselho Federal de Odontologia. Demais dados são mantidos pelo tempo
                necessário às finalidades descritas ou ao cumprimento de obrigações legais.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Seus direitos</h2>
              <p>
                Você pode, a qualquer momento, solicitar: confirmação da existência de tratamento, acesso, correção,
                anonimização, portabilidade, eliminação dos dados tratados com base no consentimento, informação sobre
                compartilhamentos e revogação do consentimento. Para exercer seus direitos, entre em contato pelo
                WhatsApp {SITE.whatsappDisplay}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Segurança</h2>
              <p>
                Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados,
                perdas e usos indevidos, incluindo controle de acesso, armazenamento seguro e sigilo profissional.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Contato do Encarregado (DPO)</h2>
              <p>
                Em caso de dúvidas sobre esta Política ou sobre o tratamento dos seus dados, entre em contato pelo
                WhatsApp {SITE.whatsappDisplay} ou compareça ao endereço {SITE.address.line1}.
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
