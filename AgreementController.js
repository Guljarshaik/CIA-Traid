import Agreement from "../models/Agreements.js";


export const createAgreement=async (req,res,next)=>{
    try {
        const {userId,docname,file,sign,email} = req.body;
        
        const useragreement =  await Agreement.create({
            docname,
            sign,
            email,
            user:userId,
            file
        })

        const saved = await useragreement.save();

        return res.status(200).json({message:"Agreement created Successfully",agreements:saved});
    } catch (err) {
        next(err)
        
    }
};

export const getuserAgreement=async (req,res,next)=>{
    try {
        const user = req.params.userId; // Assuming the user ID is provided as a URL parameter
        
        const agree= await Agreement.find({ user: user });
        
        return res.status(200).json({agree  });
    } catch (err) {
        next(err)
        
    }
}


export const getrequest=async (req,res,next)=>{
    try {
        const useremail = req.params.email; // Assuming the user ID is provided as a URL parameter
        
        const agree= await Agreement.find({ email: useremail });
        
        return res.status(200).json({agree  });
    } catch (err) {
        next(err)
        
    }
}

export const deleteAgree=async (req,res,next)=>{
    try {
        await Agreement.findByIdAndDelete(req.params.id)
        res.status(200).json("doc has been deleted") 
     } catch (err) {
        next(err);
    }
}
export const updateAgree=async(req,res,next)=>{
    try {
        const updateAgreement=await Agreement.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateAgreement) 
     }catch (err) {
        next(err);
    }
};