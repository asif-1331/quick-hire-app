import React from "react";
import Image from "next/image";

import { companies } from "@/constants/data";
import Container from "@/components/common/Container";

const CompanyGrownSection = () => {
  return (
    <Container>
      <section className="py-12 md:py-20">
        <p className="text-body-18 text-neutral-40 pb-8 text-left">
          Companies we helped grow
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {companies.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-start grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={item}
                alt="Company Logo"
                className="max-h-8 md:max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default CompanyGrownSection;
