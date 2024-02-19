import React from "react";
const multer = require("multer");
import dotenv from "dotenv"
dotenv.config()
const { GridFsStorage } = require("multer-gridfs-storage");
const storage = new GridFsStorage({
  url: process.env.Mongo_URL,
});


const upload = () => {
  
  return <div></div>;
};

export default upload;
