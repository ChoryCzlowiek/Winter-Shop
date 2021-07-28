const Sequelize = require('sequelize');

const sequelize = new Sequelize('mssql://mkaminski:Coronavirus321@dyplom.wwsi.edu.pl:50222/INZ2020SkiShopMK')
sequelize.authenticate()
.then(()=>{
    console.log('Connection has been successfully.');
  })
.catch(err=>console.error('Unable to Connect to the database: ', err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;