import { Router } from "express";
import UserController from "../controller/user.controller.js";

const router = Router();

router.get("/", UserController.getAll)
router.get("/:id", UserController.getById)
router.post("/submite", UserController.submit)
router.put("/edit/:id", UserController.edit)
router.delete("/delete/:id", UserController.delete)



export default router;