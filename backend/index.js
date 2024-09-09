import express from "express";
import { connectDB } from "./config/db.js";
import productRouter from "./modules/router.js";
// declare module
const app = express();

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//getting the routes
app.get("/", (req, res) => {
  res.send("Hello Welome to website");
});

// all products apis
app.use("/", productRouter);

// listen on port
app.listen(5000, () => {
  connectDB();
  console.log("Server Started at 5000");
});
