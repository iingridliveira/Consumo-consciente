
import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/conection.js";


const ProductEntity = database.define("tb_products", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
    
})
     


export {ProductEntity}