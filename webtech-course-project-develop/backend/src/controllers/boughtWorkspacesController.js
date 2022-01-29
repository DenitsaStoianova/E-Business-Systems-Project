const mongoose = require('mongoose');
const BoughtWorkspaceSchema = require('../models/boughtWorkspacesSchema.js');
const User = require('../models/userSchema.js');
const Template = require('../models/templateSchema.js');
const Department = require('../models/departmentSchema');

require('dotenv').config();

exports.getBoughtWorkspaces = async (req, res) => {
    BoughtWorkspaceSchema.find()
        .populate('BoughtWorkspaces')
        .exec((error, listWorkspaces) => {
            if (error) {
                return res.status(500).json({ result: false, message: 'Cannot get department list', error });
            }
            console.log(listWorkspaces);
            return res.status(200).json(listWorkspaces);
        });


  //  const result = await User.find({ name: req.query.username }).select('boughtWorkspaces');

    // User.findOne({ name: req.query.username })
    //     .populate('user').exec(async (err, user) => {
    //     if (err) {
    //         return res.status(500).send();
    //     } if (user == null) {
    //         return res.json({ result: false, message: 'User not Found' });
    //     }
    //     console.log(user.boughtWorkspaces);
    //     return res.json({  boughtWorkspaces: user.boughtWorkspaces});
    // });
    // const boughtWorkspaces = mongoose.model('BoughtWorkspaces');
    // const user = await User.findOne({ name: req.query.username }).exec();
    //
    //
    // console.log(req.query.username);
    // const worksp = await boughtWorkspaces.find().select(user.boughtWorkspaces);
    // console.log(worksp);
    //
    //
    // user.boughtWorkspaces.forEach((w) => {
    //    // const res = Template.find({ '_id' : w })
    //    //      .populate('post.id')
    //    //      .exec();
    //    console.log(w);
    // });
    //

//    console.log(result);
 //
 //    User.aggregate([
 //        // { $match: { name: req.query.username } },
 //        {
 // $lookup: {
 //     from: 'BoughtWorkspaces',
 //     localField: 'boughtWorkspaces',
 //     foreignField: '_id',
 //     as: 'bought-Workspaces' }
 //        },
 //        {
 //            $unwind: '$bought-Workspaces'
 //        }
 //        // {
 //        //     $project:{
 //        //         type: '$bought_workspaces.type',
 //        //         department: '$bought_workspaces.department',
 //        //         maxPeople: '$bought_workspaces.maxPeople',
 //        //         usersEmails: '$bought_workspaces.usersEmails',
 //        //         templates: '$bought_workspaces.templates'
 //        //     }
 //        // eslint-disable-next-line no-shadow
 //        ]).then((result) => {
 //            console.log(result);
 //    }).catch((error) => {
 //        console.log(error);
 //    });

    // console.log(req.query.username);
    // console.log(result2);
   // User.find({ name: req.query.username })
   // .populate('boughtWorkspaces')
   // .exec((error, boughtWorkspaces) => {
   //     if (error) {
   //         return res.status(500).json({ result: false, message: 'Cannot get bought workspaces list', error });
   //     }
   //  //    return res.status(200).json({ result: true, boughtWorkspaces: listBoughtWorkspaces });
   //     console.log(boughtWorkspaces);
   //  return res.status(200).json(boughtWorkspaces);
   // });

  //  return res.status(200).json(result);
 };

 exports.addMembersToWorkspace = async (req, res) => {
     const result = await BoughtWorkspaceSchema.updateOne({ type: req.body.type },
         { $push: { userEmails: req.body.userEmails } });

     return res.json(result.nModified > 0);
 };

exports.createBoughtWorkspace = async (req, res) => {
    const workspace = new BoughtWorkspaceSchema({
        type: req.body.type,
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
        type: req.body.type,
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
