"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import contentData from "@/contentData";
import PolaroidStack from "../PolaroidStack";

export default function AboutUsSection() {
  const randomImages = [
    { src: "/ais-hero.jpg", alt: "AIS" },
    { src: "/ais-hero.jpg", alt: "AIS" },
    { src: "/ais-hero.jpg", alt: "AIS" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-12 md:py-24 lg:py-32 border-t overflow-hidden"
    >
      <motion.div
        className="border rounded-xl px-4 md:px-6 py-12 container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center md:text-left mb-6"
            variants={itemVariants}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center md:text-left md:text-xl lg:text-base xl:text-xl"
            variants={itemVariants}
          >
            {contentData.club.about.text}
          </motion.p>
          {/* <motion.div variants={itemVariants}>
            <Button variant="link" className="mt-6 mx-auto block">
              Read More
            </Button>
          </motion.div> */}
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          variants={itemVariants}
        >
          <PolaroidStack images={randomImages} />
        </motion.div>
      </motion.div>
    </section>
  );
}
