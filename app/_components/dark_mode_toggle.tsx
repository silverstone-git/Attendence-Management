"use client"
import { useTheme } from "next-themes";
import {useEffect, useState} from "react";

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])
  if(!mounted) return null;
  if (resolvedTheme == "dark") {
    return <div onClick={() => setTheme("light")}>Sun</div>;
  } else {
    return <div onClick={() => setTheme("dark")}>Moon</div>;
  }
};

export default DarkModeToggle;
