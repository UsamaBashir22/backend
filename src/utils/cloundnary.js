import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRET// Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudnary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudnary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        })
        // files upload Cloudnary sucessfully
        console.log('file is upload on cloudnary', response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved  temporay files as the upload operation got failed
        return null

    }
}
export {uploadOnCloudnary}