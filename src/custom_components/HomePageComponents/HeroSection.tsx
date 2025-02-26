"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import HeroContent from "./HeroContent";
import Link from "next/link";
import BadgeButton from "../BadgeButton";
import Icons from "./icons";
import { useInView } from "react-intersection-observer";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";

export default function HeroSection(): JSX.Element {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollY } = useScroll();
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const loadVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1],
        delay: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex w-full h-full flex-col items-center justify-center overflow-hidden py-16"
      style={{ opacity, scale, y }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={loadVariants}
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>

      {/* Content */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden z-10">
        {/* <Link href="/join" className="mt-20">
          <BadgeButton text="Applications Open Now" />
        </Link> */}
        <span className="z-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          <HeroContent />
        </span>

        {/* Inner Circles */}
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={190}
        >
          <Icons.tf />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={190}
        >
          <Icons.hf />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={380}
          duration={20}
          reverse
        >
          <Icons.opencv />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={380}
          duration={20}
          delay={20}
          reverse
        >
          <Icons.julia />
        </OrbitingCircles>
        {/* Outer Circles 2 */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={560}
          duration={20}
        >
          <Icons.pytorch />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={560}
          duration={20}
          delay={20}
        >
          <Icons.keras />
        </OrbitingCircles>
      </div>
    </motion.div>
  );
}
