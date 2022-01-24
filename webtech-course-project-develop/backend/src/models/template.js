import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema(
    {
      _id: String,
      name: String,
      description: String,
      category: String,
      resources: String,
      price: Number
    }
);

export default mongoose.model('template', templateSchema);
