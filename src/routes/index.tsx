import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { Trust } from "@/components/Trust";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prof. Eduardo Moiolli (DDS, MSc) — ATM, Dor Orofacial, Ronco e Apneia" },
      {
        name: "description",
        content:
          "Consultório do Prof. Eduardo Moiolli: especialista em ATM, dor orofacial, ronco, apneia, ortodontia, ortopedia funcional dos maxilares e harmonização orofacial. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Prof. Eduardo Moiolli (DDS, MSc) — Consultório Odontológico Especializado" },
      {
        property: "og:description",
        content:
          "Tratamentos especializados para dor, ronco e saúde facial. Diagnóstico criterioso e atendimento individualizado.",
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
