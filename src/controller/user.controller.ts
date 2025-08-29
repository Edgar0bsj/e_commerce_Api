import type { NextFunction, Request, Response } from "express";
import db from "../database/connection.js";

type user = {
  id: string;
  name: string;
  ager: number;
};

export default class UserController {
  // GET ALL -> lendo todos os dados
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await db.collection("user").get(); // <-----
      const users = data.docs.map((el) => {
        return {
          id: el.id,
          ...el.data(),
        };
      });

      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }

  // GET BY ID -> buscar por id
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      let userId = String(req.params.id);

      const doc = await db.collection("user").doc(userId).get();
      let dataUser = {
        id: doc.id,
        ...doc.data(),
      };
      res.send(dataUser);
    } catch (error) {
      next(error);
    }
  }

  // ADD -> adicionando dados no fireBase
  static submit(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      db.collection("user").add(body); // <------

      res.status(201).send("dados capturados com sucesso!");
    } catch (error) {
      next(error);
    }
  }

  // EDIT -> editando dados via put
  static edit(req: Request, res: Response, next: NextFunction) {
    try {
      let id = String(req.params.id);
      let clientUser: user = req.body;

      let editUser: Partial<user> = {
        name: clientUser.name,
        ager: clientUser.ager,
      };

      db.collection("user").doc(id).set(editUser);

      res.send("item alterado com sucesso!");
    } catch (error) {
      next(error);
    }
  }

  // DELETE -> deletando no firestore
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      let id = String(req.params.id);

      await db.collection("user").doc(id).delete();

      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}
