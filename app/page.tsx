
import Button from "./_components/Button";
import Image from "next/image";
import Link from "next/link";
import LandingPage from "./landingPage";
import { auth } from "./auth";
import { redirect } from 'next/navigation'

export default async function Home() {

  const session = await auth();
  if(session?.user == null) {
    return <LandingPage />
  } else {
    redirect('/dashboard');
  }
}
