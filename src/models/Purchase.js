import mongoose from "mongoose";

const PurchaseSchema = new mongoose.Schema({
  produtoId: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  documento: {
    type: String,
    required: true,
  },
});

const Purchase = mongoose.model("Purchase", PurchaseSchema);

export default Purchase;