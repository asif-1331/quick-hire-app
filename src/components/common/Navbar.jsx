import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

// Image
import MainLogo from "../../assets/imgs/Logo.png";

import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-[1000] w-full bg-white/60">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            <div>
              <Image src={MainLogo} className="lg:w-[152px]" alt="Quick Hire" />
            </div>
            <div className="flex items-center gap-4 py-6">
              <Link
                href={"#"}
                className="cursor-pointer hover:text-primary transition-all duration-100 ease-in text-neutral-80 font-sans font-medium"
              >
                Find Jobs
              </Link>
              <Link
                href={"#"}
                className="cursor-pointer hover:text-primary transition-all duration-100 ease-in text-neutral-80 font-sans font-medium"
              >
                Browse Companies
              </Link>
            </div>
          </div>
          <div className="py-3.5 gap-4 flex">
            <Button showBgColor={false}>Login</Button>

            <hr className="h-auto w-px border-none bg-neutral-20" />

            <Button className={"h-full!"}>Sign Up</Button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
