"use client";
import React, { useState } from "react";
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
  IconX,
  IconCloudUpload,
} from "@tabler/icons-react";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: CompanyLogo1,
    type: "Full-Time",
    categories: ["Marketing", "Design"],
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
    sidebar: {
      datePosted: "Aug 12, 2021",
      salary: "$35k - $45k / year",
      industry: "Tech/Design",
      size: "50-100 Employees",
    },
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />

      <section className="mt-16 md:mt-20">
        {/* Header Section */}
        <div className="bg-[#F8F8FD] py-10 border-b border-neutral-20">
          <Container>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-neutral-20 flex items-center justify-center p-2 shrink-0">
                <Image
                  src={data?.logo}
                  alt={data?.company}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-6">
                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-2">
                    {data?.title}
                  </h1>
                  <p className="text-neutral-60 mb-4 flex items-center justify-center md:justify-start gap-2 text-body-16">
                    {data?.company} <span className="w-1 h-1 bg-neutral-30" />{" "}
                    {data?.location}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="px-4 pt-2 pb-1.5 bg-teal-50 text-teal-600 text-xs font-bold uppercase border border-teal-100">
                      {data?.type}
                    </span>
                    {data?.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className={`px-4 pt-2 pb-1.5 border text-xs font-bold uppercase ${
                          idx === 0
                            ? "border-orange-200 text-orange-600 bg-orange-50"
                            : "border-blue-200 text-blue-600 bg-blue-50"
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  handleClick={() => setIsModalOpen(true)}
                  className="w-full md:w-auto px-10 h-14 items-center justify-center"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </Container>
        </div>

        {/* Details & Sidebar */}
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
            <div className="lg:col-span-8 space-y-12">
              <section>
                <h3 className="text-2xl font-bold text-neutral-100 mb-6 font-clash">
                  Description
                </h3>
                <p className="text-neutral-60 leading-relaxed text-lg">
                  {data.description}
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-neutral-100 mb-6 font-clash">
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
                <h3 className="text-2xl font-bold text-neutral-100 mb-6 font-clash">
                  Who You Are
                </h3>
                <ul className="space-y-4">
                  {data.whoYouAre.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-neutral-60 text-lg"
                    >
                      <span className="w-2 h-2 bg-primary mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="p-8 border border-neutral-20 bg-white">
                <h4 className="text-xl font-bold text-neutral-100 mb-8 font-clash">
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

      {/* MODAL IMPLEMENTATION */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-neutral-100/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-white w-full max-w-[550px] border border-neutral-20 p-8 shadow-xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute cursor-pointer right-6 top-6 text-neutral-40 hover:text-neutral-100 transition-colors"
            >
              <IconX size={24} />
            </button>

            <div className="flex items-center gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-neutral-100 uppercase tracking-tight">
                  Apply for{" "}
                  <span className="text-secondary">{data?.title}</span>
                </h3>
                <p className="text-neutral-60 text-sm">
                  {data.company} • {data.location}
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-black text-neutral-40 uppercase tracking-widest mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-neutral-20 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-neutral-40 uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-neutral-20 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-neutral-40 uppercase tracking-widest mb-2">
                  Resume / CV
                </label>
                <div className="border-2 border-dashed border-neutral-20 p-8 text-center hover:border-primary transition-colors cursor-pointer group">
                  <IconCloudUpload
                    className="mx-auto text-neutral-20 group-hover:text-primary mb-2"
                    size={32}
                  />
                  <p className="text-neutral-60 text-sm">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-neutral-40 text-xs mt-1">
                    PDF, DOC (Max. 5MB)
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <Button
                  handleClick={() => setIsModalOpen(false)}
                  className="w-full py-4 font-bold justify-center items-center"
                >
                  Submit Application
                </Button>
                <p className="text-center text-xs text-neutral-40">
                  By clicking submit, you agree to our Terms of Service.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

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

export default Page;
