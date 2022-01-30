const mongoose = require('mongoose');
const Department = require('../models/departmentSchema.js');
require('dotenv').config();

exports.getDepartments = async (req, res) => {
   Department.find()
   .populate('department')
   .exec((error, listDepartments) => {
       if (error) {
           return res.status(500).json({ result: false, message: 'Cannot get department list', error });
       }
       return res.status(200).json(listDepartments);
   });
 };

 exports.createDepartments = async (req, res) => {
   const DepartmentModel = mongoose.model('Department');
   const departmentsToAdd = req.body.departments;

  DepartmentModel.insertMany(departmentsToAdd).then(
     (createdDepartments) => {
         return res.json({ result: true, departments: createdDepartments });
     }
   ).catch(
     (error) => {
         return res.status(400).json({ result: false, message: 'Cannot create this department', error });
     }
  );
};
