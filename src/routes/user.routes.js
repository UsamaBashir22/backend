import { Router } from "express";
import { resisterUser } from "../controllers/user.controller.js";
import { upload } from  "../middleware/multer.midlerware.js"
import multer from "multer";

const router = Router()

router.route("/register").post(

    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },{
            name:"coverImage",
            maxCount:1
        }

    ]),
    resisterUser
)

// router.post("/register", resisterUser)




export default router;