import  express from "express";
import {createAgreement,getuserAgreement,getrequest, deleteAgree,updateAgree} from "../controllers/AgreementController.js";

const router=express.Router();

router.post("/create-agreement",createAgreement)
router.get("/:userId",getuserAgreement);
router.get("/request/:email",getrequest)
router.delete("/:id",deleteAgree)
router.put("/update/:id",updateAgree)


export default router