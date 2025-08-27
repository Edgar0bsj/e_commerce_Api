import type { Request, Response } from "express";

type user = {
    id: number;
    name: string;
    ager: number
}
let id:number = 0;
const users:user[] = [];

export class UserController {

    static get(req:Request, res:Response){
        res.send(users)
    }

    static getAll(req:Request, res:Response) {
        let userId = Number(req.params.id);
        let user = users.find(el => el.id === userId)
        res.send(user)
    }

    static submit(req:Request, res:Response) {
        let _user:user = {
            id: ++id,
            name: req.body.name,
            ager: req.body.ager,
        }

        users.push(_user);
        res.send("dados capturados com sucesso!")
    }

    static edit(req: Request, res:Response) {
        let id = Number(req.params.id);
        let clientUser = req.body;

        users.forEach(el => {
            if (el.id === id) {
                el.name = clientUser.name;
                el.ager = clientUser.ager;
            }
        })
        res.send("item alterado com sucesso!");
    }

    static delete(req:Request, res:Response){
        let id = Number(req.params.id);
        let userIndex = users.findIndex(el=>el.id === id);
        users.splice(userIndex, 1);

        res.send("Usuario deletado com sucesso!")
    }


}