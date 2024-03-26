import express from "express";
import connetcDatabase from "./src/database/db.js";
import searchRoute from "./src/routes/search.route.js";

import dotenv from "dotenv"
dotenv.config()

const app = express();
const port = 3000;

connetcDatabase()
app.use(express.json());
app.use("/search", searchRoute);



app.listen(3000);