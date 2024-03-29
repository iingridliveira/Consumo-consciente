import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/conection.js";
import { ConsumptionEntity } from "./Consumption.entity.js";


const SpendingEntity = database.define("tb_spending", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rate: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
     resultSpeding:{
        type: DataTypes.INTEGER,
        allowNull: false
     }
    
});
SpendingEntity.belongsTo(ConsumptionEntity,{
    constraint: true,
    foreignKey: "id_Consumption"
})
export{SpendingEntity}
