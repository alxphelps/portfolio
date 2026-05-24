import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { TrustStrip } from "@/components/landing/trust-strip";
import { CaseStudies } from "@/components/landing/case-studies";
import { ContactCta } from "@/components/landing/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TrustStrip />
      <CaseStudies />
      <ContactCta />
    </>
  );
}
