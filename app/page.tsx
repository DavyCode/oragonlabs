import Hero from "@/components/sections/Hero";
import InUse from "@/components/sections/InUse";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhyCPU from "@/components/sections/WhyCPU";
import HowItWorks from "@/components/sections/HowItWorks";
import Contact from "@/components/sections/Contact";

/* The 8-second homepage: what Oragon is (Hero), proof (InUse: the numbers, then who runs on it), the four things we do (WhatWeDo), why it
   matters (WhyCPU), how to start (HowItWorks), and a way to reach us.
   The long-form story is elsewhere: the mission, the problem and the six pillars near
   the top of /about (with audiences and Azure further down), how we do it on
   /labs, industries on /products.

   Bands alternate: dark hero → white numbers + in use → bone
   what we do → black why CPU → white how it works → black contact. */
export default function Home() {
  return (
    <>
      <Hero />
      <InUse />
      <WhatWeDo />
      <WhyCPU />
      <HowItWorks />
      <Contact />
    </>
  );
}
