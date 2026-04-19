import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, MapPin, Shield, Clock } from "lucide-react";
import ClubLogo from "./ClubLogo";

interface UpcomingMatch {
  home: string;
  away: string;
  stadium: string;
  referee: string;
  juvenilTime: string;
  primeraTime: string;
  isClassic?: boolean;
}

const fecha7Matches: UpcomingMatch[] = [
  {
    home: "Juventud",
    away: "Sol de Mayo",
    stadium: "Meneleo Rivas Almada",
    referee: "UFI",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Gral Caballero",
    away: "13 de Junio",
    stadium: "Gral Caballero",
    referee: "UFI",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Capitán Cristaldo",
    away: "Guaraní",
    stadium: "Capitán CRRI",
    referee: "Círculo Tobateño",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Sport Unión",
    away: "3 de Febrero",
    stadium: "Independiente",
    referee: "Círculo Liga Iteña",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Mcal Estigarribia",
    away: "12 de Agosto",
    stadium: "Mariscal Estigarribia",
    referee: "UFI",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Sport San Blas",
    away: "15 de Agosto",
    stadium: "Sport San Blas",
    referee: "Círculo J.A. Saldívar",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
    isClassic: true,
  },
  {
    home: "Itaguyra",
    away: "13 de Junio SA",
    stadium: "Itaguyra",
    referee: "Círculo Liga Paraguarí",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
  {
    home: "Libertad Y",
    away: "Humaitá",
    stadium: "Libertad Yruguá",
    referee: "Círculo Tobateño",
    juvenilTime: "13:30 h",
    primeraTime: "15:30 h",
  },
];

/** Compact match card for the grid */
const MatchCard = ({ match, delay }: { match: UpcomingMatch; delay: number }) => (
  <div
    className="glass-card p-4 hover-lift animate-fade-up flex flex-col h-full"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Teams row */}
    <div className="flex items-center gap-2 mb-4">
      {/* Home */}
      <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
        <ClubLogo clubName={match.home} size="md" />
        <span className="text-[11px] font-semibold text-foreground text-center leading-tight w-full break-words">
          {match.home}
        </span>
      </div>
      {/* VS */}
      <div className="shrink-0 px-1">
        <span className="font-heading font-bold text-secondary text-[10px] bg-secondary/10 px-2 py-1 rounded-full block text-center">
          VS
        </span>
      </div>
      {/* Away */}
      <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
        <ClubLogo clubName={match.away} size="md" />
        <span className="text-[11px] font-semibold text-foreground text-center leading-tight w-full break-words">
          {match.away}
        </span>
      </div>
    </div>

    {/* Times */}
    <div className="space-y-1.5 border-t border-border/30 pt-3 mb-3">
      <div className="flex items-center justify-between text-xs gap-2">
        <span className="text-muted-foreground shrink-0">Primera</span>
        <span className="font-heading font-bold text-secondary flex items-center gap-1">
          <Clock className="w-2.5 h-2.5 text-secondary shrink-0" />
          {match.primeraTime}
        </span>
      </div>
    </div>

    {/* Meta */}
    <div className="space-y-1.5 border-t border-border/30 pt-3 mt-auto">
      <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
        <MapPin className="w-3 h-3 text-secondary/70 shrink-0 mt-0.5" />
        <span className="leading-tight">{match.stadium}</span>
      </div>
      <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
        <Shield className="w-3 h-3 text-secondary/70 shrink-0 mt-0.5" />
        <span className="leading-tight">{match.referee}</span>
      </div>
    </div>
  </div>
);

const UpcomingMatches = () => {
  const { ref, visible } = useScrollReveal();
  const classicMatch = fecha7Matches.find((m) => m.isClassic);
  const regularMatches = fecha7Matches.filter((m) => !m.isClassic);

  return (
    <section
      ref={ref}
      id="proximos-partidos"
      className={`section-padding transition-all duration-700 ${visible ? "animate-fade-up" : "opacity-0"}`}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-secondary shrink-0" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Campeonato 2026
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Próximos Eventos — Fecha 8
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
            Domingo 26 de abril de 2026 — Liga Deportiva de Piribebuy
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs text-muted-foreground">
              <Clock className="w-3 h-3 text-secondary shrink-0" />
              Primera: 15:30 h
            </span>
          </div>
        </div>

        {/* Classic featured card */}
        {classicMatch && (
          <div
            className="max-w-xl mx-auto mb-8 rounded-2xl overflow-hidden animate-fade-up"
            style={{
              background: "linear-gradient(135deg, hsl(350 65% 16% / 0.92), hsl(0 0% 8% / 0.95))",
              border: "2px solid hsl(43 80% 45% / 0.45)",
              boxShadow: "0 0 36px hsl(43 80% 40% / 0.14), 0 12px 36px hsl(0 0% 0% / 0.5)",
            }}
          >
            {/* Classic header */}
            <div
              className="px-4 py-2.5 flex items-center justify-center gap-2"
              style={{ background: "var(--gradient-gold)" }}
            >
              <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-black text-center">
                🏆 Campeonato de Honor — Clásico Destacado
              </span>
            </div>

            {/* Teams */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
                  <ClubLogo clubName="Sport San Blas" size="lg" />
                  <span className="text-xs font-bold text-foreground text-center leading-tight">
                    Sport San Blas
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 shrink-0 px-2">
                  <span
                    className="font-heading font-bold text-3xl sm:text-4xl"
                    style={{
                      background: "var(--gradient-gold)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    VS
                  </span>
                  <span className="text-[9px] mt-0.5 uppercase tracking-widest font-bold" style={{ color: "hsl(43 80% 55%)" }}>
                    Próximo
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
                  <ClubLogo clubName="15 de Agosto" size="lg" />
                  <span className="text-xs font-bold text-foreground text-center leading-tight">
                    15 de Agosto
                  </span>
                </div>
              </div>
            </div>

            {/* Info row — stacks on mobile */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 border-t divide-y sm:divide-y-0 sm:divide-x"
              style={{
                borderColor: "hsl(43 80% 40% / 0.2)",
                "--tw-divide-opacity": "1",
              } as React.CSSProperties}
            >
              {[
                { icon: Clock, label: "Horario Primera", value: "15:30 h" },
                { icon: MapPin, label: "Estadio", value: "Sport San Blas" },
                { icon: Shield, label: "Árbitro", value: "Círculo J.A. Saldívar" },
              ].map(({ icon: Icon, label, value }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:flex-col sm:items-center sm:gap-1 px-5 py-3 sm:py-4 sm:text-center border-border/20"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: "hsl(43 80% 58%)" }} />
                  <div className="flex flex-col sm:items-center">
                    <span className="text-xs font-semibold" style={{ color: "hsl(40 20% 87%)" }}>
                      {value}
                    </span>
                    <span className="text-[10px]" style={{ color: "hsl(40 10% 52%)" }}>
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular matches grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {regularMatches.map((match, i) => (
            <MatchCard key={i} match={match} delay={(i % 4) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
