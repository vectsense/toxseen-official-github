import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";
// import { Button } from "@heroui/button";
import LinkButton from "./heroui/linkButton";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

function NavHeader() {
  return (
    <Navbar
      className="absolute top-4  mx-auto flex w-fit  rounded-full border border-gray-600 bg-gray-900 bg-opacity-20 backdrop-blur-md"
      position="static"
      shouldHideOnScroll
    >
      <NavbarBrand >


        <Link href="/" className="flex justify-center items-center">
          <AcmeLogo />
          <p className="font-bold text-inherit">毒見部</p>
        </Link>

        {/* relative z-10 block cursor-pointer px-3 py-1.5 text-sm mix-blend-difference md:px-5 md:py-3 md:text-base */}
      </NavbarBrand>
      <NavbarContent className="relative px-3 ml-1 mr-1 " justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features

          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="/test1">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent  justify="end">
        <NavbarItem className="">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <LinkButton href="/" text="Sign Up" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>

  );
}

export default NavHeader;
