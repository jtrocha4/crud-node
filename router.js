const express = require("express");
const router = express.Router();

// router.get("/", (req,res)=>{
//     res.send("Bienvenidos a la seccion Principal");
// })

const conexion = require("./database/db");

router.get("/", (req,res)=>{
    // res.render("index")
    conexion.query("SELECT * FROM `paises`", (error,result)=>{
        if(error){
            console.log(error);
        }else{
            // res.send(result);
            res.render("index", {resIndex:result});
        }
    })
})

router.get("/create", (req,res)=>{
   res.render("create")
})

const crud = require("./controllers/crud")
router.post("/save", crud.save)

module.exports = router;