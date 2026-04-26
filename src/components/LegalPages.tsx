import { useState, useEffect, useRef } from "react";
import { X, Scale, Shield } from "lucide-react";

// ─── Tipos ────────────────────────────────────────────────────────────────────
type ModalType = "aviso-legal" | "privacidad" | null;

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

// ─── Modal contenedor ─────────────────────────────────────────────────────────
const LegalModal = ({ type, onClose }: LegalModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Cerrar con Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    // Bloquear scroll del body
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!type) return null;

  const isLegal = type === "aviso-legal";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={isLegal ? "Aviso Legal" : "Política de Privacidad"}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="w-full max-w-2xl max-h-[85vh] glass-card rounded-2xl overflow-hidden flex flex-col"
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/30 shrink-0">
          <div className="flex items-center gap-3">
            {isLegal ? (
              <Scale className="w-5 h-5 text-secondary" aria-hidden="true" />
            ) : (
              <Shield className="w-5 h-5 text-secondary" aria-hidden="true" />
            )}
            <h2 className="font-heading font-bold text-base text-foreground">
              {isLegal ? "Aviso Legal" : "Política de Privacidad"}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Contenido desplazable */}
        <div className="flex-1 overflow-y-auto px-6 py-5 text-sm text-muted-foreground leading-relaxed space-y-4">
          {isLegal ? <AvisoLegalContent /> : <PrivacidadContent />}
        </div>

        {/* Pie del modal */}
        <div className="px-6 py-3 border-t border-border/30 shrink-0">
          <p className="text-[11px] text-muted-foreground/50 text-center">
            Liga Deportiva de Piribebuy — Personería Jurídica N.º 246 — RUC: 80050765-7
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Aviso Legal ──────────────────────────────────────────────────────────────
const AvisoLegalContent = () => (
  <>
    <p>
      Este sitio web es un medio institucional e informativo de la{" "}
      <strong className="text-foreground">Liga Deportiva de Piribebuy</strong>. La información
      publicada, incluyendo fixture, resultados, posiciones, noticias, clubes, estadísticas,
      resoluciones y documentos, es provista o aprobada por la Liga Deportiva de Piribebuy.
    </p>
    <p>
      La Liga Deportiva de Piribebuy es responsable por la veracidad, autorización, actualización y
      difusión de los contenidos publicados en este sitio, incluyendo nombres, imágenes, escudos,
      documentos, resoluciones, sanciones, datos deportivos y datos institucionales.
    </p>
    <p>
      El desarrollador o prestador técnico del sitio actúa únicamente como proveedor de diseño,
      desarrollo, configuración y soporte técnico, sin responsabilidad editorial sobre los contenidos
      entregados, aprobados o solicitados por la Liga.
    </p>
    <p>
      Queda prohibida la reproducción no autorizada de logos, escudos, fotografías, textos,
      documentos o cualquier contenido protegido por derechos de autor, derechos de imagen, marcas u
      otros derechos de terceros.
    </p>
  </>
);

// ─── Política de Privacidad ───────────────────────────────────────────────────
const PrivacidadContent = () => (
  <>
    <p>
      La <strong className="text-foreground">Liga Deportiva de Piribebuy</strong> informa que este
      sitio web tiene finalidad institucional e informativa.
    </p>
    <p>
      En caso de que el sitio recolecte datos personales mediante formularios, enlaces de contacto,
      WhatsApp, inscripciones, consultas u otros medios, dichos datos serán utilizados únicamente
      para responder solicitudes, gestionar comunicaciones institucionales, organizar actividades
      deportivas o cumplir finalidades relacionadas con la Liga.
    </p>
    <p>
      Los datos personales no serán utilizados para finalidades incompatibles ni cedidos a terceros
      sin autorización, salvo obligación legal o requerimiento de autoridad competente.
    </p>
    <p>
      El titular de los datos podrá solicitar acceso, rectificación, actualización o supresión de
      sus datos comunicándose al correo:{" "}
      <span className="text-secondary font-medium">[correo oficial de la Liga]</span>.
    </p>
    <p>
      La Liga adoptará medidas razonables de seguridad y confidencialidad para proteger la
      información recibida.
    </p>
    <p>
      Este sitio puede contener enlaces a plataformas externas como redes sociales, WhatsApp, mapas,
      documentos PDF u otros servicios de terceros. La Liga no controla las políticas de privacidad
      de dichos servicios externos.
    </p>
  </>
);

// ─── Hook público para usar los modales desde el Footer ───────────────────────
export type { ModalType };
export { LegalModal };
