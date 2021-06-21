import  formidable from "formidable"
import errorHandler from "./../helpers/DBERRHANDLER"
import Ayoze from "./../models/ayoze.model"
import fs from "fs"

export const CREATE = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            })
        };
        let gist = new Ayoze(fields)
        gist.postedBy = req.profile;
        if (files.photo) {
            gist.photo.data = fs.readFileSync(files.photo.path);
            gist.photo.contentType = files.photo.type
        }
        
        try {
            let result = await gist.save();
            res.json(result)
        } catch (err) {
            return res.status(400).json({
                error: errorHandler.GET_ERROR_MESSAGE(err)
            })
        }
    })
}

export const LISTNEWFEEDS = async (req, res) => {
    // let following = req.profile.following;
    // following.push(req.profile._id);
    try {
        let gists = await Ayoze.find({postedBy: { $in: req.profile._id}})
        // .populate('comments.postedBy', '_id name')
        // .populate('postedBy', '_id name')
         .sort('-created')
        .exec();

        res.json(gists)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

export const SINGLEGOSSIP = async (req, res, next, id) => {
    try {
        let gists = await Ayoze.findOne({_id: id})
        console.log(gists)
        res.json(gists)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

export const LIKE = async (req, res) => {
    try {
        let result = await Ayoze.findByIdAndUpdate(req.body.gistId, {$push: {likes: req.body.userId}}, {new: true});
        res.json(result)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

export const UNLIKE = async (req, res) => {
    try {
        let result = await Ayoze.findByIdAndUpdate(req.body.gistId, {$pull: {likes: req.body.userId}}, {new: true});
        res.json(result)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

export const REACT = async (req, res) => {
    let reaction = req.body.reaction;
    reaction.postedBy = req.body.userId
    try {
        let result = await Ayoze.findByIdAndUpdate(req.body.ayozeId, {$push: {reactions: req.body.reaction}}, {new: true})
        .populate("reactions.postedBy", "_id name username")
        res.json(result)
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}
