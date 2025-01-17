const cloudinary = require('cloudinary').v2;
require("dotenv").config();
const uploadToCloudinary = async(imageBuffer, id)=>
{
    try
    {
        cloudinary.config(
        { 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        const options =  
        {
            resource_type:"image",
            public_id:`Profile-Image:${id}`,
            overwrite:true,
            fetch_format: 'auto',
            quality: 'auto',
            crop: 'auto',
            gravity: 'auto',
            width: 500,
            height: 500,
        };

        const uploadPromise = await new Promise((resolve,reject) =>
        {
            cloudinary.uploader.upload_stream(options,async (error, result) => 
                {
                    if (error)  
                    {
                        reject(error);
                    } 
                    else 
                    {
                        resolve(result);
                    }
                }).end(imageBuffer);          
        })

        return uploadPromise.secure_url
    }
    catch(error)
    {
        console.log(error);
        return false;
    }
}

module.exports = 
{
    uploadToCloudinary
};
