import express from "express";
import connetcDatabase from "./src/database/db.js";
import cors from "cors";
import dotenv from "dotenv"

import productRoute from "./src/routes/product.route.js";


const app = express();
dotenv.config()
app.use(cors());

const port = process.env.PORT || 3000;

connetcDatabase()
app.use(express.json());
app.use("/product", productRoute);



app.listen(3000);