import { SITE, mapsLink } from "@/lib/site";
import { Link } from "@tanstack/react-router";
import { AtSign, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/logo-eduardo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo Consultório Prof. Eduardo Moiolli"
              className="h-12 w-12 rounded-full object-contain bg-black"
            />
            <div className="text-sm leading-tight">
              <div className="font-semibold text-foreground">{SITE.shortName}</div>
              <div className="text-muted-foreground text-xs">{SITE.credentials} · {SITE.cro}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Atendimento especializado em dor orofacial, ATM, distúrbios do sono e harmonização orofacial.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>WhatsApp <span className="font-semibold">{SITE.whatsappDisplay}</span></span>
              </a>
            </li>
            <li>
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-foreground hover:text-primary transition-colors">
                <AtSign className="h-4 w-4 mt-0.5 text-primary" />
                <span>Instagram <span className="font-semibold">{SITE.instagramHandle}</span></span>
              </a>
            </li>
            <li>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-foreground hover:text-primary transition-colors">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>{SITE.address.line1}<br />{SITE.address.line2}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">Institucional</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#especialidades" className="text-muted-foreground hover:text-primary transition-colors">Especialidades</a></li>
            <li><a href="#confianca" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
            <li><a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
            <li><Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</Link></li>
            <li><Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>{SITE.name} | {SITE.cro}</div>
          <div>© {new Date().getFullYear()} — Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
