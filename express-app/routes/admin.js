const express = require("express");
const router = express.Router();

const adminController = require('../controllers/admin');
const isAuthenticated = require('../middleware/authentication')
const csrf = require('../middleware/csrf');

router.get("/products",isAuthenticated ,adminController.getProducts);

//  admin/add-product => GET
router.get("/add-product",isAuthenticated ,csrf, adminController.getAddProduct);

// admin/add-product => POST
router.post("/add-product",isAuthenticated ,csrf,adminController.postAddProduct);

// admin/products/20
router.get("/products/:productid",isAuthenticated ,csrf, adminController.getEditProduct);

router.post("/products", isAuthenticated ,csrf,adminController.postEditProduct);

router.post('/delete-product', isAuthenticated ,csrf,adminController.postDeleteProduct);


router.get("/add-category",isAuthenticated ,csrf, adminController.getAddCategory);

router.post("/add-category", isAuthenticated ,csrf,adminController.postAddCategory);

router.get("/categories",isAuthenticated ,csrf, adminController.getCategories);

router.get('/categories/:categoryid', isAuthenticated ,csrf,adminController.getEditCategory);

router.post('/categories', isAuthenticated ,csrf,adminController.postEditCategory);

router.post('/delete-category', isAuthenticated ,csrf,adminController.postDeleteCategory);

module.exports = router;

