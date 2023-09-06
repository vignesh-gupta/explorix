// app/providers.tsx
"use client"

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

type ProvidersProps = {
  children: React.ReactNode
  className?: string
}

export default function Providers({children , className}: ProvidersProps) {
  return (
    <NextUIProvider className={className}>
      <NextThemesProvider attribute="class" defaultTheme="dark" >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}