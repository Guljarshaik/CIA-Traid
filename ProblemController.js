import Problem from "../models/problem.js";


export const createProblem=async (req,res,next)=>{
    try {
        const {userId,Name,file,desc,phone,location,type} = req.body;
        
        const userproblem =  await Problem.create({
            Name,
            desc,
            phone,
            user:userId,
            file,
            location,
            type
        })

        const saved = await userproblem.save();

        return res.status(200).json({message:"problem created Successfully",userproblem:saved});
    } catch (err) {
        next(err)
        
    }
};

export const getProblem=async (req,res,next)=>{
    try {
        const user = req.params.userId; // Assuming the user ID is provided as a URL parameter
        
        const prob= await Problem.find({ user: user });
        
        return res.status(200).json({prob });
    } catch (err) {
        next(err)
        
    }
}


export const getproblembytype=async (req,res,next)=>{
    try {
        const type = req.params.type; // Assuming the user ID is provided as a URL parameter
        
        const prob= await Problem.find({ type: type });
        console.log("milgya")
        return res.status(200).json({prob});
    } catch (err) {
        next(err)
        
    }
}
export const getAllproblem=async (req,res,next)=>{
    try {
        //const type = req.params.type; // Assuming the user ID is provided as a URL parameter
        
        const prob= await Problem.find();
        
        return res.status(200).json({prob  });
    } catch (err) {
        next(err)
        
    }
}

export const deleteProblem=async (req,res,next)=>{
    try {
        await Problem.findByIdAndDelete(req.params.id)
        res.status(200).json("Problem has been deleted") 
     } catch (err) {
        next(err);
    }
}

