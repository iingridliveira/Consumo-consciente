import { ProductsService } from "../services/product.service.js";


    const instacieServiceproduct = new ProductsService

    const createProductcontroller =  async (req, res) => {
    const { name, category} = req.body;
    const newProduct = await instacieServiceproduct.createProductservice(name,category);
    res.json({newProduct});
}
  

const getAllProductscontroller = async (rec, res) =>{  
    const Products = await instacieServiceproduct.getallProductservice()
    res.json({Products})
}
const  deletePoductcontroller = async(req,res)=>{
    const {id}= req.params;
    const  deteleProduct =await instacieServiceproduct.deleteProduct(id)
    res.json({deteleProduct})
}
    export {createProductcontroller,
        getAllProductscontroller,
        deletePoductcontroller}
