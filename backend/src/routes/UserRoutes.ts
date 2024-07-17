import { Router } from "express";
import { protect } from "../middlewares/authMiddleware";
import { admin } from "../middlewares/adminMiddleware";
import { createuser, deleteuser, getusers, updateuser, userbyid,noofuser } from "../controllers/UserControllers";

const router = Router()

router.post("/",createuser);
router.get("/",protect,getusers);
router.get("/:id",protect,userbyid);
router.delete("/:id",protect,admin,deleteuser);
router.put("/:id",protect,admin,updateuser);
router.get("/details/dashboard",protect,noofuser);

export default router 