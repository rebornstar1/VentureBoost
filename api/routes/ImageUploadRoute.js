import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import sharp from "sharp";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import dotenv from "dotenv"
dotenv.config();
     
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET, 
});

const uploadCloudinary  = async (localFilePath) => {
  console.log(localFilePath);
    try{
      if(!localFilePath) return null;
      // const modifiedPath = localFilePath.replace(/\\/g, '/')
      // console.log(modifiedPath);
      const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type: "auto"
      })
      console.log("File is Being Uploaded Successfully",response.url);
      fs.unlinkSync(localFilePath);
      return response;
    } catch(error){
        console.log(error);
        fs.unlinkSync(localFilePath);
        return null;
    }
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express();
router.use(bodyParser.json());
// const sharp = require("sharp");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage });
router.use('/a',express.static('/b'));
router.use(express.static(__dirname + '/public'));
router.use('/uploads', express.static('uploads'));

router.post("/image", upload.single("Projectlogo"),async (req, res) => {
  try {
    console.log(req.file);
    // await sharp(req.file.buffer)
    //   .resize({ width: 250, height: 250 })
    //   .png()
    //   .toFile(`__dirname + /images/${req.file.originalname}`);
    const val = await uploadCloudinary(req.file.path)
    res.status(201).json(val);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/video",upload.single("VideoPitch"),async(req,res) => {
  try {
    console.log(req.file);
    // await sharp(req.file.buffer)
    //   .resize({ width: 250, height: 250 })
    //   .png()
    //   .toFile(`__dirname + /images/${req.file.originalname}`);
    const val = await uploadCloudinary(req.file.path)
    res.status(201).json(val);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default router;
