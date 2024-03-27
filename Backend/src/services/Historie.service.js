import { HistorieEntity } from "../entities/Historie.entity.js";

class HistorieService{
    async createHistorie(
        origin,
        Image,
        Lifetime,
        Production_process,
        id_Product

    )
  { 
    HistorieEntity.sync();
    const Historie = await HistorieEntity.create({
        origin,
        Image,
        Lifetime,
        Production_process,
        id_Product

    })
    return Historie
   }
    async getallHistories()
   {
   const allHistories = await HistorieEntity.findAll()
   return allHistories
   }
}
   export{HistorieService}