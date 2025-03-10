"use client";

import { motion } from "framer-motion";

export default function RosePetals() {
  const petals = Array.from({ length: 150 }); // Increased petal count
  const petalImages = ["/petals/petal1.png", "/petals/petal2.png", "/petals/petal4.png"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {petals.map((_, i) => {
        const randomImage = petalImages[Math.floor(Math.random() * petalImages.length)];
        const startY = Math.random() * -500; // Some petals start way above, some already on screen
        const endY = "100vh"; // Fall till the end of the screen

        return (
          <motion.img
            key={i}
            src={randomImage}
            initial={{ y: startY, x: Math.random() * 100 + "vw", rotate: Math.random() * 360 }}
            animate={{
              y: endY,
              x: [Math.random() * 100 + "vw", Math.random() * 100 + "vw"], // Spread across entire screen
              rotate: [0, Math.random() * 90 - 45]
            }}
            transition={{ duration: 5 + Math.random() * 3, ease: "linear", repeat: Infinity }} // Faster fall
            className="absolute w-10 h-auto opacity-80"
          />
        );
      })}
    </div>
  );
}
