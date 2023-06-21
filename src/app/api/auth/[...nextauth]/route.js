import User from '@/models/User';
import connectDB from '@/utils/db';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',

            async authorize(credentials) {
                await connectDB();
                try {
                    const user = await User.findOne({
                        email: credentials.email
                    });

                    if (user) {
                        const isValid = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isValid) {
                            return user;
                        } else {
                            throw new Error('Invalid credentials');
                        }
                    } else {
                        throw new Error('User not found');
                    }
                } catch (err) {
                    throw new Error('Authentication failed');
                }
            }
        })
    ]
});
export { handler as GET, handler as POST };
