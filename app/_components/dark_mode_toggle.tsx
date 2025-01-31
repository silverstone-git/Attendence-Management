"use client"
import {useEffect, useState} from "react";
import { useDarkMode } from "../../components/theme-provider";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])
  if(!mounted) return null;

  return <div className="cursor-pointer" onClick={toggleDarkMode}>{isDarkMode ? 'Sun' : 'Moon'}</div>;
};

export default DarkModeToggle;
