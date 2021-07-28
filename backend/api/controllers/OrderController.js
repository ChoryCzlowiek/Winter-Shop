const Order = require("../models/Order");
const Order_Products = require("../models/Orders_Products");
const Basket = require("../models/Basket");
const Product = require("../models/Product");

Order.hasMany(Order_Products, { foreignKey: "OrderID" });
Order_Products.belongsTo(Order, { foreignKey: "OrderID" });
Order_Products.belongsTo(Product, { foreignKey: "ProductID" });
Product.hasOne(Order_Products, { foreignKey: "ProductID" });

const OrderController = {
  sendOrder: (req, res) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    const totalPrice = req.body.Products.reduce((acc, obj) => {
      return acc + obj.TotalPrice;
    }, 0);

    const newOrder = {
      OrderDate: today,
      OrderCost: totalPrice,
      Name: req.body.Name,
      LastName: req.body.LastName,
      Street: req.body.Street,
      BuildingNumber: req.body.BuildingNumber,
      ZIPCode: req.body.ZIPCode,
      City: req.body.City,
      Telephone: req.body.Telephone,
      Email: req.body.Email,
    };

    if (req.body.ApartmentNumber) {
      newOrder.ApartmentNumber = req.body.ApartmentNumber;
    }

    Order.create(newOrder)
      .then((data) => {
        req.body.Products.forEach((product) => {
          Order_Products.create({
            ProductID: product.ProductID,
            Quantity: product.Quantity,
            OrderID: data.OrderID,
          })
            .then((data) => {
              const basketIP = req.ip;
              Basket.destroy({
                where: {
                  BasketIP: basketIP,
                },
              })
                .then((data) =>
                  res.status(200).send("Zamówienia zostało przyjęte.")
                )
                .catch((err) => res.status(500).send("Error: ", err));
            })
            .catch((err) => res.status(500).send("Error: ", err));
        });
      })
      .catch((err) => res.status(500).send("Error: ", err));
  },
};

module.exports = OrderController;
