const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema(
    {
      name: String,
      categories: Array,
      iconPath: String
    }
);

module.exports = mongoose.model('Department', departmentSchema);
