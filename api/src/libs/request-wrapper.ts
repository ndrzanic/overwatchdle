import { GameConfiguration, GameConfigurationModel } from "../models/config.model";
import { generateHeroConfiguration } from "../utils/generate-hero-configuration";
import { formatJSONResponse } from "./api-gateway";
import { DBClient } from "./db-client";

export const wrapReq = async (
  func: (config: GameConfiguration) => Promise<any>
): Promise<any> => {
  try {
    await DBClient.connect();

    let config = await GameConfigurationModel.findOne();
    if (config == null) {
      config = await new GameConfigurationModel(
        generateHeroConfiguration()
      ).save();
    }

    return await func(config);
  } catch (error: any) {
    console.error(error);

    return formatJSONResponse(error, error.statusCode ?? 400);
  }
};
