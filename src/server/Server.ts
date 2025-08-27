import express from "express";
import type { Application } from "express";
import type { routesType } from "../routes/user.route.js";



export class Server {
    private readonly PORT = 3006
    private app:Application;
    private routes:routesType;

    constructor(expressFn:typeof express, routes:routesType){
        this.app = expressFn();
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

