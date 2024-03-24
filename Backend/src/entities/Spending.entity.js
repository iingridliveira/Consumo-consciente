import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/conection";


const Spending = database.define("tb_spending", {
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
    
});
export{Spending}
