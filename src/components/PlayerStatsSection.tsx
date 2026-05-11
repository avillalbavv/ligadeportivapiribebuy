import { useState } from "react";
import { BarChart3, Trophy, AlertTriangle, ShieldAlert, Star, Goal, CheckCircle2, XCircle } from "lucide-react";
import { playerStats } from "@/data/resolutions";
import ClubLogo from "./ClubLogo";

const tabs = [
  { key: "topScorers" as const, label: "Goleadores", icon: Goal },
];

// Equipos clasificados al cierre de la 9na fecha — Categoría Primera
const clasificadosPrimera = [
  "Sport Unión",
  "Guaraní",
  "Juventud Cordillerana",
  "Sport San Blas",
  "12 de Agosto",
];

// Equipos eliminados al cierre de la 9na fecha — Categoría Primera
const eliminadosPrimera = [
  "Primero de Marzo de Yhaguymi",
  "Libertad de Ojopoi",
  "3 de Febrero de Presidente Franco",
];

const PlayerStatsSection = () => {
  const [activeTab] = useState<keyof typeof playerStats>("topScorers");

  const currentStats = playerStats[activeTab];
  const activeTabInfo = tabs[0];

  return (
    <section id="estadisticas" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <BarChart3 className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Rendimiento
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Goleadores — 10ma Fecha
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Goleadores de la Liga Deportiva de Piribebuy al cierre de la décima fecha.
          </p>
        </div>

        {/* Estadísticas highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          {/* Clasificados */}
          <div className="glass-card px-5 py-4 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Clasificados — Categoría Primera
              </h3>
            </div>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              Al cierre de la novena fecha en categoría primera en la Liga Deportiva de Piribebuy, aseguraron su clasificación 5 clubes:
            </p>
            <ul className="space-y-1.5">
              {clasificadosPrimera.map((club, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <ClubLogo clubName={club} size="xs" />
                  {club}
                </li>
              ))}
            </ul>
          </div>

          {/* Eliminados + info */}
          <div className="flex flex-col gap-4">
            <div className="glass-card px-5 py-4 animate-fade-up" style={{ animationDelay: "80ms" }}>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-red-400">
                  Eliminados — Categoría Primera
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                Tres clubes ya están eliminados:
              </p>
              <ul className="space-y-1.5">
                {eliminadosPrimera.map((club, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    {club}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card px-5 py-4 animate-fade-up" style={{ animationDelay: "160ms" }}>
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-secondary shrink-0" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Definición — Décima Fecha
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Los 11 clubes restantes tienen aún posibilidades de clasificar para la siguiente etapa. Todo se define el próximo domingo en la décima y última fecha de la primera etapa.
              </p>
            </div>
          </div>
        </div>

        {/* Goleadores */}
        <div className="glass-card p-4 md:p-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
            <Goal className="w-4 h-4 text-secondary" />
            <h3 className="font-heading font-bold text-sm uppercase text-foreground">
              Goleadores — Liga Deportiva de Piribebuy · Décima Fecha
            </h3>
          </div>

          <div className="space-y-2">
            {currentStats.map((stat, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  i === 0
                    ? "bg-secondary/10 border border-secondary/20"
                    : i < 2
                    ? "bg-secondary/5 border border-secondary/10"
                    : i < 4
                    ? "bg-muted/30"
                    : "bg-muted/10"
                }`}
              >
                <span
                  className={`font-heading font-bold text-sm w-8 text-center shrink-0 ${
                    i < 2 ? "text-secondary" : "text-muted-foreground"
                  }`}
                >
                  {stat.position}°
                </span>

                <ClubLogo clubName={stat.club} size="sm" />

                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${i < 2 ? "text-secondary" : "text-foreground"}`}>
                    {stat.player}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.club}</p>
                </div>

                <span className={`font-heading font-bold text-lg shrink-0 ${i < 2 ? "text-secondary" : "text-foreground"}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerStatsSection;
