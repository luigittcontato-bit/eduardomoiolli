import { SITE } from "@/lib/site";
import logoAsset from "@/assets/logo-eduardo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="Logo Consultório Prof. Eduardo Moiolli"
            className="h-10 w-10 rounded-full object-contain bg-black"
          />
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
