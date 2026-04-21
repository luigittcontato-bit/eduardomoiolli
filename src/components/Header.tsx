import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { whatsappLink, SITE } from "@/lib/site";

const links = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#confianca", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-[var(--primary-deep)] flex items-center justify-center shadow-soft">
            <Sparkles className="h-4.5 w-4.5 text-primary-foreground" strokeWidth={2.4} />
          </div>
          <div className="leading-tight">
            <div className="text-[13px] sm:text-sm font-semibold text-foreground">Prof. Eduardo Moiolli</div>
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

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-[var(--primary-deep)] transition-colors"
        >
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
