const db = require("../models/index");

const Basket = db.sequelize.define(
  "Baskets",
  {
    BasketIP: {
      type: db.Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    ProductID: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
    },
    Quantity: {
      type: db.Sequelize.INTEGER,
      allowNull: true,
    },
    TotalPrice: {
      type: db.Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "Baskets",
    timestamps: false,
  }
);

module.exports = Basket;
