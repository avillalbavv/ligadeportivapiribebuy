import { useState } from "react";
import { standingsPrincipal, standingsJuvenil, standingsJuvenilD, type TeamStanding } from "@/data/standings";
import { Trophy } from "lucide-react";
import ClasificadosTop10 from "./ClasificadosTop10";
import ClubLogo from "./ClubLogo";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tabs = [
  { id: "principal", label: "Principal", data: standingsPrincipal },
  { id: "juvenil", label: "Juvenil", data: standingsJuvenil },
  { id: "juvenilD", label: "Juvenil D", data: standingsJuvenilD },
];

const StandingsTable = ({ data, showGoals }: { data: TeamStanding[]; showGoals: boolean }) => (
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
          {showGoals && <th className="py-3 px-2 text-center">GF</th>}
          {showGoals && <th className="py-3 px-2 text-center">GC</th>}
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
                i === 0 ? "bg-secondary text-secondary-foreground" : i < 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
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
            {showGoals && <td className="py-3 px-2 text-center text-muted-foreground">{row.gf}</td>}
            {showGoals && <td className="py-3 px-2 text-center text-muted-foreground">{row.gc}</td>}
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
            Tablas oficiales publicadas por la Liga Deportiva de Piribebuy
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex glass rounded-lg p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
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
          <StandingsTable data={currentTab.data} showGoals={true} />
        </div>

        {activeTab === "principal" && (
          <ClasificadosTop10 title="Top 10 Clasificados — Categoría Principal" data={standingsPrincipal} />
        )}
        {activeTab === "juvenil" && (
          <ClasificadosTop10 title="Top 10 Clasificados — Categoría Juvenil" data={standingsJuvenil} />
        )}
      </div>
    </section>
  );
};

export default StandingsSection;
