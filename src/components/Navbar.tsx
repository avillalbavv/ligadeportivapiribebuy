import { useState } from "react";
import { Menu, X } from "lucide-react";
import ldpLogo from "@/assets/ldp-logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Evento Destacado", href: "#evento-destacado" },
  { label: "Próximos Partidos", href: "#proximos-partidos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Posiciones", href: "#posiciones" },
  { label: "Fixture", href: "#fixture" },
  { label: "Resoluciones", href: "#resoluciones" },
  { label: "Clubes", href: "#clubes" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Liga Deportiva de Piribebuy — Inicio">
          <img src={ldpLogo} alt="Escudo de la Liga Deportiva de Piribebuy" className="w-10 h-10 object-contain" />
          <div>
            <span className="font-heading text-lg font-bold tracking-wide text-foreground">L.D.P.</span>
            <span className="block text-[10px] text-muted-foreground leading-none">Piribebuy</span>
          </div>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-foreground"
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="glass border-t border-border/30 animate-fade-up" role="navigation" aria-label="Menú principal">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors rounded-md hover:bg-muted/50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
