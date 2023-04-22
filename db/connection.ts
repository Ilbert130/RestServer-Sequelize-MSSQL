import {Sequelize} from "sequelize";

//This is the way to connect to node and sequelize
const db = new Sequelize('Node_Curse','ilbertca27','Castillo4321*', {
    host: "localhost",
    port: 1433,
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    dialectOptions: {
      options: { encrypt: true }
    }
});

export default db;