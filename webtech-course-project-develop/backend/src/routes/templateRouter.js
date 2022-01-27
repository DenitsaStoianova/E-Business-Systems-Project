const express = require('express');
const templateController = require('../controllers/templateController');

const router = express.Router();

router.get('/templates', templateController.getTemplates);
router.post('/templates', templateController.createTemplate);

module.exports.templateRouter = router;
