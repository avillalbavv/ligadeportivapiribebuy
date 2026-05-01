import { useState } from "react";
import { Trophy } from "lucide-react";
import ClubLogo from "./ClubLogo";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface MatchResult {
  home: string;
  away: string;
  homeGoals: number;
  awayGoals: number;
  note?: string;
}

// Novena fecha — Primera Categoría (30 Abr 2026)
const resultsPrimera: MatchResult[] = [
  { home: "Sol de Mayo",       away: "Gral Caballero",      homeGoals: 2, awayGoals: 2 },
  { home: "Libertad O",        away: "13 de Junio CC",      homeGoals: 3, awayGoals: 3 },
  { home: "1° de Marzo",       away: "Sport Unión",         homeGoals: 1, awayGoals: 7 },
  { home: "Guaraní",           away: "3 de Febrero",        homeGoals: 4, awayGoals: 1 },
  { home: "Independiente",     away: "Mcal. Estigarribia",  homeGoals: 2, awayGoals: 2 },
  { home: "15 de Agosto",      away: "12 de Agosto",        homeGoals: 1, awayGoals: 0 },
];

// Novena fecha — Juvenil (30 Abr 2026)
const resultsJuvenil: MatchResult[] = [
  { home: "Sol de Mayo",       away: "Gral Caballero",      homeGoals: 1, awayGoals: 1 },
  { home: "Libertad O",        away: "13 de Junio CC",      homeGoals: 1, awayGoals: 0 },
  { home: "1° de Marzo",       away: "Sport Unión",         homeGoals: 1, awayGoals: 4 },
  { home: "Guaraní",           away: "3 de Febrero",        homeGoals: 2, awayGoals: 2 },
  { home: "Independiente",     away: "Mcal. Estigarribia",  homeGoals: 0, awayGoals: 0 },
  { home: "15 de Agosto",      away: "12 de Agosto",        homeGoals: 1, awayGoals: 3 },
];

const MatchGrid = ({ results }: { results: MatchResult[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
    {results.map((match, i) => {
      const homeWin = match.homeGoals > match.awayGoals;
      const awayWin = match.awayGoals > match.homeGoals;
      const draw = match.homeGoals === match.awayGoals;

      return (
        <div
          key={i}
          className="glass-card p-3 sm:p-4 hover-lift animate-fade-up"
          style={{ animationDelay: `${(i % 4) * 100}ms` }}
        >
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            <div className="flex items-center gap-1.5 flex-1 min-w-0">
              <ClubLogo clubName={match.home} size="xs" className="flex-shrink-0 sm:hidden" />
              <ClubLogo clubName={match.home} size="sm" className="flex-shrink-0 hidden sm:block" />
              <span
                className={`text-[11px] sm:text-sm leading-tight break-words ${
                  homeWin ? "font-bold text-secondary" : "font-medium text-foreground"
                }`}
              >
                {match.home}
              </span>
            </div>

            <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0 px-1">
              <span
                className={`text-base sm:text-lg font-heading font-bold w-6 sm:w-7 text-center rounded ${
                  homeWin ? "text-secondary" : draw ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {match.homeGoals}
              </span>
              <span className="text-xs text-muted-foreground font-medium">-</span>
              <span
                className={`text-base sm:text-lg font-heading font-bold w-6 sm:w-7 text-center rounded ${
                  awayWin ? "text-secondary" : draw ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {match.awayGoals}
              </span>
            </div>

            <div className="flex items-center gap-1.5 flex-1 min-w-0 justify-end">
              <span
                className={`text-[11px] sm:text-sm leading-tight break-words text-right ${
                  awayWin ? "font-bold text-secondary" : "font-medium text-foreground"
                }`}
              >
                {match.away}
              </span>
              <ClubLogo clubName={match.away} size="xs" className="flex-shrink-0 sm:hidden" />
              <ClubLogo clubName={match.away} size="sm" className="flex-shrink-0 hidden sm:block" />
            </div>
          </div>

          {match.note && (
            <div className="mt-2 flex items-center gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-400 bg-orange-400/10 border border-orange-400/20 px-2 py-0.5 rounded-full">
                ⚠ {match.note}
              </span>
            </div>
          )}
        </div>
      );
    })}
  </div>
);

const ResultsSection = () => {
  const [activeTab, setActiveTab] = useState<"primera" | "juvenil">("primera");
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="resultados"
      className={`section-padding transition-all duration-700 ${visible ? "animate-fade-up" : "opacity-0"}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Trophy className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Resultados Confirmados
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Resultados — Novena Fecha
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Novena fecha — 30 de abril de 2026 · Campeonato L.D.P. 2026
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex glass rounded-lg p-1 gap-1">
            <button
              onClick={() => setActiveTab("primera")}
              className={`px-4 md:px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "primera"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Primera
            </button>
            <button
              onClick={() => setActiveTab("juvenil")}
              className={`px-4 md:px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "juvenil"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Juvenil
            </button>
          </div>
        </div>

        <MatchGrid results={activeTab === "primera" ? resultsPrimera : resultsJuvenil} />
      </div>
    </section>
  );
};

export default ResultsSection;
