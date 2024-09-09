// modules/products/deleteControllerProduct.js
import Product from "../../models/product.model.js";

// DELETE all products
export const deleteAllProduct = () => {
  return async (req, res) => {
    try {
      // Call deleteMany with an empty filter to delete all documents
      const result = await Product.deleteMany({});

      if (result.deletedCount === 0) {
        res.status(404).json({
          success: false,
          message: "No products found to delete",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "All products deleted",
          deletedCount: result.deletedCount,
        });
      }
    } catch (error) {
      console.error("Error deleting products:", error);
      res.status(500).json({ message: "Failed to delete products" });
    }
  };
};
