import  formidable from "formidable"
import errorHandler from "./../helpers/DBERRHANDLER"
import Gist from "./../models/gist.model"
import fs from "fs"


export const GET_GIST_ID = async (req, res, next, gistID) => {
    try {
        let gist = await Gist.where({_id: gistID}).findOne();
        if(!gist) {
            return res.status(400).json({
                error: "this gist is not found"
            })
        }
        console.log(gist)
        req.gist = gist;
        next()
    }catch (e) {

    }
};


export const CREATE = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            })
        };
        let gist = new Gist(fields)
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

export const LISTBYUSER = async (req, res) => 
{  try {    
    let gists = await Gist.find({postedBy: req.profile._id})                          
    .populate('comments.postedBy', '_id name username')                          
    .populate('postedBy', '_id name username')                          
    .sort('-created')                          
    .exec()    
    res.json(gists)  
} catch(err) {    
    return res.status(400).json({      
        error: errorHandler.GET_ERROR_MESSAGE(err)    
    })  
}}

export const LISTNEWFEEDS = async (req, res) => {
    //console.log("gist.controller.js Line 34",req.profile)
    let following = req.profile.following;
    following.push(req.profile._id);
    try {
        let gists = await Gist.find({postedBy: { $in: req.profile.following}})
        .populate('comments.postedBy', '_id name username')
        .populate('postedBy', '_id name username')
        .sort('-created')
        .exec();

        res.json(gists)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

export const LIST_A_FEED = async (req, res) => {
    try {
        let gists = await Gist.find({_id: req.gist._id })
        .populate('comments.postedBy', '_id name username')
        .populate('postedBy', '_id name username')
        .exec();

        res.json(gists)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

export const LIKE = async (req, res) => {
    try {
        let result = await Gist.findByIdAndUpdate(req.body.gistId, {$push: {likes: req.body.userId}}, {new: true})
        .populate("comments.postedBy", "_id username name")
        .populate("postedBy", "_id username name");
        res.json(result)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

export const UNLIKE = async (req, res) => {
    try {
        let result = await Gist.findByIdAndUpdate(req.body.gistId, {$pull: {likes: req.body.userId}}, {new: true})
        .populate("comments.postedBy", "_id username name")
        .populate("postedBy", "_id username name");
        res.json(result)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}


export const COMMENT = async (req, res) => {
    let comment = req.body.comment;
    comment.postedBy = req.body.userId
    try {
        let result = await Gist.findByIdAndUpdate(req.body.gistId, {$push: {comments: req.body.comment}}, {new: true})
        .populate("comments.postedBy", "_id username name")
        .populate("postedBy", "_id username name")
        res.json(result)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

export const UNCOMMENT = async (req, res) => {
    let comment = req.body.comment;
    try {
        let result = await Gist.findByIdAndUpdate(req.body.gistId, {$pull: {comments: {_id: comments._id}}}, {new: true})
        .populate("comments.postedBy", "_id username name")
        .populate("postedBy", "_id username name")
        res.json(result)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}
