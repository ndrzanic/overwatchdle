import { HERO_NAMES } from "../constants/hero-names";
import { RandomGenerator } from "../libs/random-generator";
import { GameConfiguration } from "../models/config.model";

export const generateHeroConfiguration: () => Partial<GameConfiguration> =
  () => ({
    triviaModeHeroes: RandomGenerator.randomSort(HERO_NAMES),
  });
