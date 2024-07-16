import { Router } from "express";
import { login } from "../controllers/AuthControllers";

const router = Router()

router.post("/login",login);

export default router