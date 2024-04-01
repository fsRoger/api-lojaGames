import express from "express";
import { findAll, findById, searchByTitle } from "../controllers/product.controller.js";

const router = express.Router()

router.get("/", findAll);

router.get("/:id", findById);
export default router;