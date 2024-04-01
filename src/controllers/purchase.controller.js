import { createService } from "../services/purchase.service.js";

export const create = async (req, res) => {
  try {
    const { produtoId, nome, endereco, telefone, documento } = req.body;

    const purchaseData = {
      produtoId,
      nome,
      endereco,
      telefone,
      documento
    }

    if (!validateFields(purchaseData)) {
      res.status(400).send({ mensagem: "Todos os campos são obrigatórios." });
    }

    const purchase = await createService(purchaseData);

    if (!purchase) {
      res.status(500).send({ mensagem: "Compra não efetuada" });
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

const validateFields = (purchaseData) => {
  if (!purchaseData.produtoId || !purchaseData.nome || !purchaseData.endereco || !purchaseData.telefone || !purchaseData.documento)
    return false;
  return true;
};