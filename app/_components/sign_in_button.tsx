"use client"
import { signIn } from "next-auth/react";

const SignInButton = () => {
    return <button onClick={() => signIn()} 
      className="border-2 border-transparent bg-blue-600 px-2 py-1 rounded-lg text-white m-4">
        Sign In
    </button>
}

export default SignInButton;
