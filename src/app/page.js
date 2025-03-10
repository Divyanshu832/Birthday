"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import RosePetals from "../components/RosePetals";
import PageFlipBook from "../components/PageFlipBook";
import { Love_Light, Love_Ya_Like_A_Sister } from "next/font/google";

const poppins = Love_Light({
  weight: ['400'],
  subsets: ["latin"],
});

const love = Love_Ya_Like_A_Sister({
  weight: ['400'],
  subsets: ["latin"],
});

const loveQuotes = [
  "You are my today and all of my tomorrows.",
  "My heart is and always will be yours.",
  "You are my sun, my moon, and all my stars.",
  "Every love story is beautiful, but ours is my favorite."
];

export default function BirthdayApp() {
  const [stage, setStage] = useState(1);
  const [musicPlayed, setMusicPlayed] = useState(false);
  const [showPetals, setShowPetals] = useState(false);

  const sound = new Howl({ src: ["/music.mp3"], volume: 1 });

  const startSequence = () => {
    setShowPetals(true);
    if (!musicPlayed) {
      sound.play();
      setMusicPlayed(true);
    }
    setTimeout(() => {
      setShowPetals(false);
      setStage(2);
    }, 5000);
  };

  const startBookTransition = () => {
    setShowPetals(true);
    setTimeout(() => {
      setShowPetals(false);
      setStage(3);
    }, 6000);
  };

  const showLoveQuote = () => {
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    alert(randomQuote);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-center bg-pink-100 flex flex-col items-center justify-center">
      {showPetals && <RosePetals />}

      {stage === 1 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl font-bold text-pink-500 drop-shadow-lg mb-6"><span className={poppins.className}>Happiest Birthday Love 💖</span></h1>
          <p className="mt-2 text-xl text-gray-700">Have something for you...</p>
          <motion.button
            onClick={startSequence}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 px-6 py-2 bg-red-500 rounded-lg text-white text-lg shadow-md"
          >
            Wanna Check??
          </motion.button>
        </motion.div>
      )}

      {stage === 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-xl font-semibold text-rose-500"
        >
          <p className="mb-1">It&apos;s your <span className="font-bold">20th birthday</span> and our third together.</p>
          <p>Thanks for being with me in all the winds and shadows.</p>
          <span className={love.className}><p className="text-3xl text-pink-600 mt-6">You are my heart, my soul, and every single block that makes me.</p></span>
          <p className="mb-6 text-4xl">💖</p>
          <p>It&apos;s been an incredible journey with you, love.</p>
          <p>The chapters of our life have been incredible, haven&apos;t they?</p>
          <motion.button
            onClick={startBookTransition}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-7 px-6 py-2 bg-red-500 rounded-lg text-white text-lg shadow-md"
          >
            Wanna Review them?
          </motion.button>
        </motion.div>
      )}

      {stage === 3 && <PageFlipBook />}

      {stage >= 3 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <motion.button
            onClick={showLoveQuote}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-2 bg-pink-500 rounded-lg text-white text-lg shadow-md"
          >
            I LOVE YOU
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
