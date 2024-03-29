import { Router } from "express";
import { createHistoriecontroller, getAllHitoriescontroller } from "../controller/historie.controller.js";

const HistorieRoutes = Router();

HistorieRoutes.post("/acretehitorie/:id_Product",createHistoriecontroller);
HistorieRoutes.get("/showhistoroie", getAllHitoriescontroller);

export{HistorieRoutes}

