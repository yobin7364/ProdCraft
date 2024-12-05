import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes); // prefix the api route with "/api/products"

// this is to run frontend and backend at same port

if (process.env.NODE_ENV === "production") {
  //__dirname is root folder, and goes to /frontend/dist as this is the main folder for react production
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("server started");
});
