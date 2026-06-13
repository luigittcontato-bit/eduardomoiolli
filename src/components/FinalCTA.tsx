import { ArrowRight, Clock, MapPin, Phone, AtSign as Instagram } from "lucide-react";
import { whatsappLink, SITE, mapsEmbedUrl, mapsLink } from "@/lib/site";

export function FinalCTA() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-[var(--primary-deep)] via-primary to-primary p-10 sm:p-14 lg:p-16 shadow-glow">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-white">
                <Clock className="h-3.5 w-3.5" />
                Agenda com vagas limitadas por semana
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05]">
                Dê o primeiro passo para viver sem dor e dormir melhor
              </h2>
              <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                Fale agora com a equipe do <strong className="font-semibold">Prof. Eduardo Moiolli</strong> pelo WhatsApp,
                descreva seu caso e receba orientação clara sobre o próximo passo — sem compromisso.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
                <a
                  href={`tel:+${SITE.whatsappNumber}`}
                  className="flex items-start gap-3 rounded-2xl bg-white/10 backdrop-blur p-4 text-white hover:bg-white/15 transition-colors"
                >
                  <Phone className="h-5 w-5 mt-0.5 shrink-0" strokeWidth={2.2} />
                  <div className="leading-tight">
                    <div className="text-[11px] uppercase tracking-wider opacity-75 font-semibold">WhatsApp</div>
                    <div className="text-sm font-semibold mt-0.5">{SITE.whatsappDisplay}</div>
                  </div>
                </a>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-2xl bg-white/10 backdrop-blur p-4 text-white hover:bg-white/15 transition-colors"
                >
                  <Instagram className="h-5 w-5 mt-0.5 shrink-0" strokeWidth={2.2} />
                  <div className="leading-tight">
                    <div className="text-[11px] uppercase tracking-wider opacity-75 font-semibold">Instagram</div>
                    <div className="text-sm font-semibold mt-0.5">{SITE.instagramHandle}</div>
                  </div>
                </a>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-2 flex items-start gap-3 rounded-2xl bg-white/10 backdrop-blur p-4 text-white hover:bg-white/15 transition-colors"
                >
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0" strokeWidth={2.2} />
                  <div className="leading-tight">
                    <div className="text-[11px] uppercase tracking-wider opacity-75 font-semibold">Endereço</div>
                    <div className="text-sm font-semibold mt-0.5">{SITE.address.line1}</div>
                    <div className="text-xs opacity-85">{SITE.address.line2}</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary-deep shadow-soft hover:bg-white/95 transition-all hover:scale-[1.02]"
                >
                  Iniciar atendimento
                  <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={whatsappLink("Olá! Tenho uma dúvida rápida antes de agendar.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/0 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Tirar uma dúvida primeiro
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-soft aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] bg-white/5">
                <iframe
                  title="Mapa — Consultório Prof. Eduardo Moiolli"
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
