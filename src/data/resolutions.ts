export interface DisciplinaryResolution {
  id: number;
  title: string;
  date: string;
  summary: string;
  pdfUrl: string;
}

export const resolutions: DisciplinaryResolution[] = [
  // ── 05 Abr 2026 ──────────────────────────────────────────────
  {
    id: 1,
    title: "Resolución N° 22 — Serie A",
    date: "05 Abr 2026",
    summary: "Resolución del Tribunal Disciplinario correspondiente a la Serie A, quinta fecha del campeonato 2026.",
    pdfUrl: "/pdfs/resolucion-22-serie-a.pdf",
  },
  {
    id: 2,
    title: "Resolución N° 23 — Serie B",
    date: "05 Abr 2026",
    summary: "Resolución del Tribunal Disciplinario correspondiente a la Serie B, quinta fecha del campeonato 2026.",
    pdfUrl: "/pdfs/resolucion-23-serie-b.pdf",
  },
  {
    id: 3,
    title: "Resolución N° 24 — Serie C",
    date: "05 Abr 2026",
    summary: "Resolución del Tribunal Disciplinario correspondiente a la Serie C, quinta fecha del campeonato 2026.",
    pdfUrl: "/pdfs/resolucion-24-serie-c.pdf",
  },
  // ── 07 Abr 2026 ──────────────────────────────────────────────
  {
    id: 4,
    title: "Resolución N° 25 — Serie D",
    date: "07 Abr 2026",
    summary: "Resolución del Tribunal Disciplinario correspondiente a la Serie D, quinta fecha del campeonato 2026. Sanciones a clubes 13 de Junio San Antonio, Humaitá, Libertad Yruguá y Sportivo Itaguyra.",
    pdfUrl: "/pdfs/resolucion-25-serie-d.pdf",
  },
  {
    id: 5,
    title: "Resolución N° 26 — Rectificación sanción Junior Alcaraz",
    date: "07 Abr 2026",
    summary: "Rectificación parcial de la Resolución N° 15. Se establece que el jugador Junior Iván Alcaraz Peña fue expulsado por doble amonestación y se adecua la sanción a 1 partido oficial.",
    pdfUrl: "/pdfs/resolucion-26-rectificacion-alcaraz.pdf",
  },
  // ── 15 Abr 2026 ──────────────────────────────────────────────
  {
    id: 6,
    title: "Resolución N° 27 — Sumario Club Guaraní",
    date: "15 Abr 2026",
    summary: "Suspensión de 6 partidos y multa al jugador Luis Ramírez por agresión al árbitro. Multa de 10 jornales mínimos al Club Guaraní por invasión de cancha. Resultado Sport Unión 2-0 Guaraní mantenido.",
    pdfUrl: "/pdfs/resolucion-27-sumario-guarani.pdf",
  },
  // ── 16 Abr 2026 ──────────────────────────────────────────────
  {
    id: 7,
    title: "Resolución N° 28 — Serie A",
    date: "16 Abr 2026",
    summary: "Resolución del Tribunal Disciplinario correspondiente a la Serie A, sexta fecha del campeonato 2026. Sanciones a clubes 13 de Junio Capilla Cue, Juventud Cordillerana, Libertad Ojopoi y Gral. Caballero.",
    pdfUrl: "/pdfs/resolucion-28-serie-a.pdf",
  },
  {
    id: 8,
    title: "Resolución N° 29 — Serie B",
    date: "16 Abr 2026",
    summary: "Resolución del Tribunal Disciplinario correspondiente a la Serie B, sexta fecha del campeonato 2026. Felicitación por Fair Play a 3 de Febrero y Capitán Cristaldo (Juvenil). Sanciones a 3 de Febrero, 1° de Marzo y Guaraní.",
    pdfUrl: "/pdfs/resolucion-29-serie-b.pdf",
  },
  {
    id: 9,
    title: "Resolución N° 30 — Serie C",
    date: "16 Abr 2026",
    summary: "Resolución del Tribunal Disciplinario correspondiente a la Serie C, sexta fecha del campeonato 2026. Felicitación por Fair Play a 12 de Agosto y Sport San Blas (Juvenil). Sanciones a ambos clubes y a 15 de Agosto e Independiente.",
    pdfUrl: "/pdfs/resolucion-30-serie-c.pdf",
  },
  {
    id: 10,
    title: "Resolución N° 31 — Club 15 de Agosto: Falta de Pago",
    date: "16 Abr 2026",
    summary: "Intimación al Club 15 de Agosto a abonar en 48 horas Gs. 1.724.000 en concepto de Tributo Único, Cobertura de Seguridad y honorarios arbitrales. Multa accesoria de 5 jornales mínimos (Gs. 560.000).",
    pdfUrl: "/pdfs/resolucion-31-15agosto-pago.pdf",
  },
];

export interface PlayerStat {
  position: number;
  player: string;
  club: string;
  value: number | string;
  note?: string;
  photo?: string;
}

export interface PlayerStatsData {
  topScorers: PlayerStat[];
  bestPlayers: PlayerStat[];
  yellowCards: PlayerStat[];
  redCards: PlayerStat[];
}

export const playerStats: PlayerStatsData = {
  topScorers: [
    {
      position: 1,
      player: "Richard Araujo",
      // Transferred — note displayed in UI
      club: "Capitán Cristaldo",
      value: 6,
      note: "Transferido a Deportivo Santaní (Intermedia)",
    },
    { position: 2, player: "Brian Enciso", club: "12 de Agosto", value: 4 },
    { position: 3, player: "Richard Benítez", club: "Mcal Estigarribia", value: 4 },
    { position: 4, player: "José Barrios", club: "Libertad Ojopoi", value: 4 },
    { position: 5, player: "Richard Báez", club: "Sport Unión", value: 3 },
    { position: 6, player: "José Benítez", club: "Sport San Blas", value: 3 },
    { position: 7, player: "Sandro Galeano", club: "Juventud", value: 3 },
  ],
  bestPlayers: [
    { position: 1, player: "Por confirmar", club: "—", value: "MVP" },
  ],
  yellowCards: [
    { position: 1, player: "Por confirmar", club: "—", value: 0 },
  ],
  redCards: [
    { position: 1, player: "Por confirmar", club: "—", value: 0 },
  ],
};
