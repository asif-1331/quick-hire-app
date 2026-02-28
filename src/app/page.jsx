import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CategoriesSection from "@/components/page/home/CategoriesSection";
import CompanyGrownSection from "@/components/page/home/CompanyGrownSection";
import HeroSection from "@/components/page/home/HeroSection";
import SignUpSection from "@/components/page/home/SignUpSection";

export default function Page() {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
      <Container>
        <CompanyGrownSection />
        <CategoriesSection />
      </Container>
      <SignUpSection />
      {/* <Footer /> */}
    </main>
  );
}
