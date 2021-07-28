const Message = require("../models/Message");

const MessageController = {
  sendMessage: (req, res) => {
    const message = {
      ...req.body,
    };

    console.log(message);

    Message.create(message)
      .then((data) => {
        console.log(data);
        res.status(200).send("Wiadomość została zapisana.");
      })
      .catch((err) => res.status(500).send("Error: ", err));
  },

  getAllMessages: (req, res) => {
    Message.findAll()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send("Error: ", err));
  },
};

module.exports = MessageController;
