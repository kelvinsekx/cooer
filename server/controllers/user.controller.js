import User from "../models/user.model";
import extend from "lodash/extend";
import errorHandler from "../helpers/DBERRHANDLER";
import profile from "./../../server/images/anonymprofile.png"
import process from "process";

const CREATE_NEW_USER = async (req, res)=> {
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(201).json({
            message: "Successfully signed up!"
        })
    }catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

const LIST_ALL_USERS = async (req, res) => {
    try {
        let users = await User.find().select('username email name photo bio');
        res.json(users)
    } catch(err){
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

const USER_BY_ID = async (req, res, next, username)=> {
    try {
        let user = await User.findOne({username})
            .populate("following", "_id name username")
            .populate("followers", "_id name username")
            .exec()
        if(!user) {
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user;
        next()
    }catch(err){
        return res.status(400).json({
            error: "could not retrieve user"
        })
    }
};

const READ = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile)
}
import formidable from 'formidable'
import fs from 'fs'
const UPDATE = async (req, res)=> {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {    
        if (err) {      
            return res.status(500).json({        
                error: "Photo could not be uploaded"      
            })    
        }    
        let user = req.profile    
        user = extend(user, fields)    
        user.updated = Date.now()
        if(files.photo){       
            user.photo.data = fs.readFileSync(files.photo.path)       
            user.photo.contentType = files.photo.type    }    
            try {      
                await user.save()     
                 user.hashed_password = undefined;      user.salt = undefined      
                 res.json(user)    
            } catch (err) {      
                return res.status(400).json({        
                    error: errorHandler.GET_ERROR_MESSAGE(err)      
                })    
            }  
    })
}

const PHOTO = (req, res, next) => {  
    if(req.profile.photo.data){    
        res.set("Content-Type", req.profile.photo.contentType)    
        return res.send(req.profile.photo.data)  
    }
    next()
}

const DEFAULTPHOTO = (req, res) => {
    return res.sendFile(process.cwd()+"/server/"+profile)
}

const ADDFOLLOWING = async (req, res, next)=>{
    try {
            await User.findByIdAndUpdate(req.body.ID, {$push: {following: req.body.followId}});
            next()
    }catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

const ADDFOLLOWER = async (req, res)=>{
    try {
            let result = await User.findByIdAndUpdate(req.body.followId, {$push: {followers: req.body.ID}}, {new: true})
            .populate('following','_id name' )
            .populate('followers', '_id name')
            .exec()

            result.hashed_password = undefined;
            result.salt = undefined;
            res.json(result)
    }catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

const REMOVEFOLLOWING = async (req, res, next)=>{
    try {
            await User.findByIdAndUpdate(req.body.ID, {$pull: {following: req.body.unfollowId}});
            next()
    }catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

const REMOVEFOLLOWER = async (req, res)=>{
    try {
            let result = await User.findByIdAndUpdate(req.body.unfollowId, {$pull: {followers: req.body.ID}}, {new: true})
            .populate('following','_id name' )
            .populate('followers', '_id name')
            .exec()

            result.hashed_password = undefined;
            result.salt = undefined;
            res.json(result)
    }catch (err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
}

const REMOVE = async (req, res)=> {
    try {
        let user = req.profile;
        let deletedUser = await user.remove();
        deletedUser.hashed_password = undefined;
        deletedUser.salt = undefined;
        res.json(deletedUser)
    } catch(err) {
        return res.status(400).json({
            error: errorHandler.GET_ERROR_MESSAGE(err)
        })
    }
};

const DISABLE_ME = (req, res) => {
    res.status(200).send("It will be done soon")
}


export default {CREATE_NEW_USER, LIST_ALL_USERS, USER_BY_ID, READ, UPDATE, ADDFOLLOWER, ADDFOLLOWING, REMOVEFOLLOWING, REMOVEFOLLOWER, REMOVE, DISABLE_ME, PHOTO, DEFAULTPHOTO}