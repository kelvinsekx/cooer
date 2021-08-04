import mongoose from "mongoose";
import crypto from "crypto"

const USERSCHEMA = new mongoose.Schema({
    photo: {
        type: String,
        default: "https://res.cloudinary.com/joi-de-vivro/image/upload/v1626030848/sample.jpg"
    },
    username: {
        type: String,
        trim: true,
        required: 'Username is required',
        unique: "username already exists"
    },

    name: {
        type: String,
        trim: true
    },

    bio: {
        type: String,
        trim: true,
        default: "Hey dear, I'm onstreet"
    },

    gender: {
        type: String,
        required: "Gender type is required"
    },

    anonymousName: {
        type: String,
        trim: true
    },

    telephone: {
        type: String,
        trim: true,
        required: "telephone is required"
    },

    securityQuestion: {
        type: String,
        trim: true
    },

    securityAnswer: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        trim: true,
        unique: "Email already exists",
        match: [/.+\@.+\.com/, "please fill a valid email address"],
        required: "email field is required"
    },
    following: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    followers: [{type: mongoose.Schema.ObjectId, ref: 'User'}],

    join:{
        type: Date,
        default: Date.now
    },

    update: Date,

    hashed_password: {
        type: String,
        required: "Password is required"
    },

    salt: String
});

USERSCHEMA
    .virtual("password")
    .set(function(password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function() {
        return this._password
    })

USERSCHEMA.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) == this.hashed_password
    },

    encryptPassword: function(password) {
        if(!password) return '';
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex")
        }catch(error) {
            return ""
        }
    },

    makeSalt: function (){
        return Math.round((new Date().valueOf()* Math.random()) ) + ""
    }

};

USERSCHEMA.path("hashed_password").validate(
    function(v) {
        if(this._password && this._password.length < 8) {
            this.invalidate("password", "password must be at least 8 characters long")
        };

        if(this.isNew && !this.password) {
            this.invalidate("password", "password is required")
        }
    }, null
)

export default mongoose.model("User", USERSCHEMA)