const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema(
    {
      name: String,
      description: String,
      category: String,
      resources: String,
      price: Number
    }
);

module.exports = mongoose.model('Template', templateSchema);
