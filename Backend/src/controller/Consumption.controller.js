import { ConsumptionService } from "../services/Consumption.service.js"


const instacieServiceConsumption = new ConsumptionService
 
const creatConsumptioncontroller = async (req, res)=>{
    const{  Measurement,power,duration,days,resultConsumption}= req.body
    const {id_Product} = req.params
    const newConsumption = await instacieServiceConsumption.creatConsumption(
        Measurement,
        power,
        duration,
        days,
        resultConsumption,
        id_Product
        )
 
    res.json({newConsumption})

}
 const  allConsumption = async(req,res)=>{
    const consunpitions = await instacieServiceConsumption.getallConsumption()
 }
export {creatConsumptioncontroller}