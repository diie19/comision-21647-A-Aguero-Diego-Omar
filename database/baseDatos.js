const { Sequelize } = require('sequelize');

const basedatosname = process.env.BASEDATOS_NAME;
const basedatosuser = process.env.BASEDATOS_USER;
const basedatospass = process.env.BASEDATOS_PASS;
const basedatoshost = process.env.BASEDATOS_HOST;
const basedatosdialect = process.env.BASEDATOS_DIALECT;


const sequelize = new Sequelize( basedatosname, basedatosuser, basedatospass, {
  host: basedatoshost,
  dialect: basedatosdialect
});

const TestConection = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa a la base de datos.');
      } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
      }

  };

  module.exports = { sequelize, TestConection}