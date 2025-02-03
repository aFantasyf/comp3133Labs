const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    address:{
        building:{
            type: String,
            required: false
        },
        street:{
            type: String,
            required: true
        },
        zipcode:{
            type: String,
            required: true
        }
    },
    city:{
        type: String,
        required: true
    },
    cuisine:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    restaurant_id:{
        type: Number,
        required: true
    }
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
module.exports = Restaurant