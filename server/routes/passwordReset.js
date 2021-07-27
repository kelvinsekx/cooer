import User from "./../models/user.model"
import Token from "./../models/OTP.model"
import sendEmail from "./../helpers/mailer"
import crypto from "crypto"
import express from "express"


const router = express.Router();

router.post("/api/password-reset", async (req, res) => {
    try {
       // validate with express validator

        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).json({
                error: `user with ${req.body.email} do not match any in our records, sorry`
            });

        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }

        const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
        await sendEmail(user.email, "Password reset", link);

        res.json({
            success: "password reset link has been sent to this mail, check it"
        });
    } catch (error) {
        res.error("an error occured");
        console.log(error);
    }
});

router.post("/api/password-reset/:userId/:token", async (req, res) => {
    try {
        // validate with express-validator

        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).json({
            error: "invalid link or expired"
        });

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res
        .status(400).error({
            error: "Invalid link or expired"
        })

        user.password = req.body.password;
        await user.save();
        await token.delete();

        res.json({
            success: "password reset sucessfully."
        });
    } catch (error) {
        res.json({
            error: "An error occured"
        });
        console.log(error);
    }
});

export default router;

