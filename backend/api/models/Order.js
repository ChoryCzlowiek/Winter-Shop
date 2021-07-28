const db = require("../models/index");

const Order = db.sequelize.define(
  "Orders",
  {
    OrderID: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    OrderDate: {
      type: db.Sequelize.DATE,
      allowNull: null,
    },
    OrderCost: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    Name: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    LastName: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    Street: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    BuildingNumber: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    ApartmentNumber: {
      type: db.Sequelize.STRING,
      allowNull: true,
    },
    ZIPCode: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    City: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    Telephone: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
    },
    Email: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Orders",
    timestamps: false,
  }
);

module.exports = Order;
