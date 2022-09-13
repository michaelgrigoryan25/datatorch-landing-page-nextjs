import { NextPage } from "next";
import Hero from "~/components/_static/sections/Hero";
import Customers from "~/components/_static/sections/Customers";
import Scaling from "~/components/_static/sections/Scaling";
import Developers from "~/components/_static/sections/Developers";
import PearliiTestimonial from "~/components/_static/testimonials/Pearlii";
import Features from "~/components/_static/sections/Features";
import Pricing from "~/components/_static/sections/Pricing";
import DentuitTestimonial from "~/components/_static/testimonials/Dentuit";
import CTA from "~/components/_static/sections/CTA";
import Landing from "~/layouts/Landing";

const Home: NextPage = () => {
  return (
    <Landing>
      <div className="space-y-16">
        <Hero />
        <Customers />
        <Scaling />
        <Developers />
        <PearliiTestimonial />
        <Features />
        <Pricing />
        <DentuitTestimonial />
        <CTA />
      </div>
    </Landing>
  );
};

export default Home;
