const mongoose = require('mongoose')
const emailRegEx = /^\S+@\S+\.\S+$/
const cityRegEx = /^[a-zA-Z\s]+$/
const zipRegEx = /^\d{5}-\d{4}$/
const webRegEx = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
const phoneRegEx = /^1-\d{3}-\d{3}-\d{4}$/

const userSchema = new mongoose.Schema({
    name:{
        type:String, 
        required: true
    },
    userName:{
        type:String,
        required: [true, "UserName is required"],
        minLength: [4, "Username must be atleast 4 characters"]
    },
    email:{
        type:String,
        required:true, 
        match: [emailRegEx, "Must be in valid format XXX@XXX.com"]
    },
    address:{
        street:{
            type:String, 
            requried:true
        },
        suite:{
            type:String, 
            requried:true
        },
        city:{
            required: true,
            type:String,
            match: [cityRegEx, "Must be valid City Name"]
        },
        zip:{
            type:String,
            required: [true, "zip is required"],
            match: [zipRegEx, "Must be valid zip code"]
        },
        geo:{
            lat:{
                type:String,
                required: true
            },
            lng:{
                type:String,
                required:true
            }
        }
    },
    phone:{
        type:String,
        required: [true, "phone number is required"],
        match: [phoneRegEx, "Must be valid phone number "]
    },
    web:{
        type:String,
        required: [true, "web is required"],
        match: [webRegEx, "Must be valid web"]
    }
})
const User = mongoose.model("User", userSchema)
module.exports = User