import express from "express";
import connetcDatabase from "./src/database/db.js";
import cors from "cors";
import dotenv from "dotenv"

import productRoute from "./src/routes/product.route.js";
import purchaseRoute from "./src/routes/purchase.route.js";


import checkRouter from './src/routes/check.router.js';

const app = express();
dotenv.config()
// app.use(cors());
app.use(cors({ origin: '*' }));

const port = process.env.PORT || 3000;

connetcDatabase();

app.use(express.json());
app.use("/product", productRoute);
app.use("/purchase", purchaseRoute);
app.use(checkRouter);//app.use(".static('public'));

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});