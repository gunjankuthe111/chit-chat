require("dotenv").config();
const express = require("express")
const cors = require("cors");
const connectDB = require("./config/db");

const PORT =  process.env.PORT
const app= express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,async()=>{
    await connectDB()
    console.log(`Listening to http://locaolhost:${PORT}`)
})