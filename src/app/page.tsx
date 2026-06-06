import React from "react";
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

export default function Home(): React.ReactElement {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Challenges />
        <Ecosystem />
        <Modules />
        <Portals />
        <ValueProp />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
