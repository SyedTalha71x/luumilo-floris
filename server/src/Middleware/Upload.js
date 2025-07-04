import multer from "multer";
import { storage } from "../Utils/cloudinary.js";



const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 
  },
  fileFilter: (req, file, cb) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/svg+xml'
      ) {
      cb(null, true)
    } else {
      cb(new Error('Only SVG files are allowed'), false)
    }
  }
})

export default upload;
