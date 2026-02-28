import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

import { IconArrowNarrowRight } from "@tabler/icons-react";

const SectionTitle = ({ titleBlack, titleBlue, btnTitle, btnPath }) => {
  return (
    <div className="flex items-end w-full justify-between">
      <h3 className="md:text-heading-2 text-heading-3 font-clash font-semibold">
        <span className="text-neutral-100">{titleBlack}</span> &nbsp;
        <span className="text-secondary">{titleBlue}</span>
      </h3>

      <Button
        className={"py-0! px-0! gap-4 hidden! lg:inline-flex!"}
        showBgColor={false}
      >
        <Link href={btnPath}>{btnTitle}</Link>
        <IconArrowNarrowRight stroke={2} size={24} />
      </Button>
    </div>
  );
};

export default SectionTitle;
