import React from "react";
import Image from "next/image";

const JobCard = ({ data }) => {
  return (
    <div className="p-6 flex flex-1 h-full border cursor-pointer border-[#D6DDEB] bg-white hover:shadow-lg transition-shadow duration-300">
      <div>
        {/* Top Section: Logo & Badge */}
        <div className="flex justify-between items-start mb-4">
          {/* Logo */}
          <Image src={data?.logo} alt="" className="w-12 h-12" />

          <span className="px-3 py-1 border flex items-center justify-center border-primary text-primary text-body-16 font-semibold uppercase">
            {data?.type}
          </span>
        </div>

        {/* Middle Section: Job Info */}
        <div className="mb-4">
          <h4 className="text-body-18 font-bold text-neutral-100 mb-1">
            {data?.position}
          </h4>
          <p className="text-body-16 text-neutral-80 flex items-center gap-2">
            {data?.company}{" "}
            <span className="w-1 h-1 mb-1 bg-neutral-80 rounded-full" />{" "}
            {data?.location}
          </p>
        </div>

        {/* Description */}
        <p className="text-body-16 text-neutral-60 line-clamp-2 mb-4">
          {data?.description}
        </p>

        {/* Bottom Section: Tags */}
        <div className="flex gap-2">
          {data?.categories?.map((item, index) => (
            <span
              key={index}
              className={`px-4 py-1.5 rounded-full text-body-14 font-medium bg-[${item.color}]/50 text-[${item.color}]`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
