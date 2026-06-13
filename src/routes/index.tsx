import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { Trust } from "@/components/Trust";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prof. Eduardo Moiolli (DDS, MSc) — ATM, Dor Orofacial e Apneia · Rio de Janeiro" },
      {
        name: "description",
        content:
          "Consultório Prof. Eduardo Moiolli (CRO 11805-RJ) na Barra da Tijuca, Rio de Janeiro. Especialista em ATM, dor orofacial, ronco, apneia, ortodontia, ortopedia facial e harmonização orofacial. Agende pelo WhatsApp (21) 96725-2288.",
      },
      { property: "og:title", content: "Prof. Eduardo Moiolli (DDS, MSc) — Consultório Odontológico Especializado no Rio" },
      {
        property: "og:description",
        content:
          "Tratamentos especializados em dor orofacial, ATM, ronco, apneia e harmonização orofacial. Atendimento na Av. das Américas, 3333 — Barra da Tijuca.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Specialties />
        <Trust />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
