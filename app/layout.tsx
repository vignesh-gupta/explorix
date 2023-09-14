import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import Providers  from "@/components/providers";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explorix",
  description: "Let's explore the world together!",
  authors: {
    name: 'Vignesh Gupta',
    url: 'https://vigneshgupta.vercel.app/',
  },
  colorScheme: 'dark light',
  creator: 'Vignesh Gupta',
  publisher: 'Vignesh Gupta',
  keywords: [
    'vignesh',
    'gupta',
    'hcl',
    'travel',
    'explorix',
    'explorer',
    'exploring',
    'exploration',
    'traveler',
    'traveling',
    'plan',
    'trip',
    'vacation',
    'holiday',
    'tour',
    'tourism',
  ],
  openGraph: {
    type: 'website',
    url: 'https://explorix.vercel.app/',
    title: 'Explorix | Travel Planning Buddy',
    description: "Your travel planning buddy!",
    siteName: 'Explorix',
    emails: ['vighneshgupta32@gmail.com'],
    locale: 'en_US',
    // images: [
    //   {
    //     url: 'https://vigneshgupta.vercel.app/_next/image?url=%2Fhero.png&w=256&q=75',
    //     width: 256,
    //     height: 75,
    //     alt: "Vignesh Gupta's Portfolio",
    //   },
    // ],
  },
  twitter: {
    creator: '@VighneshGupta9',
    creatorId: 'twitter.com/VighneshGupta9',
    site: 'https://explorix.vercel.app/',
    title: 'Explorix | Travel Planning Buddy',
    // images: [
    //   {
    //     url: 'https://vigneshgupta.vercel.app/_next/image?url=%2Fhero.png&w=256&q=75',
    //     width: 256,
    //     height: 75,
    //     alt: "Vignesh Gupta's Portfolio",
    //   },
    // ],
  },
  metadataBase: new URL('https://explorix.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers className="flex flex-col min-h-screen justify-center items-center">{children}</Providers>
        </body>
      </html>
     </ClerkProvider>
    </React.StrictMode>
  );
}
