import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
      _id: String,
      name: String,
      templates: [
         {
             type: mongoose.Schema.Types.ObjectId,
             ref: "template"
         }
     ]
    }
);

export default mongoose.model('category', categorySchema);
