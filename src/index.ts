import express from "express";
import {server} from "./server/server.js";
import userRouter  from "./routes/user.route.js";
import type {NextFunction, Request, Response} from "express";

const port = 3006;


const app = express();

app.use(express.json());
app.use("/user", userRouter )

app.use((err:unknown, req:Request, res:Response, next:NextFunction)=>{
    const message = err instanceof Error ? err.message : "Erro desconhecido";
    res.status(500).send({
        message: "Erro interno do servidor!",
        error: message
    });
})


server(app,port);

export type expressType = typeof app