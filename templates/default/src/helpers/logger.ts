/**
 * Setup the winston logger.
 *
 * Documentation: https://github.com/winstonjs/winston
 */

import { environment } from "@config/environment";
import { createLogger, format, transports } from "winston";

export const logger = createLogger({
  level: environment.LOG_LEVEL,
  format: format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({ filename: `${environment.LOG_DIR}/error.log`, level: "error" }),
    new transports.File({ filename: `${environment.LOG_DIR}/combined.log` }),
  ],
});

if (environment.NODE_ENV !== "production") {
  logger.add(new transports.Console({ level: "debug", format: format.combine(format.colorize(), format.simple()) }));
}
