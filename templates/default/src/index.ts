import server from "@server/app";
import { logger } from "@helper/logger";

import { Application } from "express";
import { environment } from "@config/environment";

async function startServer() {
  const app: Application = await server.server();
  app.listen(environment.PORT, () => {
    console.log(`Listening on port ${environment.PORT} in ${environment.NODE_ENV} mode`);
    logger.info(`Listening on port ${environment.PORT} in ${environment.NODE_ENV} mode`);
  });
}

startServer();

process.on("uncaughtException", (e) => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(1);
});
