import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

// Image
import MainLogo from "../../assets/imgs/Logo-white.png";
import Facebook from "../../assets/icons/Facebook.png";
import Dribbble from "../../assets/icons/Dribbble.png";
import Instagram from "../../assets/icons/Instagram.png";
import LinkedIn from "../../assets/icons/LinkedIn.png";
import Twitter from "../../assets/icons/Twitter.png";
import Input from "../ui/Input";
import Button from "../ui/Button";

const Footer = () => {
  const socialLogos = [Facebook, Instagram, Dribbble, LinkedIn, Twitter];
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
        <div className="flex gap-22 items-start">
          {/* Footer Text */}
          <div className="max-w-[376px]">
            <Image src={MainLogo} className="lg:w-[152px]" alt="" />
            <p className="text-body-16 text-neutral-20 pt-8">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* Other Links */}
          <div className="flex items-start gap-[71px] w-full">
            {/* Links */}
            <div className="flex items-start w-full justify-between">
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
            {/* Notification */}
            <div className="min-w-[300px]">
              <h5 className="text-body-18 font-semibold pb-4.5 text-white">
                Get job notifications
              </h5>
              <p className="text-body-16 pb-10 text-neutral-20">
                The latest job news, articles, sent to your inbox weekly.
              </p>

              <div className="flex items-center gap-2">
                <Input />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and social */}
        <div className="flex justify-between items-center pt-10 mt-20 border-t border-white/10">
          <p className="text-body-16 text-neutral-40">
            2021 @ QuickHire. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 items-center">
            {socialLogos?.map((logo, index) => (
              <Link
                key={index}
                href={"#"}
                className="cursor-pointer w-8 h-8 inline-block hover:opacity-85 transition-all duration-150 ease-in"
              >
                <Image src={logo} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
