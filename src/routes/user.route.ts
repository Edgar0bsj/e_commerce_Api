import { Router } from "express";
import type { Request, Response } from "express";
import { UserController } from "../controller/user.controller.js";


type user = {
    id: number;
    name: string;
    ager: number
}

export class Routes {

    private router;

    constructor(expressRouter:typeof Router){
        this.router = expressRouter();
        this.startRouter();
    }
    public init(){
        return this.router;
    }

    private startRouter(){

        this.router.get('/user',UserController.get);
        this.router.get('/user/:id',UserController.getAll)
        this.router.post('/user/submite', UserController.submit)
        this.router.put('/user/edit/:id',UserController.edit)
        this.router.delete('/user/delete/:id',UserController.delete)

    }

} 

export type routesType = Routes;

