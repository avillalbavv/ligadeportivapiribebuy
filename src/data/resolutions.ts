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
  // ── 21 Abr 2026 ──────────────────────────────────────────────
  {
    id: 11,
    title: "Resolución N° 32 — Sumario Sportivo Itaguyra Vs. Humaitá",
    date: "21 Abr 2026",
    summary: "Sanción al jugador José Luis Rodríguez, C.I. N° 6.238.378, del Club Humaitá: 6 (seis) meses de suspensión de toda competencia oficial por acción violenta/juego brusco grave con resultado de lesión grave. Multa accesoria de 10 J.M. equivalentes a Gs. 1.120.000.-. La multa deberá ser abonada por el Club Humaitá dentro del plazo de tres días.",
    pdfUrl: "/pdfs/resolucion-32-sumario-itaguyra-humaita.pdf",
  },
  {
    id: 12,
    title: "Resolución N° 33 — Serie A",
    date: "21 Abr 2026",
    summary: "Séptima fecha — Serie A. Imponer a Juventud Cordillerana (Juvenil) Gs. 30.000 por 3 amarillas; (Primera) Gs. 20.000 por 2 amarillas. Imponer a Sol de Mayo (Juvenil) Gs. 10.000 por 1 amarilla; (Primera) Gs. 30.000 por 3 amarillas. Suspender al jugador Alberto Salinas, C.I. N° 6.669.176, del Club Sol de Mayo (Primera), por Roja Directa, 2 partidos oficiales. Imponer a Gral. Caballero (Juvenil y Primera) Gs. 10.000 por 1 amarilla. Imponer a 13 de Junio Capilla Cue (Juvenil) Gs. 20.000 por 2 amarillas. Suspender al jugador Carlos Arguello, C.I. N° 6.770.472, del Club 13 de Junio Capilla Cue (Juvenil), por doble amarilla, 1 partido. Imponer a 13 de Junio Capilla Cue (Primera) Gs. 10.000 por 1 amarilla.",
    pdfUrl: "/pdfs/resolucion-33-serie-a.pdf",
  },
  {
    id: 13,
    title: "Resolución N° 34 — Serie B",
    date: "21 Abr 2026",
    summary: "Séptima fecha — Serie B. Imponer a Capitán F. Cristaldo (Juvenil y Primera) Gs. 10.000 por 1 amarilla cada categoría. Imponer a Guaraní (Juvenil) Gs. 10.000 por 1 amarilla; (Primera) Gs. 112.000 por acumulación de 4 tarjetas en un mismo encuentro. Felicitar a Sport Unión (Juvenil y Primera) por Fair Play. Imponer a 3 de Febrero (Juvenil) Gs. 20.000 por 2 amarillas; (Primera) Gs. 10.000 por 1 amarilla.",
    pdfUrl: "/pdfs/resolucion-34-serie-b.pdf",
  },
  {
    id: 14,
    title: "Resolución N° 35 — Serie C",
    date: "21 Abr 2026",
    summary: "Séptima fecha — Serie C. Felicitar a Mcal. Estigarribia (Juvenil) por Fair Play. Imponer a Mcal. Estigarribia (Primera) Gs. 10.000 por 1 amarilla. Imponer a 12 de Agosto (Juvenil y Primera) Gs. 20.000 por 2 amarillas cada categoría. Suspender a Tomás Irala, C.I. N° 5.648.299, del Club 12 de Agosto (Primera), por Roja Directa, 2 partidos oficiales. Suspender a Eduardo Lesme, C.I. N° 6.743.011, del Club 12 de Agosto (Primera), por Roja Directa, 2 partidos oficiales. Imponer a Sport San Blas (Juvenil) Gs. 112.000 por acumulación de 4+1 amarillas; (Primera) Gs. 20.000 por 2 amarillas. Imponer a 15 de Agosto (Juvenil) Gs. 112.000+20.000 por acumulación de 4+6 amarillas. Suspender a Ever Fabián Caballero Roa, C.I. N° 7.259.311, del Club 15 de Agosto (Juvenil), por Roja Directa, 2 partidos. Imponer a 15 de Agosto (Primera) Gs. 112.000 por acumulación de 4 tarjetas. Instruir sumario de oficio: Sport San Blas Vs. 15 de Agosto (encuentro del 19 de abril), convocar delegados y capitanes de ambos clubes para el jueves 23 de abril.",
    pdfUrl: "/pdfs/resolucion-35-serie-c.pdf",
  },
  {
    id: 15,
    title: "Resolución N° 36 — Serie D",
    date: "21 Abr 2026",
    summary: "Séptima fecha — Serie D. Imponer a Sportivo Itaguyra (Juvenil) Gs. 10.000 por 1 amarilla; (Primera) Gs. 20.000 por 2 amarillas. Imponer a 13 de Junio San Antonio (Juvenil) Gs. 20.000 por 2 amarillas. Felicitar a 13 de Junio San Antonio (Primera) por Fair Play. Imponer a Libertad de Yrugua (Juvenil) Gs. 10.000 por 1 amarilla; (Primera) Gs. 112.000+10.000 por acumulación de 4 tarjetas más 5° amarilla. Suspender al jugador Oscar Galeano, C.I. N° 5.908.555, del Club Libertad de Yrugua (Primera), por doble amarilla, 1 partido. Imponer al Director Técnico Lorenzo González, C.I. N° 4.639.168, del Club Libertad de Yrugua (Juvenil), multa de 3 jornales mínimos (Gs. 336.000) por incumplimiento de la Resolución N° 14/26 e ingreso indebido al encuentro. Imponer a Humaitá (Juvenil) Gs. 112.000 por acumulación de 4 amarillas; (Primera) Gs. 30.000 por 3 amarillas.",
    pdfUrl: "/pdfs/resolucion-36-serie-d.pdf",
  },
  // ── 27 Abr 2026 ──────────────────────────────────────────────
  {
    id: 16,
    title: "Resolución N° 37 — Protesta Libertad Ojopoi c/ General Caballero",
    date: "27 Abr 2026",
    summary: "Hacer lugar a la protesta presentada por el Club Libertad de Ojopoi c/ el Club General Caballero — Categoría Juvenil. El Club General Caballero incluyó al jugador Blas Rodrigo Rafael González Fariña, C.I. N° 6.300.621 (n. 12/10/2005), no habilitado para el encuentro del 14 de abril. Tener por allanado al Club General Caballero. Sancionar al Club General Caballero con la pérdida de los puntos en disputa en la categoría juvenil. Adjudicar los puntos al Club Libertad de Ojopoi en la categoría Juvenil. Imponer al Club General Caballero multa accesoria de 10 jornales mínimos (Gs. 1.120.000.-). Apercibir al Club General Caballero a observar estrictamente las disposiciones reglamentarias, bajo apercibimiento de sanciones más severas. Imponer las costas en el orden causado asumiendo los gastos de la protesta el Club Libertad de Ojopoi.",
    pdfUrl: "/pdfs/resolucion-37-protesta-libertad-ojopoi.pdf",
  },
  {
    id: 17,
    title: "Resolución N° 38 — Agresión al Árbitro — Club 15 de Agosto",
    date: "27 Abr 2026",
    summary: "Tener por acreditada la agresión al Árbitro Principal al término del encuentro Mcal. Estigarribia Vs. 15 de Agosto, conforme al informe arbitral (Art. 156 inc. 2 UFI). Dejar constancia de que no se ha logrado identificar al autor material de la agresión. Atribuir responsabilidad al Club 15 de Agosto en aplicación del Art. 129 del Reglamento General de la UFI. Aplicar una multa de 5 jornales mínimos (Gs. 560.000.-) al Club 15 de Agosto, considerando el agravante de violencia contra la autoridad arbitral. Advertir al citado club que la reiteración de hechos similares podrá derivar en sanciones más severas, incluyendo sanciones deportivas.",
    pdfUrl: "/pdfs/resolucion-38-agresion-arbitro-15-agosto.pdf",
  },
  {
    id: 18,
    title: "Resolución N° 39 — Sport San Blas Vs. 15 de Agosto — Suspensión por explosión de petardos",
    date: "27 Abr 2026",
    summary: "Encuentro del 19 de abril de 2026 — Categoría Primera. En el primer tiempo (min. 18), primera explosión de petardos en el gramado; el árbitro advirtió al capitán del Club 15 de Agosto, Sr. Aníbal Ortega, sobre suspensión por reincidencia. En la segunda etapa (min. 28), dos explosiones consecutivas motivaron la suspensión definitiva del encuentro. Marcador al momento de la suspensión: Sport San Blas 3 – 1 15 de Agosto. Responsables identificados: Guillermo Figueredo y Ángel Portillo. Dar por terminado el encuentro. Mantener el resultado: Sport San Blas 3 – 1 15 de Agosto. Aplicar multa de 5 jornales mínimos (Gs. 560.000.-) al Club 15 de Agosto. Aplicar prohibición de ingreso a los eventos deportivos de la L.D.P. a Guillermo Figueredo y Ángel Portillo en todos los partidos en que el Club 15 de Agosto sea local o visitante.",
    pdfUrl: "/pdfs/resolucion-39-sport-blas-15-agosto.pdf",
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

// Goleadores al cierre de la 9na fecha
export const playerStats: PlayerStatsData = {
  topScorers: [
    { position: 1, player: "Jose Barrios",    club: "Libertad de Ojopoi", value: 7 },
    { position: 1, player: "Richard Baez",     club: "Sport Unión",        value: 7 },
    { position: 3, player: "Ramon Ovando",     club: "Sol de Mayo",        value: 6 },
    { position: 3, player: "Richard Araujo",   club: "C.Cristaldo",        value: 6 },
    { position: 5, player: "Brian Enciso",     club: "12 de Agosto",       value: 5 },
    { position: 5, player: "Richard Benitez",  club: "Mcal. Estigarribia", value: 5 },
    { position: 7, player: "Rodrigo Gonzalez", club: "Sport San Blas",     value: 4 },
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
