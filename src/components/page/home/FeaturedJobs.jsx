import React from "react";

import { featuredJobs } from "@/constants/data";
import Button from "@/components/ui/Button";
import Link from "next/link";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import JobCard from "@/components/common/JobCard";

const FeaturedJobs = () => {
  return (
    <Container>
      <section className="lg:py-[72px] md:py-12 py-10">
        <SectionTitle
          titleBlack={"Featured"}
          titleBlue={"jobs"}
          btnTitle={"Show all jobs"}
          btnPath={"/jobs"}
        />

        <div className="md:pt-12 pt-6 pb-[72px]">
          <div className="flex sm:grid xl:grid-cols-4 sm:grid-cols-2 overflow-x-auto flex-nowrap gap-8 pb-4">
            {featuredJobs?.map((item, index) => (
              <div key={index} className="max-w-75 sm:min-w-full shrink-0">
                <JobCard data={item} />
              </div>
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
    </Container>
  );
};

export default FeaturedJobs;
