"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import contentData from "@/contentData";

export default function EventsSection() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="news"
      className="py-8 md:py-16 lg:py-24 bg-muted overflow-hidden bg-white"
    >
      <div className="container max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-6"
        >
          Events
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contentData.club.events.map((events, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={hoverVariants.hover}
              className="w-full"
            >
              <Card className="h-full cursor-pointer transition-shadow duration-300 hover:shadow-lg bg-slate-50 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">
                    {events.title}
                  </CardTitle>
                  <CardDescription>{events.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-48 overflow-hidden rounded-md">
                    <Image
                      src={events.image}
                      alt="Event Image"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm text-muted-foreground">
                      {events.date}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
