const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const product = require("./router/product");
app.use(express.json({ extended: false }));
app.use("/api/product", product);
const PORT = process.env.PORT || 5000;
dotenv.config();
const connect = async () => {
  await mongoose.connect(process.env.MONGO);
  console.log("connected to mongoDB");
};
connect();
app.listen(PORT, () => {
  console.log(`sever is running in port ${PORT}`);
});
