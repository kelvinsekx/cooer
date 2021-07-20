import mongoose from "mongoose";

const GISTSCHEMA = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },

    photo: {
        data: Buffer,
        contentType: String
    },

    postedBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },

    created: {type: Date, default: Date.now },

    likes: [{type: mongoose.Schema.ObjectId, ref: "User"}],

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

export default mongoose.model("Gist", GISTSCHEMA)