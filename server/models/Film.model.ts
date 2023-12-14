import mongoose from 'mongoose';

const schema: mongoose.Schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
)

// film model

export default mongoose.model('Film', schema)