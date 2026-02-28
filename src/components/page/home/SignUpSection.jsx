import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

import ProductDashboard from "../../../assets/imgs/dashboard-img.png";

const SignUpSection = () => {
  return (
    <div className="bg-primary xl:max-w-[1320px] md:px-8 mx-auto [clip-path:polygon(12%_0,100%_0,100%_88%,88%_100%,0_100%,0_12%)]">
      <div className="xl:px-[70px] lg:px-16 md:px-12 px-4 lg:pt-[68px] lg:pb-0 py-22 flex flex-col lg:flex-row lg:items-start items-center justify-between">
        {/* Text Content */}
        <div className="pt-6 flex flex-col justify-center items-center lg:justify-start items-start lg:pb-0! pb-6.5">
          <h5 className="lg:text-heading-2 text-heading-3 font-semibold text-white max-w-[364px] lg:pb-6 md:pb-5 pb-4 text-center lg:text-left">
            Start posting jobs today
          </h5>
          <p className="text-body-16 text-white text-center w-full lg:text-left lg:pb-6 md:pb-5 pb-4">
            Start posting jobs for only $10.
          </p>

          <Button
            className={
              "bg-white! text-primary! lg:inline-flex! flex! lg:w-auto w-full items-center justify-center"
            }
          >
            Sign Up For Free
          </Button>
        </div>

        {/* Dashboard Img */}
        <div>
          <Image src={ProductDashboard} alt="Product Dashboard" />
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
