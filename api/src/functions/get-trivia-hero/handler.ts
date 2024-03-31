import { APIGatewayProxyResult } from "aws-lambda";

import { middyfy } from "@libs/lambda";

import { HeroName } from "../../constants/hero-names";
import { heroes } from "../../constants/heroes";
import { Hero } from "../../interfaces/hero";
import { formatJSONResponse } from "../../libs/api-gateway";
import { wrapReq } from "../../libs/request-wrapper";
import { GameConfiguration } from "../../models/config.model";

const handler = async (): Promise<APIGatewayProxyResult> =>
  await wrapReq(async (config: GameConfiguration) => {
    const heroName = config.triviaModeHeroes[config.index] as HeroName;

    const chosenHero = heroes[heroName];

    const heroList: Pick<Hero, "name" | "image">[] = [];

    Object.keys(heroes).forEach((key: HeroName) => {
      heroList.push({ name: heroes[key].name, image: heroes[key].image });
    });

    return formatJSONResponse({
      correctHero: Buffer.from(chosenHero.name).toString("base64"),
      heroList,
    });
  });

export const main = middyfy(handler);
