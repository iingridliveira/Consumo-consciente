import { Sequelize, DataTypes } from "sequelize";
import { seque as database } from "../database/conection.js";

const ConsumedEntity = database.define("tb_consumed", {
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
    });

    ConsumedEntity.belongsTo(ProductEntity,{
        constraint: true,
        foreignKey: "id_Product"
    })
export{ConsumedEntity}
