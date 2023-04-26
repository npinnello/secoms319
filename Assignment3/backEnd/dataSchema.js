const mongoose = require("mongoose");
const ReactFormDataSchema = new mongoose.Schema(
  {
    _id: { type: Number },
    title: { type: String },
    price: { type: Number },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    rating: { rate: { type: Number }, count: { type: Number } },
  },
  { collection: "fakestore_catalog" }
);
const Product = mongoose.model("Product", ReactFormDataSchema);
module.exports = Product;
