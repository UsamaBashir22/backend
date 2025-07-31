import mongoose,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const  videoScheme = new Schema(
    {

        videoFile: {
            type : String, // cloudinary url
            required : true,
           

        },
         thumnail: {
            type : String, // cloudinary url
            required : true,
            
        },
         tittle: {
            type : String,
            required : true,
            
        },
        
         description: {
            type : String, 
            required : true,
            
        },
            duration: {
            type : number,  // cloudinary url
            required : true,
            
        },
          views: {
            type : number,  // cloudinary url
          default : 0,  
        },
        isPublised:{
            type:Boolean,
            required:true
        },
        onwer:{
            type : mongoose.Schema.Types.ObjectId,
                ref:"User"
        }
       
    },{timestamps:true}
)

videoScheme.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoScheme)