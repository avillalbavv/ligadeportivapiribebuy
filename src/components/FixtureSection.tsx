import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { fixtures } from "@/data/fixtures";
import { CalendarDays, ChevronDown, ChevronUp } from "lucide-react";

const FixtureSection = () => {
  const [activeSerie, setActiveSerie] = useState(0);
  const [expandedRound, setExpandedRound] = useState<number | null>(null);
  const serie = fixtures[activeSerie];
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="fixture"
      className={`section-padding transition-all duration-700 ${visible ? "animate-fade-up" : "opacity-0"}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <CalendarDays className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">Calendario Oficial</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Fixture 2026
          </h2>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex glass rounded-lg p-1 gap-1">
            {fixtures.map((f, i) => (
              <button
                key={f.serie}
                onClick={() => { setActiveSerie(i); setExpandedRound(null); }}
                className={`px-4 md:px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSerie === i
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.serie}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card p-4 md:p-6 space-y-2">
          {serie.rounds.map((round, ri) => (
            <div key={ri} className="border border-border/30 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedRound(expandedRound === ri ? null : ri)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-surface-hover transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-heading font-semibold text-sm text-foreground">{round.name}</span>
                  {round.name.includes("Reprogramada") && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">Reprogramado</span>
                  )}
                  <span className="text-xs text-muted-foreground">{round.date}</span>
                </div>
                {expandedRound === ri ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>

              {expandedRound === ri && (
                <div className="px-4 pb-4 space-y-2 animate-fade-up">
                  {round.matches.map((m, mi) => (
                    <div
                      key={mi}
                      className="flex items-center justify-between bg-muted/30 rounded-lg px-4 py-3"
                    >
                      <span className="text-sm font-medium text-foreground flex-1 text-right">{m.home}</span>
                      <span className="mx-4 text-xs font-heading font-bold text-secondary px-3 py-1 rounded-full bg-secondary/10">VS</span>
                      <span className="text-sm font-medium text-foreground flex-1 text-left">{m.away}</span>
                    </div>
                  ))}
                  {round.libre && (
                    <div className="text-center text-xs text-muted-foreground py-1">
                      Libre: <span className="font-medium text-foreground">{round.libre}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FixtureSection;
