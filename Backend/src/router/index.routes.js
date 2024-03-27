import { Router } from "express";
import { ProductRoutes } from "./Products.routes.js";
import { HistorieRoutes } from "./Historie.routes.js";


const Routes = Router();

Routes.use(ProductRoutes)
Routes.use(HistorieRoutes)

export{Routes}