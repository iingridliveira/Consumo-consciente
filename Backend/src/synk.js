
import { sequelize } from './database/conection.js';

// Importar TODAS as entidades que você criou
import './entities/Consumption.entity.js';
import './entities/Historie.entity.js'
import './entities/Product.entity.js'
import './entities/Spending.entity.js'

const app = express();

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao banco de dados.');

    await sequelize.sync({ alter: true });
    console.log('✅ Tabelas sincronizadas.');

    // Resto da inicialização
    app.listen(3000, () => {
      console.log('🚀 Servidor rodando na porta 3000');
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar o app:', error);
  }
})();
