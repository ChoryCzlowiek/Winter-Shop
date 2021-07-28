const db = require("../models/index");

const Message = db.sequelize.define(
  "Messages",
  {
    Name: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    LastName: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    Email: {
      type: db.Sequelize.STRING,
      allowNull: false,
    },
    Message: {
      type: db.Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "Messages",
    timestamps: false,
  }
);

Message.removeAttribute("id");

module.exports = Message;
