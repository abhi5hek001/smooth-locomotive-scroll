"use client";

import Description from "@/components/Description";
import IntroPage from "@/components/Intro";
import Projects from "@/components/Projects";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <main className="flex flex-col gap-[20px]">
      <IntroPage />
      <Description />
      <Projects />
    </main>
  );
}
