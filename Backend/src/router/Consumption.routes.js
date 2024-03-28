import { Router } from "express";
import { creatConsumptioncontroller } from "../controller/Consumption.controller.js";

const ConsumedRoutes = Router();

ConsumedRoutes.post("/Consumocriar/:id_Product", creatConsumptioncontroller)

export{ConsumedRoutes}