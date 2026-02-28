import React from "react";
import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CompanyLogo1 from "../../../assets/imgs/featured-jobs/company-logo-1.png";
import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  IconCalendarEvent,
  IconBriefcase,
  IconWallet,
  IconMapPin,
  IconCircleCheck,
} from "@tabler/icons-react";

const page = () => {
  const data = {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: CompanyLogo1,
    type: "Full-Time",
    categories: ["Marketing", "Design"],
    // Added Details
    description:
      "As a Social Media Assistant, you will play a crucial role in our marketing team. You will be responsible for creating engaging content across various social media platforms, interacting with our community, and analyzing performance metrics to drive growth.",
    responsibilities: [
      "Schedule and post content across all social media channels",
      "Engage with followers and respond to inquiries in a timely manner",
      "Assist in creating visual assets using design tools like Figma or Canva",
      "Monitor social media trends and suggest innovative content ideas",
    ],
    whoYouAre: [
      "Passionate about social media and digital marketing",
      "Strong written and verbal communication skills",
      "Basic knowledge of design principles and tools",
      "Highly organized and able to manage multiple projects",
    ],
    // Sidebar Data
    sidebar: {
      datePosted: "Aug 12, 2021",
      salary: "$35k - $45k / year",
      industry: "Tech/Design",
      size: "50-100 Employees",
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="mt-16 md:mt-20">
        {/* Header Section */}
        <div className="bg-[#F8F8FD] py-10 border-b border-neutral-20">
          <Container>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center p-2 shadow-sm shrink-0">
                <Image
                  src={data.logo}
                  alt={data.company}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-6">
                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-2">
                    {data.title}
                  </h1>
                  <p className="text-neutral-60 mb-4 flex items-center justify-center md:justify-start gap-2">
                    {data.company}{" "}
                    <span className="w-1 h-1 bg-neutral-30 rounded-full" />{" "}
                    {data.location}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 text-sm font-semibold uppercase">
                      {data.type}
                    </span>
                    {data.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-1.5 rounded-full border text-sm font-semibold ${idx === 0 ? "border-orange-400 text-orange-400" : "border-blue-500 text-blue-500"}`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="w-full md:w-auto px-10 h-14">
                  Apply Now
                </Button>
              </div>
            </div>
          </Container>
        </div>

        {/* Details & Sidebar */}
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
            {/* Left Side: Content */}
            <div className="lg:col-span-8 space-y-12">
              <section>
                <h3 className="text-2xl font-bold text-neutral-100 mb-6">
                  Description
                </h3>
                <p className="text-neutral-60 leading-relaxed text-lg">
                  {data.description}
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-neutral-100 mb-6">
                  Responsibilities
                </h3>
                <ul className="space-y-4">
                  {data.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-neutral-60 text-lg"
                    >
                      <IconCircleCheck
                        className="text-primary mt-1 shrink-0"
                        size={22}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-neutral-100 mb-6">
                  Who You Are
                </h3>
                <ul className="space-y-4">
                  {data.whoYouAre.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-neutral-60 text-lg"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Side: Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="p-8 border border-neutral-20  bg-white">
                <h4 className="text-xl font-bold text-neutral-100 mb-8">
                  Job Overview
                </h4>
                <div className="space-y-7">
                  <SidebarItem
                    icon={<IconCalendarEvent />}
                    label="Date Posted"
                    value={data.sidebar.datePosted}
                  />
                  <SidebarItem
                    icon={<IconBriefcase />}
                    label="Job Type"
                    value={data.type}
                  />
                  <SidebarItem
                    icon={<IconWallet />}
                    label="Salary"
                    value={data.sidebar.salary}
                  />
                  <SidebarItem
                    icon={<IconMapPin />}
                    label="Location"
                    value={data.location}
                  />
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

const SidebarItem = ({ icon, label, value }) => (
  <div className="flex gap-4 items-start">
    <div className="text-primary mt-1">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <p className="text-xs font-bold text-neutral-40 uppercase tracking-widest">
        {label}
      </p>
      <p className="text-lg font-semibold text-neutral-100 mt-0.5">{value}</p>
    </div>
  </div>
);

export default page;
