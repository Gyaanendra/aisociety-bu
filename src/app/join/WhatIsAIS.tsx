import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PolaroidStack from "@/custom_components/PolaroidStack";

export default function WhatIsAIS() {
  const randomImages = [
    { src: "https://picsum.photos/800/600?random=1", alt: "Random Image 1" },
    { src: "https://picsum.photos/800/600?random=2", alt: "Random Image 2" },
    { src: "https://picsum.photos/800/600?random=3", alt: "Random Image 3" },
  ];
  return (
    <div className="mx-auto max-w-6xl p-6 border rounded-xl mt-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center md:text-left mb-6">
        What is AI Society ?
      </h2>
      <div className="flex flex-col md:flex-row justify-start text-left gap-8 md:gap-32">
        <p className="text-muted-foreground md:text-xl xl:text-2xl w-full md:w-1/2 text-center md:text-left">
          The{" "}
          <span className="font-bold">
            Artificial Intelligence Society (AIS){" "}
          </span>{" "}
          at Bennett University is one of the most research-focused and
          collaborative student communities on campus. Our mission is to foster
          a deep understanding of AI and its applications by bringing together
          like-minded individuals who are eager to publish research, learn,
          share knowledge, and work on innovative projects. We believe in
          building together, mentoring juniors, and creating an inclusive
          environment where everyone can grow.
        </p>

        <Image
          src="/whatisais.png"
          width={500}
          height={500}
          alt="Logo"
          className="mx-auto md:w-1/2 lg:w-1/3 xl:w-1/3"
        />
        {/* <div className="flex items-center justify-center">
          <PolaroidStack images={randomImages} />
        </div> */}
      </div>
    </div>
  );
}
