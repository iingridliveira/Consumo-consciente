import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sequelize, testConnection } from "./src/database/conection.js";
import { Routes } from "./src/router/index.routes.js";

// ⚠️ Já importou dotenv acima, não precisa de novo
dotenv.config();

// Importar os modelos para que eles sejam registrados no Sequelize
import "./src/entities/Product.entity.js";
import "./src/entities/Consumption.entity.js";
import "./src/entities/Historie.entity.js";
import "./src/entities/Spending.entity.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: process.env.URL }));
app.use(express.json());
app.use(Routes);

const startServer = async () => {
  try {
    await testConnection(); // Testa conexão com o banco
    await sequelize.sync({ alter: true }); // 🔁 Sincroniza todas as tabelas
    console.log("✅ Tabelas sincronizadas com sucesso.");

    app.listen(port, () => {
      console.log(`🚀 Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error("❌ Erro ao iniciar o servidor:", error);
  }
};

startServer();
