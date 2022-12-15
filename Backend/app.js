const express = require('express');
const path = require('path');
// const ejsMate = require('ejs-mate');
const { ObjectId } = require("mongodb")
const methodOverride = require('method-override');
require('dotenv').config()
const cors = require('cors')
// const alumni = require('./models/alumni');
// const careerflow = require('./models/careerflow');
// const nodemailer = require('nodemailer')

const db = require('./db')
db.initDb((err, db) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected")
        const port = process.env.PORT || 9000
        app.listen(port)
    }
})

const app = express();

app.use(cors({origin: true, credentials: true}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use(methodOverride('_method'));

app.get('/',async(req,res)=>
{
    //const {name, email, phone, college, depart_sec} = req.body
    const database = db.getDb().db("uc3club")
    try {
        const eventList = await database.collection("users").find().toArray();
        res.status(200).json(eventList)
    } catch (error) {
        res.status(500).json(error)
    }


})
app.get('/admin',async(req,res)=>
{    


    console.log("hiiiiiiiiiiiiiiiiii")
    //const {name, email, phone, college, depart_sec} = req.body
    const database = db.getDb().db("uc3club")
    try {
        const eventList = await database.collection("users").find().toArray();
        console.log(eventList)
        res.send(eventList)
        
    } catch (error) {
        res.status(500).json(error)
    }


})

app.post('/', async(req, res)=>{
    try {
        // console.log(req.body)
        const database = db.getDb().db("uc3club")
        await database.collection("users").insertOne(req.body);
        const eventList = await database.collection("users").find().toArray();
        res.status(200).json(eventList)
    } catch (error) {
        res.status(500).json(error)
    }
    
})