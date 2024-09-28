import express from "express";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
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

app.use(express.json({limit:"5mb"})) //to parse req.body
app.use(express.urlencoded({extended:true})) //to parse form data
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/notifications",notificationRoutes)

app.listen(port,()=>{
    console.log(`server running on ${port}`)
    connectDB()
})