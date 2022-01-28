const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema(
    {
      categories: Array,
      iconPath: String
    }
);

module.exports = mongoose.model('Department', departmentSchema);
