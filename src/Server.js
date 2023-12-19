const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require("./routes/SellerRoute");
const userRouter = require('./routes/UserRoute');
const productRouter = require('./routes/FigureRoute');
const orderRouter = require('./routes/OrderRoute');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
dotenv.config()

app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use("/", router);
app.use("/",userRouter);
app.use("/",productRouter);
app.use("/",orderRouter)
require('dotenv').config();
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };
  app.use(cors(corsOptions));
app.use(cookieParser());
mongoose.connect('mongodb+srv://tsittidet:thereallalune@findfigdb.4gxdoii.mongodb.net/FindFigDB', {
    useNewUrlParser: true
});

const connection = mongoose.connection; 
connection.once("open", () => {
    console.log("MongoDB database connected.");
});

// Mount the SellerRoute at the /Sell endpoint



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});
