import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  codeProduct: String,
  nameProduct: String,
  priceProduct: Number,
});

export default model('Product', ProductSchema);