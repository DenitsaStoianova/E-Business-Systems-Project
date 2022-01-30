const mongoose = require('mongoose');
const Template = require('../models/templateSchema.js');
require('dotenv').config();

exports.getTemplates = async (req, res) => {
   Template.find()
  .populate('template')
  .exec((error, listTemplates) => {
      if (error) {
          return res.status(500).json({ result: false, message: 'Cannot get templates list', error });
      }
      // return res.status(200).json({ result: true, template_list: listTemplates });
      return res.status(200).json(listTemplates);
  });
};

exports.createTemplates = async (req, res) => {
  const TemplateModel = mongoose.model('Template');
  const templatesToAdd = req.body.templates;

  TemplateModel.insertMany(templatesToAdd).then(
   (createdTemplates) => {
       return res.json({ result: true, templates: createdTemplates });
   }
 ).catch(
   (error) => {
       return res.status(400).json({ result: false, message: 'Cannot add templates', error });
   }
  );
};
