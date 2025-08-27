import { Router } from "express";
import type { Request, Response } from "express";


type user = {
    id: number;
    name: string;
    ager: number
}

export class routes {

    private router;
    private users:user[] = [];
    private id:number = 0;

    constructor(expressRouter:typeof Router){
        this.router = expressRouter();
        this.startRouter();
    }
    public init(){
        return this.router;
    }

    private startRouter(){
        // Get
        this.router.get('/user',(req:Request, res:Response) => {
        res.send(this.users)
        });

        // GetAll
        this.router.get('/user/:id',(req:Request, res:Response)=>{
            let userId = Number(req.params.id);
            let user = this.users.find(el => el.id === userId)

            res.send(user)
        })

        // Post
        this.router.post('/user/submite', (req:Request, res:Response)=>{
            let _user:user = {
                id: ++this.id,
                name: req.body.name,
                ager: req.body.ager,
            }

            this.users.push(_user);
            res.send("dados capturados com sucesso!")
        })

        // Put
        this.router.put('/user/edit/:id',(req: Request, res:Response)=>{
            let id = Number(req.params.id);
            let clientUser = req.body;

            this.users.forEach(el => {
                if (el.id === id) {
                    el.name = clientUser.name;
                    el.ager = clientUser.ager;
                }
            })
            res.send("item alterado com sucesso!");
        })


        // Delete
        this.router.delete('/user/delete/:id',(req:Request, res:Response)=>{
            let id = Number(req.params.id);
            let userIndex = this.users.findIndex(el=>el.id === id);
            this.users.splice(userIndex, 1);

            res.send("Usuario deletado com sucesso!")
        })
    }

} 

export type routesType = routes;

