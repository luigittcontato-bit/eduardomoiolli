import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappLink, SITE } from "@/lib/site";
import logoAsset from "@/assets/logo-eduardo.png.asset.json";

const links = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#confianca", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur-lg border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between">
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="Logo Consultório Prof. Eduardo Moiolli"
            className="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-contain bg-black shadow-soft"
          />
          <div className="leading-tight">
            <div className="text-[13px] sm:text-sm font-semibold text-foreground">Dr. Eduardo Moiolli</div>
            <div className="text-[10px] sm:text-[11px] text-muted-foreground -mt-0.5">{SITE.credentials}</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[var(--whatsapp)] px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-[var(--whatsapp-deep)] transition-colors"
          >
            Quero agendar
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground hover:border-primary/40 hover:text-primary transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 pb-6 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-semibold text-foreground hover:bg-primary-soft hover:text-primary-deep transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--whatsapp)] px-5 py-3.5 text-base font-semibold text-white shadow-soft hover:bg-[var(--whatsapp-deep)] transition-colors"
          >
            Falar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
