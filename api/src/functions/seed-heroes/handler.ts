import { APIGatewayProxyResult } from "aws-lambda";

import { middyfy } from "@libs/lambda";

import { HERO_NAMES } from "../../constants/hero-names";
import { formatJSONResponse } from "../../libs/api-gateway";
import { DBClient } from "../../libs/db-client";
import { GameConfigurationModel } from "../../models/config.model";
import { generateHeroConfiguration } from "../../utils/generate-hero-configuration";

const handler = async (): Promise<APIGatewayProxyResult> => {
  await DBClient.connect();

  const config = await GameConfigurationModel.findOne();

  if (config == null) {
    await new GameConfigurationModel(generateHeroConfiguration()).save();
  } else {
    config.index++;
    if (config.index >= HERO_NAMES.length) {
      await GameConfigurationModel.updateOne(
        {},
        {
          $set: { ...generateHeroConfiguration(), index: 0 },
        }
      );
    } else {
      await GameConfigurationModel.updateOne(
        {},
        {
          $inc: { index: 1 },
        }
      );
    }
  }

  return formatJSONResponse({ message: "Hero configuration updated" });
};

export const main = middyfy(handler);
