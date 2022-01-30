const express = require('express');
const boughtWorkspacesController = require('../controllers/boughtWorkspacesController');

const router = express.Router();

router.get('/boughtWorkspaces', boughtWorkspacesController.getBoughtWorkspaces);
router.post('/boughtWorkspaces', boughtWorkspacesController.createBoughtWorkspace);
router.post('/boughtWorkspaces/addMember', boughtWorkspacesController.addMembersToWorkspace);
router.post('/boughtWorkspaces/addBoughtWorkspace', boughtWorkspacesController.addBoughtWorkspace);
router.post('/boughtWorkspaces/addBoughtTemplateToWorkspace', boughtWorkspacesController.addBoughtTemplateToWorkspace);

module.exports.boughtWorkspacesRouter = router;
