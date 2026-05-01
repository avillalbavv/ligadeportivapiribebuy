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
}

const fecha10Matches: UpcomingMatch[] = [
  {
    home: "Juventud",
    away: "Libertad O",
    stadium: "Meneleo Rivas",
    referee: "Circulo Federación Cordillera",
    juvenilTime: "14:00 h",
    primeraTime: "16:00 h",
  },
  {
    home: "13 de Junio CC",
    away: "Sol de Mayo",
    stadium: "13 de Junio CC",
    referee: "Circulo UFI",
    juvenilTime: "14:00 h",
    primeraTime: "16:00 h",
  },
  {
    home: "Sport Unión",
    away: "Capitán Cristaldo",
    stadium: "Independiente",
    referee: "Circulo UFI",
    juvenilTime: "14:00 h",
    primeraTime: "16:00 h",
  },
  {
    home: "3 de Febrero",
    away: "1° de Marzo",
    stadium: "3 de Febrero",
    referee: "Circulo Liga Iteña",
    juvenilTime: "14:00 h",
    primeraTime: "16:00 h",
  },
  {
    home: "Sport San Blas",
    away: "Independiente",
    stadium: "Sport San Blas",
    referee: "Circulo Liga Paraguari",
    juvenilTime: "14:00 h",
    primeraTime: "16:00 h",
  },
  {
    home: "15 de Agosto",
    away: "Mcal Estigarribia",
    stadium: "Hilario Portillo",
    referee: "Circulo J.A Saldivar",
    juvenilTime: "14:00 h",
    primeraTime: "16:00 h",
  },
  {
    home: "Humaitá",
    away: "13 de Junio SA",
    stadium: "Humaitá",
    referee: "Circulo UFI",
    juvenilTime: "14:00 h",
    primeraTime: "16:00 h",
  },
  {
    home: "Itaguyra",
    away: "Libertad Y",
    stadium: "Itaguyra",
    referee: "Circulo Federación Paraguari",
    juvenilTime: "14:00 h",
    primeraTime: "16:00 h",
  },
];

const MatchCard = ({ match, delay }: { match: UpcomingMatch; delay: number }) => (
  <div
    className="glass-card p-4 hover-lift animate-fade-up flex flex-col h-full"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-2 mb-4">
      <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
        <ClubLogo clubName={match.home} size="md" />
        <span className="text-[11px] font-semibold text-foreground text-center leading-tight w-full break-words">
          {match.home}
        </span>
      </div>
      <div className="shrink-0 px-1">
        <span className="font-heading font-bold text-secondary text-[10px] bg-secondary/10 px-2 py-1 rounded-full block text-center">
          VS
        </span>
      </div>
      <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
        <ClubLogo clubName={match.away} size="md" />
        <span className="text-[11px] font-semibold text-foreground text-center leading-tight w-full break-words">
          {match.away}
        </span>
      </div>
    </div>

    <div className="space-y-1.5 border-t border-border/30 pt-3 mb-3">
      <div className="flex items-center justify-between text-xs gap-2">
        <span className="text-muted-foreground shrink-0">Juvenil</span>
        <span className="font-heading font-bold text-secondary flex items-center gap-1">
          <Clock className="w-2.5 h-2.5 text-secondary shrink-0" />
          {match.juvenilTime}
        </span>
      </div>
      <div className="flex items-center justify-between text-xs gap-2">
        <span className="text-muted-foreground shrink-0">Primera</span>
        <span className="font-heading font-bold text-secondary flex items-center gap-1">
          <Clock className="w-2.5 h-2.5 text-secondary shrink-0" />
          {match.primeraTime}
        </span>
      </div>
    </div>

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

  return (
    <section
      ref={ref}
      id="proximos-partidos"
      className={`section-padding transition-all duration-700 ${visible ? "animate-fade-up" : "opacity-0"}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-secondary shrink-0" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Campeonato 2026
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Décima Fecha — Última Fecha
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
            Domingo 3 de mayo de 2026 — Liga Deportiva de Piribebuy
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <span className="inline-flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs text-muted-foreground">
              <Clock className="w-3 h-3 text-secondary shrink-0" />
              Juvenil: 14:00 h · Primera: 16:00 h
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {fecha10Matches.map((match, i) => (
            <MatchCard key={i} match={match} delay={(i % 4) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
