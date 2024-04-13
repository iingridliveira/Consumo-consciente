import { HistorieEntity } from "../entities/Historie.entity.js";

class HistorieService{
    async createHistorie(
        origin,
        Image,
        Lifetime,
        Historieion_process,
        id_Historie

    )
  { 
    HistorieEntity.sync();
    const Historie = await HistorieEntity.create({
        origin,
        Image,
        Lifetime,
        Historieion_process,
        id_Historie

    })
    return Historie
   }
    async getallHistories()
   {
   const allHistories = await HistorieEntity.findAll()
   return allHistories
   }
   async UpdateHistorie(id) {
    const HistorieId = await HistorieEntity.findByPk(id);
    if (!HistorieId) {
        throw new NotFoundError(`Produto não encontrado(a)`);
    }
    await HistorieEntity.update({
        where: {
            id_Product,
        },
    });
    return `Deletado com sucesso!`;
}
}
   export{HistorieService}