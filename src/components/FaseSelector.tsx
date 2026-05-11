import { Trophy } from "lucide-react";

export type Fase = "primera" | "segunda";

interface FaseSelectorProps {
  faseActiva: Fase;
  onChange: (fase: Fase) => void;
}

const FaseSelector = ({ faseActiva, onChange }: FaseSelectorProps) => {
  return (
    <div className="w-full flex flex-col items-center py-6 px-4" style={{ background: "hsl(0 0% 5%)", borderBottom: "1px solid hsl(var(--border) / 0.3)" }}>
      <div className="flex items-center gap-2 mb-3">
        <Trophy className="w-4 h-4 text-secondary" />
        <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
          Seleccioná la fase del campeonato
        </span>
      </div>
      <div className="inline-flex glass rounded-lg p-1 gap-1">
        <button
          onClick={() => onChange("primera")}
          className={`px-5 md:px-8 py-2.5 rounded-md text-sm font-heading font-semibold uppercase tracking-wider transition-all duration-200 ${
            faseActiva === "primera"
              ? "text-secondary-foreground shadow-md"
              : "text-muted-foreground hover:text-foreground"
          }`}
          style={faseActiva === "primera" ? { background: "var(--gradient-gold)" } : {}}
        >
          Primera Fase
        </button>
        <button
          onClick={() => onChange("segunda")}
          className={`px-5 md:px-8 py-2.5 rounded-md text-sm font-heading font-semibold uppercase tracking-wider transition-all duration-200 ${
            faseActiva === "segunda"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Segunda Fase
        </button>
      </div>
    </div>
  );
};

export default FaseSelector;
