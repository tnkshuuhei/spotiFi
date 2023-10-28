"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log("session: ", session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {session.status === "authenticated" ? (
        <Button onClick={() => signOut()}>Logout</Button>
      ) : (
        <Button onClick={() => signIn()}>Login with Spotify</Button>
      )}
    </main>
  );
}
