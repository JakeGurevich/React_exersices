const express = require("express");
const products = require("./data/products");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const Colors = require("colors");
dotenv.config();
connectDB();

const app = express();

const Port = process.env.PORT || 6000;

app.use(cors());

app.get("/", (req, res) => {
  res.send(`API is running`);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${Port}`.green
      .bold
  );
});
