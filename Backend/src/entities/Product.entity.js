
import { Sequelize, DataTypes } from "sequelize";
import { seque as database } from "../database/conection.js";
import { HistorieEntity } from "./Historie.entity.js";


const ProductEntity = database.define("tb_product", {
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
     ProductEntity.belongsTo(HistorieEntity,{
    constraint: true,
    foreignKey: "idHistorie"

})


/*Historie.belongsTo(Product);
Product.hasOne(Historie);
Consumed.belongsTo(Product);
Product.hasOne(Consumed);
Spending.belongsTo(Product);
Product.hasOne(Spending);*/

export {ProductEntity}