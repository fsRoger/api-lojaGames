import express from "express";
import { findAll, findById, searchByTitle } from "../controllers/product.controller.js";

const router = express.Router()

//route.get("/", searchController.search)

router.get("/", findAll);

//router.get("/search", searchByTitle);

router.get("/:id", findById);
export default router;