const conexion = require("../database/db");

exports.save = (req,res)=>{
    const nombre = req.body.nombre;
    const capital = req.body.capital;
    console.log(""+nombre+" -"+capital);
    conexion.query("INSERT INTO paises SET ?",{nombre:nombre,capital:capital}, (error)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect("/");
        }
    })
};