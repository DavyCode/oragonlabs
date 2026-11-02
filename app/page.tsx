import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Problem from "@/components/sections/Problem";
import Pillars from "@/components/sections/Pillars";
import EdgeAI from "@/components/sections/EdgeAI";
import SDK from "@/components/sections/SDK";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import Audiences from "@/components/sections/Audiences";
import InUse from "@/components/sections/InUse";
import Azure from "@/components/sections/Azure";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Mission stays bone and In use goes white, so the bands alternate
          down to Problem, which is bone. */}
      <Mission />
      <InUse />
      <Problem />
      <Pillars />
      <EdgeAI />
      <SDK />
      <WhatWeBuild />
      <Audiences />
      <Azure />
      <Contact />
    </>
  );
}
