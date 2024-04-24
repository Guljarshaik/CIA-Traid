import express from "express"
import dotenv from"dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import Agreement from "./routes/agreement.js"
import Food from "./routes/food.js"
import Problem from "./routes/problem.js"
import Email from "./routes/email.js"
import cors from 'cors';

const app=express()
dotenv.config()

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    }catch(error){
        throw error;
    }

    };
    mongoose.connection.on("disconnected",()=>{
        console.log("Mongodb disconnected")
    })
    
    app.use(cors());

    app.use(express.json())
    app.use("/api/auth",authRoute);
    app.use("/api/agreement",Agreement);
    app.use('/api/problem',Problem);
    app.use('/api/food',Food);
    app.use('/api/email',Email);

app.listen(8100,()=>{
    connect();
    console.log("connected")

})
