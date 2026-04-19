import { Newspaper, AlertTriangle, Trophy, ShieldAlert, AlertOctagon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const NewsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="noticias"
      className={`section-padding transition-all duration-700 ${visible ? "animate-fade-up" : "opacity-0"}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Newspaper className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Últimas Novedades
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Noticias
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">

          {/* 1. DESTACADA — Partido suspendido Sport San Blas */}
          <article
            className="glass-card p-6 hover-lift animate-fade-up group md:col-span-2"
            style={{
              borderWidth: "1px",
              borderColor: "hsl(25 90% 50% / 0.35)",
              boxShadow: "0 0 28px hsl(25 90% 45% / 0.12)",
            }}
          >
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span
                className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full flex items-center gap-1"
                style={{
                  background: "hsl(25 90% 50% / 0.15)",
                  color: "hsl(25 90% 65%)",
                  border: "1px solid hsl(25 90% 50% / 0.35)",
                }}
              >
                <AlertOctagon className="w-3 h-3" />
                Partido Suspendido
              </span>
              <span className="text-[10px] text-muted-foreground">19 Abr 2026 · Séptima Fecha</span>
            </div>

            <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
              Sport San Blas ganaba 3-0 ante 15 de Agosto — partido suspendido por incidente
            </h3>

            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p>
                A los <span className="text-foreground font-medium">28 minutos del segundo tiempo</span>, con{" "}
                <span className="text-secondary font-semibold">Sport San Blas ganando 3-0</span>, el partido fue{" "}
                <span className="text-foreground font-medium">suspendido por la explosión de un petardo</span> dentro del gramado de juego.
              </p>
              <p>
                El incidente fue causado por{" "}
                <span className="text-foreground font-medium">hinchas visitantes de 15 de Agosto</span>. Las autoridades de la Liga
                determinarán las sanciones correspondientes conforme al reglamento.
              </p>
            </div>
          </article>

          {/* 2. Comunicado Club Sport San Blas — alcohol */}
          <article
            className="glass-card p-6 hover-lift animate-fade-up group"
            style={{
              animationDelay: "100ms",
              borderWidth: "1px",
              borderColor: "hsl(43 80% 45% / 0.25)",
              boxShadow: "0 0 20px hsl(43 80% 40% / 0.06)",
            }}
          >
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span
                className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full flex items-center gap-1"
                style={{
                  background: "hsl(43 80% 45% / 0.15)",
                  color: "hsl(43 80% 62%)",
                  border: "1px solid hsl(43 80% 45% / 0.3)",
                }}
              >
                <ShieldAlert className="w-3 h-3" />
                Comunicado Oficial
              </span>
              <span className="text-[10px] text-muted-foreground">19 Abr 2026</span>
            </div>

            <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
              Club Sport San Blas — Comunicado oficial
            </h3>

            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p>
                Por disposición de la{" "}
                <span className="text-foreground font-medium">Ley 7467/2024</span>, queda{" "}
                <span className="text-secondary font-semibold">
                  prohibida la venta y el consumo de bebidas alcohólicas
                </span>{" "}
                antes, durante y después de los partidos oficiales del campeonato.
              </p>
              <p>
                Habrá controles por parte de los dirigentes locales y la Policía Nacional.
              </p>
            </div>
          </article>

          {/* 3. Séptima fecha — resultados */}
          <article
            className="glass-card p-6 hover-lift animate-fade-up group"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-full">
                Resultados
              </span>
              <span className="text-[10px] text-muted-foreground">19 Abr 2026</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
              Séptima fecha: Sport Unión goleó 5-1 y sigue como líder
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sport Unión goleó 5-1 a 3 de Febrero y se consolida en la cima con 15 puntos. 
              Juventud Cordillerana venció 2-1 a Sol de Mayo y se mantiene segundo. 
              Todos los resultados de la séptima fecha están confirmados.
            </p>
          </article>

          {/* 4. Tablas oficiales */}
          <article
            className="glass-card p-6 hover-lift animate-fade-up group"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-full">
                Institucional
              </span>
              <span className="text-[10px] text-muted-foreground">19 Abr 2026</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors flex items-center gap-2">
              <Trophy className="w-4 h-4 text-secondary shrink-0" />
              Tablas oficiales publicadas
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Se publican las tablas de posiciones oficiales de las categorías Primera, Juvenil y
              Juvenil D, según las imágenes difundidas por la organización de la Liga.
            </p>
          </article>

          {/* 5. Fixture — Institucional */}
          <article
            className="glass-card p-6 hover-lift animate-fade-up group"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-full">
                Institucional
              </span>
              <span className="text-[10px] text-muted-foreground">01 Mar 2026</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
              Fixture completo confirmado
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Las 4 series del campeonato 2026 ya cuentan con fixture completo y recalendarizado.
            </p>
          </article>

          {/* 6. Archivo — Postergación */}
          <article
            className="glass-card p-6 hover-lift animate-fade-up group border-border/40"
            style={{ animationDelay: "500ms" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-widest font-semibold bg-muted/60 text-muted-foreground px-2 py-1 rounded-full">
                Archivo
              </span>
              <span className="text-[10px] text-muted-foreground">12 Abr 2026</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-muted-foreground shrink-0" />
              Postergación y reprogramación de la 6ª fecha
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La sexta fecha había sido postergada por inconvenientes climáticos. Una vez
              confirmados los partidos, la cobertura continúa con resultados y tablas publicadas por
              la organización.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;
