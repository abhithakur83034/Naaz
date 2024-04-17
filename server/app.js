const express = require('express');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());


app.use("/img", express.static("./uploads"));


const userRoute = require("./router/UserRoute");
const adminRoute = require('./router/AdminRoute');



app.use("/admin", adminRoute);
app.use("/user", userRoute);




module.exports = app;