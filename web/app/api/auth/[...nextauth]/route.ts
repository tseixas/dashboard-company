import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "auth",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Digite o seu e-mail",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Digite a sua senha",
        },
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:8000/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const result = await res.json();

        if (res.ok) {
          return result.data;
        }

        return null;
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     console.log(token, user)
  //     user && (token.user = user);
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session = token.user as any;
  //     return session;
  //   },
  // },
  secret: "jwttoken",
  pages: {
    signIn: "/login", 
    error: "/login", 
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
