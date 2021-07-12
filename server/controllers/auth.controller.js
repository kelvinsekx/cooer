import User from "../models/user.model";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import config from "./../../config/config";

const SIGNIN = async (req, res) => {
    try {
        let user = await User.findOne({"email": req.body.email});
        if(!user) {
            return res.status('401').json({
                error: "User not found"
            });
        };

        if(!(user.authenticate(req.body.password))) {
            return res.status('401').json({
                error: "Email and password don't match"
            })
        };

        const token = jwt.sign({_id: user._id}, config.jwtSecret);

        //{ expires: new Date(Date.now() + 900000), httpOnly: true })

        res.cookie("user", user.username, {expires: new Date(Date.now()+ 9999999999), sign: true })
        res.cookie("token", token, {expires: new Date(Date.now()+ 9999999999), sign: true })

        return res.json({
            token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (err) {
        return res.status(401).json({
            error: "could not sign in"
        })
    }
};

const SIGNOUT = (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({
        message: "signed out"
    })
};

const REQUIRE_SIGNIN =  expressJwt({
    secret: config.jwtSecret,
    userProperty: "auth"
});

const HAS_AUTHORIZATION = (req, res, next)=> {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!(authorized)) {
        return res.status(403).json({
            error: "User is not authorized"
        })
    };
    next()
};

export default {SIGNIN, SIGNOUT, REQUIRE_SIGNIN, HAS_AUTHORIZATION}