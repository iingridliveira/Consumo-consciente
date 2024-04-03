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
 const  getallConsumptioncontroller = async(req,res)=>{
    const consunpitions = await instacieServiceConsumption.getallConsumption()
    res.json({consunpitions}) 
 }
const updateConsumptionscontroler = async(req,res)=>{
    const{id} = req.params;
    const newresultConsumption = await instacieServiceConsumption.updateConsumptionsevice(id)
    res.json({newresultConsumption})

}



export {creatConsumptioncontroller,
        getallConsumptioncontroller,
        updateConsumptionscontroler}