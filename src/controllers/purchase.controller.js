import { createService } from "../services/purchase.service.js";

export const create = async (req, res) => {

  try {
    const { produtoId, nome, endereco, telefone, documento } = req.body;

    if (!produtoId || !nome || !endereco || !telefone || !documento) {
      res.send({ mensagem: "Todos os campos são obrigatórios" });
    }

    const purchase = await createService(req.body);

    if (!purchase) {
      res.send({ mensagem: "Compra não efetuada" });
    }

    res.status(201).send({
      mensagem: "Compra efetuada com sucesso",
      compra: {
        id: purchase.id,
        produtoId: purchase.produtoId,
        name: purchase.nome,
        endereco: purchase.endereco,
        telefone: purchase.telefone,
        documento: purchase.documento,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
};