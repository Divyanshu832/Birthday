"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";

const PageFlip = dynamic(() => import("react-pageflip"), { ssr: false });

const pages = [
  "Endless waiting, restless heart… ⏳ Then finally—YOU. ✨ One look, and everything felt right. You are my home. 💖💞",
  "The first birthday I celebrated with you… 🎂✨ I still remember the excitement, the way I wanted everything to be perfect. It wasn't just another day—it was the day the world was blessed with you. 💖",
  "I remember your disappointment when the restaurant was closed… 😞 But fate had other plans. That little café, shawarma, and us—nothing else mattered. 🍽️✨ It was never about the place, just us. 💖",
  "Your second birthday in Bhopal… 🎂✨ The journey wasn't easy, but nothing could stop US. Every struggle felt worth it the moment I saw your smile. Your birthday will always be special for me. 💞",
  "I spent hours thinking of ways to make you smile, but when I finally saw your happiness, I realized… nothing in this world could ever compare to the glow on your face that day. ✨ That moment, I knew—I'd celebrate you for a lifetime.💞",
  "In your arms, the world fades… 💖 That moment, that embrace—it wasn't just a hug, it was home. No words, no distance, nothing else mattered. Just you, me, and forever wrapped around us. ✨💕",
  "This Picture—soft smiles, unspoken love. ✨ The way your eyes shine, the warmth in that moment… some memories don;t fade, they just feel like home. 💖",
  "Patna NIT Ghat… the breeze, the quiet waves, and us. 🌊✨ Sitting beside you, watching the river flow, I realized—the most beautiful views aren't in the scenery, but in the moments we share. 💖",
  "Holi in Bhopal—our first festival together. 🌸✨ Colors everywhere, but none as bright as your smile. Laughing, chasing, and painting each other in joy… a moment that will never fade. 💖 And our journey stays just as beautiful.",
  "Every moment, every memory—we've built something beautiful. ✨ From laughter to struggles, from dreams to reality, we've grown, we've stayed. And if there's one thing I wish for… it's for this to last forever. 💖"
];

export default function PageFlipBook() {
  const bookRef = useRef(null);

  return (
    <div className="flex flex-col items-center p-6 bg-red-100 rounded-xl shadow-lg">
      <PageFlip ref={bookRef} width={400} height={500} showPageCorners={true} usePortrait={true}>
        {pages.map((text, i) => (
          <div key={i} className="w-[400px] h-[500px] bg-rose-200 text-black flex flex-col justify-center shadow-xl items-center p-4">
            <img src={`/images/page${i + 1}.jpg`} alt={`Memory ${i + 1}`} className="w-full h-1/2 object-cover mb-1" />
            <p className="p-4 text-lg text-center">{text}</p>
          </div>
        ))}
      </PageFlip>
    </div>
  );
}
