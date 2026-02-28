import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

// Image
import MainLogo from "../../assets/imgs/Logo-white.png";

import Input from "../ui/Input";
import Button from "../ui/Button";
import { socialLogos } from "@/constants/data";

const Footer = () => {
  const aboutLinks = [
    { name: "Companies", link: "#" },
    { name: "Pricing", link: "#" },
    { name: "Terms", link: "#" },
    { name: "Advice", link: "#" },
    { name: "Privacy Policy", link: "#" },
  ];
  const resourceLinks = [
    { name: "Help Docs", link: "#" },
    { name: "Guide", link: "#" },
    { name: "Updates", link: "#" },
    { name: "Contact Us", link: "#" },
  ];
  return (
    <div className="bg-black pt-16 pb-10">
      <Container>
        <div className="flex flex-col xl:flex-row gap-22 items-start">
          {/* Footer Text */}
          <div className="max-w-[376px]">
            <Link href="#">
              <Image
                src={MainLogo}
                className="w-[120px] lg:w-[152px]"
                alt="QuickHire"
              />
            </Link>
            <p className="text-body-16 text-neutral-20 pt-8">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* Other Links */}
          <div className="flex flex-col md:flex-row items-start lg:gap-[71px] gap-6 w-full">
            {/* Links */}
            <div className="grid grid-cols-2 w-full">
              <div>
                <h4 className="text-lg pb-4.5 text-white font-sans font-semibold leading-[1.6]">
                  About
                </h4>
                <ul>
                  {aboutLinks?.map((item, index) => (
                    <li
                      key={index}
                      className={`${aboutLinks.length - 1 != index && "pb-4"}`}
                    >
                      <Link
                        href={"#"}
                        className="text-base text-neutral-20 font-sans leading-[1.6] hover:text-primary transition-all duration-150 ease-in cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg pb-4.5 text-white font-sans font-semibold leading-[1.6]">
                  Resources
                </h4>
                <ul>
                  {resourceLinks?.map((item, index) => (
                    <li
                      key={index}
                      className={`${aboutLinks.length - 1 != index && "pb-4"}`}
                    >
                      <Link
                        href={"#"}
                        className="text-base text-neutral-20 font-sans leading-[1.6] hover:text-primary transition-all duration-150 ease-in cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="w-full sm:min-w-[280px]">
              <h5 className="text-body-18 font-semibold pb-4.5 text-white">
                Get job notifications
              </h5>
              <p className="text-body-16 pb-6 text-neutral-20">
                The latest job news, articles, sent to your inbox weekly.
              </p>
              <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-2">
                <Input className="w-full bg-neutral-90 border-neutral-80 text-white" />
                <div>
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-10 pt-6 md:mt-20 mt-6 border-t border-white/10 gap-6 text-center md:text-left">
          <p className="text-body-16 text-neutral-40">
            2021 @ QuickHire. All rights reserved.
          </p>

          <div className="flex gap-6 items-center">
            {socialLogos?.map((logo, index) => (
              <Link
                key={index}
                href="#"
                className="w-8 h-8 hover:opacity-70 transition-opacity"
              >
                <Image src={logo} alt="social icon" width={32} height={32} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
