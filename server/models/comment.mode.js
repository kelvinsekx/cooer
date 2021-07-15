import mongoose from "mongoose";

const COMMENTSCHEMA = new mongoose.Schema({
    text: { type: String, required: "Text is required"},
    photo: { data: Buffer, contentType: String },
    created: {type: Date, default: Date.now},
    postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
    likes: [{type: mongoose.Schema.ObjectId, ref: "User"}],
    comment: [{
        
    }]
})