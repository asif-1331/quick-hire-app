import Company1 from "../assets/imgs/companies/company-1.png";
import Company2 from "../assets/imgs/companies/company-2.png";
import Company3 from "../assets/imgs/companies/company-3.png";
import Company4 from "../assets/imgs/companies/company-4.png";
import Company5 from "../assets/imgs/companies/company-5.png";

import Category1 from "../assets/icons/categories/Icon.svg";
import Category2 from "../assets/icons/categories/Icon-1.svg";
import Category3 from "../assets/icons/categories/Icon-2.svg";
import Category4 from "../assets/icons/categories/Icon-3.svg";
import Category5 from "../assets/icons/categories/Icon-4.svg";
import Category6 from "../assets/icons/categories/Icon-5.svg";
import Category7 from "../assets/icons/categories/Icon-6.svg";
import Category8 from "../assets/icons/categories/Icon-7.svg";

import CompanyLogo1 from "../assets/imgs/featured-jobs/company-logo-1.png";
import CompanyLogo2 from "../assets/imgs/featured-jobs/company-logo-2.png";
import CompanyLogo3 from "../assets/imgs/featured-jobs/company-logo-3.png";
import CompanyLogo4 from "../assets/imgs/featured-jobs/company-logo-4.png";
import CompanyLogo5 from "../assets/imgs/featured-jobs/company-logo-5.png";
import CompanyLogo6 from "../assets/imgs/featured-jobs/company-logo-6.png";
import CompanyLogo7 from "../assets/imgs/featured-jobs/company-logo-7.png";
import CompanyLogo8 from "../assets/imgs/featured-jobs/company-logo-8.png";

export const companies = [Company1, Company2, Company3, Company4, Company5];

// --------------------- JOB CATEGORIES

export const jobCategories = [
  {
    id: 1,
    title: "Design",
    count: 235,
    icon: Category1,
  },
  {
    id: 2,
    title: "Sales",
    count: 756,
    icon: Category2,
  },
  {
    id: 3,
    title: "Marketing",
    count: 140,
    icon: Category3,
  },
  {
    id: 4,
    title: "Finance",
    count: 325,
    icon: Category4,
  },
  {
    id: 5,
    title: "Technology",
    count: 436,
    icon: Category5,
  },
  {
    id: 6,
    title: "Engineering",
    count: 542,
    icon: Category6,
  },
  {
    id: 7,
    title: "Business",
    count: 211,
    icon: Category7,
  },
  {
    id: 8,
    title: "Human Resource",
    count: 346,
    icon: Category8,
  },
];

// --------------------- JOBS
export const featuredJobs = [
  {
    id: 1,
    company: "Revolut",
    logo: CompanyLogo1,
    position: "Email Marketing",
    location: "Madrid, Spain",
    type: "Full Time",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    categories: [
      { name: "Marketing", color: "#EB8533" },
      { name: "Design", color: "#56CDAD" },
    ],
  },
  {
    id: 2,
    company: "Dropbox",
    logo: CompanyLogo2,
    position: "Brand Designer",
    location: "San Fransisco, US",
    type: "Full Time",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    categories: [
      { name: "Design", color: "#56CDAD" },
      { name: "Business", color: "#4640DE" },
    ],
  },
  {
    id: 3,
    company: "Pitch",
    logo: CompanyLogo3,
    position: "Email Marketing",
    location: "Berlin, Germany",
    type: "Full Time",
    description:
      "Pitch is looking for Customer Manager to join marketing t ...",
    categories: [{ name: "Marketing", color: "orange" }],
  },
  {
    id: 4,
    company: "Blinklist",
    logo: CompanyLogo4,
    position: "Visual Designer",
    location: "Granada, Spain",
    type: "Full Time",
    description:
      "Blinkist is looking for Visual Designer to help team desi ...",
    categories: [{ name: "Design", color: "green" }],
  },
  {
    id: 5,
    company: "ClassPass",
    logo: CompanyLogo5,
    position: "Product Designer",
    location: "Manchester, UK",
    type: "Full Time",
    description: "ClassPass is looking for Product Designer to help us...",
    categories: [
      { name: "Marketing", color: "orange" },
      { name: "Design", color: "green" },
    ],
  },
  {
    id: 6,
    company: "Canva",
    logo: CompanyLogo6,
    position: "Lead Designer",
    location: "Ontario, Canada",
    type: "Full Time",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    categories: [
      { name: "Design", color: "green" },
      { name: "Business", color: "purple" },
    ],
  },
  {
    id: 7,
    company: "GoDaddy",
    logo: CompanyLogo7,
    position: "Brand Strategist",
    location: "Marseille, France",
    type: "Full Time",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    categories: [{ name: "Marketing", color: "orange" }],
  },
  {
    id: 8,
    company: "Twitter",
    logo: CompanyLogo8,
    position: "Data Analyst",
    location: "San Diego, US",
    type: "Full Time",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    categories: [{ name: "Technology", color: "red" }],
  },
];

// --------------------- LATEST OPENNINGS

export const latestJobs = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: CompanyLogo1,
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 2,
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    logo: CompanyLogo2,
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 3,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    logo: CompanyLogo3,
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 4,
    title: "Brand Designer",
    company: "Maze",
    location: "San Francisco, USA",
    logo: CompanyLogo4,
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 5,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    logo: CompanyLogo5,
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 6,
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    logo: CompanyLogo6,
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 7,
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    logo: CompanyLogo7,
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 8,
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    logo: CompanyLogo8,
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
];
