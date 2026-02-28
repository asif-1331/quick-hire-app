import Image from "next/image";
import React from "react";

// Images
import HeroImg from "../../../assets/imgs/hero-img-2.png";
import HeroBgPattern from "../../../assets/imgs/hero-bg-pattern.png";
import HeaderUnderline from "../../../assets/imgs/hero-header-underline.png";
import SearchIcon from "../../../assets/icons/search.png";
import LocationIcon from "../../../assets/icons/location.png";
import { IconChevronDown } from "@tabler/icons-react";

import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const HeroSection = () => {
  return (
    <section className="relative bg-[#F8F8FD] pt-22 lg:[clip-path:polygon(0%_0%,_100%_0%,_100%_88%,_88%_100%,_0%_100%)]">
      <Container>
        <div className="flex relative justify-between items-center lg:pb-0 pb-10">
          {/* Heading & Info */}
          <div className="relative z-50">
            <div>
              <h1 className="lg:text-heading-1 text-heading-2 font-semibold text-neutral-100 pb-3">
                Discover
                <br /> more than
                <br />
                <span className="text-secondary">5000+ Jobs</span>
              </h1>
              <Image src={HeaderUnderline} alt="" />
            </div>

            <h5 className="lg:text-body-20 text-body-18 text-neutral-80 max-w-[521px] py-6">
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </h5>

            {/* Filter */}
            <div className="bg-white lg:absolute lg:min-w-[852px] z-50! lg:inline-block px-4 py-4 mb-4">
              <div className="flex md:flex-row flex-col w-full">
                {/* Search Bar */}
                <div className="flex items-center flex-1">
                  <Image
                    src={SearchIcon}
                    alt=""
                    className="w-6 h-6 my-4 mx-4"
                  />
                  <Input
                    defaultBoxStyles={false}
                    defaultpPaddings={false}
                    placeholder={"Job title or keyword"}
                    className={
                      "px-0! pt-5! pb-[11px]! border-b border-b-neutral-20 transition-colors focus:border-b-blue-500 outline-none"
                    }
                  />
                </div>
                {/* Filter Bar */}
                <div className="flex  flex-1 items-center justify-center mr-6">
                  <Image
                    src={LocationIcon}
                    alt=""
                    className="w-6 h-6 my-4 mx-4"
                  />

                  {/* Simple Dropdown */}
                  <div className="relative w-full">
                    <select
                      className="w-full pr-20 bg-transparent appearance-none outline-none cursor-pointer
                 px-0 pt-5 pb-[11px] border-b border-b-neutral-20 
                 text-body-16 text-slate-700 focus:border-blue-500"
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        Select Location
                      </option>
                      <option value="remote">Remote</option>
                      <option value="new-york">New York, NY</option>
                      <option value="london">London, UK</option>
                    </select>
                    <IconChevronDown
                      stroke={2}
                      className="pointer-events-none absolute inset-y-0 right-0 top-4 flex items-center"
                    />
                  </div>
                </div>
                <Button className={"flex items-center justify-center"}>
                  Search my job
                </Button>
              </div>
            </div>

            {/* Bottom text */}
            <p className="text-body-16 font-medium lg:mt-30 flex lg:flex-row flex-col">
              <span className="font-normal">Popular : </span>
              <span>&nbsp; UI Designer, UX Researcher, Android, Admin</span>
            </p>
          </div>

          {/* Images */}
          <div className="relative z-10! hidden lg:block">
            <Image src={HeroImg} alt="" />
          </div>
          <Image
            src={HeroBgPattern}
            alt=""
            className="absolute bottom-0 right-0 w-[80%] lg:h-full h-1/2"
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
