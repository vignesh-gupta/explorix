"use client";

import { Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === "light" ? (
        <Button isIconOnly variant="light" onClick={() => setTheme("dark")}>
          <Sun />
        </Button>
      ) : (
        <Button isIconOnly variant="light" onClick={() => setTheme("light")}>
          <Moon />
        </Button>
      )}
    </>
  );
}
