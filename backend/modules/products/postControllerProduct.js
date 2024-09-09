import Product from "../../models/product.model.js";

export const postProduct = () => {
  return async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
      return res.status(400).json({
        success: false,
        message: "Please provide the field for adding the product",
      });
    }

    // // Get the last product to determine the next sequence value
    // const sequence = await Product.findOne().sort({ createdAt: -1 });
    // let nextId;
    // if (!product.sequence) {
    //   // Initialize sequence if no products exist
    //   nextId = 1;
    // } else {
    //   // Extract the sequence value from the last product's ID
    //   const lastId = sequence.id;
    //   const sequenceValue = parseInt(lastId.substring(1));
    //   nextId = sequenceValue + 1;
    // }

    // // Generate the product ID in the format "p0001"
    // const productId = `p${String(nextId).padStart(4, "0")}`;

    const newProduct = new Product({
      ...product,
      // idValue: productId,
      // sequence: nextId,
    });
    try {
      await newProduct.save();
      return res.status(201).json({
        success: true,
        message: "Product Created!",
      });
      console.log("Product added successfully");
    } catch (error) {
      console.log("Product failed to save");
      res.status(500).json({
        success: false,
        message: "Error creating product",
      });
    }
  };
};
