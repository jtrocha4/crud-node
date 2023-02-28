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

router.get("/edit/:id", (req,res)=>{
    const id = req.params.id;
    conexion.query("SELECT * FROM paises WHERE id=?",[id],(error,result)=>{
        if (error) {
            console.log(error)
        } else {
            res.render("edit",{pais:result[0]});
        }
    })
})

const crud = require("./controllers/crud")
router.post("/save", crud.save)
router.post("/update", crud.update)

module.exports = router;