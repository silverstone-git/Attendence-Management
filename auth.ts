import client from "@/lib/mongodb";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

import NextAuth from "next-auth"
import Nodemailer from "next-auth/providers/nodemailer";
 

const emailOptions = {
  server: process.env.EMAIL_SERVER,
  from: process.env.EMAIL_FROM,
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [

    GitHub,
    Google,
    Nodemailer(emailOptions),
  ],
})
