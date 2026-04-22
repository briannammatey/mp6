import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
console.log("GOOGLE CLIENT ID:", process.env.GOOGLE_CLIENT_ID);

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],  secret: process.env.NEXTAUTH_SECRET
});