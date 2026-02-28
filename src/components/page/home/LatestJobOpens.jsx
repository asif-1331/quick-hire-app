import React from "react";
import Container from "@/components/common/Container";
import LatestJobCard from "@/components/common/LatestJobCard";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";
import { latestJobs } from "@/constants/data";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import HeroBgPattern from "../../../assets/imgs/hero-bg-pattern.png";

const LatestJobOpens = () => {
  return (
    <div className="bg-[#F8F8FD] relative">
      <Container className={"relative"}>
        <section className="lg:py-18 md:py-12 pt-24 pb-10 relative z-50">
          <SectionTitle
            titleBlack={"Latest"}
            titleBlue={"jobs open"}
            btnTitle={"Show all jobs"}
            btnPath={"/jobs"}
          />

          <div className="md:pt-12 pt-6 pb-[72px]">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pb-4">
              {latestJobs?.map((item, index) => (
                <LatestJobCard data={item} key={index} />
              ))}
            </div>

            <Button
              className={
                "py-0! px-0! mt-6 gap-4 lg:hidden hover:border-transparent!"
              }
              showBgColor={false}
            >
              <Link href={"/jobs"}>Show all jobs</Link>
              <IconArrowNarrowRight stroke={2} size={24} />
            </Button>
          </div>
        </section>
        <Image
          src={HeroBgPattern}
          alt=""
          className="absolute bottom-0 right-0 w-[80%] lg:h-full h-1/2"
        />
      </Container>
    </div>
  );
};

export default LatestJobOpens;
