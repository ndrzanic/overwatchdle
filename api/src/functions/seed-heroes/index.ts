import { handlerPath } from "src/utils/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      schedule: "cron(0 0 * * ? *)",
    },
  ],
};
