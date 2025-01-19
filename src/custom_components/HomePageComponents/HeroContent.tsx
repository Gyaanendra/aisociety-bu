import React from "react";
import Image from "next/image";
import contentData from "@/contentData";
import BadgeButton from "../BadgeButton";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroContent() {
  return (
    <section className="z-20 px-4 py-10 flex flex-col items-center justify-center">
      <div className="container max-w-5xl mx-auto text-center">
        <Image
          src={contentData.club.logo}
          alt="Logo"
          width={800}
          height={800}
          className="mx-auto w-full max-w-[100%] h-auto"
        />
        {/* <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
          {contentData.club.name}
        </h1> */}
        <p className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-5xl ">
          {contentData.club.supportedBy}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {contentData.club.logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              width={140}
              height={70}
              alt="Logo"
              className="aspect-[2/1] rounded-lg object-contain object-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
