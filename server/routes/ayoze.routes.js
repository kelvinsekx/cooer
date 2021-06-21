import {Router} from "express";
import authCtrl from "../controllers/auth.controller";
import * as ayozeCtrl from "../controllers/ayoze.controller";
import userCtrl from "../controllers/user.controller";

const router = Router();

router.route("/api/ayozes/react")
    .put(authCtrl.REQUIRE_SIGNIN, ayozeCtrl.REACT)
    
router.route("/api/ayozes/like")
    .put(authCtrl.REQUIRE_SIGNIN, ayozeCtrl.LIKE)

router.route("/api/ayozes/unlike")
    .put(authCtrl.REQUIRE_SIGNIN, ayozeCtrl.UNLIKE)

router.route("/api/ayozes/new/:userId")
    .post(authCtrl.REQUIRE_SIGNIN, ayozeCtrl.CREATE)

router.route("/api/ayozes/feed/:userId")
    .get(authCtrl.REQUIRE_SIGNIN, ayozeCtrl.LISTNEWFEEDS);

router.route("/api/ayozes/single/feed/:gossip")
    .get(authCtrl.REQUIRE_SIGNIN, ayozeCtrl.SINGLEGOSSIP);
    
router.param("userId", userCtrl.USER_BY_ID);
router.param("gossip", ayozeCtrl.SINGLEGOSSIP);

export default router;
