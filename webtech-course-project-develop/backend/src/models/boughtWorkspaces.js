import mongoose from 'mongoose';

const boughtWorkspacesSchema = new mongoose.Schema(
    {
      _id: String,
      name: String,
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

export default mongoose.model('bought-workspaces', boughtWorkspacesSchema);
