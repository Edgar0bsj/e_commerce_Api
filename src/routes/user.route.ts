import { Router } from "express";
import UserController from "../controller/user.controller.js";
import { initValidation } from "../middleware/validation/validation.core.js";

const router = Router();
const validation = initValidation();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("/submite", validation.postUserBody(), UserController.submit);
router.put("/edit/:id", UserController.edit);
router.delete("/delete/:id", UserController.delete);

export default router;
