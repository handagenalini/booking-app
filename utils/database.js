const Sequelize = require('sequelize');

const sequelize = new Sequelize('bookingapp','root','handage@12',{dialect:'mysql',host:'localhost'}
);

module.exports =sequelize;