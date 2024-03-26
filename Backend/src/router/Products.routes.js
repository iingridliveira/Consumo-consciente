
import { Router } from "express";
import {createProduct, getAllproducts } from "../controller/product.controller.js";
import { createHistorie } from "../controller/historie.controller.js";

const produtosRoute = Router();
produtosRoute.post("/historiecriar/:id_Product", async(req, res) => {
    const {origin,Image,Lifetime,Production_process} = req.body;
    const {id_Product} = req.params
    
    const novohistorico = await createHistorie(origin,Image,Lifetime,Production_process,id_Product);
    res.json({novohistorico});
});
produtosRoute.post("/produtcriar", async (req, res) => {
    const { name, category} = req.body;
    const novoProduto = await createProduct( name,category);
    res.json({novoProduto});
});
produtosRoute.get("/showproducts", async (req,res)=>{
    const infoprodutos = await getAllproducts()
    res 
    .status(201)
    .json({infoprodutos})
})

export {produtosRoute}