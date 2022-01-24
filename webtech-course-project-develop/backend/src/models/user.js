import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        boughtWorkspaces: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'bought-workspaces'
            }
        ]
    }
);

export default mongoose.model('User', userSchema);
