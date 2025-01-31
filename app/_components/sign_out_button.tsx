"use client";
import { signOut } from "next-auth/react";
import Button from "./Button";
import { useRouter } from "next/router";

 const SignOutButton = () => {
  return <Button onClick={() => signOutFun()}>Sign Out</Button>;
};

const signOutFun = async() => {
  signOut();
  const router = useRouter();
  router.push('/');
}

export default SignOutButton;
