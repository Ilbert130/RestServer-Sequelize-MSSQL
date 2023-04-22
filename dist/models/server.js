"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express")); //Destructurando
const usurios_1 = __importDefault(require("../routes/usurios")); //Asi esportamos todo de un modulo. En este caso no usamos alia por que solo exportamos una sola cosa
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //Definiendo los middlewares
        this.middlewares();
        //Definiendo las rutas
        this.routes();
    }
    //TODO: Conectar Base de datos
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Lectura del body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usurios_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
module.exports = Server;
//# sourceMappingURL=server.js.map