const { DataTypes } = require('sequelize');
const { sequelize } = require("../database/baseDatos");


const Publicacion = sequelize.define(
  "Publicacion", 
  {

  // Model attributes are defined here
  Image: {
    type: DataTypes.STRING(2000),
    allowNull: false,
  },
  Titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Publicacion === sequelize.models.Publicacion); // true

Publicacion.sync();

module.exports = Publicacion;