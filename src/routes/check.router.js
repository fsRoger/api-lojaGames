import express from "express";

const checkRouter = express.Router()

checkRouter.get("/check", (req, res) => {
  const message = "Teste de Rotas com sucesso.";
  console.log(message);
  res.status(200).send(message);
});

export default checkRouter;