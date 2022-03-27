const express = require("express");
require('dotenv').config()
const bodyParser = require('body-parser');
const router = require("./src/router/initAPI.js");
const connect = require("./src/config/connectDB.js");
const app = express();
const port = process.env.PORT || '5001';
const cors = require('cors');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    next();
});
app.use("/public", express.static(__dirname + "/public"));
app.use(cors({
    origin: "*",
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/v1', router)
app.get('/', (req, res) => {
    res.send("Thanh cong")
})
connect
app.listen(port, () => {
    console.log("Server active");
})