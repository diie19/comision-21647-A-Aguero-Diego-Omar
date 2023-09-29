const indexRoutes = require("express").Router();

//renderizar index
indexRoutes.get("/", (req, res) => {
    res.render("index");
});

module.exports = indexRoutes;