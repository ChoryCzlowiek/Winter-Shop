const db = require("./index");

const Category = db.sequelize.define(
  "Categories",
  {
    CategoryID: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    URL: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    Photo: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Categories",
    timestamps: false,
  }
);

module.exports = Category;
