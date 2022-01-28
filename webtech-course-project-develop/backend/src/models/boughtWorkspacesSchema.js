const mongoose = require('mongoose');

const boughtWorkspacesSchema = new mongoose.Schema(
    {
      name: String,
      department: String,
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
