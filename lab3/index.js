const express = require('express')
const mongoose = require('mongoose')
const restaurantRouter = require('../lab3/routes/RestaurantRoutes')

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://aayanf3942:1oGzNZSSa96coeYS@cluster0.qgklr.mongodb.net/lab3_Restaurant?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(success => {
    console.log('Success Mongodb connection')
  }).catch(err => {
    console.log('Error Mongodb connection')
  });
  
  app.use(restaurantRouter);
  
  app.listen(8081, () => { console.log('Server is running...') });

