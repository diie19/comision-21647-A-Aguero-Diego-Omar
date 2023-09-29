const express = require("express");
const morgan = require("morgan");
const path = require("node:path");
const dotenv = require("dotenv");
dotenv.config();
const { TestConection } = require("./database/baseDatos.js")
const publicacionRoutes = require("./routes/publicacion.routes.js");
const indexRoutes = require("./routes/index.routes.js");

const app = express();

const PORT = process.env.PORT || 5005

//middlewars
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false}));

//configurar motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



//test de conexion
TestConection();

app.use(indexRoutes);
app.use(publicacionRoutes);

app.listen(PORT, () =>
console.log("servidor corriendo en el puerto: " + PORT)
);