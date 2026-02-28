import React from "react";
import Image from "next/image";

const LatestJobCard = ({ data }) => {
  return (
    <div className="flex flex-col items-start cursor-pointer gap-6 lg:p-6 p-4 bg-white border border-neutral-20 hover:shadow-md transition-shadow duration-300">
      {/* Company Logo */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 flex items-center justify-center">
          {/* Using a placeholder or data.logo */}
          <Image
            src={data?.logo}
            alt={data?.company}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1">
        <h4 className="text-body-20 font-bold text-neutral-100 mb-2">
          {data?.title || "Interactive Developer"}
        </h4>

        <p className="text-body-16 text-neutral-60 mb-4 flex items-center gap-2">
          {data?.company || "Terraform"}
          <span className="w-1 h-1 bg-neutral-40 rounded-full" />
          {data?.location || "Hamburg, Germany"}
        </p>

        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-y-3 gap-x-2 md:gap-x-3">
          {/* Employment Type Badge */}
          <span className="px-4 py-1.5 rounded-full bg-teal-50 text-teal-500 text-body-14 font-medium border border-transparent whitespace-nowrap">
            {data?.type || "Full-Time"}
          </span>

          {/* Vertical Divider - Hidden on mobile, shown from md up */}
          <div className="block h-8 w-px bg-neutral-20 mx-1" />

          {/* Category Badges Container - allows categories to wrap together or stay next to each other */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span className="px-4 py-1.5 rounded-full border border-orange-400 text-orange-400 text-body-14 font-medium whitespace-nowrap">
              Marketing
            </span>
            <span className="px-4 py-1.5 rounded-full border border-blue-500 text-blue-500 text-body-14 font-medium whitespace-nowrap">
              Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCard;
