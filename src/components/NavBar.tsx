"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="AlumniDirectory">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/alumni-directory">Batch 2024</HoveredLink>
            <HoveredLink href="/alumni-directory">Batch 2023</HoveredLink>
          
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Events">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="SuccessStories"
              href="/successstories"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Reunions"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Job and Internship Board"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Community">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/networkinghub">Networking Hub</HoveredLink>
            <HoveredLink href="/collaborationpage">Collaboration Page</HoveredLink>
            <HoveredLink href="/alumni-feedback">Alumni Feedback</HoveredLink>
            <HoveredLink href="/alumni-directory">Alumni Directory</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Login">
          <Link href="/login">Login</Link>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="SignUp">
          <Link href="/signup">Signup</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
