import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/page/home/HeroSection";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Container>
        <HeroSection />
      </Container>
      <Footer />
    </main>
  );
}