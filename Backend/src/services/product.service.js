import { ProductEntity } from "../entities/Product.entity.js";

class ProductsService{

    async createProductservice( name,category)
    {
    await ProductEntity.sync();
    const Product = await ProductEntity.create({name, category});
    return Product
    }

    async getallProductservice()
    {
     const allProducts = ProductEntity.findAll()
     return allProducts
    }                   
}
export {ProductsService}
 