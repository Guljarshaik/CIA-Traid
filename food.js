import  express from "express";
import {createfood,getFood,getfoodbytype,getAllfood, deletefood, updatefood, getfoodbyemail} from "../controllers/FoodController.js";

const router=express.Router();

router.post("/create-food",createfood);
router.get("/:userId",getFood);
router.get("/request/:type",getfoodbytype);
router.get("/",getAllfood);
router.delete("/:id",deletefood);
router.put("/update/:id",updatefood);
router.get("/email/:email",getfoodbyemail);



export default router