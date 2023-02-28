const express = require("express");
const app = express();

//Importacion del motor de diseño ejs
app.set("view engine", "ejs")

app.listen(5000, ()=>{
    console.log("Server corriendo en http://localhost:5000")
})

app.use("/", require("./router"));