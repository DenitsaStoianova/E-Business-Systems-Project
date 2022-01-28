const Category = require('../models/categorySchema.js');
require('dotenv').config();

exports.getCategories = async (req, res) => {
   Category.find()
   .populate('category')
   .exec((error, listCategories) => {
       if (error) {
           return res.status(500).json({ result: false, message: 'Cannot get categories list', error });
       }
       return res.status(200).json({ result: true, categories: listCategories });
   });
 };

 exports.createCategories = async (req, res) => {
   const category = new Category({
      name: req.body.name,
      templates: req.body.templates
    });
    category.save().then(
     (createdCategory) => {
         return res.json({ result: true, category: createdCategory });
     }
   ).catch(
     (error) => {
         return res.status(400).json({ result: false, message: 'Cannot create this category', error });
     }
  );
};
