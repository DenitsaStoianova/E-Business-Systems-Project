const express = require('express');
const workspaceController = require('../controllers/workspaceController');

const router = express.Router();

router.get('/workspaces', workspaceController.getWorkspaces);
router.post('/workspaces', workspaceController.createWorkspace);
router.post('/workspaces', workspaceController.searchWorkspaceByName);

module.exports.workspaceRouter = router;
