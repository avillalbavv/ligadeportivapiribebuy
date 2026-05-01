import { useState } from "react";
import { standingsPrincipal, standingsPrincipalD, standingsJuvenil, standingsJuvenilD, type TeamStanding } from "@/data/standings";
import { Trophy, CheckCircle2, XCircle } from "lucide-react";
import ClubLogo from "./ClubLogo";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tabs = [
  { id: "principal",  label: "Primera",      data: standingsPrincipal },
  { id: "principalD",label: "Primera — S.D", data: standingsPrincipalD },
  { id: "juvenil",   label: "Juvenil",       data: standingsJuvenil },
  { id: "juvenilD",  label: "Juvenil — S.D", data: standingsJuvenilD },
];

const StandingsTable = ({ data }: { data: TeamStanding[] }) => (
  <div className="overflow-x-auto -mx-4 md:mx-0">
    <table className="w-full text-sm min-w-[600px]">
      <thead>
        <tr className="border-b border-border/50 text-muted-foreground text-xs uppercase tracking-wider">
          <th className="py-3 px-3 text-left">#</th>
          <th className="py-3 px-3 text-left">Equipo</th>
          <th className="py-3 px-2 text-center">PJ</th>
          <th className="py-3 px-2 text-center">PG</th>
          <th className="py-3 px-2 text-center">PE</th>
          <th className="py-3 px-2 text-center">PP</th>
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
              row.classified
                ? "bg-emerald-500/5"
                : row.eliminated
                ? "bg-red-500/5"
                : i < 3
                ? "table-row-highlight"
                : "table-row-alt"
            }`}
          >
            <td className="py-3 px-3">
              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                row.classified
                  ? "bg-emerald-500/20 text-emerald-400"
                  : row.eliminated
                  ? "bg-red-500/20 text-red-400"
                  : i === 0
                  ? "bg-secondary text-secondary-foreground"
                  : i < 3
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}>
                {row.pos}
              </span>
            </td>
            <td className="py-3 px-3 font-medium text-foreground whitespace-nowrap">
              <div className="flex items-center gap-2">
                <ClubLogo clubName={row.team} size="sm" />
                {row.team}
                {row.classified && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                )}
                {row.eliminated && (
                  <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                )}
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

// Mini banner mostrando los 5 clasificados de Primera
const ClasificadosBanner = () => {
  const clasificados = standingsPrincipal.filter(t => t.classified);
  const eliminados = standingsPrincipal.filter(t => t.eliminated);

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="glass-card p-4">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Clasificados</h3>
        </div>
        <div className="space-y-1.5">
          {clasificados.map((t) => (
            <div key={t.team} className="flex items-center gap-2 text-sm">
              <ClubLogo clubName={t.team} size="xs" />
              <span className="font-medium text-foreground">{t.team}</span>
              <span className="ml-auto text-xs text-emerald-400 font-bold">{t.pts} pts</span>
            </div>
          ))}
        </div>
      </div>
      <div className="glass-card p-4">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
          <XCircle className="w-4 h-4 text-red-400 shrink-0" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-red-400">Eliminados</h3>
        </div>
        <div className="space-y-1.5">
          {eliminados.map((t) => (
            <div key={t.team} className="flex items-center gap-2 text-sm">
              <ClubLogo clubName={t.team} size="xs" />
              <span className="font-medium text-foreground">{t.team}</span>
              <span className="ml-auto text-xs text-red-400 font-bold">{t.pts} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StandingsSection = () => {
  const [activeTab, setActiveTab] = useState("principal");
  const currentTab = tabs.find((t) => t.id === activeTab)!;
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="posiciones"
      className={`section-padding transition-all duration-700 ${visible ? "animate-fade-up" : "opacity-0"}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Trophy className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">Campeonato 2026</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Tabla de Posiciones
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Al cierre de la novena fecha — Liga Deportiva de Piribebuy
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex glass rounded-lg p-1 gap-1 flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 md:px-5 py-2 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card p-4 md:p-6 overflow-hidden">
          <StandingsTable data={currentTab.data} />
        </div>

        {activeTab === "principal" && <ClasificadosBanner />}
      </div>
    </section>
  );
};

export default StandingsSection;
