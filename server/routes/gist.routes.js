import {Router} from "express";
import authCtrl from "../controllers/auth.controller";
import * as gistCtrl from "../controllers/gist.controller";
import userCtrl from "../controllers/user.controller";

const router = Router();

router.route("/api/gists/comment")
    .put(authCtrl.REQUIRE_SIGNIN, gistCtrl.COMMENT)

router.route("/api/gists/uncomment")
    .put(authCtrl.REQUIRE_SIGNIN, gistCtrl.UNCOMMENT)
    
router.route("/api/gists/like")
    .put(authCtrl.REQUIRE_SIGNIN, gistCtrl.LIKE)

router.route("/api/gists/unlike")
    .put(authCtrl.REQUIRE_SIGNIN, gistCtrl.UNLIKE)

router.route("/api/gists/new/:userId")
    .post(authCtrl.REQUIRE_SIGNIN, gistCtrl.CREATE)

router.route("/api/gists/feed/:userId")
    .get(authCtrl.REQUIRE_SIGNIN, gistCtrl.LISTNEWFEEDS);

router.route('/api/gists/by/:userId/getCoos')    
    .get(authCtrl.REQUIRE_SIGNIN, gistCtrl.LISTBYUSER);
    
router.param("userId", userCtrl.USER_BY_ID);

export default router;
