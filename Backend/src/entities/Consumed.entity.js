import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/conection";

const consumed = database.define("tb_consumed", {
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
export{consumed}
