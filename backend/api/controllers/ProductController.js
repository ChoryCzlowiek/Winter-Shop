const Product = require("../models/Product");
const Category = require("../models/Category");
const { Op } = require("sequelize");

Category.hasMany(Product, { foreignKey: "CategoryID" });
Product.belongsTo(Category, { foreignKey: "CategoryID" });

const ProductController = {
  getAllCategories: (req, res) => {
    Category.findAll({
      attributes: ["Name", "Photo"],
      where: {
        Photo: {
          [Op.not]: null,
        },
      },
    })
      .then((data) => {
        data.forEach((category) => {
          category.Photo = category.Photo.toString("base64");
        });

        res.status(200).send(data);
      })
      .catch((err) => res.status(500).send("Error: ", err));
  },

  getAllOfSingleCategory: (req, res) => {
    const { category } = req.params;

    Product.findAll({
      attributes: ["Name", "ImageURL", "Price", "ProductID"],
      include: [
        {
          model: Category,
          attributes: ["Name"],
          where: {
            Name: category,
          },
        },
      ],
    })
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send("Error: ", err));
  },

  getSingleProduct: (req, res) => {
    const { category, productID } = req.params;

    Product.findOne({
      include: [
        {
          model: Category,
          attributes: [],
          where: {
            Name: category,
          },
        },
      ],
      where: {
        ProductID: productID,
      },
    })
      .then((data) => {
        data.Image = data.Image.toString("base64");

        res.status(200).send(data);
      })
      .catch((err) => res.status(500).send("Error: ", err));
  },
};

module.exports = ProductController;
