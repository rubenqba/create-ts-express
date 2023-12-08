import { Router } from "express";
import { IRouter } from "./router.interface";

// Init router
const router = Router();

class BaseRouter implements IRouter {
  get routes(): Router {
    // router.use("/users", userRouter.routes);
    return router;
  }
}

export default new BaseRouter();
