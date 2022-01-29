const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema(
    {
      type: String,
      description: String,
      category: String,
      image: String,
      link: String,
      price: String
    }
);

module.exports = mongoose.model('Template', templateSchema);
