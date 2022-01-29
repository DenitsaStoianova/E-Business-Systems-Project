const Workspace = require('../models/workspaceSchema.js');
require('dotenv').config();

exports.getWorkspaces = async (req, res) => {
   Workspace.find()
  .populate('workspace')
  .exec((error, listWorkspaces) => {
      if (error) {
          return res.status(500).json({ result: false, message: 'Cannot get workspaces list', error });
      }
     // return res.status(200).json({ result: true, workspaces: listWOrkspaces });
      return res.status(200).json(listWorkspaces);
  });
};

exports.createWorkspace = async (req, res) => {
   const workspace = new Workspace({
      type: req.body.type,
      description: req.body.description,
      maxPeople: req.body.maxPeople,
      price: req.body.price,
      iconPath: req.body.iconPath
    });
    workspace.save().then(
     (createdWorkspace) => {
         return res.json({ result: true, workspace: createdWorkspace });
     }
   ).catch(
     (error) => {
         return res.status(400).json({ result: false, message: 'Cannot create this workspace', error });
     }
  );
};
