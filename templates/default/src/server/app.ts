import express from "express";
import cors from "cors";
import { ServerInterface } from "./app.interface";
import router from "@module/router";

class Server implements ServerInterface {
  // eslint-disable-line

  async server(): Promise<express.Application> {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/v1", router.routes); // setting up base route

    // define a route handler for the default home page
    app.get("/", (req, res) => {
      res.send("Welcome to express-create application! ");
    });
    app.use(cors());
    return app;
  }
}

export default new Server();
