const express = require('express');
const departmentController = require('../controllers/departmentController');

const router = express.Router();

router.get('/departments', departmentController.getDepartments);
router.post('/departments', departmentController.createDepartment);

module.exports.departmentRouter = router;
