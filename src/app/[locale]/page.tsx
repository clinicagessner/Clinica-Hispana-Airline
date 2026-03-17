import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      <Location />
      <Contact />
    </>
  );
}
