import express, {Application} from 'express';   //Destructurando

class Server {

    private app:Application;
    private port:string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}

//Exportacion por defecto
export default Server;