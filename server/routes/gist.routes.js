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
    
router.route("/api/gists/rateGossip")
    .put(authCtrl.REQUIRE_SIGNIN, gistCtrl.RATE_GOSSIP)

router.route("/api/gists/new/:userId")
    .post(authCtrl.REQUIRE_SIGNIN, gistCtrl.CREATE)

router.route("/api/gists/feed/:userId")
    .get(gistCtrl.LISTNEWFEEDS);

router.route("/api/gists/feed/singlefeed/:gistId")
    .get(gistCtrl.LIST_A_FEED)

router.route("/api/gists/feed/singlecomment/:commentId")
    .get(gistCtrl.LIST_A_COMMENT)

router.route('/api/gists/by/:userId/getCoos')    
    .get(authCtrl.REQUIRE_SIGNIN, gistCtrl.LISTBYUSER);
    
router.param("userId", userCtrl.USER_BY_ID);
router.param("gistId", gistCtrl.GET_GIST_ID);

export default router;
