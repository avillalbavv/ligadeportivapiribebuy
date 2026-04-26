import { MapPin, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ldpLogo from "@/assets/ldp-logo.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Fondo de cancha de fútbol de Piribebuy"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.92 }} />
      <div className="absolute inset-0 animate-shimmer" />

      <div className="relative z-10 container mx-auto text-center px-4 py-32 md:py-40">
        <div className="animate-fade-up">
          <img src={ldpLogo} alt="Liga Deportiva de Piribebuy" className="w-28 h-28 md:w-40 md:h-40 object-contain mb-6 mx-auto animate-pulse-gold drop-shadow-2xl" />
        </div>

        <h1 className="animate-fade-up delay-100 font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase">
          <span className="text-foreground">Liga Deportiva</span>
          <br />
          <span className="gold-text">de Piribebuy</span>
        </h1>

        <p className="animate-fade-up delay-200 mt-4 md:mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Pasión, tradición y fútbol desde 1953
        </p>

        <div className="animate-fade-up delay-300 mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4 text-secondary" />
            <span>Fundada en 1953 — 72 años</span>
          </span>
          <span className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4 text-secondary" />
            <span>Piribebuy, Paraguay</span>
          </span>
        </div>

        <div className="animate-fade-up delay-400 mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#posiciones"
            className="px-8 py-3 font-heading font-semibold uppercase tracking-wider text-sm rounded-lg text-secondary-foreground transition-all duration-300 hover:scale-105"
            style={{ background: "var(--gradient-gold)" }}
          >
            Ver Posiciones
          </a>
          <a
            href="#fixture"
            className="px-8 py-3 font-heading font-semibold uppercase tracking-wider text-sm rounded-lg border-2 border-secondary/40 text-secondary hover:border-secondary transition-all duration-300 hover:scale-105"
          >
            Fixture 2026
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
