import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    idValue: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "Hello this is bio",
    },
    sequence: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
// products is the name of database in mongoose
export default Product;
