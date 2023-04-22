"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//This is the way to connect to node and sequelize
const db = new sequelize_1.Sequelize('Node_Curse', 'ilbertca27', 'Castillo4321*', {
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
exports.default = db;
//# sourceMappingURL=connection.js.map