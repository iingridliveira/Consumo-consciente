import {ConsumptionEntity } from "../entities/Consumption.entity.js";

class ConsumptionService{
    async creatConsumption(
        Measurement,
        power,
        duration,
        days,
        resultConsumption,
        id_Product
    )
    {
  ConsumptionEntity.sync()
   const Consumption = await ConsumptionEntity.create(
   { Measurement,
    power,
    duration,
    days,
    resultConsumption,
    id_Product})
     return Consumption
    }
    async getallConsumption()
    {
    const allConsumption = await ConsumptionEntity.findAll()
    return allConsumption
}}
   export {ConsumptionService}