import { Router } from "express";
import { createProductcontroller, getAllProductscontroller } from "../controller/product.controller.js";
const ProductRoutes = Router();

ProductRoutes.post("/creatproducts", createProductcontroller);
ProductRoutes.get("/showproducts", getAllProductscontroller);


export {ProductRoutes}