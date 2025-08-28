import express from "express";
import {server} from "./server/server.js";
// import { initializeApp } from 'firebase-admin/app';
import userRouter  from "./routes/user.route.js";

const port = 3006;
// initializeApp();

const app = express();

app.use(express.json());
app.use("/user", userRouter )

server(app,port);


export type expressType = typeof app