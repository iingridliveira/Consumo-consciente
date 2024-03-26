import { Sequelize} from "sequelize"

const seque = new Sequelize('consumo','root','', {
    host: 'localhost',
    dialect: 'mysql'
});


async function testConnection(){
    try{
        await seque.authenticate()
        console.log('Connection boa')
    } catch(error){
        console.error('Não conseguiu conectar', error)
    }
    
}

export { seque, testConnection}