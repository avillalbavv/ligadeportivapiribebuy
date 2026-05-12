import { useState } from "react";
import { Trophy, Shield, Goal, BarChart3, Calendar, MapPin, Users } from "lucide-react";
import ClubLogo from "./ClubLogo";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  gruposSegundaFase,
  resultsPrimeraFecha2F,
  resultsJuvenilFecha2F,
  standingsPrimera2F,
  standingsJuvenil2F,
  proximosJuvenil2F,
  proximosPrimera2F,
  type MatchResult2F,
  type ProximoPartido,
} from "@/data/segundaFase";
import { type TeamStanding } from "@/data/standings";

// ── Match Card ────────────────────────────────────────────────────
const MatchCard2F = ({ match }: { match: MatchResult2F }) => {
  const hw = match.homeGoals > match.awayGoals;
  const aw = match.awayGoals > match.homeGoals;
  const dr = match.homeGoals === match.awayGoals;
  return (
    <div className="glass-card p-3 sm:p-4 hover-lift">
      {match.grupo && (
        <div className="text-[9px] font-bold uppercase tracking-widest text-secondary/70 mb-1.5">{match.grupo}</div>
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

// ── Standings Table ───────────────────────────────────────────────
const StandingsTable2F = ({ data }: { data: TeamStanding[] }) => (
  <div className="overflow-x-auto -mx-4 md:mx-0">
    <table className="w-full text-sm min-w-[600px]">
      <thead>
        <tr className="border-b border-border/50 text-muted-foreground text-xs uppercase tracking-wider">
          <th className="py-3 px-3 text-left">#</th>
          <th className="py-3 px-3 text-left">Equipo</th>
          <th className="py-3 px-2 text-center">J</th>
          <th className="py-3 px-2 text-center">G</th>
          <th className="py-3 px-2 text-center">E</th>
          <th className="py-3 px-2 text-center">P</th>
          <th className="py-3 px-2 text-center">GF</th>
          <th className="py-3 px-2 text-center">GC</th>
          <th className="py-3 px-2 text-center">DIF</th>
          <th className="py-3 px-2 text-center font-bold">PTS</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            key={row.team}
            className={`border-b border-border/20 transition-colors duration-200 hover:bg-surface-hover ${
              i < 3 ? "table-row-highlight" : "table-row-alt"
            }`}
          >
            <td className="py-3 px-3">
              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                i === 0 ? "bg-secondary text-secondary-foreground"
                : i < 3 ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
              }`}>
                {row.pos}
              </span>
            </td>
            <td className="py-3 px-3 font-medium text-foreground whitespace-nowrap">
              <div className="flex items-center gap-2">
                <ClubLogo clubName={row.team} size="sm" />
                {row.team}
              </div>
            </td>
            <td className="py-3 px-2 text-center text-muted-foreground">{row.pj}</td>
            <td className="py-3 px-2 text-center text-muted-foreground">{row.pg}</td>
            <td className="py-3 px-2 text-center text-muted-foreground">{row.pe}</td>
            <td className="py-3 px-2 text-center text-muted-foreground">{row.pp}</td>
            <td className="py-3 px-2 text-center text-muted-foreground">{row.gf}</td>
            <td className="py-3 px-2 text-center text-muted-foreground">{row.gc}</td>
            <td className="py-3 px-2 text-center">
              <span className={`font-medium ${row.dif > 0 ? "text-green-400" : row.dif < 0 ? "text-red-400" : "text-muted-foreground"}`}>
                {row.dif > 0 ? `+${row.dif}` : row.dif}
              </span>
            </td>
            <td className="py-3 px-2 text-center">
              <span className="font-heading font-bold text-base text-secondary">{row.pts}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

type Cat2F = "primera" | "juvenil";

// ── Próximo Partido Card ──────────────────────────────────────────
const ProximoPartidoCard = ({ partido }: { partido: ProximoPartido }) => (
  <div className="glass-card p-3 sm:p-4 hover-lift">
    <div className="text-[9px] font-bold uppercase tracking-widest text-secondary/70 mb-2">{partido.serie}</div>
    <div className="flex items-center justify-between gap-1 sm:gap-2 mb-3">
      <div className="flex items-center gap-1.5 flex-1 min-w-0">
        <ClubLogo clubName={partido.home} size="xs" className="flex-shrink-0 sm:hidden" />
        <ClubLogo clubName={partido.home} size="sm" className="flex-shrink-0 hidden sm:block" />
        <span className="text-[11px] sm:text-sm leading-tight font-medium text-foreground">{partido.home}</span>
      </div>
      <div className="flex-shrink-0 px-2">
        <span className="text-xs font-heading font-bold text-secondary/60 tracking-widest">VS</span>
      </div>
      <div className="flex items-center gap-1.5 flex-1 min-w-0 justify-end">
        <span className="text-[11px] sm:text-sm leading-tight font-medium text-foreground text-right">{partido.away}</span>
        <ClubLogo clubName={partido.away} size="xs" className="flex-shrink-0 sm:hidden" />
        <ClubLogo clubName={partido.away} size="sm" className="flex-shrink-0 hidden sm:block" />
      </div>
    </div>
    <div className="border-t border-border/20 pt-2 flex flex-wrap gap-x-4 gap-y-1">
      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
        <Calendar className="w-3 h-3 text-secondary/60 shrink-0" />
        {partido.fecha} · {partido.hora}
      </span>
      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
        <MapPin className="w-3 h-3 text-secondary/60 shrink-0" />
        {partido.estadio}
      </span>
      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
        <Users className="w-3 h-3 text-secondary/60 shrink-0" />
        {partido.arbitros}
      </span>
    </div>
  </div>
);

// ── Componente Principal ──────────────────────────────────────────
const SegundaFaseSection = () => {
  const [cat, setCat] = useState<Cat2F>("primera");
  const [standingsCat, setStandingsCat] = useState<Cat2F>("primera");
  const [proximosCat, setProximosCat] = useState<Cat2F>("primera");
  const { ref, visible } = useScrollReveal();

  const resultados = cat === "primera" ? resultsPrimeraFecha2F : resultsJuvenilFecha2F;
  const tabla = standingsCat === "primera" ? standingsPrimera2F : standingsJuvenil2F;
  const proximos = proximosCat === "primera" ? proximosPrimera2F : proximosJuvenil2F;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "animate-fade-up" : "opacity-0"}`}
    >
      {/* ── Grupos ────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
                Segunda Etapa — En curso
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              Grupos de la Segunda Fase
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Clasificados — Liga Deportiva de Piribebuy 2026
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gruposSegundaFase.map((grupo, i) => (
              <div key={grupo.nombre} className={`glass-card p-6 hover-lift animate-fade-up delay-${(i + 1) * 100}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-secondary" />
                  <h3 className="font-heading text-lg font-bold text-secondary">{grupo.nombre}</h3>
                </div>
                <ul className="space-y-2">
                  {grupo.equipos.map((equipo) => (
                    <li key={equipo} className="text-sm text-muted-foreground flex items-center gap-2">
                      <ClubLogo clubName={equipo} size="xs" />
                      {equipo}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Resultados ────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-secondary" />
              <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
                Resultados confirmados
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              Resultados — 1ra Fecha
            </h2>
            <p className="text-muted-foreground text-sm mt-2">Segunda Fase · Campeonato L.D.P. 2026</p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="inline-flex glass rounded-lg p-1 gap-1">
              {(["primera", "juvenil"] as Cat2F[]).map((c) => (
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {resultados.map((match, i) => (
              <MatchCard2F key={i} match={match} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Tabla de Posiciones ───────────────────────────────────── */}
      <section className="section-padding" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-secondary" />
              <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
                Segunda Etapa — En curso
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              Tabla de Posiciones
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Tras la 1ra fecha · Liga Deportiva de Piribebuy 2026
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="inline-flex glass rounded-lg p-1 gap-1 flex-wrap justify-center">
              {(["primera", "juvenil"] as Cat2F[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setStandingsCat(c)}
                  className={`px-3 md:px-5 py-2 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
                    standingsCat === c
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c === "primera" ? "Primera" : "Juvenil"}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card p-4 md:p-6 overflow-hidden">
            <StandingsTable2F data={tabla} />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Goleadores Próximamente ───────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <BarChart3 className="w-5 h-5 text-secondary" />
              <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
                Rendimiento
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              Goleadores — Segunda Fase
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Se actualizará al cierre de cada fecha.
            </p>
          </div>

          <div className="glass-card p-6 md:p-8 max-w-2xl mx-auto text-center">
            <Goal className="w-10 h-10 text-secondary/40 mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Los datos de goleadores de la segunda fase estarán disponibles próximamente.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Se actualizará al cierre de cada fecha jugada.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Próximos Partidos ─────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "hsl(0 0% 7%)" }}>
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-secondary" />
              <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
                Programación
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              Próximos Partidos
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Segunda Fecha — Segunda Fase · Jueves 14 de mayo de 2026
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="inline-flex glass rounded-lg p-1 gap-1">
              {(["primera", "juvenil"] as Cat2F[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setProximosCat(c)}
                  className={`px-4 md:px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    proximosCat === c ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c === "primera" ? "Primera · 15:45 H" : "Juvenil · 13:45 H"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {proximos.map((partido, i) => (
              <ProximoPartidoCard key={i} partido={partido} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SegundaFaseSection;
