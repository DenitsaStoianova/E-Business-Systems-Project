const Template = require('../models/templateSchema.js');
require('dotenv').config();

exports.getTemplates = async (req, res) => {
   Template.find()
  .populate('template')
  .exec((error, listTemplates) => {
      if (error) {
          return res.status(500).json({ result: false, message: 'Cannot get templates list', error });
      }
      return res.status(200).json({ result: true, template_list: listTemplates });
  });
};

exports.createTemplate = async (req, res) => {
  const template = new Template({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    resources: req.body.resources,
    price: req.body.price
  });
  template.save().then(
   (createdTemplate) => {
       return res.json({ result: true, template: createdTemplate });
   }
 ).catch(
   (error) => {
       return res.status(400).json({ result: false, message: 'Cannot create this template', error });
   }
);
};
