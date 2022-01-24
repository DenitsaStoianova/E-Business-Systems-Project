import mongoose from 'mongoose';

const boughtWorkspacesSchema = new mongoose.Schema(
    {
      _id: String,
      name: String,
      department: String,
      maxPeople: Number,
      usersEmails: Array,
      templates: Array
    }
);

export default mongoose.model('bought-workspaces', boughtWorkspacesSchema);
