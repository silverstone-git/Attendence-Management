import Link from "next/link";
import DarkModeToggle from "../app/_components/dark_mode_toggle";
import { DarkModeProvider } from "./theme-provider";
import { auth } from "@/auth";
import SignOutButton from "../app/_components/sign_out_button";
import SignInButton from "@/app/_components/sign_in_button";

const AppBar = async () => {
  const session = await auth();

  return (
    <div className="flex justify-around h-16 bg-yellow-400 text-lg">
      <div className="p-4">
        {!session?.user && (
          <Link href="/" className="text-blue-800 font-bold px-4">
            Home
          </Link>
        )}
        <Link href="/dashboard" className="text-blue-800 font-bold px-4">
          Dashboard
        </Link>
        <Link className="text-blue-800 font-bold px-4" href="/user/profile">
          Profile
        </Link>
      </div>
      <div>
        {session?.user ? (
          <div className="flex">
            <DarkModeProvider>
              <DarkModeToggle />
            </DarkModeProvider>
            <p className="px-2 py-4">{session.user.name}</p>

            <SignOutButton />
          </div>
        ) : (
          <>
            <SignInButton />
            <button className="border-2 border-transparent bg-blue-600 px-2 py-1 rounded-lg text-white m-4">
              <Link href="/signup">Signup</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AppBar;
