const Sequelize = require ("sequelize");
const connection = new Sequelize('guiapress', 'root', 'admin',{

    host: 'localhost',
    dialect: 'mysql',
    logging:false
    
});

module.exports = connection;