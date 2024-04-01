import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  plataformas: {
    type: [String],
    required: true,
  },
  lojas: {
    type: [String],
    required: true,
  },
  linkImagem: {
    type: String,
    required: true,
  },

});

const Product = mongoose.model("Product", ProductSchema);

export default Product;