"use client";
import React from "react";
import { signIn } from "next-auth/react";
import DarkModeToggle from "./_components/dark_mode_toggle";
import Button from "./_components/Button";
import SignOutButton from "./_components/log_out_button";

interface Props {
  children?: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
  session: any;
}

const Header = ({ children, primary, onClick, session }: Props) => {
  const name = session?.user?.name;
  return (
    <header className="flex flex-row justify-between">
      <div className="flex">
        <h1 className="text-4xl font-semibold p-1">AttendEase</h1>
      </div>
      <div className="flex gap-5">
        {session?.user == null ? (
          <div>
            <Button onClick={() => signIn("google")}> Sign in</Button>
          </div>
        ) : (
          <div className=" flex gap-5 ">
            <Button primary>{name}</Button>

            <div className="hidden md:block">
              <SignOutButton />
            </div>
          </div>
        )}
        {/* <DarkModeToggle /> */}
      </div>
    </header>
  );
};

export default Header;
