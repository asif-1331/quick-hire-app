"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import { IconBrandGoogle, IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";

const AuthPage = () => {
  const params = useParams();
  const [showPassword, setShowPassword] = useState(false);

  // Sync tab state with URL parameter: /auth/login or /auth/signup
  const activeTab = params.type === "sign-up" ? "signup" : "login";

  return (
    <div className="bg-[#FBFCFF] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 md:py-20 mt-10">
        <Container>
          {/* Responsive container: Full width on mobile, 450px on desktop */}
          <div className="w-full max-w-[450px] mx-auto bg-white border border-neutral-20 p-6 md:p-10 shadow-sm">
            {/* Tab Navigation via Link for URL changes */}
            <div className="flex border-b border-neutral-20 mb-8">
              <Link
                href="/auth/login"
                className={`flex-1 py-4 font-bold text-center text-body-16 transition-all ${
                  activeTab === "login"
                    ? "text-primary border-b-2 border-primary"
                    : "text-neutral-40 hover:text-neutral-60"
                }`}
              >
                Login
              </Link>
              <Link
                href="/auth/sign-up"
                className={`flex-1 py-4 font-bold text-center text-body-16 transition-all ${
                  activeTab === "signup"
                    ? "text-primary border-b-2 border-primary"
                    : "text-neutral-40 hover:text-neutral-60"
                }`}
              >
                Sign Up
              </Link>
            </div>

            {/* Social Login Section */}
            <div className="space-y-4 mb-6">
              <Button className="w-full flex items-center justify-center gap-3 py-3 border border-neutral-20 leading-none font-bold text-primary hover:bg-neutral-10 transition-colors">
                <IconBrandGoogle size={20} />
                <span className="mt-1.5">
                  {activeTab === "login"
                    ? "Login with Google"
                    : "Sign up with Google"}
                </span>
              </Button>
            </div>

            <div className="relative flex items-center justify-center mb-8">
              <div className="w-full border-t border-neutral-20"></div>
              <span className="absolute bg-white px-4 text-neutral-40 text-xs md:text-body-14 uppercase tracking-widest font-medium">
                Or with Email
              </span>
            </div>

            {/* Form Fields */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {activeTab === "signup" && (
                <div className="animate-in fade-in duration-300">
                  <label className="block text-body-12 md:text-body-14 font-bold text-neutral-80 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-neutral-20 outline-none focus:border-primary text-body-16"
                  />
                </div>
              )}

              <div>
                <label className="block text-body-12 md:text-body-14 font-bold text-neutral-80 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-4 py-3 border border-neutral-20 outline-none focus:border-primary text-body-16"
                />
              </div>

              <div>
                <label className="block text-body-12 md:text-body-14 font-bold text-neutral-80 mb-2 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 border border-neutral-20 outline-none focus:border-primary text-body-16"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-40 hover:text-neutral-60"
                  >
                    {showPassword ? (
                      <IconEyeOff size={20} />
                    ) : (
                      <IconEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {activeTab === "login" && (
                <div className="flex justify-end">
                  <Link
                    href="/auth/forgot-password"
                    size="sm"
                    className="text-body-14 font-semibold text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button className="w-full py-4 text-body-16 font-bold mt-2 items-center justify-center">
                {activeTab === "login" ? "Login" : "Create Account"}
              </Button>

              <div className="text-body-14 text-neutral-60 text-center mt-6 leading-relaxed">
                {activeTab === "login" ? (
                  <p>
                    Don't have an account?{" "}
                    <Link
                      href="/auth/sign-up"
                      className="text-primary font-bold hover:underline"
                    >
                      Sign up for free
                    </Link>
                  </p>
                ) : (
                  <p className="px-2">
                    By signing up, you agree to our{" "}
                    <span className="text-primary font-bold cursor-pointer">
                      Terms
                    </span>{" "}
                    and{" "}
                    <span className="text-primary font-bold cursor-pointer">
                      Privacy
                    </span>
                    .
                  </p>
                )}
              </div>
            </form>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default AuthPage;
