const express = require('express')
const app = express()
const restaurantModel = require('../models/Restaurant')


app.post('/restaurants', async(req, res)=>{
    const restaurant = new restaurantModel(req.body)
    try {
        await restaurant.save();
        res.send(restaurant);
        console.log(req.body)
      } catch (err) {
        res.status(500).send(err);
        console.log(err)
      }
})
app.get('/restaurants', async (req, res) => {
    const restaurants = await restaurantModel.find({})
    try{
        res.status(200).send(restaurants)
    } catch(e){
        res.status(500).send(e)
    }
})

app.get('/restaurants/cuisine/:cuisineName', async(req, res)=>{
    const cuisineName = req.params.cuisineName
    const restaurant = await restaurantModel.find({ cuisine: cuisineName  })
    console.log(cuisineName)
    console.log(restaurant)
    try{
        if(restaurant.length !== 0){
            res.status(200).send(restaurant)
        } else {
            res.status(404).send({ message: "Restaurant not found" });
        }
    } catch(e){
        res.status(500).send(e)
    }
})

app.get('/restaurants/RIZZ', async (req, res) =>{
    console.log("WAZZZZUPPPPPPPPPPPPPPPPPP")
    const sortBy = req.query.sortBy
    try{
    if (sortBy == 'ASC'){
        const restaurant = await restaurantModel.find({}).select("restaurant_id cuisine name city").sort({restaurant_id: 1})
        res.status(200).send(restaurant)
    } else if (sortBy == "DSC"){
        const restaurant = await restaurantModel.find({}).select("restaurant_id cuisine name city").sort({ restaurant_id : -1 })
        res.status(200).send(restaurant)
    } else{
        console.log('BRUHRRUHRURUHURURHUURRHURHURHU')
    }
    } catch(e){
        res.status(500).send(e)
    }
})

app.get('/restaurants/Delicatessen', async(req, res)=>{
    try{
        const restaurant = await restaurantModel.find({
            cuisine: "Delicatessen",
            city: { $ne : 'Brooklyn'}
        })
        if(restaurant){
            res.status(200).send(restaurant)
        } else{
            console.log("No restaurants matched", restaurant)
        }
    } catch(e){
        res.status(500).send(e)
    }
})

module.exports = app