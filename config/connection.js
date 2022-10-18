// set sequalize as a required dependency 
const Sequalize = require("sequalize");

require("dotenv").config();
// sets dotenv as trhe environment for the variables 

let sequelize;
// connects db

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        // retrives name, password from database 
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            // sets host, port, and sql as language 
            host: "localhost",
            dialect: "mysql",
            port: 3306
        }
    );
}
