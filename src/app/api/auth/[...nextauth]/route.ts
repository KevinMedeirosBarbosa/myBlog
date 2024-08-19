import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

interface Session {
  user: {
    id: string;
    name?: string;
    email?: string;
    image?: string;
    accessToken?: string; // Adicionando accessToken à interface
  };
}

const handler = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (user && account) {
        token.accessToken = account.access_token;
        token.id = user?.id;

        try {
          const response = await axios.post(
            "http://localhost:3001/users/login",
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
        } catch (error) {
          console.error("Erro ao fazer requisição para o backend:", error);
        }
      }

      return token;
    },
    session({ session, token }) {
      if (session.user) {
        // Definir o id do usuário
        session.user.id = token.sub as string;

        // Definir o accessToken do usuário, se estiver disponível no token
        if (token.accessToken) {
          session.user.accessToken = token.accessToken;
        }
      }
      return session;
    },
  },
});
export { handler as GET, handler as POST };

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

// const authOption: NextAuthOptions = {
//   session: { strategy: "jwt" },
//   providers: [
//     Google({
//       clientId: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account, user }) {
//       if (user && account) {
//         token.accessToken = account.access_token;
//         token.id = user?.id;

//         try {
//           const response = await axios.post(
//             "http://localhost:3001/users/login",
//             {
//               googleID: user.id,
//               name: user.name,
//               email: user.email,
//             },
//             {
//               headers: {
//                 Authorization: `Bearer ${token.accessToken}`,
//               },
//             }
//           );
//           console.log(
//             "Requisição para o backend enviada com sucesso!",
//             response.data
//           );
//         } catch (error) {
//           console.error("Erro ao fazer requisição para o backend:", error);
//         }
//       }
//       return token;
//     },
//     session({ session, token }: Session) {
//       if (session.user) {
//         // Definir o id do usuário
//         session.user.id = token.sub as string;

//         // Definir o accessToken do usuário, se estiver disponível no token
//         if (token.accessToken) {
//           session.user.accessToken = token.accessToken;
//         }
//       }
//       return session;
//     },
//   },
// };

// export { authOption as GET, authOption as POST };
