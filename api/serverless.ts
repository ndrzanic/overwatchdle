import getTriviaHero from "@functions/get-classic-hero";
import seedHeroes from "@functions/seed-heroes";

import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "api",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs20.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  functions: { seedHeroes, getTriviaHero },

  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node20",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    "serverless-offline": {
      noPrependStageInUrl: true,
    },
  },
};

module.exports = serverlessConfiguration;
