import { Router } from "express";
import { createHistoriecontroller, getAllHitoriescontroller } from "../controller/historie.controller.js";

const HistorieRoutes = Router();

HistorieRoutes.post("/historiecriar/:id_Product",createHistoriecontroller);
HistorieRoutes.get("/mostrashistorico", getAllHitoriescontroller);

export{HistorieRoutes}

