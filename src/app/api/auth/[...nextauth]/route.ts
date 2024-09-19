import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (user && account) {
        token.accessToken = account.access_token;
        token.id = user?.id;

        try {
          if (account.provider === "google") {
            const response = await axios.post(
              "http://localhost:3001/login/google",
              {
                googleID: user.id,
                name: user.name,
                email: user.email,
              },
              {
                headers: {
                  Authorization: `Bearer ${token.accessToken}`,
                },
              }
            );
            console.log(
              "Requisição para o backend enviada com sucesso!",
              response.data
            );
          } else {
            const response = await axios.post(
              "http://localhost:3001/login/facebook",
              {
                facebookID: user.id,
                name: user.name,
                email: user.email,
              },
              {
                headers: {
                  Authorization: `Bearer ${token.accessToken}`,
                },
              }
            );
            console.log(
              "Requisição para o backend enviada com sucesso!",
              response.data
            );
          }
        } catch (error) {
          console.error("Erro ao fazer requisição para o backend:", error);
        }
      }
      return token;
    },
    session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        // Definir o id do usuário
        session.user.id = token.sub as string;

        // Definir o accessToken do usuário, se estiver disponível no token
        if (token.accessToken) {
          session.user.accessToken = token.accessToken as string;
        }
      }
      return session;
    },
  },
});
export { handler as GET, handler as POST };
