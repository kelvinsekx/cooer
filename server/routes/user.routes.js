import express from "express";
import userCtrl from "../controllers/user.controller";
import authCtrl from "../controllers/auth.controller";

const ROUTER = express.Router();

ROUTER.route("/api/users")
    .get(userCtrl.LIST_ALL_USERS)
    .post(userCtrl.CREATE_NEW_USER);
    
const undoUser = userCtrl.REMOVE;
ROUTER.route("/api/users/:userId")
    .get(authCtrl.REQUIRE_SIGNIN,
        userCtrl.READ)

    .put(authCtrl.REQUIRE_SIGNIN, 
        authCtrl.HAS_AUTHORIZATION,
        userCtrl.UPDATE)

    .delete(authCtrl.REQUIRE_SIGNIN, 
        authCtrl.HAS_AUTHORIZATION ,
        undoUser);

ROUTER.route("/api/users/:userId/follow")
    .put(authCtrl.REQUIRE_SIGNIN,
    userCtrl.ADDFOLLOWING,
    userCtrl.ADDFOLLOWER);

ROUTER.route("/api/users/:userId/unfollow")
    .put(authCtrl.REQUIRE_SIGNIN,
    userCtrl.REMOVEFOLLOWING,
    userCtrl.REMOVEFOLLOWER);

ROUTER.route('/api/users/u/photo/:userId')  
    .get(userCtrl.PHOTO);


ROUTER.param("userId", userCtrl.USER_BY_ID);

export default ROUTER;