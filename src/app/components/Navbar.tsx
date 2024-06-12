"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function App() {
  const router = usePathname();

  return (
    <Navbar className="bg-perwinkle">
      <NavbarBrand>
        <Link href="/">
          <Image
            src="/teachU_logo.png"
            alt="teachU logo"
            width={100}
            height={100}
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={router === "/about"}>
          <Link color="foreground" href="/about" className="font-bold">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            aria-current="page"
            className="font-bold"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="font-bold">
            What do we offer?
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth/login" className="font-bold">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-pistachlo"
            href="/auth/register"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
