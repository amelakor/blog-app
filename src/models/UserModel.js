import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        }
    },
    { timestamps: true }
);

export default mongoose.model('User', UserSchema);
