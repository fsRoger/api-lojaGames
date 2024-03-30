import Product from "../models/Product.js";

export const findAllService = () => Product.find();

export const findByIdService = (id) => Product.findById(id);

export const searchByTitleService = (title) => Product.find({
  title: { $regex: `${title || ''}`, $options: 'i' },
})
  .sort({ _id: -1 })

