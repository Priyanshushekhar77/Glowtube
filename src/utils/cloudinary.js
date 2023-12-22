import {v2 as cloudinary} from "cloudinary"
import fs from "fs" //operations on file system

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null;
        //upload file on cloudinary
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file uploaded
        console.log("file upload on cloudinary suucessfully",response.url);
        return response;
    }
    catch(error){
         fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload operation get failed
         return null;
    }
}

export {uploadOnCloudinary}
// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });
