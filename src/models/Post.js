import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        username: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        image: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        content: {
            type: String,
            required: true,
            trim: true,
            maxlength: 500
        }
    },
    { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
