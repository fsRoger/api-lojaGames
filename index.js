import express from "express";
import connetcDatabase from "./src/database/db.js";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./src/routes/product.route.js";
import purchaseRoute from "./src/routes/purchase.route.js";

const app = express();
dotenv.config()

app.use(cors({ origin: '*' }));

const port = process.env.PORT || 3000;

app.get('/details', (req, res) => {
  const apiKey = process.env.GOOGLE_MAP_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not found' });
  }
  res.json({ apiKey });
});

connetcDatabase();

app.use(express.json());
app.use(productRoute);
app.use(purchaseRoute);


app.listen(port, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});
