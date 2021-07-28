const db = require("./index");

const Product = db.sequelize.define(
  "Products",
  {
    ProductID: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    DateAdd: {
      type: db.Sequelize.DATE,
      allowNull: false,
    },
    DateModify: {
      type: db.Sequelize.DATE,
      allowNull: false,
    },
    Name: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    URL: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    API: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    Description: {
      type: db.Sequelize.TEXT,
      allowNull: false,
    },
    ImageURL: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    Image: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    Price: {
      type: db.Sequelize.STRING,
      allowNull: true,
    },
    CategoryID: {
      type: db.Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "Products",
    timestamps: false,
  }
);

module.exports = Product;
