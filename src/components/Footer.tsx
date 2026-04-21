import { Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-[var(--primary-deep)] flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-primary-foreground" strokeWidth={2.4} />
          </div>
          <div className="text-sm">
            <span className="font-semibold text-foreground">{SITE.shortName}</span>
            <span className="text-muted-foreground"> — {SITE.credentials}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center sm:text-right">
          © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
