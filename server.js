const express = require("express");
const dotenv = require("dotenv").config();
const Product = require("./models/productModel")
// const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");


connectDb();
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json())

// app.use(errorHandler)


// router
app.get("/", (req, res) => {
    res.send("Hello NODE API")
})

app.get("/products", async(req, res)=>{
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})
app.post("/products", async(req, res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }


   console.log(req.body)
})

app.listen(port, () => {
    console.log(`server runing on ${port}`)
});