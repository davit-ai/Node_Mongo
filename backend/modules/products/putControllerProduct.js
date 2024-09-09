import mongoose from "mongoose";
import Product from "../../models/product.model.js";
// modules/products/deleteControllerProduct.js
export const putProduct = () => {
  return async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Please get real id" });
    }
   
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {
        new: true,
      });
      res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server Errors" });
    }
  };
};
