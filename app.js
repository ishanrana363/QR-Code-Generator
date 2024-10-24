const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require("dotenv").config()
const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const dbUrl = process.env.MONGO_URI;

mongoose.connect(dbUrl).then((res) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});

app.get("/", (req, res) => {
    res.send("Server is running!");
});

const router = require("./src/routes/api");

app.use('/api/v1', router);



module.exports = app;