require("dotenv").config();
const express = require("express")
const cors = require("cors");
const connectDB = require("./config/db");

const signupRoute= require("./routes/signup.route")
const loginRoute= require("./routes/login.route");
const middleware = require("./controllers/middleware");
const chatRoute= require("./routes/chat.route");
const searchUserRoute= require("./routes/searchUser.route");
const groupCahtRoute= require("./routes/groupChat.route");

const PORT =  process.env.PORT
const app= express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/signup",signupRoute)
app.use("/login",loginRoute)

// app.use(middleware)
app.use("/chat",chatRoute)
app.use("/group-chat", groupCahtRoute);
app.use("/user",groupCahtRoute)
app.use("/user/search",searchUserRoute)

app.listen(PORT,async()=>{
    await connectDB()
    console.log(`Listening to http://localhost:${PORT}`)
})