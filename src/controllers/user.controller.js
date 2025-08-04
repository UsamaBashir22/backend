import { asyncHandler } from "../utils/utilities.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudnary } from "../utils/cloundnary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const resisterUser = (async(req,res)=>{
    // console.log("hi")
//    res.status(200.).json({
//         message:"usama"
//     })

const {fullName,username,email,password} = req.body
console.log("username:",username);

                                                                     
      if ([fullName,username,password,email]) {                   // if (fullName === "") {
        throw new ApiError(400,"All fields are requires");          //     throw new ApiError(400,"fullName name required fields")
      }                                                              // }               
                                                                                  
const existUser = User.findOne({
    $or: ([{username},{email}])
})
if (existUser) {
    throw new ApiError(409,"User with email or Alredy exist User");

}

const avatarLocalPath = avatar ? avatar[0]?.path: undefined
const coverImageLocalPath = coverImage ? coverImage[0]?.path :undefined

if (!avatarLocalPath) {
    throw new ApiError(400,"avatar files is require")
    
} 
const avatar = uploadOnCloudnary (avatarLocalPath)
const coverImage = uploadOnCloudnary (coverImageLocalPath)
if (!avatar) {
     throw new ApiError(400,"avatar files is requir")
    
}

const user =  await User.create({
    fullName,
    avatar : avatar.url,
    coverImage : coverImage?.url || "",
    email,
    password,
    username : username.toLowerCase()

})
const createdUser = await User.findById(user._id).select("-password -refressToken" )

if (!createdUser) {
    throw new ApiError(500,"something went wrong while resistered the user");
    
    
}

// return res.status(201).json({createdUser})

return res.status(201).json(

    new ApiResponse (200, createdUser, "User registered successfully")
)





})

export {resisterUser}



// get user detail from fronend
// validation - not empty
// check if user already exist: username,password
// check for image , check for avatar
// upload them to cloudnary , avatar
// create user object - create entry in db
// remove password and refress token field from response
// check for user creation
// return res
