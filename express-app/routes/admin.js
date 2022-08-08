const express = require("express");
const router = express.Router();



const products = [
  {
    name: "Samsung S8",
    price: 3000,
    image: "1.jpeg",
    description: " iyi telefon",
  },
  {
    name: "Samsung S7",
    price: 2000,
    image: "2.jpeg",
    description: " idere eder telefon",
  },
  {
    name: "Samsung S9",
    price: 4000,
    image: "3.jpeg",
    description: "çok iyi telefon",
  },
  {
    name: "IPhone",
    price: 4500,
    image: "4.jpeg",
    description: " güzel telefon",
  },
];



router.get("/add-product", (req, res, next) => {
  res.render("add-product", {title: 'Add a New Product'});
});


// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push({name : req.body.name, price: req.body.price, image:req.body.image, description: req.body.description});
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
