import mongoose from "mongoose";
import {autopopulate} from "./../helpers/autoPopulate"

const COMMENTSCHEMA = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: { type: String, required: "Text is required"},
    photo: { data: Buffer, contentType: String },
    likes: [{type: mongoose.Schema.ObjectId, ref: "User"}],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
},
{timestamps: true});

// Always populate the author field
COMMENTSCHEMA
  .pre('findOne', autopopulate('postedBy'))
  .pre('find', autopopulate('postedBy'))
  .pre('findOne', autopopulate('comments'))
  .pre('find', autopopulate('comments'));

export default mongoose.model('Comment', COMMENTSCHEMA);