import { Router } from "express";
import { creatConsumptioncontroller,
    getallConsumptioncontroller, 
    updateConsumptionscontroler } from "../controller/Consumption.controller.js";

const ConsumptionRoutes = Router();

ConsumptionRoutes.post("/acreateconsumpition/:id_Products", creatConsumptioncontroller)
ConsumptionRoutes.get("/ShowConsumptions", getallConsumptioncontroller)
ConsumptionRoutes.patch("/updateresulteconsupion/:id_Consupitions", updateConsumptionscontroler)

export{ConsumptionRoutes}