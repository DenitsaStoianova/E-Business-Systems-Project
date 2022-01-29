const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema(
    {
      type: String,
      description: String,
      maxPeople: Number,
      price: String,
      image: String
    }
);

module.exports = mongoose.model('Workspace', workspaceSchema);
