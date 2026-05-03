import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import StandingsSection from "@/components/StandingsSection";
import FixtureSection from "@/components/FixtureSection";
import ResolucionesSection from "@/components/ResolucionesSection";
import PlayerStatsSection from "@/components/PlayerStatsSection";
import SeriesSection from "@/components/SeriesSection";
import ClubsSection from "@/components/ClubsSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";

const Divider = () => <div className="section-divider" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Resultados — Décima Fecha (final) */}
      <ResultsSection />
      <Divider />

      {/* Sobre la Liga */}
      <div style={{ background: "hsl(0 0% 7%)" }}>
        <AboutSection />
      </div>
      <Divider />

      {/* Tabla de posiciones */}
      <StandingsSection />
      <Divider />

      {/* Fixture */}
      <div style={{ background: "hsl(0 0% 7%)" }}>
        <FixtureSection />
      </div>
      <Divider />

      {/* Resoluciones del Tribunal */}
      <ResolucionesSection />
      <Divider />

      {/* Estadísticas / Goleadores */}
      <div style={{ background: "hsl(0 0% 7%)" }}>
        <PlayerStatsSection />
      </div>
      <Divider />

      {/* Series */}
      <SeriesSection />
      <Divider />

      {/* Clubes */}
      <div style={{ background: "hsl(0 0% 7%)" }}>
        <ClubsSection />
      </div>
      <Divider />

      <NewsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
