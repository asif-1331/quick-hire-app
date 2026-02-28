import SectionTitle from "@/components/common/SectionTitle";
import React from "react";

import { jobCategories } from "@/constants/data";
import Button from "@/components/ui/Button";
import Link from "next/link";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import CategoryCard from "@/components/common/CategoryCard";

const CategoriesSection = () => {
  return (
    <div>
      {/* Header */}
      <SectionTitle
        titleBlack={"Explore by"}
        titleBlue={"category"}
        btnTitle={"Show all jobs"}
        btnPath={"/jobs"}
      />

      <div className="md:pt-12 pt-6 pb-[72px]">
        {/* Categories */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {jobCategories?.map((item, index) => (
            <CategoryCard data={item} key={index} />
          ))}
        </div>

        {/* Show more btn */}
        <Button
          className={"py-0! px-0! mt-6 gap-4 lg:hidden hover:border-transparent!"}
          showBgColor={false}
        >
          <Link href={""}>Show all jobs</Link>
          <IconArrowNarrowRight stroke={2} size={24} />
        </Button>
      </div>
    </div>
  );
};

export default CategoriesSection;
