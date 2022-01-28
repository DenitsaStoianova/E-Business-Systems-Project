const express = require('express');
const boughtWorkspacesController = require('../controllers/boughtWorkspacesController');

const router = express.Router();

router.get('/boughtWorkspaces', boughtWorkspacesController.getBoughtWorkspaces);

module.exports.boughtWorkspacesRouter = router;
