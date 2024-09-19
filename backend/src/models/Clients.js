const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Users = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    googleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    facebookID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    // Opção para incluir timestamps
    timestamps: true,
    // Opção para atualizar updatedAt automaticamente
    updatedAt: "updatedAt",
  }
);

module.exports = Users;
