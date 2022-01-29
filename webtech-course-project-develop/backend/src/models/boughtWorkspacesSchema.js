const mongoose = require('mongoose');

const boughtWorkspacesSchema = new mongoose.Schema(
    {
      type: String,
      department: String,
      maxPeople: Number,
      usersEmails: Array,
      templates: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'templates'
        }
    ]
    }
);

module.exports = mongoose.model('BoughtWorkspaces', boughtWorkspacesSchema);
