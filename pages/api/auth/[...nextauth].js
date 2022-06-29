import NextAuth from "next-auth";
import googleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
});
