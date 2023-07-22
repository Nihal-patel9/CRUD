const express = require("express");
const app = express();

const cors = require("cors");

//middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// using cors
app.use(cors())

// Database Connection 
const connectToDb = require("./config/db.js")
connectToDb();

const userRoutes = require("./routes/userRoutes.js");

app.use('/', userRoutes);

module.exports = app;