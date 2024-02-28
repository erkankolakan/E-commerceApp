const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// router
const productsRouter = require("./routers/products");
const authRouter = require("./routers/auth");
const port = 3000;

dotenv.config(); //--> .env dosyasına erişir

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// middleware
app.use(cors());
app.use(
  express.json({
    limit: "10mb",
  })
);
app.use(
  express.urlencoded({
    limit: "10mb",
    extended: true,
  })
);

// routes
app.use("/api/products", productsRouter);
app.use("/api/", authRouter);

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
