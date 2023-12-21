import mongoose from "mongoose";
import dotenv from "dotenv"//because of ejs module
// require('dotenv').config()
// import { DB_NAME } from "../constants";

const connectdb = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`\n MongoDB connected and DB host at :${connectionInstance.connection.host} and port at ${process.env.PORT}`);
    }
    catch(error){
        console.log("mongodb database connectin error",error);
        process.exit(1)
    }
}

export default connectdb
