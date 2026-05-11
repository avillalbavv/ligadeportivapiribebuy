import { type TeamStanding } from "./standings";

// ── Grupos de la Segunda Fase ─────────────────────────────────────
export interface GrupoSegundaFase {
  nombre: string;
  equipos: string[];
}

export const gruposSegundaFase: GrupoSegundaFase[] = [
  { nombre: "Grupo A", equipos: ["Sport Unión", "Humaitá", "Mcal. Estigarribia"] },
  { nombre: "Grupo B", equipos: ["Juventud Cordillerana", "Sp. Itaguyrá", "Capitán Cristaldo"] },
  { nombre: "Grupo C", equipos: ["Sport San Blas", "13 de Junio C.C.", "Sol de Mayo"] },
  { nombre: "Grupo D", equipos: ["Guaraní de Paso Hũ", "Gral. Caballero", "12 de Agosto"] },
];

// ── Resultados Segunda Fase — Categoría Primera — 1ra Fecha ──────
export interface MatchResult2F {
  home: string;
  away: string;
  homeGoals: number;
  awayGoals: number;
  grupo?: string;
}

export const resultsPrimeraFecha2F: MatchResult2F[] = [
  { home: "Mcal. Estigarribia", away: "Capitán Cristaldo",   homeGoals: 1, awayGoals: 1, grupo: "Grupo A / B" },
  { home: "Humaitá",            away: "Sport Unión",          homeGoals: 1, awayGoals: 1, grupo: "Grupo A" },
  { home: "Sp. Itaguyrá",       away: "Juventud Cordillerana",homeGoals: 3, awayGoals: 4, grupo: "Grupo B" },
  { home: "13 de Junio C.C.",   away: "Sport San Blas",       homeGoals: 1, awayGoals: 1, grupo: "Grupo C" },
  { home: "Gral. Caballero",    away: "Guaraní de Paso Hũ",  homeGoals: 0, awayGoals: 0, grupo: "Grupo D" },
  { home: "Sol de Mayo",        away: "12 de Agosto",         homeGoals: 2, awayGoals: 0, grupo: "Grupo C / D" },
];

// ── Resultados Segunda Fase — Categoría Juvenil — 1ra Fecha ──────
export const resultsJuvenilFecha2F: MatchResult2F[] = [
  { home: "Atlético Independiente", away: "Capitán Cristaldo",   homeGoals: 1, awayGoals: 1 },
  { home: "13 de Junio S.A.",       away: "Sport Unión",          homeGoals: 1, awayGoals: 1 },
  { home: "Sp. Itaguyrá",           away: "Juventud Cordillerana",homeGoals: 1, awayGoals: 1 },
  { home: "13 de Junio C.C.",       away: "Sport San Blas",       homeGoals: 1, awayGoals: 0 },
  { home: "Libertad Ojopoi",        away: "1° de Marzo",          homeGoals: 1, awayGoals: 1 },
  { home: "Sol de Mayo",            away: "12 de Agosto",         homeGoals: 1, awayGoals: 2 },
];

// ── Tabla de Posiciones Segunda Fase — Categoría Primera ─────────
export const standingsPrimera2F: TeamStanding[] = [
  { pos:  1, team: "Sol de Mayo",          pts: 3, pj: 1, pg: 1, pe: 0, pp: 0, gf: 2, gc: 0, dif:  2 },
  { pos:  2, team: "Juventud Cordillerana",pts: 3, pj: 1, pg: 1, pe: 0, pp: 0, gf: 4, gc: 3, dif:  1 },
  { pos:  3, team: "Sport San Blas",       pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 1, gc: 1, dif:  0 },
  { pos:  4, team: "Sport Unión",          pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 1, gc: 1, dif:  0 },
  { pos:  5, team: "13 de Junio C.C.",     pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 1, gc: 1, dif:  0 },
  { pos:  6, team: "Mcal. Estigarribia",   pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 1, gc: 1, dif:  0 },
  { pos:  7, team: "Humaitá",              pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 1, gc: 1, dif:  0 },
  { pos:  8, team: "Capitán Cristaldo",    pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 1, gc: 1, dif:  0 },
  { pos:  9, team: "Gral. Caballero",      pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 0, gc: 0, dif:  0 },
  { pos: 10, team: "Guaraní de Paso Hũ",  pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 0, gc: 0, dif:  0 },
  { pos: 11, team: "Sp. Itaguyrá",         pts: 0, pj: 1, pg: 0, pe: 0, pp: 1, gf: 3, gc: 4, dif: -1 },
  { pos: 12, team: "12 de Agosto",         pts: 0, pj: 1, pg: 0, pe: 0, pp: 1, gf: 0, gc: 2, dif: -2 },
];

// ── Tabla de Posiciones Segunda Fase — Categoría Juvenil ─────────
export const standingsJuvenil2F: TeamStanding[] = [
  { pos:  1, team: "12 de Agosto",          pts: 3, pj: 1, pg: 1, pe: 0, pp: 0, gf: 2, gc: 1, dif:  1 },
  { pos:  2, team: "13 de Junio C.C.",      pts: 3, pj: 1, pg: 1, pe: 0, pp: 0, gf: 1, gc: 0, dif:  1 },
  { pos:  3, team: "Sp. Itaguyrá",          pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 1, gc: 1, dif:  0 },
  { pos:  4, team: "1° de Marzo",           pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 1, gc: 1, dif:  0 },
  { pos:  5, team: "Libertad Ojopoi",       pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 1, gc: 1, dif:  0 },
  { pos:  6, team: "Juventud Cordillerana", pts: 1, pj: 1, pg: 0, pe: 1, pp: 0, gf: 1, gc: 1, dif:  0 },
  { pos:  7, team: "13 de Junio S.A.",      pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dif:  0 },
  { pos:  8, team: "Sport Unión",           pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dif:  0 },
  { pos:  9, team: "Atlético Independiente",pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dif:  0 },
  { pos: 10, team: "Capitán Cristaldo",     pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dif:  0 },
  { pos: 11, team: "Sol de Mayo",           pts: 0, pj: 1, pg: 0, pe: 0, pp: 1, gf: 1, gc: 2, dif: -1 },
  { pos: 12, team: "Sport San Blas",        pts: 0, pj: 1, pg: 0, pe: 0, pp: 1, gf: 0, gc: 1, dif: -1 },
];
