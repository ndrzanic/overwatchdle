import { HeroName } from "../constants/hero-names";
import { Gender } from "./enums/gender";
import { Occupation } from "./enums/occupation";
import { Role } from "./enums/role";
import { WeaponType } from "./enums/weapon-type";

export type Hero = {
  name: HeroName;
  image: string;
  emoji?: string;
  trivia: TriviaData;
  abilities: Ability[];
};

export interface TriviaData {
  gender: Gender;
  role: Role;
  occupation: Occupation[];
  weaponType: WeaponType[];
}

export type Ability = {
  name: string;
  icon: string;
};
