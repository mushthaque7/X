import express from "express";
import authRotes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import cookieParser from "cookie-parser";

dotenv.config()

const app= express()
const port=process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended:true})) //to parse form data
app.use(cookieParser())
app.use("/api/auth",authRotes)









app.listen(port,()=>{
    console.log(`server running on ${port}`)
    connectDB()
})