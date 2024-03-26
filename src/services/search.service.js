import Games from "../models/Games.js";

//const createService = ()=>

const findAllService = () => Games.find();

const findByIdService = (id) => Games.findById(id);



export default { findAllService, findByIdService };