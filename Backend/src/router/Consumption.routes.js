import { Router } from "express";
import { creatConsumptioncontroller,
    getallConsumptioncontroller, 
    updateConsumptionscontroler, 
    updateIdprodctcontroller} from "../controller/Consumption.controller.js";

const ConsumptionRoutes = Router();

ConsumptionRoutes.post("/createconsumpition/:id_Product", creatConsumptioncontroller)
ConsumptionRoutes.get("/ShowConsumptions", getallConsumptioncontroller)
ConsumptionRoutes.patch("/updateresulteconsupion/:id_Consupitions", updateConsumptionscontroler)
ConsumptionRoutes.patch("/updateIdproduct/:id", updateIdprodctcontroller)

export{ConsumptionRoutes}