const express = require('express');
const workspaceController = require('../controllers/workspaceController');

const router = express.Router();

router.get('/workspaces', workspaceController.getWorkspaces);
router.post('/workspaces', workspaceController.createWorkspace);

module.exports.workspaceRouter = router;
