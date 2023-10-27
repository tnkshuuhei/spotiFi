"use client";
import { Button } from "@/components/ui/button";
import authOptions from "./api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default function Home() {
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token: any = window.localStorage.getItem("token");
  //   if (!token && hash) {
  //     token = hash
  //       .substring(1)
  //       ?.split("&")
  //       .find((item) => item.includes("access_token"))
  //       ?.split("=")[1];
  //     window.localStorage.setItem("token", token);
  //     setToken(token);
  //     console.log("token: ", token);
  //   }
  // }, []);
  // const logout = () => {
  //   window.localStorage.removeItem("token");
  //   setToken(null);
  // };
  const { data: session, status } = useSession();
  if (status === "loading") return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {session ? <Button>Logout</Button> : <Button>Login with Spotify</Button>}
    </main>
  );
}
