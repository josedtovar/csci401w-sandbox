import mongoose from 'mongoose';


const reportSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        feedback: {
            type: String, 
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


export const Report = mongoose.model('Report', reportSchema);