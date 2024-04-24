import mongoose from "mongoose";


const AgreeSchema=new mongoose.Schema({
    docname:{
        type:String,
        required:true,
        unique:true

    },
    file:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    sign:{
        type:String,
        required:true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencing the User model
    },
    status:{
        type:Boolean,
        default:false,
    }
   
},{timestamps:true})

export default mongoose.model("Agree",AgreeSchema)