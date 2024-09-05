const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myspace_db", "root", "021202", {
  host: "0.0.0.0",
  dialect: "mysql",
});

module.exports = sequelize;
