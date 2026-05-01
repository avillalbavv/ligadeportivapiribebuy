import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UpcomingMatches from "@/components/UpcomingMatches";
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

/** Thin decorative divider between sections */
const Divider = () => (
  <div className="section-divider" />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* 1. Próximos eventos — Décima Fecha */}
      <div style={{ background: "hsl(0 0% 7%)" }}>
        <UpcomingMatches />
      </div>
      <Divider />

      {/* 2. Resultados — Novena Fecha */}
      <ResultsSection />
      <Divider />

      {/* 3. Resto del sitio */}
      <div style={{ background: "hsl(0 0% 7%)" }}>
        <AboutSection />
      </div>
      <Divider />

      <StandingsSection />
      <Divider />

      <div style={{ background: "hsl(0 0% 7%)" }}>
        <FixtureSection />
      </div>
      <Divider />

      <ResolucionesSection />
      <Divider />

      <div style={{ background: "hsl(0 0% 7%)" }}>
        <PlayerStatsSection />
      </div>
      <Divider />

      <SeriesSection />
      <Divider />

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
