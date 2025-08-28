import type { Request, Response } from "express";
import db from "../database/connection.js";


type user = {
    id: number;
    name: string;
    ager: number
}
const users:user[] = [];


export default class UserController {

    // GET ALL -> lendo todos os dados
    static async getAll(req:Request, res:Response){
        const data = await db.collection("user").get(); // <-----
        const users = data.docs.map(el => {
            return {
                id: el.id,
                ...el.data()
            }
        })

        res.send(users)
    }

    static get(req:Request, res:Response) {
        let userId = Number(req.params.id);
        let user = users.find(el => el.id === userId)
        res.send(user)
    }

    // ADD -> adicionando dados no fireBase
    static submit(req:Request, res:Response) {
        const body = req.body;
        db.collection("user").add(body); // <------

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