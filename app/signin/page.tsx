"use client"
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <div>
        This is the sign in page, redirect to dashboar if already authed
      </div>
      <button onClick={() => signIn("github")}> Sign in with Github</button>
    </div>
  );
};

export default SignIn;
