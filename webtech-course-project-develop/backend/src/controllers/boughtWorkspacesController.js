const BoughtWorkspaces = require('../models/boughtWorkspacesSchema.js');
require('dotenv').config();

exports.getBoughtWorkspaces = async (req, res) => {
   BoughtWorkspaces.find()
   .populate('boughtWorkspaces')
   .exec((error, listBoughtWorkspaces) => {
       if (error) {
           return res.status(500).json({ result: false, message: 'Cannot get bought workspaces list', error });
       }
    //    return res.status(200).json({ result: true, boughtWorkspaces: listBoughtWorkspaces });
    return res.status(200).json(listBoughtWorkspaces);
   });
 };
