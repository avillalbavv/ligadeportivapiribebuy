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

// ── Categoría Primera — Cierre 10ma fecha ────────────────────────
export const standingsPrincipal: TeamStanding[] = [
  { pos:  1, team: "Sport Unión",            pts: 19, pj: 8, pg: 6, pe: 1, pp: 1, gf: 19, gc:  4, dif:  15, classified: true },
  { pos:  2, team: "Juventud Cordillerana",  pts: 17, pj: 8, pg: 5, pe: 2, pp: 1, gf: 18, gc:  8, dif:  10, classified: true },
  { pos:  3, team: "Sport San Blas",         pts: 16, pj: 8, pg: 5, pe: 1, pp: 2, gf: 17, gc:  7, dif:  10, classified: true },
  { pos:  4, team: "Guaraní de Paso Hũ",    pts: 15, pj: 8, pg: 4, pe: 3, pp: 1, gf: 13, gc:  4, dif:   9, classified: true },
  { pos:  5, team: "12 de Agosto",           pts: 13, pj: 8, pg: 4, pe: 1, pp: 3, gf: 11, gc:  8, dif:   3, classified: true },
  { pos:  6, team: "Sol de Mayo",            pts: 11, pj: 8, pg: 2, pe: 5, pp: 1, gf: 13, gc:  8, dif:   5, classified: true },
  { pos:  7, team: "Capitán Cristaldo",      pts: 11, pj: 8, pg: 3, pe: 2, pp: 3, gf: 12, gc: 12, dif:   0, classified: true },
  { pos:  8, team: "Mcal. Estigarribia",     pts: 11, pj: 8, pg: 3, pe: 2, pp: 3, gf:  9, gc: 14, dif:  -5, classified: true },
  { pos:  9, team: "Gral. Caballero",        pts: 10, pj: 8, pg: 2, pe: 4, pp: 2, gf:  9, gc: 12, dif:  -3, classified: true },
  { pos: 10, team: "13 de Junio CC",         pts:  9, pj: 8, pg: 2, pe: 3, pp: 3, gf: 12, gc: 11, dif:   1, classified: true },
  { pos: 11, team: "15 de Agosto",           pts:  8, pj: 8, pg: 2, pe: 2, pp: 4, gf:  7, gc: 13, dif:  -6, eliminated: true },
  { pos: 12, team: "3 de Febrero",           pts:  8, pj: 8, pg: 2, pe: 2, pp: 4, gf: 11, gc: 18, dif:  -7, eliminated: true },
  { pos: 13, team: "Atlético Independiente", pts:  7, pj: 8, pg: 1, pe: 4, pp: 3, gf:  8, gc: 10, dif:  -2, eliminated: true },
  { pos: 14, team: "Libertad Ojopoi",        pts:  5, pj: 8, pg: 1, pe: 2, pp: 5, gf: 12, gc: 25, dif: -13, eliminated: true },
  { pos: 15, team: "1° de Marzo",            pts:  2, pj: 8, pg: 0, pe: 2, pp: 6, gf:  6, gc: 23, dif: -17, eliminated: true },
];

// ── Categoría Primera — Grupo D (cierre 10ma fecha) ──────────────
export const standingsPrincipalD: TeamStanding[] = [
  { pos: 1, team: "Sp. Itaguyrá",    pts:  9, pj: 6, pg: 2, pe: 3, pp: 1, gf: 10, gc:  9, dif:  1, classified: true },
  { pos: 2, team: "Humaitá",         pts:  9, pj: 6, pg: 2, pe: 3, pp: 1, gf:  9, gc:  8, dif:  1, classified: true },
  { pos: 3, team: "13 de Junio SA",  pts:  8, pj: 6, pg: 2, pe: 2, pp: 2, gf:  4, gc:  4, dif:  0, eliminated: true },
  { pos: 4, team: "Libertad Yruguá", pts:  4, pj: 6, pg: 0, pe: 4, pp: 2, gf:  9, gc: 11, dif: -2, eliminated: true },
];

// ── Categoría Juvenil — Cierre 10ma fecha ────────────────────────
export const standingsJuvenil: TeamStanding[] = [
  { pos:  1, team: "Sport Unión",            pts: 21, pj: 8, pg: 7, pe: 0, pp: 1, gf: 25, gc:  9, dif:  16, classified: true },
  { pos:  2, team: "Juventud Cordillerana",  pts: 20, pj: 8, pg: 6, pe: 2, pp: 0, gf: 20, gc:  3, dif:  17, classified: true },
  { pos:  3, team: "Libertad Ojopoi",        pts: 16, pj: 8, pg: 5, pe: 1, pp: 2, gf: 12, gc: 12, dif:   0, classified: true },
  { pos:  4, team: "12 de Agosto",           pts: 15, pj: 8, pg: 4, pe: 3, pp: 1, gf: 16, gc:  8, dif:   8, classified: true },
  { pos:  5, team: "1° de Marzo",            pts: 14, pj: 8, pg: 4, pe: 2, pp: 2, gf: 18, gc: 16, dif:   2, classified: true },
  { pos:  6, team: "Sport San Blas",         pts: 14, pj: 8, pg: 4, pe: 2, pp: 2, gf: 11, gc:  9, dif:   2, classified: true },
  { pos:  7, team: "Capitán Cristaldo",      pts: 13, pj: 8, pg: 3, pe: 4, pp: 1, gf: 16, gc: 11, dif:   5, classified: true },
  { pos:  8, team: "Atlético Independiente", pts: 11, pj: 8, pg: 2, pe: 5, pp: 1, gf:  5, gc:  3, dif:   2, classified: true },
  { pos:  9, team: "13 de Junio CC",         pts:  9, pj: 8, pg: 2, pe: 3, pp: 3, gf:  7, gc:  9, dif:  -2, classified: true },
  { pos: 10, team: "Mcal. Estigarribia",     pts:  8, pj: 8, pg: 2, pe: 2, pp: 4, gf:  9, gc: 14, dif:  -5, classified: true },
  { pos: 11, team: "Sol de Mayo",            pts:  7, pj: 8, pg: 1, pe: 4, pp: 3, gf: 10, gc: 15, dif:  -5, eliminated: true },
  { pos: 12, team: "15 de Agosto",           pts:  5, pj: 8, pg: 1, pe: 2, pp: 5, gf:  7, gc: 14, dif:  -7, eliminated: true },
  { pos: 13, team: "Guaraní de Paso Hũ",    pts:  5, pj: 8, pg: 1, pe: 2, pp: 5, gf: 12, gc: 24, dif: -12, eliminated: true },
  { pos: 14, team: "Gral. Caballero",        pts:  2, pj: 8, pg: 0, pe: 2, pp: 6, gf:  4, gc: 14, dif: -10, eliminated: true },
  { pos: 15, team: "3 de Febrero",           pts:  2, pj: 8, pg: 0, pe: 2, pp: 6, gf:  7, gc: 18, dif: -11, eliminated: true },
];

// ── Categoría Juvenil — Grupo D (cierre 10ma fecha) ──────────────
export const standingsJuvenilD: TeamStanding[] = [
  { pos: 1, team: "Sp. Itaguyrá",    pts: 12, pj: 6, pg: 4, pe: 0, pp: 2, gf: 13, gc:  3, dif:  10, classified: true },
  { pos: 2, team: "13 de Junio SA",  pts: 12, pj: 6, pg: 4, pe: 0, pp: 2, gf: 13, gc:  8, dif:   5, classified: true },
  { pos: 3, team: "Humaitá",         pts: 12, pj: 6, pg: 4, pe: 0, pp: 2, gf: 10, gc: 10, dif:   0, eliminated: true },
  { pos: 4, team: "Libertad Yruguá", pts:  0, pj: 6, pg: 0, pe: 0, pp: 6, gf:  3, gc: 18, dif: -15, eliminated: true },
];
