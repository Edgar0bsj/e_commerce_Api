import type { expressType } from "../index.js";
import type {NextFunction, Request, Response} from "express";


export const erroMiddleware = (app:expressType)=> {

    app.use((err:unknown, req:Request, res:Response, next:NextFunction)=>{
        const message = err instanceof Error ? err.message : "Erro desconhecido";
        res.status(500).send({
            message: "Erro interno do servidor!",
            error: message
        });
    })

} 