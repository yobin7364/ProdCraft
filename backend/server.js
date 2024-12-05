import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes); // prefix the api route with "/api/products"

app.listen(PORT, () => {
  connectDB();
  console.log("server started");
});
