import Product from "../models/Product.js";

export const findAllService = () => Product.find();

export const findByIdService = (id) => Product.findById(id);

export const findByTitleService = async (title) => {
  try {
    let products = await Product.find({
      nome: title
    }).sort({ _id: -1 });

    return products[0];

  } catch (error) {
    throw new Error("Falha ao buscar o produto.");
  }
};

