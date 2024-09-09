// modules/products/deleteControllerProduct.js
import Product from "../../models/product.model.js";
export const deleteProduct = () => {
  return async (req, res) => {
    const { id } = req.params;
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({success:true,message: "Data has been deleted"})
    } catch (error) {}
  };
};
