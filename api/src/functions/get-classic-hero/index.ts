import { handlerPath } from "src/utils/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "trivia-hero",
      },
    },
  ],
};
