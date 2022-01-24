import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema(
    {
      _id: String,
      categories: Array,
      iconPath: String
    }
);

export default mongoose.model('department', departmentSchema);
