const editarRoutes = require("express").Router();

//renderizar editar
editarRoutes.get("/editar", (req, res) => {
    res.render("editar");
});

module.exports = editarRoutes;