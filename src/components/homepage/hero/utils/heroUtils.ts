import Play from "../../../../assets/images/hero/play.svg";
import Plus from "../../../../assets/images/hero/plus.svg"
import type { MovieButtons } from "../types/heroTypes";

export const heroButtons: MovieButtons[] = [{ id: 1, text: "Play Now", icon: Play, type: "Play" }, { id: 2, text: "Add List", icon: Plus, type: "Add" }]