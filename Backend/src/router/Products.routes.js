
import { Router } from "express";
import {createProduct, getAllproducts } from "../controller/product.controller.js";
import { createHistorie } from "../controller/historie.controller.js";

const produtosRoute = Router();
produtosRoute.post("/historiecriar", (req, res) => {
    const {origin,Image,Lifetime,Production_process} = req.body;
    const novohistorico = createHistorie(origin,Image,Lifetime,Production_process);
    res.json({novohistorico});
});
produtosRoute.post("/produtcriar", (req, res) => {
    const { name, categoryl} = req.body;
    const novoProduto = createProduct( name,category);
    res.json({novoProduto});
});
produtosRoute.get("/showproducts", async (req,res)=>{
    const infoprodutos = await getAllproducts()
    res 
    .status(201)
    .json({infoprodutos})
})

export {produtosRoute}