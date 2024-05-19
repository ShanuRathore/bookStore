import express from 'express'
import dotenv from 'dotenv'
//import mongo client 
import  {MongoClient} from 'mongodb' 
import mongoose from "mongoose";

import bookRoute from './route/book.route.js'
import bookaddRoute from './route/bookpost.js'
import userRoute from './route/userroute.js'

import cors from 'cors'

const app = express()

app.use(express.json());// these 2 lines are must for sending
app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 4000;
//connect to MongoDb

async function main() {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "BookStore",
    }).then(()=>{
        console.log("Connected to database Successfully")
    }).catch((err)=>{
        console.log(`Some error occured while connecting to database! ${err} `);
    })
}


main().catch(console.error);

app.get("/", (req, res) => {
  res.send("Hello World!")
})

//defining routs
app.use("/book", bookRoute)
app.use("/bookadd",bookaddRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})