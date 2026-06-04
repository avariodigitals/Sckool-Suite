import Nav          from "@/components/Nav";
import Hero         from "@/components/Hero";
import Challenges   from "@/components/Challenges";
import Ecosystem    from "@/components/Ecosystem";
import Modules      from "@/components/Modules";
import Portals      from "@/components/Portals";
import ValueProp    from "@/components/ValueProp";
import HowItWorks   from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ          from "@/components/FAQ";
import Footer       from "@/components/Footer";

export const metadata = {
  title: "Sckool Suite — Run Your Entire School From One Platform",
  description: "Manage admissions, attendance, results, fees, communication, teachers, parents, and students through one fully integrated school management system.",
};

export default function Home() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: "#111827", background: "#fff", overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <Challenges />
      <Ecosystem />
      <Modules />
      <Portals />
      <ValueProp />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
