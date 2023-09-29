const agregarRoutes = require("express").Router();

//renderizar agregar
agregarRoutes.get("/agregar", (req, res) => {
    res.render("agregar");
});

module.exports = agregarRoutes;