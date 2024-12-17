// const multer = require('multer')
// const path = require('path')
// const fs = require('fs');

// const uploadDir = path.join(__dirname , '../uploads');

// if(!fs.existsSync(uploadDir)){
//     fs.mkdirSync(uploadDir,{recursive:true});
// }


// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cd(null,uploadDir);
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+'_'+file.originalname)
//     }
// })
// const upload = multer({storage:storage})
// export default  upload ;


const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary = require('../config/coudinary'); 

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'complaints', 
        allowed_formats: ['jpg', 'jpeg', 'png','webp'],
    },
});

const upload = multer({ storage });

module.exports = upload;
