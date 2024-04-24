import  express from "express";
import { register,login,AllUser, deleteUser, updateUser } from "../controllers/authController.js";

const router=express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/",AllUser);
router.delete("/:id",deleteUser);
router.put("/update/:id",updateUser);


export default router