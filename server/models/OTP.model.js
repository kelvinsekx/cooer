import mongoose from "mongoose";

const {Schema, model} = mongoose;
const otpSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
	type: Date,
	default: Date.now,
	expires: 3600
   }
});

export default model("OTP", otpSchema);

