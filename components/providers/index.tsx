// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ProvidersProps = {
  children: React.ReactNode;
  className?: string;
};

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function Providers({ children, className }: ProvidersProps) {
  return (
    <ConvexProvider client={convex}>
      <NextUIProvider className={className}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </ConvexProvider>
  );
}
