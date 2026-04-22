import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
console.log("GOOGLE CLIENT ID:", process.env.GOOGLE_CLIENT_ID);

console.log("GOOGLE CLIENT ID:", process.env.GOOGLE_CLIENT_ID);
console.log("NEXTAUTH_SECRET EXISTS:", !!process.env.NEXTAUTH_SECRET);
console.log("TRUST HOST:", process.env.AUTH_TRUST_HOST);
console.log("URL:", process.env.NEXTAUTH_URL);
export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],  secret: process.env.NEXTAUTH_SECRET
});