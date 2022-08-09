const express = require("express");
const router = express.Router();

const adminController = require('../controllers/admin');

router.get("/products", adminController.getProducts);

//  admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

// admin/products/20
router.get("/products/:productid", adminController.getEditProduct);

router.post("/products", adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);


module.exports = router;

