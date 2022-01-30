const mongoose = require('mongoose');
const Workspace = require('../models/workspaceSchema.js');
require('dotenv').config();

exports.getWorkspaces = async (req, res) => {
   Workspace.find()
  .populate('workspace')
  .exec((error, listWorkspaces) => {
      if (error) {
          return res.status(500).json({ result: false, message: 'Cannot get workspaces list', error });
      }
      return res.status(200).json(listWorkspaces);
  });
};

exports.createWorkspaces = async (req, res) => {
  const WorkspaceModel = mongoose.model('Workspace');
  const workspacesToAdd = req.body.workspaces;

  //  const workspace = new Workspace({
  //     type: req.body.type,
  //     description: req.body.description,
  //     maxPeople: req.body.maxPeople,
  //     price: req.body.price,
  //     image: req.body.image
  //   });

  WorkspaceModel.insertMany(workspacesToAdd).then(
     (createdWorkspaces) => {
         return res.json({ result: true, workspaces: createdWorkspaces });
     }
   ).catch(
     (error) => {
         return res.status(400).json({ result: false, message: 'Cannot create this workspace', error });
     }
  );
};
