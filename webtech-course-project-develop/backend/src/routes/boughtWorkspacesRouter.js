const express = require('express');
const boughtWorkspacesController = require('../controllers/boughtWorkspacesController');

const router = express.Router();

router.get('/boughtWorkspaces', boughtWorkspacesController.getBoughtWorkspaces);
router.post('/boughtWorkspaces/addMember', boughtWorkspacesController.addMembersToWorkspace);

module.exports.boughtWorkspacesRouter = router;
