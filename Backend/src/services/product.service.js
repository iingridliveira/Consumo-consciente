import { ProductEntity } from "../entities/Product.entity.js";
import {ConsumptionEntity} from "../entities/Consumption.entity.js";

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
    async deleteProduct(id) {
        const ProducId = await ProductEntity.findByPk(id);
        if (!ProducId) {
            throw new NotFoundError(`Produto não encontrado(a)`);
        }
        await ProductEntity.destroy({
            where: {
                id,
            },
        });
        return `Deletado com sucesso!`;
    }
}
export {ProductsService}
 