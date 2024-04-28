import { APIGatewayProxyResult } from "aws-lambda";

import { middyfy } from "@libs/lambda";

import { HeroName } from "../../constants/hero-names";
import { heroes } from "../../constants/heroes";
import { formatJSONResponse } from "../../libs/api-gateway";
import { wrapReq } from "../../libs/request-wrapper";
import { GameConfiguration } from "../../models/config.model";

const handler = async (): Promise<APIGatewayProxyResult> =>
  await wrapReq(async (config: GameConfiguration) => {
    const heroName = config.triviaModeHeroes[config.index] as HeroName;

    const chosenHero = heroes[heroName];

    return formatJSONResponse({
      correctHero: Buffer.from(chosenHero.name).toString("base64"),
      heroList: heroes,
    });
  });

export const main = middyfy(handler);
