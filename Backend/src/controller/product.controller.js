import { seque as database } from "../database/conection.js";
import { createHistorie } from "./historie.controller.js";
import { ProductEntity } from "../entities/Product.entity.js";

 export async function createProduct(name, category) {
        await database.sync();
        const newProduct = ProductEntity.create({
            name,
            category,
            idHistorie: createHistorie.id
        });
        return await newProduct;
    }

export const getAllproducts = async () =>{
    return await Product.findAll();
}