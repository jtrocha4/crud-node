const mysql = require("mysql");

const conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rootMySQL",
    database:"crud_node_db"
});

conexion.connect((error)=>{
    if(error){
        console.log(error);
        return
    }else{
        console.log("Conexion exitosa");
    }
});

module.exports = conexion;