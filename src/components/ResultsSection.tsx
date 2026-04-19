import { useState } from "react";
import { Trophy } from "lucide-react";
import ClubLogo from "./ClubLogo";

interface MatchResult {
  home: string;
  away: string;
  homeGoals: number;
  awayGoals: number;
}

const resultsPrimera: MatchResult[] = [
  { home: "13 de Junio C.C.", away: "Juventud Cord.", homeGoals: 2, awayGoals: 1 },
  { home: "Libertad Ojopoi", away: "Gral. Caballero", homeGoals: 1, awayGoals: 2 },
  { home: "3 de Febrero", away: "Capitán Cristaldo", homeGoals: 3, awayGoals: 0 },
  { home: "1° de Marzo", away: "Guaraní", homeGoals: 0, awayGoals: 0 },
  { home: "12 de Agosto", away: "Sport San Blas", homeGoals: 2, awayGoals: 1 },
  { home: "15 de Agosto", away: "Independiente", homeGoals: 2, awayGoals: 2 },
];

const resultsJuvenil: MatchResult[] = [
  { home: "Juventud", away: "Sol de Mayo", homeGoals: 0, awayGoals: 0 },
  { home: "Gral. Caballero", away: "13 de Junio C.C.", homeGoals: 0, awayGoals: 1 },
  { home: "Sport Unión", away: "3 de Febrero", homeGoals: 3, awayGoals: 1 },
  { home: "Capitán Cristaldo", away: "Guaraní", homeGoals: 5, awayGoals: 1 },
  { home: "Sport San Blas", away: "15 de Agosto", homeGoals: 2, awayGoals: 1 },
  { home: "Mcal. Estigarribia", away: "12 de Agosto", homeGoals: 1, awayGoals: 2 },
  { home: "Itaguyra", away: "13 de Junio SA", homeGoals: 1, awayGoals: 2 },
  { home: "Libertad Y", away: "Humaitá", homeGoals: 1, awayGoals: 2 },
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
          className="glass-card p-4 hover-lift animate-fade-up"
          style={{ animationDelay: `${(i % 4) * 100}ms` }}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <ClubLogo clubName={match.home} size="sm" />
              <span className={`text-xs sm:text-sm truncate ${homeWin ? "font-bold text-secondary" : "font-medium text-foreground"}`}>
                {match.home}
              </span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <span className={`text-lg font-heading font-bold w-7 text-center rounded ${homeWin ? "text-secondary" : draw ? "text-foreground" : "text-muted-foreground"}`}>
                {match.homeGoals}
              </span>
              <span className="text-xs text-muted-foreground font-medium">-</span>
              <span className={`text-lg font-heading font-bold w-7 text-center rounded ${awayWin ? "text-secondary" : draw ? "text-foreground" : "text-muted-foreground"}`}>
                {match.awayGoals}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
              <span className={`text-xs sm:text-sm text-right truncate ${awayWin ? "font-bold text-secondary" : "font-medium text-foreground"}`}>
                {match.away}
              </span>
              <ClubLogo clubName={match.away} size="sm" />
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

const ResultsSection = () => {
  const [activeTab, setActiveTab] = useState<"primera" | "juvenil">("primera");

  return (
    <section id="resultados" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Trophy className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Resultados Confirmados
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Resultados — Fecha 6 / Fecha 7
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Primera: Fecha 6 (14 Abr) · Juvenil: Fecha 7 (19 Abr) — Campeonato L.D.P. 2026
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
