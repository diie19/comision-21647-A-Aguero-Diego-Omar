const publicacionRoutes = require("express").Router();
const { ctlrPublicacion } = require("../controllers/publicacion.controllers");

//CRUD

//RUTAS PARA EL CRUD


//1. leer todas las publicaciones de la base de datos
publicacionRoutes.get("/publicacion", ctlrPublicacion.getAllPublicaciones);

//2. crear publicacion nueva
publicacionRoutes.post("/publicacion", ctlrPublicacion.createPublicacion);

//3. eliminar una publicacion 
publicacionRoutes.delete("/publicacion/:id", ctlrPublicacion.deletePublicacion);

//4. editar una publicacion
publicacionRoutes.put("/publicacion/:id", ctlrPublicacion.editPublicacion);

module.exports = publicacionRoutes;