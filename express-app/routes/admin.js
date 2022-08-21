const express = require("express");
const router = express.Router();

const adminController = require('../controllers/admin');
const isAdmin = require('../middleware/isAdmin')
const locals = require('../middleware/locals');

router.get("/products",isAdmin ,adminController.getProducts);

//  admin/add-product => GET
router.get("/add-product",isAdmin ,locals, adminController.getAddProduct);

// admin/add-product => POST
router.post("/add-product",isAdmin ,locals,adminController.postAddProduct);

// admin/products/20
router.get("/products/:productid",isAdmin ,locals, adminController.getEditProduct);

router.post("/products", isAdmin ,locals,adminController.postEditProduct);

router.post('/delete-product', isAdmin ,locals,adminController.postDeleteProduct);


router.get("/add-category",isAdmin ,locals, adminController.getAddCategory);

router.post("/add-category", isAdmin ,locals,adminController.postAddCategory);

router.get("/categories",isAdmin ,locals, adminController.getCategories);

router.get('/categories/:categoryid', isAdmin ,locals,adminController.getEditCategory);

router.post('/categories', isAdmin ,locals,adminController.postEditCategory);

router.post('/delete-category', isAdmin ,locals,adminController.postDeleteCategory);

module.exports = router;

