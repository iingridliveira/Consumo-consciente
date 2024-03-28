import { Router } from "express";
import { ProductRoutes } from "./Products.routes.js";
import { HistorieRoutes } from "./Historie.routes.js";
import { ConsumedRoutes } from "./Consumption.routes.js";



const Routes = Router();

Routes.use(ProductRoutes)
Routes.use(HistorieRoutes)
Routes.use(ConsumedRoutes)

export{Routes}