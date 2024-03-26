import express from "express";
import searchController from "../controllers/search.controller.js";

const router = express.Router()

//route.get("/", searchController.search)

//route.post("/", userController.create);
router.get("/", searchController.findAll);
router.get("/:id", searchController.findById);

export default router;