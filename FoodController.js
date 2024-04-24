import Food from "../models/food.js";


export const createfood=async (req,res,next)=>{
    try {
        const {userId,Name,file,phone,location,type} = req.body;
        
        const  food=  await Food.create({
            Name,
            type,
            phone,
            user:userId,
            file,
            location,
            
        })

        const saved = await food.save();

        return res.status(200).json({message:"food created Successfully",food:saved});
    } catch (err) {
        next(err)
        
    }
};

export const getFood=async (req,res,next)=>{
    try {
        const user = req.params.userId; // Assuming the user ID is provided as a URL parameter
        
        const foo= await Food.find({ user: user });
        
        return res.status(200).json({foo });
    } catch (err) {
        next(err)
        
    }
}


export const getfoodbytype=async (req,res,next)=>{
    try {
        const type = req.params.type; // Assuming the user ID is provided as a URL parameter
        
        const foo= await Food.find({ type: type });
        console.log("milgya")
        return res.status(200).json({foo});
    } catch (err) {
        next(err)
        
    }
}
export const getAllfood=async (req,res,next)=>{
    try {
        //const type = req.params.type; // Assuming the user ID is provided as a URL parameter
        
        const foo= await Food.find();
        
        return res.status(200).json({foo});
    } catch (err) {
        next(err)
        
    }
}
export const deletefood=async (req,res,next)=>{
    try {
        await Food.findByIdAndDelete(req.params.id)
        res.status(200).json("Food has been deleted") 
     } catch (err) {
        next(err);
    }
}

export const updatefood=async(req,res,next)=>{
    try {
        const updatefood=await Food.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updatefood) 
     }catch (err) {
        next(err);
    }
};
export const getfoodbyemail=async (req,res,next)=>{
    try {
        const useremail = req.params.email; // Assuming the user ID is provided as a URL parameter
        
        const foo= await Food.find({ email: useremail });
       // console.log("milgya")
        return res.status(200).json({foo});
    } catch (err) {
        next(err)
        
    }
}

