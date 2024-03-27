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
    export {createProductcontroller, getAllProductscontroller}  
