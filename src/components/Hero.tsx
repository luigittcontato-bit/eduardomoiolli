import { ArrowRight, ShieldCheck, GraduationCap, Stethoscope } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import heroImg from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section id="top" className="relative bg-hero-gradient pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1.5 text-xs font-semibold text-primary-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Dr. Eduardo Moiolli — DDS, MSc
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
            Especialista em{" "}
            <span className="text-gradient-primary">dor orofacial, ATM e distúrbios do sono</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Tratamentos especializados para melhorar sua qualidade de vida, reduzir dores e melhorar o sono.
            Atendimento conduzido com foco em <strong className="text-foreground font-semibold">diagnóstico preciso e resultados reais</strong>,
            indo muito além da odontologia convencional.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_32px_-10px_color-mix(in_oklab,var(--whatsapp)_60%,transparent)] hover:bg-[var(--whatsapp-deep)] transition-all hover:scale-[1.02]"
            >
              Agendar consulta no WhatsApp
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-base font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              Ver especialidades
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { icon: GraduationCap, label: "Mestre (MSc)", sub: "Formação avançada" },
              { icon: Stethoscope, label: "+7 áreas", sub: "de especialização" },
              { icon: ShieldCheck, label: "Atendimento", sub: "individualizado" },
            ].map((it) => (
              <div key={it.label} className="rounded-2xl border border-border/70 bg-card p-3.5 shadow-card">
                <it.icon className="h-5 w-5 text-primary mb-2" strokeWidth={2.2} />
                <div className="text-[13px] font-semibold text-foreground leading-tight">{it.label}</div>
                <div className="text-[11px] text-muted-foreground leading-tight">{it.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 via-transparent to-primary/15 rounded-[2rem] blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-glow aspect-[4/5] bg-surface">
            <img
              src={heroImg}
              alt="Consultório odontológico moderno do Prof. Eduardo Moiolli"
              width={1600}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/95 backdrop-blur p-4 border border-border/60 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-soft flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={2.4} />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-foreground">Consultas com avaliação completa</div>
                  <div className="text-xs text-muted-foreground">Diagnóstico criterioso e plano de tratamento sob medida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
