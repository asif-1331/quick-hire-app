import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CategoriesSection from "@/components/page/home/CategoriesSection";
import CompanyGrownSection from "@/components/page/home/CompanyGrownSection";
import FeaturedJobs from "@/components/page/home/FeaturedJobs";
import HeroSection from "@/components/page/home/HeroSection";
import LatestJobOpens from "@/components/page/home/LatestJobOpens";
import SignUpSection from "@/components/page/home/SignUpSection";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CompanyGrownSection />
      <CategoriesSection />
      <SignUpSection />
      <FeaturedJobs />
      <LatestJobOpens />
      <Footer />
    </main>
  );
}
