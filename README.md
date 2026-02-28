# 💼 "QuickHire" Job Searching Platform

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It features a modern, responsive job board architecture using the **Next.js App Router**.

## 🚀 Features

* **Dynamic Routing:** Personalized job details pages using dynamic segments (`job-details/[id]`).
* **Authentication Flow:** Flexible handling with a centralized `auth/[type]` route for Login and Signup.
* **Modular Architecture:** * `common/`: Reusable layouts like Navbar and Footer.
    * `ui/`: Atomic design components like `Button.jsx` and `Input.jsx`.
    * `page/`: Organized sections for the Landing Page (Hero, Categories, Featured Jobs).
* **Optimized Fonts:** High-performance typography using `next/font`.

---

## 📂 Project Structure

Based on the `src` directory layout:

```text
src/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── auth/[type]/      # Dynamic Login/Signup pages
│   ├── job-details/[id]/ # Individual job listing details
│   └── jobs/             # Job search and listing page
├── assets/               # Local fonts, icons, and images
├── components/           
│   ├── common/           # Global components (Navbar, Footer, JobCard)
│   ├── page/             # Page-specific sections (Hero, Featured)
│   └── ui/               # Base UI elements (Buttons, Inputs)
├── constants/            # Mock data and static configuration (data.js)
├── hooks/                # Custom React hooks
└── utils/                # Helper functions

```

---

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`, `next/font/local](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)` to automatically optimize and load [Epilogue & Clash Display](https://vercel.com/font), a new font family for Vercel.

---

## 🌐 Deployment

### Deployed Version on Netlify

Check out the deployed app at [Netlify Live Url](https://nextjs.org/docs/app/building-your-application/deploying) .

