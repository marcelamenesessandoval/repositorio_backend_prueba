import Express from "express";
import Cors from 'cors';
import dotenv from 'dotenv';
import {conectarBD } from './db/db.js'; 
import rutasProducto from "./views/productos/rutas.js";
import rutasVenta from "./views/ventas/rutas.js";
import rutasUsuario from "./views/usuarios/rutas.js";


dotenv.config({path:'./.env'});


const app = Express();

const port=process.env.PORT || 5000;

app.use(Express.json());

app.use(Cors());

app.use(rutasProducto);
app.use(rutasVenta);
app.use(rutasUsuario);


const main = () => {
    return app.listen(port, () => {
        console.log(`esuchando puerto ${port}`);
    });
};


conectarBD(main);