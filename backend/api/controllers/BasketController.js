const { sequelize } = require("../models");
const Basket = require("../models/Basket");
const Product = require("../models/Product");

Basket.belongsTo(Product, { foreignKey: "ProductID" });
Product.hasMany(Basket, { foreignKey: "ProductID" });

const BasketController = {
  addProductToBasket: async (req, res) => {
    const BasketIP = req.ip;
    const { ProductID, Price } = req.body;
    console.log(ProductID, Price);

    const existsProduct = await Basket.findOne({
      where: {
        ProductID: ProductID,
      },
    });

    if (existsProduct === null) {
      console.log("nowy");
      const newProductInBasket = {
        BasketIP,
        ProductID,
        Quantity: 1,
        TotalPrice: Price,
      };

      Basket.create(newProductInBasket)
        .then((data) =>
          res.status(200).send("Produkt został dodany do koszyka.")
        )
        .catch((err) => res.status(500).send("Error: ", err));
    } else {
      console.log("istanieje");
      existsProduct
        .update({
          Quantity: sequelize.literal("Quantity + 1"),
          TotalPrice: sequelize.literal("TotalPrice + TotalPrice / Quantity"),
        })
        .then((data) =>
          res.status(200).send("Produkt został dodany do koszyka.")
        )
        .catch((err) => res.status(500).send("Error: ", err));
    }
  },

  getBasket: (req, res) => {
    const IP = req.ip;
    console.log(IP);

    Product.findAll({
      attributes: [
        "Name",
        "ImageURL",
        "Price",
        "ProductID",
        [sequelize.col("Baskets.TotalPrice"), "TotalPrice"],
        [sequelize.col("Baskets.Quantity"), "Quantity"],
      ],
      include: [
        {
          model: Basket,
          attributes: [],
          where: {
            BasketIP: IP,
          },
        },
      ],
      raw: true,
    })
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send("Error: ", err));
  },

  removeProduct: (req, res) => {
    const ProductID = req.body;

    Product.destroy({
      where: {
        ProductID: ProductID,
      },
    });
  },
};

module.exports = BasketController;
