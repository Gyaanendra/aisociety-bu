"use client";

import React from "react";
import { motion } from "framer-motion";

interface Image {
  src: string;
  alt: string;
}

interface PolaroidStackProps {
  images: Image[];
}

const PolaroidStack: React.FC<PolaroidStackProps> = ({ images }) => {
  return (
    <div className="relative w-64 h-64">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 bg-white p-2 shadow-lg"
          style={{
            width: "200px",
            height: "240px",
            transformOrigin: "center",
          }}
          initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
          animate={{
            rotate: (index - 1) * 5,
            scale: 1 - index * 0.05,
            opacity: 1,
            z: -index * 10,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.05, rotate: 0, z: 10 }}
        >
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className="w-full h-48 object-cover mb-2"
          />
          <p className="text-center text-sm">{image.alt}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default PolaroidStack;
