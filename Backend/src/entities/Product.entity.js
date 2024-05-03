
import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/conection.js";


let ProductEntity;
ProductEntity = database.define("tb_products", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(30),
        allowNull: false
    }


});
     


export {ProductEntity}