const mongoose = require('mongoose');
const BoughtWorkspaceSchema = require('../models/boughtWorkspacesSchema.js');
const User = require('../models/userSchema.js');
const Template = require('../models/templateSchema.js');

require('dotenv').config();

exports.getBoughtWorkspaces = async (req, res) => {
    BoughtWorkspaceSchema.find()
        .populate('BoughtWorkspaces')
        .exec((error, listWorkspaces) => {
            if (error) {
                return res.status(500).json({ result: false, message: 'Cannot get department list', error });
            }
            return res.status(200).json(listWorkspaces);
        });

 };

 exports.addMembersToWorkspace = async (req, res) => {
     const result = await BoughtWorkspaceSchema.updateOne({ boughtType: req.body.boughtType },
         { $push: { usersEmails: req.body.usersEmails } });

     return res.json(result.nModified > 0);
 };

exports.createBoughtWorkspace = async (req, res) => {
    const workspace = new BoughtWorkspaceSchema({
        boughtType: req.body.boughtType,
        ownerName: req.body.ownerName,
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
    const workspace = new BoughtWorkspaceSchema({
        boughtType: req.body.boughtType,
        ownerName: req.body.ownerName,
        department: req.body.department,
        maxPeople: req.body.maxPeople,
        userEmails: req.body.userEmails,
        templates: req.body.templates
    });

    const result = await User.updateOne({ name: req.body.name },
        { $push: { boughtWorkspaces: workspace } });

    return res.json(result.nModified > 0);
};

exports.addBoughtTemplateToWorkspace = async (req, res) => {
    const template = new Template({
        boughtWorkspaceType: req.body.boughtWorkspaceType,
        type: req.body.type,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        link: req.body.link,
        price: req.body.price
    });

   // Template.updateOne({ boughtWorkspaceType: req.body.boughtWorkspaceType,  })

    const TemplateModel = mongoose.model('Template');
   // const templatesToAdd = req.body.templates;

    TemplateModel.insertMany(template).then(
        (createdTemplates) => {
            return res.json({ result: true, templates: createdTemplates });
        }
    ).catch(
        (error) => {
            return res.status(400).json({ result: false, message: 'Cannot add templates', error });
        }
    );

    // console.log(template);
    // const result = await BoughtWorkspaceSchema.updateOne({ type: req.body.boughtType },
    //     { $push: { templates: template } });
    //
    // return res.json(result.nModified > 0);
};
