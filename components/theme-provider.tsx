"use client";

import { ThemeProvider } from "next-themes";
import {ThemeProviderProps} from "next-themes/dist/types";
import React from "react";

export function Providers({ children } : {children: React.ReactNode}) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>;
}

