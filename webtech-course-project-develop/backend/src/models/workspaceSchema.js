const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema(
    {
      type: String,
      description: String,
      price: Number,
      iconPath: String
    }
);

module.exports = mongoose.model('Workspaces', workspaceSchema);
