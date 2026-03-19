import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { GreenCard } from "@/components/sections/green-card";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { BlogPreview } from "@/components/sections/blog-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <GreenCard />
      <Testimonials />
      <FAQ />
      <Location />
      <BlogPreview />
      <Contact />
    </>
  );
}
