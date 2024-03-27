import { HistorieService } from "../services/Historie.service.js"

const instacieServiceHistorie =   new HistorieService
const createHistoriecontroller = async(req, res) => {
const {origin,Image,Lifetime,Production_process} = req.body;
const {id_Product} = req.params
const newHistorie = await instacieServiceHistorie.createHistorie(
       origin,
       Image,Lifetime,
       Production_process,
       id_Product); 
       res.json({newHistorie});      
}
 
const getAllHitoriescontroller = async (rec, res) =>{  
       const histories= await instacieServiceHistorie.getallHistories()
       res.json({histories})
   } 
  




export{createHistoriecontroller,
       getAllHitoriescontroller}