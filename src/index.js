// require('dotenv').config()
import dotenv from "dotenv"
import connectdb from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectdb()


import  Express  from "express";


//method 1 of db connection 
// (async ()=> {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error) => {
//             console.log("error");
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening at port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.log("error",error)
//         throw error
//     }
// })()