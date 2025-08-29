import express from "express";
import userRouter from "../routes/user.route.js";
import type { expressType } from "../index.js";

/**
 *
 * @param {expressType} app - will receive the express to start
 * as a routerwill receive the express to start as a router
 */
export const direction = (app: expressType) => {
  app.use(express.json());
  app.use("/user", userRouter);
};
