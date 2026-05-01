export interface TeamStanding {
  pos: number;
  team: string;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf?: number;
  gc?: number;
  dif: number;
  pts: number;
  classified?: boolean;
  eliminated?: boolean;
}

// Categoría Primera — Al cierre de la 9na fecha
export const standingsPrincipal: TeamStanding[] = [
  { pos: 1,  team: "Sport Unión",             pts: 18, pj: 7, pg: 6, pe: 0, pp: 1, gf: 19, gc: 4,  dif: 15,  classified: true },
  { pos: 2,  team: "Guaraní de Paso Hû",      pts: 15, pj: 8, pg: 4, pe: 3, pp: 1, gf: 13, gc: 4,  dif: 9,   classified: true },
  { pos: 3,  team: "Juventud Cordillerana",   pts: 14, pj: 7, pg: 4, pe: 2, pp: 1, gf: 13, gc: 7,  dif: 6,   classified: true },
  { pos: 4,  team: "Sport San Blas",          pts: 13, pj: 7, pg: 4, pe: 1, pp: 2, gf: 15, gc: 6,  dif: 9,   classified: true },
  { pos: 5,  team: "12 de Agosto",            pts: 13, pj: 8, pg: 4, pe: 1, pp: 3, gf: 11, gc: 8,  dif: 3,   classified: true },
  { pos: 6,  team: "Sol de Mayo",             pts: 10, pj: 7, pg: 2, pe: 4, pp: 1, gf: 13, gc: 8,  dif: 5 },
  { pos: 7,  team: "Capitán Cristaldo",       pts: 10, pj: 7, pg: 3, pe: 1, pp: 3, gf: 12, gc: 12, dif: 0 },
  { pos: 8,  team: "Gral. Caballero",         pts: 10, pj: 8, pg: 2, pe: 4, pp: 2, gf: 9,  gc: 12, dif: -3 },
  { pos: 9,  team: "13 de Junio CC",          pts: 8,  pj: 7, pg: 2, pe: 2, pp: 3, gf: 12, gc: 11, dif: 1 },
  { pos: 10, team: "15 de Agosto",            pts: 8,  pj: 7, pg: 2, pe: 2, pp: 3, gf: 7,  gc: 12, dif: -5 },
  { pos: 11, team: "Mcal. Estigarribia",      pts: 8,  pj: 7, pg: 2, pe: 2, pp: 3, gf: 8,  gc: 14, dif: -6 },
  { pos: 12, team: "Atlético Independiente",  pts: 7,  pj: 7, pg: 1, pe: 4, pp: 2, gf: 7,  gc: 8,  dif: -1 },
  { pos: 13, team: "3 de Febrero",            pts: 5,  pj: 7, pg: 1, pe: 2, pp: 4, gf: 10, gc: 18, dif: -8,  eliminated: true },
  { pos: 14, team: "Libertad Ojopoi",         pts: 5,  pj: 7, pg: 1, pe: 2, pp: 4, gf: 11, gc: 20, dif: -9,  eliminated: true },
  { pos: 15, team: "1° de Marzo",             pts: 2,  pj: 7, pg: 0, pe: 2, pp: 5, gf: 6,  gc: 22, dif: -16, eliminated: true },
];

// Categoría Primera — Serie D (4 equipos)
export const standingsPrincipalD: TeamStanding[] = [
  { pos: 1, team: "13 de Junio SA",  pts: 8, pj: 5, pg: 2, pe: 2, pp: 1, gf: 3,  gc: 2,  dif: 1 },
  { pos: 2, team: "Sp. Itaguyrá",    pts: 6, pj: 5, pg: 1, pe: 3, pp: 1, gf: 7,  gc: 7,  dif: 0 },
  { pos: 3, team: "Humaitá",         pts: 6, pj: 5, pg: 1, pe: 3, pp: 1, gf: 7,  gc: 7,  dif: 0 },
  { pos: 4, team: "Libertad Yruguá", pts: 4, pj: 5, pg: 0, pe: 4, pp: 1, gf: 7,  gc: 8,  dif: -1 },
];

// Categoría Juvenil — Al cierre de la 9na fecha
export const standingsJuvenil: TeamStanding[] = [
  { pos: 1,  team: "Sport Unión",            pts: 18, pj: 7, pg: 6, pe: 0, pp: 1, gf: 21, gc: 7,  dif: 14 },
  { pos: 2,  team: "Juventud Cordillerana",  pts: 17, pj: 7, pg: 5, pe: 2, pp: 0, gf: 17, gc: 3,  dif: 14 },
  { pos: 3,  team: "Libertad Ojopoi",        pts: 16, pj: 7, pg: 5, pe: 1, pp: 1, gf: 12, gc: 9,  dif: 3 },
  { pos: 4,  team: "12 de Agosto",           pts: 15, pj: 8, pg: 4, pe: 3, pp: 1, gf: 16, gc: 8,  dif: 8 },
  { pos: 5,  team: "Sport San Blas",         pts: 14, pj: 7, pg: 4, pe: 2, pp: 1, gf: 11, gc: 8,  dif: 3 },
  { pos: 6,  team: "Capitán Cristaldo",      pts: 13, pj: 7, pg: 3, pe: 4, pp: 0, gf: 14, gc: 7,  dif: 7 },
  { pos: 7,  team: "1° de Marzo",            pts: 11, pj: 7, pg: 3, pe: 2, pp: 2, gf: 16, gc: 16, dif: 0 },
  { pos: 8,  team: "Atlético Independiente", pts: 8,  pj: 7, pg: 1, pe: 5, pp: 1, gf: 4,  gc: 3,  dif: 1 },
  { pos: 9,  team: "13 de Junio CC",         pts: 8,  pj: 7, pg: 2, pe: 2, pp: 3, gf: 7,  gc: 9,  dif: -2 },
  { pos: 10, team: "Sol de Mayo",            pts: 6,  pj: 7, pg: 1, pe: 3, pp: 3, gf: 10, gc: 15, dif: -5 },
  { pos: 11, team: "Mcal. Estigarribia",     pts: 5,  pj: 7, pg: 1, pe: 2, pp: 4, gf: 6,  gc: 12, dif: -6 },
  { pos: 12, team: "15 de Agosto",           pts: 5,  pj: 7, pg: 1, pe: 2, pp: 4, gf: 5,  gc: 11, dif: -6 },
  { pos: 13, team: "Guaraní de Paso Hû",     pts: 5,  pj: 8, pg: 1, pe: 2, pp: 5, gf: 12, gc: 24, dif: -12 },
  { pos: 14, team: "3 de Febrero",           pts: 2,  pj: 7, pg: 0, pe: 2, pp: 5, gf: 7,  gc: 16, dif: -9 },
  { pos: 15, team: "Gral. Caballero",        pts: 2,  pj: 8, pg: 0, pe: 2, pp: 6, gf: 4,  gc: 14, dif: -10 },
];

// Categoría Juvenil — Serie D (4 equipos)
export const standingsJuvenilD: TeamStanding[] = [
  { pos: 1, team: "Humaitá",         pts: 12, pj: 5, pg: 4, pe: 0, pp: 1, gf: 9,  gc: 7,  dif: 2 },
  { pos: 2, team: "Sp. Itaguyrá",    pts: 9,  pj: 5, pg: 3, pe: 0, pp: 2, gf: 11, gc: 3,  dif: 8 },
  { pos: 3, team: "13 de Junio SA",  pts: 9,  pj: 5, pg: 3, pe: 0, pp: 2, gf: 10, gc: 7,  dif: 3 },
  { pos: 4, team: "Libertad Yruguá", pts: 0,  pj: 5, pg: 0, pe: 0, pp: 5, gf: 3,  gc: 16, dif: -13 },
];
