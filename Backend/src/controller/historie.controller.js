import { seque as database } from "../database/conection.js";
import { HistorieEntity } from "../entities/Historie.entity.js";


 const createHistorie= async(origin,Image,Lifetime,Production_process,id_Product)=>{
 await database.sync()
 const newHistorie = HistorieEntity.create({
        origin,
        Image,
        Lifetime,
        Production_process,
        id_Product

    })
    return await newHistorie
}
export{createHistorie}