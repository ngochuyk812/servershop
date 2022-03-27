const connect = require('../config/connectDB')
const { get_all, add, getimg } = require('../controller/prduct.controller')
const Product = require('../models/product')
const router = require('express').Router()
const express = require('express');
const app = express();
const path = require('path');
const upload = require('../config/uploadMiddleware');
const Resize = require('../config//Resize');


router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.post('/add', upload.single('image'), add)
router.get("/getall", get_all)
router.get('/getimg/:url', getimg);
module.exports = router
