import * as dotenv from "dotenv";
import * as envalid from "envalid";
import { num, str } from "envalid";

dotenv.config();

export const environment = envalid.cleanEnv(process.env, {
  NODE_ENV: str({ default: "production", choices: ["production", "development"] }),
  PORT: num({ default: 3000 }),
  LOG_DIR: str({ default: "./logs" }),
  LOG_LEVEL: str({ default: "info", devDefault: "debug", choices: ["debug", "info", "warn", "error"] }),
});
