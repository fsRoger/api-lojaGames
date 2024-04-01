import express from "express";
import { findAll, findById, findByTitle } from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.get("/product/", findAll);

productRouter.get("/product/:id", findById);

productRouter.get("/product/title/:title", findByTitle);
export default productRouter;