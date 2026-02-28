import Image from "next/image";
import React from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const CategoryCard = ({ data }) => {
  return (
    <div className="md:p-8 p-4 border group border-neutral-20 hover:bg-primary hover:border-transparent transition-all duration-200 ease-in flex md:flex-col flex-row md:items-start items-center justify-start gap-8">
      <Image
        src={data?.icon}
        alt=""
        className="w-12 h-12 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
      />

      <div>
        <h5 className="md:text-body-24 text-body-20 font-semibold group-hover:text-white! pb-0">
          {data?.title}
        </h5>

        <div className="flex justify-between">
          <p className="md:text-body-18 pr-4 text-body-16 text-neutral-60 group-hover:text-white!">
            {data?.count} jobs available{" "}
          </p>
          <IconArrowNarrowRight
            size={24}
            className="text-neutral-100 group-hover:text-white!"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
