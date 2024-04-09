import { Router } from "express";
import { creatConsumptioncontroller,
    getallConsumptioncontroller, 
    updateConsumptionscontroler } from "../controller/Consumption.controller.js";

const ConsumptionRoutes = Router();

ConsumptionRoutes.post("/createconsumpition/:id_Product", creatConsumptioncontroller)
ConsumptionRoutes.get("/ShowConsumptions", getallConsumptioncontroller)
ConsumptionRoutes.patch("/updateresulteconsupion/:id_Consupitions", updateConsumptionscontroler)

export{ConsumptionRoutes}