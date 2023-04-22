import express, {Application} from 'express';      //Destructurando
import userRoutes from '../routes/usurios';        //Asi esportamos todo de un modulo. En este caso no usamos alia por que solo exportamos una sola cosa
import cors from 'cors';

class Server {

    private app:Application;
    private port:string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        //Definiendo los middlewares
        this.middlewares();

        //Definiendo las rutas
        this.routes();
    }

    //TODO: Conectar Base de datos

    middlewares():void {
        
        //CORS
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());

        //Carpeta publica
        this.app.use(express.static('public'));
    }

    routes():void {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen():void {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}

//Exportacion por defecto
export = Server;