import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const user = {
  id: "1",
  name: "Jon doe",
  email: "jon@email.com",
  password: "text123",
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        //1. User data fetch
        const userCollection = await dbConnect("users");
        const user = await userCollection.findOne({ email: credentials.email });
        if (!user) {
          return null;
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!passwordMatch) return null;
        console.log("Credentials", credentials);
        return user;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      if (token?.role) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user?.role) {
        token.role = user.role;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
