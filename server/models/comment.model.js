import mongoose from "mongoose";

const COMMENTSCHEMA = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: { type: String, required: "Text is required"},
    photo: { data: Buffer, contentType: String },
    likes: [{type: mongoose.Schema.ObjectId, ref: "User"}],
},
{timestamps: true});

export default mongoose.model('Comment', COMMENTSCHEMA);