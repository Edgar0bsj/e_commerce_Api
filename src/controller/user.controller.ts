import type { NextFunction, Request, Response } from "express";
import userService from "../service/user.service.js";
import type { User } from "../repository/user.repository.js";

export default class UserController {
  /**
   *=================== ///// ===================
   *
   * Class > Static Function > Get All
   *
   *=============================================
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const service = userService();
      const users = await service.getAll();

      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }

  /**
   *=================== ///// ===================
   *
   * Class > Static Function > Get by Id
   *
   *=============================================
   */
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      let userId = String(req.params.id);
      const service = userService();
      const result = await service.getById(userId);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   *=================== ///// ===================
   *
   * Class > Static Function > Submit
   *
   *=============================================
   */
  static submit(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const service = userService();
      service.submit(body);

      res.status(201).end();
    } catch (error) {
      next(error);
    }
  }

  /**
   *=================== ///// ===================
   *
   * Class > Static Function > Edit
   *
   *=============================================
   */
  static edit(req: Request, res: Response, next: NextFunction) {
    try {
      const _id = req.params.id;
      const _body: Partial<User> = req.body;
      const userBody: User = {
        id: _id,
        name: _body.name,
        age: _body.age,
      } as User;
      userService().edit(userBody);

      res.send("O Usuario alterado com sucesso!");
    } catch (error) {
      next(error);
    }
  }

  /**
   *=================== ///// ===================
   *
   * Class > Static Function > Delete
   *
   *=============================================
   */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      let id = String(req.params.id);

      userService().delete(id);

      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}
