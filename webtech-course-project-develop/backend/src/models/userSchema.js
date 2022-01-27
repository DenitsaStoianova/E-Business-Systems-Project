const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        name: {
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

module.exports = mongoose.model('User', userSchema);
