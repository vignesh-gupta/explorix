"use client";

import React from "react";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { SignInButton, UserButton, useClerk } from "@clerk/nextjs";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { user } = useClerk();
  // (async function(){

  //   console.log(user);

  // })()

  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Trips",
      href: "/itinerary",
    },
    {
      title: "Plan",
      href: "/itinerary/create",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <Nav isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Explorix</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        <NavbarBrand className="mr-4">
          <Link href="/" className="font-bold text-inherit">Explorix</Link>
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem key={item.title}>
            <Link
              color="foreground"
              className="capitalize hover:bg-secondary hover:text-secondary-foreground py-2 px-3 rounded-xl"
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem suppressHydrationWarning>
          {user ? (
            <button>
              <UserButton afterSignOutUrl="/" />
            </button>
          ) : (
            <SignInButton>
              <Button color="primary">Sign Up</Button>
            </SignInButton>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.href} className="list-none">
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  );
}
