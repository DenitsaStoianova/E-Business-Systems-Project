const BoughtWorkspace = require('../models/boughtWorkspacesSchema.js');
const User = require('../models/userSchema.js');

require('dotenv').config();

exports.getBoughtWorkspaces = async (req, res) => {
    console.log(req.query.username);
   User.find({ name: req.query.username })
   .populate('boughtWorkspaces')
   .exec((error, listBoughtWorkspaces) => {
       if (error) {
           return res.status(500).json({ result: false, message: 'Cannot get bought workspaces list', error });
       }
    //    return res.status(200).json({ result: true, boughtWorkspaces: listBoughtWorkspaces });
    return res.status(200).json(listBoughtWorkspaces);
   });
 };

 exports.addMembersToWorkspace = async (req) => {
     BoughtWorkspace.updateOne(
         { type: req.body.name },
         { $set: { userEmails: req.body.userEmails } }
  );
 };

exports.createBoughtWorkspace = async (req, res) => {
    const workspace = new BoughtWorkspace({
        type: req.body.name,
        department: req.body.department,
        maxPeople: req.body.maxPeople,
        userEmails: req.body.userEmails,
        templates: req.body.templates
    });
    workspace.save().then(
        (boughtWorkspace) => {
            return res.json(boughtWorkspace);
        }
    ).catch(
        (error) => {
            return res.status(400).json({ result: false, message: 'Cannot create this workspace', error });
        }
    );
};

exports.addBoughtWorkspace = async (req, res) => {
    const workspace = new BoughtWorkspace({
        type: req.body.type,
        department: req.body.department,
        maxPeople: req.body.maxPeople,
        userEmails: req.body.userEmails,
        templates: req.body.templates
    });

    const result = await User.updateOne({ name: req.body.name },
        { $push: { boughtWorkspaces: workspace } });

    return res.json(result.nModified > 0);
};
