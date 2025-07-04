import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { configDotenv } from 'dotenv'

configDotenv()

// console.log( 'Cloudinary Config:', {
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: 'badges',
      allowed_formats: ['jpg', 'jpeg', 'png', 'svg'],
      format: 'auto',
      resource_type: 'image', 
      transformation: [{ width: 200, height: 200, crop: 'limit' }]
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.svg')
    }
  })

// cloudinary.api.ping()
//   .then(response => console.log('Cloudinary connection verified:', response))
//   .catch(err => console.error('Cloudinary connection failed:', err));

export { cloudinary, storage }
