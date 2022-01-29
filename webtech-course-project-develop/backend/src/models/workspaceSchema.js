const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema(
    {
      type: String,
      description: String,
      maxPeople: Number,
      price: String,
      iconPath: String
    }
);

module.exports = mongoose.model('Workspace', workspaceSchema);
