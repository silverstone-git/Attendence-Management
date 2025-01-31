
import "./globals.css";
import { Inter } from "next/font/google";
import AppBar from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Attendease",
  description: "attendance ka rakh lo hisaab",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={inter.className}>
      <body className="dark:bg-slate-900 dark:text-white">
          <AppBar />
          {children}
      </body>
    </html>
  );
}
