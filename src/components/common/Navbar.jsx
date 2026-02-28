"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react"; // Using Tabler icons like your other components

// Image
import MainLogo from "../../assets/imgs/Logo.png";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[1000] w-full bg-white/80 backdrop-blur-sm ">
      <Container>
        <nav className="flex justify-between items-center h-20">
          {/* Left: Logo & Desktop Links */}
          <div className="flex items-center gap-12">
            <Link href="/">
              <Image
                src={MainLogo}
                className="w-[120px] lg:w-[152px]"
                alt="Quick Hire"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/jobs"
                className="hover:text-primary transition-colors text-neutral-80 font-medium"
              >
                Find Jobs
              </Link>
              <Link
                href="/jobs"
                className="hover:text-primary transition-colors text-neutral-80 font-medium"
              >
                Browse Companies
              </Link>
            </div>
          </div>

          {/* Right: Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button showBgColor={false} className="text-primary font-bold">
              <Link href="/auth/login">Login</Link>
            </Button>
            <div className="h-6 w-px bg-neutral-20" />
            <Button>
              <Link href="/auth/sign-up">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 border-2 border-neutral-20 rounded-full text-neutral-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`
          lg:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-20 transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <div className="flex flex-col p-6 gap-6">
            <Link
              href="/jobs"
              className="text-body-18 font-medium text-neutral-80"
              onClick={() => setIsOpen(false)}
            >
              Find Jobs
            </Link>
            <Link
              href="/jobs"
              className="text-body-18 font-medium text-neutral-80"
              onClick={() => setIsOpen(false)}
            >
              Browse Companies
            </Link>
            <hr className="border-neutral-20" />
            <div className="flex flex-col gap-4">
              <Button showBgColor={false} className="w-full justify-center">
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button className="w-full justify-center">
                <Link href="/auth/sign-up">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
