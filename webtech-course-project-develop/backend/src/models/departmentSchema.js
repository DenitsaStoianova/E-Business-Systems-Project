const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema(
    {
      name: String,
      categories: Array,
      image: String
    }
);

module.exports = mongoose.model('Department', departmentSchema);
