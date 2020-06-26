const express = require("express");
const productsRepo = require("../../repositories/products");

const router = express.Router();

router.get("/admin/products", (req, res) => {});

router.get("/admin/products/new", (req, res) => {});

module.exports = router;

// Routes to add
// 1. list out products
// 2. show a form to create new product
// 3. submit form
// 4. edit form
// 5. submitting edited form
// 6. deleting a product
