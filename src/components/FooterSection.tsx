import { useState } from "react";
import { Instagram, MapPin, Phone, Facebook, Mail, Scale, Shield } from "lucide-react";
import ldpLogo from "@/assets/ldp-logo.png";
import { LegalModal, type ModalType } from "@/components/LegalPages";

// ─── Constante opcional para crédito del desarrollador ───────────────────────
// Cambiar a false antes de la entrega si el cliente no desea mostrar el crédito
const SHOW_DEVELOPER_CREDIT = true;
const DEVELOPER_NAME = "Alejandro Villalba";

const FooterSection = () => {
  const [legalModal, setLegalModal] = useState<ModalType>(null);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="contacto" className="border-t border-border/30">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

            {/* Columna 1 — Identidad institucional */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={ldpLogo}
                  alt="Escudo de la Liga Deportiva de Piribebuy"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <span className="font-heading text-lg font-bold text-foreground">
                    Liga Deportiva de Piribebuy
                  </span>
                  <span className="block text-[10px] text-muted-foreground">
                    Entidad sin fines de lucro
                  </span>
                </div>
              </div>
              <ul className="space-y-1 text-[11px] text-muted-foreground/70">
                <li>Personería Jurídica N.º 246</li>
                <li>RUC: 80050765-7</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Organizando el fútbol de Piribebuy desde 1953. Más de 7 décadas de pasión,
                comunidad y deporte.
              </p>
              <p className="text-[11px] text-muted-foreground/60 mt-3 italic">
                Sitio web institucional e informativo.
              </p>
            </div>

            {/* Columna 2 — Contacto */}
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                Contacto
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Calle Gral. Díaz 535, Piribebuy, Paraguay</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                  <a
                    href="tel:0515212442"
                    className="hover:text-secondary transition-colors"
                    aria-label="Llamar a Liga Deportiva de Piribebuy"
                  >
                    0515 212 442
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:ligadeportivadepiribebuy@gmail.com"
                    className="hover:text-secondary transition-colors text-sm break-all"
                    aria-label="Enviar correo a la Liga Deportiva de Piribebuy"
                  >
                    ligadeportivadepiribebuy@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Facebook className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                  <a
                    href="https://www.facebook.com/LaGranatePiribebuy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                    aria-label="Facebook de La Granate Piribebuy (abre en nueva pestaña)"
                  >
                    La Granate Piribebuy
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                  <a
                    href="https://www.instagram.com/lagranatepiribebuy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                    aria-label="Instagram de La Granate Piribebuy (abre en nueva pestaña)"
                  >
                    @lagranatepiribebuy
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3 — Navegación + Legal */}
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                Navegación
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#posiciones" className="hover:text-secondary transition-colors">Posiciones</a></li>
                <li><a href="#fixture" className="hover:text-secondary transition-colors">Fixture</a></li>
                <li><a href="#clubes" className="hover:text-secondary transition-colors">Clubes</a></li>
                <li><a href="#noticias" className="hover:text-secondary transition-colors">Noticias</a></li>
                <li><a href="#resoluciones" className="hover:text-secondary transition-colors">Resoluciones</a></li>
              </ul>

              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground mb-3 mt-6">
                Legal
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setLegalModal("aviso-legal")}
                    className="flex items-center gap-1.5 text-muted-foreground hover:text-secondary transition-colors"
                    aria-label="Ver Aviso Legal"
                  >
                    <Scale className="w-3.5 h-3.5" aria-hidden="true" />
                    Aviso Legal
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalModal("privacidad")}
                    className="flex items-center gap-1.5 text-muted-foreground hover:text-secondary transition-colors"
                    aria-label="Ver Política de Privacidad"
                  >
                    <Shield className="w-3.5 h-3.5" aria-hidden="true" />
                    Política de Privacidad
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Barra inferior */}
          <div className="mt-12 pt-6 border-t border-border/30 text-center space-y-1">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Liga Deportiva de Piribebuy. Todos los derechos reservados.
            </p>
            {SHOW_DEVELOPER_CREDIT && (
              <p className="text-[10px] text-muted-foreground/60">
                Desarrollo web:{" "}
                <span className="text-secondary/80">{DEVELOPER_NAME}</span>
              </p>
            )}
          </div>
        </div>
      </footer>

      {/* Modales legales */}
      {legalModal && (
        <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
      )}
    </>
  );
};

export default FooterSection;
