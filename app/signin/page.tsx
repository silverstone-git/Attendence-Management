"use client"
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div className="flex flex-col gap-4 bg-blue-600">
      <div>
        This is the sign in page, redirect to dashboar if already authed
      </div>
      <button onClick={() => signIn("github")}> Sign in with Github</button>
      <button onClick={() => signIn("google")}> Sign in with Google</button>
    </div>
  );
};

export default SignIn;
