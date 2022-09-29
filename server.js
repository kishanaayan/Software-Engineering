import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from "mongoose";
import PostRouteInt from "../Routes/POSTS.js"
import dotenv from "dotenv"

const app = express();

dotenv.config();

//midlewares
app.use(cors());
app.use(express.json());


const connect = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://pranavnaikp:%40123Pranav@cluster0.xlmx59u.mongodb.net/?retryWrites=true&w=majority")
        console.log("using mongodb now")
    }catch(err){
        console.log(err);
    }
}

mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})


mongoose.connection.on("disconnected",()=>{
    console.log("disconnected from mongodb")
})

const PORT = process.env.PORT||8080;


//routing
app.use("/",PostRouteInt);

//listening in PORT NUMBER 8080
app.listen(PORT,()=>{
    connect();
    console.log("now connected to backend");
})




