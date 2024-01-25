"use client";
import { signOut } from "next-auth/react";
import Button from "./Button";
import { redirect } from "next/navigation";

 const SignOutButton = () => {
  return <Button onClick={() => signOutFun()}>Sign Out</Button>;
};

const signOutFun = async() => {
  await signOut();
  window.location.href = "/";
}

export default SignOutButton;
