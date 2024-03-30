import { findAllService, findByIdService, searchByTitleService } from "../services/product.service.js";


export const findAll = async (req, res) => {
  const product = await findAllService();

  if (product.length === 0) {
    return res.status(400).send({ message: "There are no available Games" });
  }

  res.send(product)

};


export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await findByIdService(id);

    console.log("backkkkkkkkkkkkkkkkkk", id)
    console.log("product image", product.linkImagem)

    if (!product) {
      return res.status(400).send({ message: "product not found" })
    }
    console.log(product)
    return res.send({

      product: {
        id: product.id,
        nome: product.nome,
        descricao: product.descricao,
        linkImagem: product.linkImagem,
        preco: product.preco,
        plataformas: product.plataformas,
        lojas: product.lojas,
      },
    })
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}


export const searchByTitle = async (req, res) => {
  try {
    const { title } = req.query;

    const product = await searchByTitleService(title);

    if (product.length === 0) {
      return res
        .status(400)
        .send({ message: "There are no new with this title" });
    }

    return res.send({
      product: {
        id: product._id,
        nome: product.nome,
        descricao: product.descricao,
        linkImagem: product.linkImagem,
        preco: product.preco,
        plataformas: product.plataformas,
        lojas: product.lojas,
      },
    })
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
