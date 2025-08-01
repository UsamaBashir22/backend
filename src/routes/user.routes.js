import { Router } from "express";
import { resisterUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(resisterUser)

// router.post("/register", resisterUser)




export default router;