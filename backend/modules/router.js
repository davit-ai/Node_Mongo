import express from "express";
import { deleteAllProduct } from "./products/deleteAllControllerProduct.js";
import { deleteProduct } from "./products/deleteControllerProduct.js";
import { getProducts } from "./products/getControllerProduct.js";
import { postProduct } from "./products/postControllerProduct.js";
// import { putProduct } from "./products/putControllerProduct.js";
const productRouter = express.Router();

// router for posting products
// get data
productRouter.get("/api/v1/products", getProducts());
// post data
productRouter.post("/api/v1/products", postProduct());
//delete data
productRouter.delete("/api/v1/products/:id", deleteProduct()); // to delete singular
productRouter.delete("/api/v1/products/", deleteAllProduct()); // to delete all
export default productRouter;
