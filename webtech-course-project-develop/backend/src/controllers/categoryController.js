const mongoose = require('mongoose');
const CategorySchema = require('../models/categorySchema.js');
require('dotenv').config();

exports.getCategories = async (req, res) => {
  CategorySchema.find()
   .populate('category')
   .exec((error, listCategories) => {
       if (error) {
           return res.status(500).json({ result: false, message: 'Cannot get categories list', error });
       }
       return res.status(200).json({ result: true, categories: listCategories });
   });
 };

 exports.createCategories = async (req, res) => {
  const CategoryModel = mongoose.model('Category');
  const categoriesToAdd = req.body.categories;

  //  const category = new CategorySchema({
  //     name: req.body.name,
  //     templates: req.body.templates
  //   });
  CategoryModel.insertMany(categoriesToAdd).then(
     (createdCategory) => {
         return res.json({ result: true, categories: createdCategory });
     }
   ).catch(
     (error) => {
         return res.status(400).json({ result: false, message: 'Cannot create this category', error });
     }
  );
};

exports.addTemplatesToCategory = async (req, res) => {
  const Template = mongoose.model('Template');
  const newTemplates = await Template.create(req.body.templates);

  const newCategory = new CategorySchema({
    name: req.query.name,
    templates: newTemplates
  });
  newCategory.save().then(
   (createdCategory) => {
       return res.json({ result: true, category: createdCategory });
   }
 ).catch(
   (error) => {
       return res.status(400).json({ result: false, message: 'Cannot create this category', error });
   }
);
};
