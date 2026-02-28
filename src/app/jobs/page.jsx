"use client";
import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import LatestJobCard from "@/components/common/LatestJobCard";
import {
  IconSearch,
  IconMapPin,
  IconChevronDown,
  IconFilter,
  IconX,
} from "@tabler/icons-react";

const JobListingsPage = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      type: "Full-Time",
      categories: ["Marketing", "Design"],
    },
    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, USA",
      type: "Full-Time",
      categories: ["Design", "Business"],
    },
    {
      id: 3,
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      type: "Full-Time",
      categories: ["Tech", "Marketing"],
    },
    {
      id: 4,
      title: "Email Marketing Manager",
      company: "Netguru",
      location: "Berlin, Germany",
      type: "Part-Time",
      categories: ["Marketing"],
    },
  ];

  const filterContent = (
    <div className="space-y-8">
      <FilterGroup
        title="Type of Employment"
        options={["Full-Time", "Part-Time", "Remote", "Internship", "Contract"]}
      />
      <FilterGroup
        title="Categories"
        options={["Design", "Sales", "Marketing", "Business", "Human Resource"]}
      />
      <FilterGroup
        title="Salary Range"
        options={["$700 - $1000", "$1000 - $1500", "$1500 - $2000", "$3000+"]}
      />
    </div>
  );

  return (
    <div className="bg-[#FBFCFF] min-h-screen">
      <Navbar />

      {/* Search Header Section */}
      <section className="pt-32 pb-12 bg-white border-b border-neutral-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-heading-3 font-bold text-neutral-100 mb-8 text-center md:text-left">
              Find your <span className="text-primary">dream job</span>
            </h1>

            {/* Search Bar Group - Responsive Stacking */}
            <div className="flex flex-col md:flex-row items-stretch bg-white border border-neutral-20 p-2 gap-2">
              <div className="flex items-center flex-1 px-4 gap-3 w-full border-b md:border-b-0 md:border-r border-neutral-20 pb-2 md:pb-0">
                <IconSearch className="text-primary shrink-0" size={24} />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full py-3 outline-none text-body-16"
                />
              </div>
              <div className="flex items-center flex-1 px-4 gap-3 w-full border-b border-neutral-20 md:border-b-0 pb-2 md:pb-0">
                <IconMapPin className="text-primary shrink-0" size={24} />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full py-3 outline-none text-body-16"
                />
                <IconChevronDown className="text-neutral-40" size={20} />
              </div>
              <button className="w-full md:w-auto bg-primary text-white font-bold py-4 px-10 hover:bg-primary/90 transition-all">
                Search
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-body-20 font-bold text-neutral-100 flex items-center gap-2">
                  Filters
                </h3>
                <button className="text-primary font-semibold text-body-14">
                  Clear All
                </button>
              </div>
              {filterContent}
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden px-0 mb-4">
              <button
                onClick={() => setShowMobileFilters(true)}
                className="w-full py-4 border border-neutral-20 font-bold text-neutral-100 flex justify-center items-center gap-2 bg-white"
              >
                <IconFilter size={20} /> Show All Filters
              </button>
            </div>

            {/* Main Listings */}
            <main className="lg:col-span-9">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4!">
                <div>
                  <h2 className="text-body-24 font-bold text-neutral-100">
                    All Jobs
                  </h2>
                  <p className="text-neutral-40 text-body-16">
                    Showing 73 results
                  </p>
                </div>
                <div className="flex items-center gap-2 text-neutral-60 font-medium cursor-pointer border border-neutral-20 px-4 py-2 bg-white w-full sm:w-auto justify-between">
                  <span>
                    Sort by:{" "}
                    <span className="text-neutral-100 font-bold">Newest</span>
                  </span>
                  <IconChevronDown size={18} />
                </div>
              </div>

              {/* Job Cards Stack */}
              <div className="space-y-4">
                {jobs.map((job) => (
                  <LatestJobCard key={job.id} data={job} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center items-center gap-2">
                {[1, 2, 3, "...", 10].map((page, i) => (
                  <button
                    key={i}
                    className={`w-10 h-10 flex items-center justify-center font-bold border transition-all
                      ${page === 1 ? "bg-primary border-primary text-white" : "bg-white border-neutral-20 text-neutral-60 hover:border-primary hover:text-primary"}
                    `}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </main>
          </div>
        </Container>
      </section>

      {/* Mobile Sidebar Overlay */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] pt-20 flex justify-end bg-black/50">
          <div className="w-[300px] h-full bg-white p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-body-20 font-bold text-neutral-100">
                Filters
              </h3>
              <button onClick={() => setShowMobileFilters(false)}>
                <IconX size={24} className="text-neutral-100" />
              </button>
            </div>
            {filterContent}
            <button
              onClick={() => setShowMobileFilters(false)}
              className="w-full mt-8 bg-primary text-white py-4 font-bold"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

const FilterGroup = ({ title, options }) => (
  <div className="border-b border-neutral-20 pb-6">
    <h4 className="text-body-18 font-bold text-neutral-100 mb-4">{title}</h4>
    <div className="space-y-3">
      {options.map((opt, i) => (
        <label key={i} className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="w-5 h-5 border-neutral-20 accent-primary"
          />
          <span className="text-body-16 text-neutral-60 group-hover:text-neutral-100 transition-colors">
            {opt}
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default JobListingsPage;
