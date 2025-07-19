
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { testConnection } from "./src/database/conection.js";
import { Routes } from "./src/router/index.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors({ origin: process.env.URL }));
app.use(express.json());
app.use(Routes);

app.listen(port, () => {
  testConnection();
  console.log(`Servidor rodando na porta ${port}`);
});