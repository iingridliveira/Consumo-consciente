/*class Product3{
    constructor(nome, tipo, potencia, tempo,dias,taxa){
        this.nome= nome;
        this.tipo=tipo
        this.potencia=potencia
        this.tempo= tempo
        this.dias= dias
        this.taxa= taxa
        this.consumo = 0
        this.gasto = 0
    }


}*/
import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/conection";

const Product = database.define("tb_product", {
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
    },
    
});

export {Product}