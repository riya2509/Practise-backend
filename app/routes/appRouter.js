import express from "express";
import appController from "../controller/appController.js";

const appRouter = express.Router();
appRouter.get("/data", appController.getAllData);
appRouter.post("/create", appController.createData);

export default appRouter;
