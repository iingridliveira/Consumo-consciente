import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/conection";

const Historie = database.define("tb_historie", {
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
export{Historie}