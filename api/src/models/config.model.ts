import { model, Schema } from "mongoose";

export interface GameConfiguration {
  triviaModeHeroes: string[];
  // abilityModeHeroes: string[];
  // emojiModeHeroes: string[];
  // quoteModeHeroes: string[];
  index: number;
}

const schema = new Schema<GameConfiguration>({
  triviaModeHeroes: {
    type: [String],
    required: true,
  },
  // abilityModeHeroes: {
  //   type: [String],
  //   required: true,
  // },
  // emojiModeHeroes: {
  //   type: [String],
  //   required: true,
  // },
  // quoteModeHeroes: {
  //   type: [String],
  //   required: true,
  // },
  index: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const GameConfigurationModel = model<GameConfiguration>(
  "Config",
  schema,
  "Config"
);
