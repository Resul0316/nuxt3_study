import mongoose from 'mongoose';

const schema: mongoose.Schema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
)

// register model

export default mongoose.model('Register', schema)