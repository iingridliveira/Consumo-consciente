import { Sequelize, DataTypes } from "sequelize";
import { seque as database } from "../database/conection.js";

const HistorieEntity = database.define("tb_historie", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Lifetime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Production_process:{
        type: DataTypes.TEXT,
        allowNull: false
    },
});

export{HistorieEntity}