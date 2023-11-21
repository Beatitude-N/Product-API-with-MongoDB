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

app.get("/products/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})
app.put("/products/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
     
        if (!product) {
            return res.status(404).json({
                 success: false, 
                 message: "Product not found" 
                });
        }
        const updateProduct = await Product.findById(id)
        return res.status(200).json({
            success: true, 
            message: "Product updated successfully", 
            data: updateProduct 
           });

        } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})
app.delete("/products/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id, req.body)
     
        if (!product) {
            return res.status(404).json({
                 success: false, 
                 message: "Product not found" 
                });
        }
        const deletedProduct = await Product.findById(id)
        return res.status(200).json({
            success: true, 
            message: `product with ID ${id} deleted successfully`, 
            data: deletedProduct 
           });

        } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})


app.listen(port, () => {
    console.log(`server runing on ${port}`)
});