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
}

export const standingsPrincipal: TeamStanding[] = [
  { pos: 1, team: "Sport Unión", pts: 12, pj: 4, pg: 4, pe: 0, pp: 0, gf: 7, gc: 0, dif: 7 },
  { pos: 2, team: "Juventud Cordillerana", pts: 10, pj: 5, pg: 3, pe: 1, pp: 1, gf: 10, gc: 5, dif: 5 },
  { pos: 3, team: "Guaraní de Paso Hú", pts: 8, pj: 5, pg: 2, pe: 2, pp: 1, gf: 7, gc: 3, dif: 4 },
  { pos: 4, team: "12 de Agosto", pts: 7, pj: 5, pg: 2, pe: 1, pp: 2, gf: 8, gc: 6, dif: 2 },
  { pos: 5, team: "13 de Junio C.C.", pts: 7, pj: 5, pg: 2, pe: 1, pp: 2, gf: 8, gc: 6, dif: 2 },
  { pos: 6, team: "Sport San Blas", pts: 7, pj: 5, pg: 2, pe: 1, pp: 2, gf: 7, gc: 6, dif: 1 },
  { pos: 7, team: "Mcal. Estigarribia", pts: 7, pj: 4, pg: 2, pe: 1, pp: 1, gf: 5, gc: 5, dif: 0 },
  { pos: 8, team: "Capitán Cristaldo", pts: 6, pj: 5, pg: 2, pe: 0, pp: 3, gf: 10, gc: 12, dif: -2 },
  { pos: 9, team: "Sol de Mayo", pts: 6, pj: 4, pg: 1, pe: 3, pp: 0, gf: 5, gc: 3, dif: 2 },
  { pos: 10, team: "Atlético Independiente", pts: 6, pj: 5, pg: 1, pe: 3, pp: 1, gf: 5, gc: 5, dif: 0 },
  { pos: 11, team: "3 de Febrero", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 8, gc: 9, dif: -1 },
  { pos: 12, team: "15 de Agosto", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 6, gc: 9, dif: -3 },
  { pos: 13, team: "Gral. Caballero", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 4, gc: 8, dif: -4 },
  { pos: 14, team: "Libertad Ojopoi", pts: 4, pj: 5, pg: 1, pe: 1, pp: 3, gf: 7, gc: 12, dif: -5 },
  { pos: 15, team: "1° de Marzo", pts: 2, pj: 5, pg: 0, pe: 2, pp: 3, gf: 5, gc: 13, dif: -8 },
];

export const standingsJuvenil: TeamStanding[] = [
  { pos: 1, team: "Juventud Cordillerana", pts: 14, pj: 6, pg: 4, pe: 2, pp: 0, gf: 14, gc: 2, dif: 12 },
  { pos: 2, team: "Sport San Blas", pts: 13, pj: 6, pg: 4, pe: 1, pp: 1, gf: 11, gc: 8, dif: 3 },
  { pos: 3, team: "Sport Unión", pts: 12, pj: 5, pg: 4, pe: 0, pp: 1, gf: 13, gc: 5, dif: 8 },
  { pos: 4, team: "Capitán Cristaldo", pts: 12, pj: 6, pg: 3, pe: 3, pp: 0, gf: 12, gc: 5, dif: 7 },
  { pos: 5, team: "12 de Agosto", pts: 11, pj: 6, pg: 3, pe: 2, pp: 1, gf: 13, gc: 7, dif: 6 },
  { pos: 6, team: "1° de Marzo", pts: 10, pj: 5, pg: 3, pe: 1, pp: 1, gf: 13, gc: 10, dif: 3 },
  { pos: 7, team: "13 de Junio CC", pts: 8, pj: 6, pg: 2, pe: 2, pp: 2, gf: 7, gc: 8, dif: -1 },
  { pos: 8, team: "Libertad Ojopoi", pts: 7, pj: 5, pg: 2, pe: 1, pp: 2, gf: 8, gc: 8, dif: 0 },
  { pos: 9, team: "Atlético Independiente", pts: 6, pj: 5, pg: 1, pe: 3, pp: 1, gf: 4, gc: 3, dif: 1 },
  { pos: 10, team: "Sol de Mayo", pts: 5, pj: 5, pg: 1, pe: 2, pp: 2, gf: 7, gc: 11, dif: -4 },
  { pos: 11, team: "15 de Agosto", pts: 5, pj: 6, pg: 1, pe: 2, pp: 3, gf: 4, gc: 8, dif: -4 },
  { pos: 12, team: "Gral. Caballero", pts: 4, pj: 6, pg: 1, pe: 1, pp: 4, gf: 3, gc: 10, dif: -7 },
  { pos: 13, team: "Guaraní de Paso Hũ", pts: 4, pj: 6, pg: 1, pe: 1, pp: 4, gf: 9, gc: 18, dif: -9 },
  { pos: 14, team: "Mcal. Estigarribia", pts: 3, pj: 5, pg: 1, pe: 0, pp: 4, gf: 6, gc: 12, dif: -6 },
  { pos: 15, team: "3 de Febrero", pts: 1, pj: 6, pg: 0, pe: 1, pp: 5, gf: 5, gc: 14, dif: -9 },
];

export const standingsJuvenilD: TeamStanding[] = [
  { pos: 1, team: "Humaitá", pts: 12, pj: 4, pg: 4, pe: 0, pp: 0, gf: 9, gc: 3, dif: 6 },
  { pos: 2, team: "Sp. Itaquyrá", pts: 6, pj: 4, pg: 2, pe: 0, pp: 2, gf: 7, gc: 3, dif: 4 },
  { pos: 3, team: "13 de Junio SA", pts: 6, pj: 4, pg: 2, pe: 0, pp: 2, gf: 7, gc: 7, dif: 0 },
  { pos: 4, team: "Libertad Yruguá", pts: 0, pj: 4, pg: 0, pe: 0, pp: 4, gf: 3, gc: 13, dif: -10 },
];
