const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
      name: String,
      templates: [
         {
             type: mongoose.Schema.Types.ObjectId,
             ref: 'template'
         }
     ]
    }
);

module.exports = mongoose.model('Category', categorySchema);
