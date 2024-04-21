const express = require('express');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());


app.use("/img", express.static("./uploads"));
// app.use(express.static(__dirname+'/uploads'))

const userRoute = require("./router/UserRoute");
const addProducts = require("./router/ProductRoute");



app.use("/api/v1", userRoute);
app.use("/api/v1", addProducts);




module.exports = app;