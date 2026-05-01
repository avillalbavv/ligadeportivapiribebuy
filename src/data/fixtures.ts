export interface Match {
  home: string;
  away: string;
}

export interface FixtureRound {
  name: string;
  date: string;
  matches: Match[];
  libre?: string;
}

export interface SerieFixture {
  serie: string;
  rounds: FixtureRound[];
}

export const fixtures: SerieFixture[] = [
  {
    serie: "Serie A",
    rounds: [
      { name: "1ra fecha", date: "Dom 15 Mar 2026", matches: [{ home: "Juventud Cord.", away: "13 de Junio C.C." }, { home: "Gral. Caballero", away: "Libertad Ojopoi" }], libre: "Sol de Mayo" },
      { name: "2da fecha", date: "Dom 22 Mar 2026", matches: [{ home: "Sol de Mayo", away: "Juventud Cord." }, { home: "13 de Junio C.C.", away: "Gral. Caballero" }], libre: "Libertad Ojopoi" },
      { name: "3ra fecha", date: "Dom 29 Mar 2026", matches: [{ home: "Libertad Ojopoi", away: "Sol de Mayo" }, { home: "Juventud Cord.", away: "Gral. Caballero" }], libre: "13 de Junio C.C." },
      { name: "4ta fecha", date: "Mié 01 Abr 2026", matches: [{ home: "Gral. Caballero", away: "Sol de Mayo" }, { home: "13 de Junio C.C.", away: "Libertad Ojopoi" }], libre: "Juventud Cord." },
      { name: "5ta fecha", date: "Dom 05 Abr 2026", matches: [{ home: "Libertad Ojopoi", away: "Juventud Cord." }, { home: "Sol de Mayo", away: "13 de Junio C.C." }], libre: "Gral. Caballero" },
      { name: "6ta fecha (Reprogramada)", date: "Mar 14 Abr 2026", matches: [{ home: "13 de Junio C.C.", away: "Juventud Cord." }, { home: "Libertad Ojopoi", away: "Gral. Caballero" }], libre: "Sol de Mayo" },
      { name: "7ma fecha", date: "Dom 19 Abr 2026", matches: [{ home: "Juventud Cord.", away: "Sol de Mayo" }, { home: "Gral. Caballero", away: "13 de Junio C.C." }], libre: "Libertad Ojopoi" },
      { name: "8va fecha", date: "Dom 26 Abr 2026", matches: [{ home: "Sol de Mayo", away: "Libertad Ojopoi" }, { home: "Gral. Caballero", away: "Juventud Cord." }], libre: "13 de Junio C.C." },
      { name: "9na fecha", date: "Jue 30 Abr 2026", matches: [{ home: "Sol de Mayo", away: "Gral. Caballero" }, { home: "Libertad Ojopoi", away: "13 de Junio C.C." }], libre: "Juventud Cord." },
      { name: "10ma fecha", date: "Dom 03 May 2026", matches: [{ home: "Juventud Cord.", away: "Libertad Ojopoi" }, { home: "13 de Junio C.C.", away: "Sol de Mayo" }], libre: "Gral. Caballero" },
    ],
  },
  {
    serie: "Serie B",
    rounds: [
      { name: "1ra fecha", date: "Dom 15 Mar 2026", matches: [{ home: "Capitán Cristaldo", away: "3 de Febrero" }, { home: "Guaraní", away: "1° de Marzo" }], libre: "Sport Unión" },
      { name: "2da fecha", date: "Dom 22 Mar 2026", matches: [{ home: "Guaraní", away: "Capitán Cristaldo" }, { home: "3 de Febrero", away: "Sport Unión" }], libre: "1° de Marzo" },
      { name: "3ra fecha", date: "Dom 29 Mar 2026", matches: [{ home: "1° de Marzo", away: "Capitán Cristaldo" }, { home: "Sport Unión", away: "Guaraní" }], libre: "3 de Febrero" },
      { name: "4ta fecha", date: "Mié 01 Abr 2026", matches: [{ home: "3 de Febrero", away: "Guaraní" }, { home: "Sport Unión", away: "1° de Marzo" }], libre: "Capitán Cristaldo" },
      { name: "5ta fecha", date: "Dom 05 Abr 2026", matches: [{ home: "Capitán Cristaldo", away: "Sport Unión" }, { home: "1° de Marzo", away: "3 de Febrero" }], libre: "Guaraní" },
      { name: "6ta fecha (Reprogramada)", date: "Mar 14 Abr 2026", matches: [{ home: "3 de Febrero", away: "Capitán Cristaldo" }, { home: "1° de Marzo", away: "Guaraní" }], libre: "Sport Unión" },
      { name: "7ma fecha", date: "Dom 19 Abr 2026", matches: [{ home: "Capitán Cristaldo", away: "Guaraní" }, { home: "Sport Unión", away: "3 de Febrero" }], libre: "1° de Marzo" },
      { name: "8va fecha", date: "Dom 26 Abr 2026", matches: [{ home: "Capitán Cristaldo", away: "1° de Marzo" }, { home: "Guaraní", away: "Sport Unión" }], libre: "3 de Febrero" },
      { name: "9na fecha", date: "Jue 30 Abr 2026", matches: [{ home: "Guaraní", away: "3 de Febrero" }, { home: "1° de Marzo", away: "Sport Unión" }], libre: "Capitán Cristaldo" },
      { name: "10ma fecha", date: "Dom 03 May 2026", matches: [{ home: "Sport Unión", away: "Capitán Cristaldo" }, { home: "3 de Febrero", away: "1° de Marzo" }], libre: "Guaraní" },
    ],
  },
  {
    serie: "Serie C",
    rounds: [
      { name: "1ra fecha", date: "Dom 15 Mar 2026", matches: [{ home: "Sport San Blas", away: "12 de Agosto" }, { home: "Independiente", away: "15 de Agosto" }], libre: "Mcal. Estigarribia" },
      { name: "2da fecha", date: "Dom 22 Mar 2026", matches: [{ home: "12 de Agosto", away: "Mcal. Estigarribia" }, { home: "15 de Agosto", away: "Sport San Blas" }], libre: "Independiente" },
      { name: "3ra fecha", date: "Dom 29 Mar 2026", matches: [{ home: "Independiente", away: "12 de Agosto" }, { home: "Sport San Blas", away: "Mcal. Estigarribia" }], libre: "15 de Agosto" },
      { name: "4ta fecha", date: "Mié 01 Abr 2026", matches: [{ home: "12 de Agosto", away: "15 de Agosto" }, { home: "Mcal. Estigarribia", away: "Independiente" }], libre: "Sport San Blas" },
      { name: "5ta fecha", date: "Dom 05 Abr 2026", matches: [{ home: "Independiente", away: "Sport San Blas" }, { home: "Mcal. Estigarribia", away: "15 de Agosto" }], libre: "12 de Agosto" },
      { name: "6ta fecha (Reprogramada)", date: "Mar 14 Abr 2026", matches: [{ home: "12 de Agosto", away: "Sport San Blas" }, { home: "15 de Agosto", away: "Independiente" }], libre: "Mcal. Estigarribia" },
      { name: "7ma fecha", date: "Dom 19 Abr 2026", matches: [{ home: "Mcal. Estigarribia", away: "12 de Agosto" }, { home: "Sport San Blas", away: "15 de Agosto" }], libre: "Independiente" },
      { name: "8va fecha", date: "Dom 26 Abr 2026", matches: [{ home: "12 de Agosto", away: "Independiente" }, { home: "Mcal. Estigarribia", away: "Sport San Blas" }], libre: "15 de Agosto" },
      { name: "9na fecha", date: "Jue 30 Abr 2026", matches: [{ home: "15 de Agosto", away: "12 de Agosto" }, { home: "Independiente", away: "Mcal. Estigarribia" }], libre: "Sport San Blas" },
      { name: "10ma fecha", date: "Dom 03 May 2026", matches: [{ home: "Sport San Blas", away: "Independiente" }, { home: "15 de Agosto", away: "Mcal. Estigarribia" }], libre: "12 de Agosto" },
    ],
  },
  {
    serie: "Serie D",
    rounds: [
      { name: "1ra fecha", date: "Dom 15 Mar 2026", matches: [{ home: "13 de Junio S.A.", away: "Sportivo Itaguyrá" }, { home: "Humaitá", away: "Libertad Yrugua" }] },
      { name: "2da fecha", date: "Dom 29 Mar 2026", matches: [{ home: "Libertad Yrugua", away: "13 de Junio S.A." }, { home: "Sportivo Itaguyrá", away: "Humaitá" }] },
      { name: "3ra fecha", date: "Dom 05 Abr 2026", matches: [{ home: "13 de Junio S.A.", away: "Humaitá" }, { home: "Libertad Yrugua", away: "Sportivo Itaguyrá" }] },
      { name: "4ta fecha", date: "Dom 19 Abr 2026", matches: [{ home: "Sportivo Itaguyrá", away: "13 de Junio S.A." }, { home: "Libertad Yrugua", away: "Humaitá" }] },
      { name: "5ta fecha", date: "Dom 26 Abr 2026", matches: [{ home: "13 de Junio S.A.", away: "Libertad Yrugua" }, { home: "Humaitá", away: "Sportivo Itaguyrá" }] },
      { name: "6ta fecha", date: "Dom 03 May 2026", matches: [{ home: "Humaitá", away: "13 de Junio S.A." }, { home: "Sportivo Itaguyrá", away: "Libertad Yrugua" }] },
    ],
  },
];

export const series = [
  { name: "Serie A", teams: ["Gral. Caballero", "13 de Junio C.C.", "Libertad Ojopoi", "Juventud Cord.", "Sol de Mayo"] },
  { name: "Serie B", teams: ["Capitán Cristaldo", "3 de Febrero", "Guaraní", "1° de Marzo", "Sport Unión"] },
  { name: "Serie C", teams: ["15 de Agosto", "Mcal. Estigarribia", "12 de Agosto", "Sport San Blas", "Independiente"] },
  { name: "Serie D", teams: ["13 de Junio S.A.", "Humaitá", "Libertad Yrugua", "Sportivo Itaguyrá"] },
];

export const upcomingMatches = [
  { home: "Juventud", away: "Libertad O", date: "Dom 03 May", serie: "Serie A" },
  { home: "13 de Junio CC", away: "Sol de Mayo", date: "Dom 03 May", serie: "Serie A" },
  { home: "Sport Unión", away: "Capitán Cristaldo", date: "Dom 03 May", serie: "Serie B" },
  { home: "3 de Febrero", away: "1° de Marzo", date: "Dom 03 May", serie: "Serie B" },
  { home: "Sport San Blas", away: "Independiente", date: "Dom 03 May", serie: "Serie C" },
  { home: "15 de Agosto", away: "Mcal Estigarribia", date: "Dom 03 May", serie: "Serie C" },
  { home: "Humaitá", away: "13 de Junio SA", date: "Dom 03 May", serie: "Serie D" },
  { home: "Itaguyra", away: "Libertad Y", date: "Dom 03 May", serie: "Serie D" },
];

export const news = [
  {
    id: 1,
    title: "¡Todo se define el domingo! — Décima y última fecha",
    summary: "11 clubes aún tienen posibilidades de clasificar. La décima fecha definirá quiénes avanzan a la siguiente etapa del Campeonato 2026 de la Liga Deportiva de Piribebuy.",
    date: "01 May 2026",
    category: "Oficial",
  },
  {
    id: 2,
    title: "Cinco clasificados al cierre de la novena fecha",
    summary: "Sport Unión, Guaraní, Juventud Cordillerana, Sport San Blas y 12 de Agosto aseguraron su lugar en la siguiente etapa.",
    date: "30 Abr 2026",
    category: "Principal",
  },
  {
    id: 3,
    title: "Resultados — Novena Fecha",
    summary: "Sport Unión goleó 7-1 a 1° de Marzo. Guaraní 4-1 a 3 de Febrero. 15 de Agosto 1-0 a 12 de Agosto. Empates en Sol de Mayo vs Gral Caballero y Libertad O vs 13 de Junio CC.",
    date: "30 Abr 2026",
    category: "Resultados",
  },
];

export const clubs = [
  "Sport Unión", "Juventud", "Guaraní", "Sport San Blas", "Mcal. Estigarribia",
  "Capitán Cristaldo", "Sol de Mayo", "Independiente", "12 de Agosto",
  "13 de Junio C.C.", "15 de Agosto", "Libertad Ojopoi", "3 de Febrero",
  "Gral. Caballero", "1° de Marzo", "Humaitá", "Sportivo Itaguyrá",
  "13 de Junio S.A.", "Libertad Yrugua",
];
