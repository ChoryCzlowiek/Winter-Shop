const express = require("express");
const MessageController = require("../controllers/MessageController");
const ProductController = require("../controllers/ProductController");
const BasketController = require("../controllers/BasketController");
const OrderController = require("../controllers/OrderController");
const router = express.Router();

router.post("/message/sendMessage", MessageController.sendMessage);
router.get("/message/getAllMessages", MessageController.getAllMessages);

router.get("/product/:category/:productID", ProductController.getSingleProduct);
router.get("/product/getAllCategories", ProductController.getAllCategories);
router.get("/product/:category", ProductController.getAllOfSingleCategory);

router.post("/basket/addProduct", BasketController.addProductToBasket);
router.get("/basket/getBasket", BasketController.getBasket);

router.post("/order/sendOrder", OrderController.sendOrder);

module.exports = router;
