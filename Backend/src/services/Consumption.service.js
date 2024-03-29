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
}
        
        async updateConsumptionsevice(id, newresultConsumption )
    {
        const  ConsumptionID= await ConsumptionEntity.findByPk(id);

        if(!ConsumptionID)
        { throw new NotFoundError(`Consumption ${ERRORS.NOT_FOUND}`)
    }
       { 
        await ConsumptionEntity.update( 
            { resultConsumption : newresultConsumption },
            {
              where: {
                id,
              },
            }
            )
    }
}}
   export {ConsumptionService}