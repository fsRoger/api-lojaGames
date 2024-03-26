import searchService from "../services/search.service.js";

//const create = (req, res) => {
// const user = req.body



// res.send({ soma: soma });
//};

const findAll = async (req, res) => {
  const games = await searchService.findAllService();

  if (games.length === 0) {
    return res.status(400).send({ message: "There are no available Games" });
  }

  res.send(games)

};

const findById = async (req, res) => {
  const id = req.params.id

  const game = await searchService.findByIdService(id)

  if (!game) {
    return res.status(400).send({ message: "user not found" })
  }

  res.send(game)
};

export default { findAll, findById };