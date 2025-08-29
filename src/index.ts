import express from "express";
import { server } from "./server/server.js";
import { erroMiddleware } from "./middleware/erro.middleware.js";
import { direction } from "./routes/index.route.js";
import { errors } from "celebrate";

const app = express();

direction(app);
app.use(errors());
erroMiddleware(app);

server(app);

export type expressType = typeof app;
