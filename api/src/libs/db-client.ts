import { connect } from "mongoose";

import type mongoose from "mongoose";
let conn: typeof mongoose | null = null;

export class DBClient {
  static connect = async () => {
    if (conn == null) {
      conn = await connect(_getDBUri(), {
        serverSelectionTimeoutMS: 5000,
      });
    }
  };
}

const _getDBUri = () => {
  // `serverless-offline` exposes the API locally and simulates it on the `dev` environment
  // this `if` block ensures that `serverless-offline` it will use the localhost DB instead of the remote dev one
  if (process.env.IS_OFFLINE === "true") {
    return "mongodb://localhost/overwatchdle";
  } else {
    return process.env.DB_URI;
  }
};
