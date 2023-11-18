const express = require("express");
// const dotenv = require("dotenv").config();
// const router = require("./routes/contactRoutes");
// const errorHandler = require("./middleware/errorhandler");
// const connectDb = require("./config/dbConnection");
// const userRouter = require("./routes/userRoutes");

//connectDb();
const app = express();

const port = 3000 || 5001;

app.use(express.json())
// app.use("/api/contacts", router )
// app.use("/api/users", userRouter )
// app.use(errorHandler)
app.get("/", (req, res) => {
    res.send("Hello NODE API")
})

app.listen(port, () => {
    console.log(`server runing on ${port}`)
});