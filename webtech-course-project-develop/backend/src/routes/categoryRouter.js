const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/categories', categoryController.getCategories);
router.post('/categories', categoryController.createCategories);

module.exports.categoryRouter = router;
