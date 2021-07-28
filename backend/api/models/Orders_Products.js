const db = require("../models/index");

const Orders_Products = db.sequelize.define(
  "Orders_Products",
  {
    Orders_ProductsID: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    ProductID: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
    },
    OrderID: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
    },
    Quantity: {
      type: db.Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "Orders_Products",
    timestamps: false,
  }
);

module.exports = Orders_Products;
