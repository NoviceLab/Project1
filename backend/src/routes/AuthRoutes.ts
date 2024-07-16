import { Router } from "express";
import { adminlogin, login } from "../controllers/AuthControllers";

const router = Router()

router.post("/login",login);
router.post("/admin/login",adminlogin);

export default router