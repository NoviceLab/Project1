import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";
import { admin } from "../middlewares/adminMiddleware";
import { createuser, deleteuser, getusers, updateuser, userbyid } from "../controllers/UserControllers";

const router = Router()

router.post("/",createuser);
router.get("/",protect,admin,getusers);
router.get("/:id",userbyid);
router.delete("/:id",protect,admin,deleteuser);
router.put("/:id",protect,admin,updateuser);

export default router 