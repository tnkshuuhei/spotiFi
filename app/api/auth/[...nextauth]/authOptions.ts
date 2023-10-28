import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const auth_url = "https://accounts.spotify.com/authorize";
const response_type = "token";
const redirect_uri = "http://localhost:3000";
const clientId = process.env.SPOTIFY_CLIENT_ID as string;
const LOGIN_URL = `${auth_url}?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=${response_type}`;

const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: clientId,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.JWT_SECRET,
  // callbacks: {
  //   async jwt({ token, account }) {
  //     // Persist the OAuth access_token to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       token.refreshToken = account.refresh_token;
  //       token.accessTokenExpires = account.expires_at;
  //       return token;
  //     }
  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token from a provider.
  //     session.accessToken = token.accessToken;
  //     return session;
  //   },
  // },
};

export default authOptions;
