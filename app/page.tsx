"use client"

import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Avatar, AvatarGroup } from '@nextui-org/react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <ThemeSwitcher />
    </main>
  )
}
