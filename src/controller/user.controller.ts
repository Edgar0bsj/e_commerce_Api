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

    // GET BY ID -> buscar por id
    static async getById(req:Request, res:Response) {
        let userId = String(req.params.id);

        const doc = await db.collection("user").doc(userId).get();
        let dataUser = {
            id: doc.id,
            ...doc.data()
        }
        res.send(dataUser)
    }

    // ADD -> adicionando dados no fireBase
    static submit(req:Request, res:Response) {
        const body = req.body;
        db.collection("user").add(body); // <------

        res.status(201).send("dados capturados com sucesso!");
    }

    // EDIT -> editando dados via put
    static edit(req: Request, res:Response) {
        let id = String(req.params.id);
        let clientUser:user = req.body;

        let editUser:Partial<user> = {
            name : clientUser.name,
            ager : clientUser.ager
        }

        db.collection("user").doc(id).set(editUser);

        res.send("item alterado com sucesso!");
    }

    // DELETE -> deletando no firestore
    static async delete(req:Request, res:Response){
        let id = String(req.params.id);
        
        await db.collection("user").doc(id).delete();

        res.status(204).end();
    }


}