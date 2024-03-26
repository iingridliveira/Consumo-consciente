import express from "express";
import { testConnection } from "./src/database/conection.js";
import { produtosRoute } from "./src/router/Products.routes.js";
const app = express();
const port = 3084;
app.use(express.json());
app.use(produtosRoute );


app.listen(port, ()=> {
    testConnection()
    console.log("🚀server running")
});
