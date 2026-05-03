import { useState } from "react";
import { Trophy } from "lucide-react";
import ClubLogo from "./ClubLogo";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface MatchResult {
  home: string;
  away: string;
  homeGoals: number;
  awayGoals: number;
  group?: string;
}

// ── Novena fecha ─────────────────────────────────────────────────
const resultsPrimeraNovena: MatchResult[] = [
  { home: "Sol de Mayo",   away: "Gral. Caballero",    homeGoals: 2, awayGoals: 2 },
  { home: "Libertad O",    away: "13 de Junio CC",     homeGoals: 3, awayGoals: 3 },
  { home: "1° de Marzo",   away: "Sport Unión",        homeGoals: 1, awayGoals: 7 },
  { home: "Guaraní",       away: "3 de Febrero",       homeGoals: 4, awayGoals: 1 },
  { home: "Independiente", away: "Mcal. Estigarribia", homeGoals: 2, awayGoals: 2 },
  { home: "15 de Agosto",  away: "12 de Agosto",       homeGoals: 1, awayGoals: 0 },
];

const resultsJuvenilNovena: MatchResult[] = [
  { home: "Sol de Mayo",   away: "Gral. Caballero",    homeGoals: 1, awayGoals: 1 },
  { home: "Libertad O",    away: "13 de Junio CC",     homeGoals: 1, awayGoals: 0 },
  { home: "1° de Marzo",   away: "Sport Unión",        homeGoals: 1, awayGoals: 4 },
  { home: "Guaraní",       away: "3 de Febrero",       homeGoals: 2, awayGoals: 2 },
  { home: "Independiente", away: "Mcal. Estigarribia", homeGoals: 0, awayGoals: 0 },
  { home: "15 de Agosto",  away: "12 de Agosto",       homeGoals: 1, awayGoals: 3 },
];

// ── Décima fecha (final) ─────────────────────────────────────────
const resultsPrimeraDecima: MatchResult[] = [
  { home: "Juventud Cordillerana",  away: "Libertad Ojopoi",      homeGoals: 5, awayGoals: 1, group: "Serie A" },
  { home: "13 de Junio CC",         away: "Sol de Mayo",           homeGoals: 0, awayGoals: 0, group: "Serie A" },
  { home: "Sport Unión",            away: "Capitán Cristaldo",     homeGoals: 0, awayGoals: 0, group: "Serie B" },
  { home: "3 de Febrero",           away: "1° de Marzo",           homeGoals: 1, awayGoals: 0, group: "Serie B" },
  { home: "Sport San Blas",         away: "Atlético Independiente",homeGoals: 2, awayGoals: 1, group: "Serie C" },
  { home: "15 de Agosto",           away: "Mcal. Estigarribia",   homeGoals: 0, awayGoals: 1, group: "Serie C" },
  { home: "Humaitá",                away: "13 de Junio SA",        homeGoals: 2, awayGoals: 1, group: "Serie D" },
  { home: "Sp. Itaguyrá",           away: "Libertad Yruguá",      homeGoals: 3, awayGoals: 2, group: "Serie D" },
];

const resultsJuvenilDecima: MatchResult[] = [
  { home: "Juventud Cordillerana",  away: "Libertad Ojopoi",       homeGoals: 3, awayGoals: 0, group: "Serie A" },
  { home: "13 de Junio CC",         away: "Sol de Mayo",            homeGoals: 0, awayGoals: 0, group: "Serie A" },
  { home: "Sport Unión",            away: "Capitán Cristaldo",      homeGoals: 4, awayGoals: 2, group: "Serie B" },
  { home: "3 de Febrero",           away: "1° de Marzo",            homeGoals: 0, awayGoals: 2, group: "Serie B" },
  { home: "Sport San Blas",         away: "Atlético Independiente", homeGoals: 0, awayGoals: 1, group: "Serie C" },
  { home: "15 de Agosto",           away: "Mcal. Estigarribia",    homeGoals: 2, awayGoals: 3, group: "Serie C" },
  { home: "Humaitá",                away: "13 de Junio SA",         homeGoals: 1, awayGoals: 3, group: "Serie D" },
  { home: "Sp. Itaguyrá",           away: "Libertad Yruguá",       homeGoals: 2, awayGoals: 0, group: "Serie D" },
];

const MatchCard = ({ match }: { match: MatchResult }) => {
  const hw = match.homeGoals > match.awayGoals;
  const aw = match.awayGoals > match.homeGoals;
  const dr = match.homeGoals === match.awayGoals;
  return (
    <div className="glass-card p-3 sm:p-4 hover-lift">
      {match.group && (
        <div className="text-[9px] font-bold uppercase tracking-widest text-secondary/70 mb-1.5">{match.group}</div>
      )}
      <div className="flex items-center justify-between gap-1 sm:gap-2">
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <ClubLogo clubName={match.home} size="xs" className="flex-shrink-0 sm:hidden" />
          <ClubLogo clubName={match.home} size="sm" className="flex-shrink-0 hidden sm:block" />
          <span className={`text-[11px] sm:text-sm leading-tight break-words ${hw ? "font-bold text-secondary" : "font-medium text-foreground"}`}>
            {match.home}
          </span>
        </div>
        <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0 px-1">
          <span className={`text-base sm:text-lg font-heading font-bold w-6 sm:w-7 text-center rounded ${hw ? "text-secondary" : dr ? "text-foreground" : "text-muted-foreground"}`}>
            {match.homeGoals}
          </span>
          <span className="text-xs text-muted-foreground font-medium">-</span>
          <span className={`text-base sm:text-lg font-heading font-bold w-6 sm:w-7 text-center rounded ${aw ? "text-secondary" : dr ? "text-foreground" : "text-muted-foreground"}`}>
            {match.awayGoals}
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-1 min-w-0 justify-end">
          <span className={`text-[11px] sm:text-sm leading-tight break-words text-right ${aw ? "font-bold text-secondary" : "font-medium text-foreground"}`}>
            {match.away}
          </span>
          <ClubLogo clubName={match.away} size="xs" className="flex-shrink-0 sm:hidden" />
          <ClubLogo clubName={match.away} size="sm" className="flex-shrink-0 hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

const MatchGrid = ({ results }: { results: MatchResult[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
    {results.map((match, i) => <MatchCard key={i} match={match} />)}
  </div>
);

type Fecha = "decima" | "novena";
type Cat = "primera" | "juvenil";

const ResultsSection = () => {
  const [fecha, setFecha] = useState<Fecha>("decima");
  const [cat, setCat] = useState<Cat>("primera");
  const { ref, visible } = useScrollReveal();

  const data =
    fecha === "decima"
      ? cat === "primera" ? resultsPrimeraDecima : resultsJuvenilDecima
      : cat === "primera" ? resultsPrimeraNovena : resultsJuvenilNovena;

  const fechaLabel = fecha === "decima" ? "Décima Fecha — Final" : "Novena Fecha";
  const dateLabel  = fecha === "decima" ? "3 de mayo de 2026" : "30 de abril de 2026";

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
              Resultados confirmados
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Resultados — {fechaLabel}
          </h2>
          <p className="text-muted-foreground text-sm mt-2">{dateLabel} · Campeonato L.D.P. 2026</p>
        </div>

        {/* Selector de fecha */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex glass rounded-lg p-1 gap-1">
            {(["decima", "novena"] as Fecha[]).map((f) => (
              <button
                key={f}
                onClick={() => setFecha(f)}
                className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
                  fecha === f ? "bg-secondary text-secondary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f === "decima" ? "10ma Fecha" : "9na Fecha"}
              </button>
            ))}
          </div>
        </div>

        {/* Selector de categoría */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex glass rounded-lg p-1 gap-1">
            {(["primera", "juvenil"] as Cat[]).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 md:px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  cat === c ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c === "primera" ? "Primera" : "Juvenil"}
              </button>
            ))}
          </div>
        </div>

        <MatchGrid results={data} />
      </div>
    </section>
  );
};

export default ResultsSection;
