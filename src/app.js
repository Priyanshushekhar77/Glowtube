import  express from "express";
const app = express()

import cookieParser from "cookie-parser";
import cors from "cors";

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))//cross origin resource sharing to connect with frontend

app.use(express.json({limit:"16kb"}))//instead of bodyparser to request particular limit of json file

app.use(express.urlencoded({extended:true,limit:"16kb"}))//to get/req data in url form

app.use(express.static("public"))// sometimes to store file/folder in public assets folder

app.use(cookieParser())//server can only read or delete and kept securely on browser of user




export {app}