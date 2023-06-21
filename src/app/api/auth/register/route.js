import User from '@/models/User.js';
import connectDB from '@/utils/db';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export const POST = async (req, res) => {
    const { name, email, password } = await req.json();
    await connectDB();
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = new User({
        name,
        email,
        password: hashedPassword
    });

    try {
        await user.save();
        return new NextResponse('User created', { status: 201 });
    } catch (err) {
        return new NextResponse(err.message, { status: 500 });
    }
};
