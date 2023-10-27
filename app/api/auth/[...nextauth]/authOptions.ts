import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-modify-playback-state",
].join(",");

const params = {
  scope: scopes,
};
const auth_url = "https://accounts.spotify.com/authorize";
const response_type = "token";
const redirect_uri = "http://localhost:3000";
const clientId = process.env.SPITIFY_CLIENT_ID as string;
const LOGIN_URL = `${auth_url}?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=${response_type}`;

const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPITIFY_CLIENT_ID as string,
      clientSecret: process.env.SPITIFY_CLIENT_SECRET as string,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,

  callbacks: {},
};

export default authOptions;
