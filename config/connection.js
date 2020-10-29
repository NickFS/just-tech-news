// impoirt the Sequelize constructor form the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create conneciton to our database, pass in your Mysql information for username and password.
let sequelize;

if(process.env.JAWSDB_URL) sequelize = new Seqeulize(process.env.JAWSDB_URL);
else {
    sequelize = new Seqeulize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}



module.exports = sequelize;