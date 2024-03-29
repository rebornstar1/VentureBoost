import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
     
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET, 
});

const uploadCloudinary  = async (localFilePath) => {
    try{
      if(!localFilePath) return null;
      const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type: "auto"
      })
      console.log("File is Being Uploaded Successfully",response.url);
      return response;
    } catch(error){
        fs.unlink(localFilePath);
        return null;
    }
}