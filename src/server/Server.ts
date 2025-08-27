import express from "express";
import type {Application} from "express";
import type { routesType } from "../routes/user_route.js";



export class Server {
    private readonly PORT = 3006
    private app:Application;
    private routes:routesType;

    constructor(expres:Function, routes:routesType){
        this.app = expres();
        this.routes = routes


        this.config();
    }

    public init(){
        this.app.listen(3006, ()=>{
        console.log("servidor rodando na porta 3006")
    })
    }

    public config(){
        // Json
        this.app.use(express.json());
        
        // Router
        this.app.use('/', this.routes.init())

    }
}

