import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Problem from "@/components/sections/Problem";
import Pillars from "@/components/sections/Pillars";
import EdgeAI from "@/components/sections/EdgeAI";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import Audiences from "@/components/sections/Audiences";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      {/* White here, not bone: Problem is the bone band, and two adjacent
          bone sections would flatten the section rhythm. */}
      <Mission tone="white" />
      <Problem />
      <Pillars />
      <EdgeAI />
      <WhatWeBuild />
      <Audiences />
      <Contact />
    </>
  );
}
