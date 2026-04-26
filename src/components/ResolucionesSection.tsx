import { useState } from "react";
import { Scale, FileText, Download, X, CalendarDays } from "lucide-react";
import { resolutions } from "@/data/resolutions";

const ResolucionesSection = () => {
  const [viewingPdf, setViewingPdf] = useState<string | null>(null);
  const [viewingTitle, setViewingTitle] = useState("");

  const openPdf = (url: string, title: string) => {
    setViewingPdf(url);
    setViewingTitle(title);
  };

  return (
    <section id="resoluciones" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <Scale className="w-5 h-5 text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
              Tribunal Disciplinario
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Resoluciones
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Documentos oficiales del Tribunal Disciplinario — L.D.P. 2026
          </p>
        </div>

        {/* Aviso institucional — resoluciones */}
        <p className="text-xs text-muted-foreground/60 text-center max-w-2xl mx-auto mb-6 leading-relaxed border border-border/20 rounded-lg px-4 py-3 bg-muted/10">
          Las resoluciones publicadas en esta sección corresponden a documentos oficiales provistos o
          aprobados por la Liga Deportiva de Piribebuy. Su contenido, datos, nombres, sanciones y
          disposiciones son responsabilidad institucional de la Liga.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {resolutions.map((res) => (
            <div
              key={res.id}
              className="glass-card p-5 hover-lift animate-fade-up flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-secondary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-sm text-foreground leading-tight">
                    {res.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <CalendarDays className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{res.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                {res.summary}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => openPdf(res.pdfUrl, res.title)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Ver resolución
                </button>
                <a
                  href={res.pdfUrl}
                  download
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-secondary/50 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {viewingPdf && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-up">
          <div className="w-full max-w-4xl h-[85vh] glass-card rounded-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/30">
              <h3 className="font-heading font-bold text-sm text-foreground truncate pr-4">
                {viewingTitle}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={viewingPdf}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Descargar
                </a>
                <button
                  onClick={() => setViewingPdf(null)}
                  className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-muted/20 relative">
              {/* Desktop: iframe viewer */}
              <iframe
                src={viewingPdf}
                className="w-full h-full hidden sm:block"
                title={viewingTitle}
              />
              {/* Mobile: direct link since most mobile browsers can't render PDF in iframe */}
              <div className="flex sm:hidden flex-col items-center justify-center h-full gap-4 p-6 text-center">
                <FileText className="w-12 h-12 text-secondary/50" />
                <p className="text-sm text-muted-foreground">
                  Para ver el PDF en tu celular, tocá el botón de abajo.
                </p>
                <a
                  href={viewingPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Abrir PDF
                </a>
                <a
                  href={viewingPdf}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Descargar PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResolucionesSection;
