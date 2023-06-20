import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (request) => {
    //const url = new URL(request.url);

    //const username = url.searchParams.get('username');

    try {
        await connectDB();
        console.log('amela connected');

        const posts = await Post.find();
        console.log(posts, 'postssssss');

        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
        console.log(err, 'err DATABASEEE');
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const POST = async (request) => {
    const body = await request.json();

    const newPost = new Post(body);

    try {
        await connectDB();

        await newPost.save();

        return new NextResponse('Post has been created', { status: 201 });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};
