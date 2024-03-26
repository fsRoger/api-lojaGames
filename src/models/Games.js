import mongoose from "mongoose";

const GamesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  plataform: {
    type: String,
    required: true,
  },
  lojas: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },

});

const Games = mongoose.model("Games", GamesSchema);

export default Games;