"use client";
import { signOut } from "next-auth/react";
import Button from "./Button";
import { NextRouter, useRouter } from "next/router";

const signOutFun = async(router: NextRouter) => {
  signOut();
  router.push('/');
}

const SignOutButton = () => {
  const router = useRouter();
  return <Button onClick={() => signOutFun(router)}>Sign Out</Button>;
};

export default SignOutButton;
