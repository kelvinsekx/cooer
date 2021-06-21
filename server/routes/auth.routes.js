import {Router} from "express";
import authCtrl from "../controllers/auth.controller";

const router = Router();

router.route("/auth/signin")
    .post(authCtrl.SIGNIN);

router.route("/auth/signout")
    .get(authCtrl.SIGNOUT)

export default router;