import mongodb from 'mongodb';
const { MongoClient } = mongodb;
import dotenv from 'dotenv';

dotenv.config({path:'./.env'});

const stringConexion = process.env.DATABASE_URL;

const client = new MongoClient(stringConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


let baseDeDatos; 

const conectarBD = (callback) => {
    client.connect((err, db)=>{
        if(err){
            console.error("Error conectando a la base");
            return 'error';
        }
        baseDeDatos = db.db('gestionventas');
        console.log('conexión exitosa');
        return callback();
    });
};


const getDB = () =>{
    return baseDeDatos
};


export { conectarBD, getDB };