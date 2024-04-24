import User from "../models/user.js"
import bcrypt from "bcryptjs";
import {createError} from "../utils/error.js"
import jwt from "jsonwebtoken";
export const register=async (req,res,next)=>{
    try {
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            role:req.body.role,
        })
        await newUser.save()
        return res.status(200).json({message:"user has been created",newUser})
    } catch (err) {
        next(err)
        
    }
};

export const login= async (req,res,next)=>{
    try {
        const user=await User.findOne({email: req.body.email})
        if(!user) return next(createError(404,"user not found!"))
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
          );
        if (!isPasswordCorrect)
        {
            return next(createError(400, "Wrong password or username!"));}
        const token=jwt.sign({id:user._id},process.env.JWT);
        
        const { password, ...otherDetails} =user._doc;
        res.cookie("access_token",token,{
        httpOnly:true,
        })
        .status(200).json({...otherDetails});
    } catch (err) {
        next(err);
        
    }
   
    };

    export const AllUser=async (req,res,next)=>{
        try {
            //const type = req.params.type; // Assuming the user ID is provided as a URL parameter
            
            const user= await User.find();
            
            return res.status(200).json({user});
        } catch (err) {
            next(err)
            
        }
    } 
    
    export const deleteUser=async (req,res,next)=>{
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted") 
         } catch (err) {
            next(err);
        }
    }
    export const updateUser=async(req,res,next)=>{
        try {
            const updateuser=await User.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
            res.status(200).json(updateuser) 
         }catch (err) {
            next(err);
        }
    };
