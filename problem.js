import  express from "express";
import {createProblem,getProblem,getproblembytype,getAllproblem, deleteProblem} from "../controllers/ProblemController.js";

const router=express.Router();

router.post("/create-problem",createProblem)
router.get("/:userId",getProblem);
router.get("/request/:type",getproblembytype);
router.get("/",getAllproblem);
router.delete("/:id",deleteProblem);



export default router