import { Sequelize, DataTypes } from "sequelize";
import { seque as database } from "../database/conection.js";
import { ProductEntity } from "./Product.entity.js";

const ConsumptionEntity = database.define("tb_consumptions", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    Measurement: {
        type: DataTypes.STRING,
        allowNull: false
    },
    power: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    duration: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    days: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
     resultConsumption:{
        type: DataTypes.INTEGER,
        allowNull: false
     }
     
    });

    ConsumptionEntity.belongsTo(ProductEntity,{
        constraint: true,
        foreignKey: "id_Product"
    })
export{ConsumptionEntity}
