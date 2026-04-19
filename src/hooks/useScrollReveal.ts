import { useEffect, useRef, useState } from "react";

/**
 * Hook reutilizable para activar animaciones de aparición al hacer scroll.
 * Replica la lógica ya existente en AboutSection, aplicándola
 * de forma consistente en todas las secciones que la necesiten.
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
