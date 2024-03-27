import express from "express";
import { testConnection } from "./src/database/conection.js";
import { Routes } from "./src/router/index.routes.js";
const app = express();
const port = 3084;
app.use(express.json());
app.use(Routes );
app.listen(port, ()=> {
    testConnection()
    console.log("🚀server running")
});
