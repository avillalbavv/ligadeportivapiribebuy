import sportunion from "@/assets/clubs/sportunion.png";
import sanblas from "@/assets/clubs/sanblas.png";
import soldemayo from "@/assets/clubs/soldemayo.png";
import itaguyra from "@/assets/clubs/itaguyra.png";
import libertadOjopoi from "@/assets/clubs/libertad_ojopoi.png";
import mcalestigarribia from "@/assets/clubs/mcalestigarribia.png";
import humaita from "@/assets/clubs/humaita.png";
import juventud from "@/assets/clubs/juventud.png";
import guarani from "@/assets/clubs/guarani.png";
import libertadYhaka from "@/assets/clubs/libertad_yhaka.png";
import generalCaballero from "@/assets/clubs/general_caballero.png";
import capitanCristaldo from "@/assets/clubs/capitancristaldo.png";
import atleticoIndependiente from "@/assets/clubs/atleticoindependiente.png";
import quinceDeAgosto from "@/assets/clubs/15deagosto.png";
import treceDeJunioSA from "@/assets/clubs/13dejuniosa.png";
import treceDeJunioCC from "@/assets/clubs/13dejuniocc.png";
import doceDeAgosto from "@/assets/clubs/12deagosto.png";
import tresDeFebrero from "@/assets/clubs/3_de_febrero.png";
import primeroDeMarzo from "@/assets/clubs/1_de_marzo.png";

export const clubLogos: Record<string, string> = {
  // ── Sport Unión ──────────────────────────────────────────────
  "Sport Unión": sportunion,
  "Sport Union": sportunion,

  // ── Sport San Blas ───────────────────────────────────────────
  "Sport San Blas": sanblas,

  // ── Sol de Mayo ──────────────────────────────────────────────
  "Sol de Mayo": soldemayo,

  // ── Itaguyrá ─────────────────────────────────────────────────
  "Sportivo Itaguyrá": itaguyra,
  "Itaguyra": itaguyra,
  "Itaguyrá": itaguyra,
  "Sp. Itaguyrá": itaguyra,

  // ── Libertad Ojopoi ──────────────────────────────────────────
  "Libertad Ojopoi": libertadOjopoi,

  // ── Mariscal Estigarribia ────────────────────────────────────
  "Mcal. Estigarribia": mcalestigarribia,
  "Mcal Estigarribia": mcalestigarribia,
  "Mariscal Estigarribia": mcalestigarribia,

  // ── Humaitá ──────────────────────────────────────────────────
  "Humaitá": humaita,
  "Humaita": humaita,

  // ── Juventud ─────────────────────────────────────────────────
  "Juventud": juventud,
  "Juventud Cordillerana": juventud,
  "Juventud Cord.": juventud,

  // ── Guaraní ──────────────────────────────────────────────────
  "Guaraní": guarani,
  "Guaraní de Paso Hũ": guarani,
  "Guarani": guarani,

  // ── Libertad Yruguá ──────────────────────────────────────────
  "Libertad Yrugua": libertadYhaka,
  "Libertad Y": libertadYhaka,
  "Libertad Yruguá": libertadYhaka,

  // ── General Caballero ────────────────────────────────────────
  "Gral. Caballero": generalCaballero,
  "Gral Caballero": generalCaballero,
  "General Caballero": generalCaballero,

  // ── Capitán Cristaldo ────────────────────────────────────────
  "Capitán Cristaldo": capitanCristaldo,
  "Capitan Cristaldo": capitanCristaldo,

  // ── Independiente ────────────────────────────────────────────
  "Independiente": atleticoIndependiente,
  "Atlético Independiente": atleticoIndependiente,
  "Atletico Independiente": atleticoIndependiente,

  // ── 15 de Agosto ─────────────────────────────────────────────
  "15 de Agosto": quinceDeAgosto,

  // ── 13 de Junio SA ───────────────────────────────────────────
  "13 de Junio S.A.": treceDeJunioSA,
  "13 de Junio SA": treceDeJunioSA,
  "13 de Junio (S.A.)": treceDeJunioSA,

  // ── 13 de Junio CC ───────────────────────────────────────────
  "13 de Junio C.C.": treceDeJunioCC,
  "13 de Junio (C.C.)": treceDeJunioCC,
  "13 de Junio CC": treceDeJunioCC,
  "13 de Junio": treceDeJunioCC,

  // ── 12 de Agosto ─────────────────────────────────────────────
  "12 de Agosto": doceDeAgosto,

  // ── 3 de Febrero ─────────────────────────────────────────────
  "3 de Febrero": tresDeFebrero,

  // ── 1° de Marzo ──────────────────────────────────────────────
  "1° de Marzo": primeroDeMarzo,
  "1 de Marzo": primeroDeMarzo,
  "1º de Marzo": primeroDeMarzo,
};

export const getClubLogo = (clubName: string): string | undefined => {
  return clubLogos[clubName];
};
