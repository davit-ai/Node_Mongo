// modules/products/deleteControllerProduct.js
import Product from "../../models/product.model.js";
export const getProducts = () => {
  return async (req, res) => {
    try {
      const productList = await Product.find();
       res.status(200).json({
         message: "Products retrieved successfully",
         data: productList,
       });
    } catch (error) {
      res.status(500).json({ message: "No Product Available" });
    }
  };
};
