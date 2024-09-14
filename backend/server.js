import express from "express";
import authRotes from "./routes/auth.routes.js";
import userRotes from "./routes/user.routes.js";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
dotenv.config()

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const app= express()
const port=process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended:true})) //to parse form data
app.use(cookieParser())

app.use("/api/auth",authRotes)
app.use("/api/users",userRotes)

app.listen(port,()=>{
    console.log(`server running on ${port}`)
    connectDB()
})