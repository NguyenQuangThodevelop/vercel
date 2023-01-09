const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;
app.use(express.json());
dotenv.config();
const connect = async () => {
  await mongoose.connect(process.env.MONGO);
  console.log("connected to mongoDB");
};
connect();

app.use("/api/product", productRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.listen(PORT, () => {
  console.log(`sever is running in port ${PORT}`);
});
