import mongoose from 'mongoose';

const workspaceSchema = new mongoose.Schema(
    {
      _id: String,
      type: String,
      description: String,
      price: Number,
      iconPath: String
    }
);

export default mongoose.model('workspaces', workspaceSchema);
