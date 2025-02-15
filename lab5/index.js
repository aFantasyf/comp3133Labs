const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/userSchema')

const app = express();
app.use(express.json())
const port = 8081

mongoose.connect("mongodb+srv://aayanf3942:p019aZkKIciWt0Hz@cluster0.crif8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{ console.log("mongo mongo mongo mongo")})
.catch(()=> {console.log("error connecting to mongo")})


app.post("/", async (req, res)=>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: "User created successfully"})
    } catch(err){
        console.log(req.body)
        res.status(400).json({ message: "error creating user"})
    }
})

app.listen(port, ()=>{
    console.log(`port running on ${port}`)
})