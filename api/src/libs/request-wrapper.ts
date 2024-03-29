import {
  GameConfiguration,
  GameConfigurationModel,
} from "../models/config.model";
import { formatJSONResponse } from "./api-gateway";
import { AppError } from "./app-error";
import { DBClient } from "./db-client";

export const wrapReq = async (
  func: (config: GameConfiguration) => Promise<any>
): Promise<any> => {
  try {
    await DBClient.connect();

    const config = await GameConfigurationModel.findOne();
    if (config == null) {
      throw new AppError("Heroes not configured", {
        statusCode: 404,
        code: "BAD_CONFIG",
      });
    }

    return await func(config);
  } catch (error: any) {
    console.error(error);

    return formatJSONResponse(error, error.statusCode ?? 400);
  }
};
