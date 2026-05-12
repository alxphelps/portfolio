import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { TrustStrip } from "@/components/landing/trust-strip";
import { Services } from "@/components/landing/services";
import { Expertise } from "@/components/landing/expertise";
import { CaseStudies } from "@/components/landing/case-studies";
import { Process } from "@/components/landing/process";
import { ContactCta } from "@/components/landing/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TrustStrip />
      <Services />
      <Expertise />
      <CaseStudies />
      <Process />
      <ContactCta />
    </>
  );
}
