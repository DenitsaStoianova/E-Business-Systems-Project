const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/categories', categoryController.getCategories);
router.post('/categories', categoryController.createCategories);
router.post('/categories/templates', categoryController.addTemplatesToCategory);

module.exports.categoryRouter = router;
