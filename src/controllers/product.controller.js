import { findAllService, findByIdService, findByTitleService } from "../services/product.service.js";

export const findAll = async (req, res) => {

  const product = await findAllService();

  if (product.length === 0) {
    return res.status(404).send({ message: "Nenhum produto encontrado" });
  }

  res.send(product)

};

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await findByIdService(id);

    if (!product) {
      return res.status(404).send({ message: "Produto não encontrado." })
    }

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

export const findByTitle = async (req, res) => {
  try {
    const { title } = req.params;

    const product = await findByTitleService(title);

    if (product.length === 0) {
      return res
        .status(404)
        .send({ message: "  Nenhum produto encontrado com esse título" });
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
