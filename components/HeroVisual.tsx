"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroVisual() {
  const [manSrc, setManSrc] = useState<string>("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Process image to remove white background client-side
    const img = new Image();
    img.src = "/man.png";
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setManSrc("/man.png");
        setLoaded(true);
        return;
      }

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const width = canvas.width;
      const height = canvas.height;

      // Breadth-First Search (BFS) to flood fill and remove the white background.
      // This preserves any white pixels inside the man's clothes/body.
      const visited = new Uint8Array(width * height);
      const queue: number[] = [];

      const pushPixel = (x: number, y: number) => {
        const idx = y * width + x;
        if (!visited[idx]) {
          visited[idx] = 1;
          queue.push(idx);
        }
      };

      // Seed queue with all border pixels
      for (let x = 0; x < width; x++) {
        pushPixel(x, 0);
        pushPixel(x, height - 1);
      }
      for (let y = 0; y < height; y++) {
        pushPixel(0, y);
        pushPixel(width - 1, y);
      }

      let head = 0;
      while (head < queue.length) {
        const idx = queue[head++];
        const x = idx % width;
        const y = Math.floor(idx / width);

        const dataIdx = idx * 4;
        const r = data[dataIdx];
        const g = data[dataIdx + 1];
        const b = data[dataIdx + 2];

        // If the pixel is close to pure white, clear it and traverse neighbors
        if (r > 238 && g > 238 && b > 238) {
          data[dataIdx + 3] = 0; // Set Alpha to 0 (transparent)

          // Push neighbors
          if (x > 0) pushPixel(x - 1, y);
          if (x < width - 1) pushPixel(x + 1, y);
          if (y > 0) pushPixel(x, y - 1);
          if (y < height - 1) pushPixel(x, y + 1);
        }
      }

      // Edge Softening / Feathering
      // Smooth the transitions at transparent boundaries to prevent jagged edges
      const tempAlpha = new Uint8Array(width * height);
      for (let i = 0; i < width * height; i++) {
        tempAlpha[i] = data[i * 4 + 3];
      }

      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const idx = y * width + x;
          const dataIdx = idx * 4;
          if (tempAlpha[idx] > 0) {
            // Check 4-way neighbors
            const nUp = tempAlpha[(y - 1) * width + x];
            const nDown = tempAlpha[(y + 1) * width + x];
            const nLeft = tempAlpha[y * width + (x - 1)];
            const nRight = tempAlpha[y * width + (x + 1)];

            if (nUp === 0 || nDown === 0 || nLeft === 0 || nRight === 0) {
              const r = data[dataIdx];
              const g = data[dataIdx + 1];
              const b = data[dataIdx + 2];
              const avg = (r + g + b) / 3;

              if (avg > 180) {
                // Brighter edge pixels get higher transparency
                data[dataIdx + 3] = Math.max(0, Math.floor((255 - avg) * 1.6));
              } else {
                data[dataIdx + 3] = 140; // Soft outline
              }
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setManSrc(canvas.toDataURL("image/png"));
      setLoaded(true);
    };

    img.onerror = () => {
      setManSrc("/man.png");
      setLoaded(true);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[430px] aspect-[400/480] flex justify-center items-end select-none overflow-visible">
      {/* Decorative Wavy Lines & Arch SVG Layer */}
      <svg
        viewBox="0 0 400 480"
        className="absolute inset-0 w-full h-full z-0 overflow-visible pointer-events-none"
      >
        <defs>
          {/* Arch Clip Path for Inner Stripes */}
          <clipPath id="arch-clip">
            <path d="M 40,480 V 220 A 160,160 0 0,1 360,220 V 480 Z" />
          </clipPath>

          {/* Sparkle Star Pattern */}
          <g id="sparkle">
            <path
              d="M 0,-11 Q 0,0 11,0 Q 0,0 0,11 Q 0,0 -11,0 Q 0,0 0,-11 Z"
              fill="none"
              stroke="#1d233b"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
        </defs>

        {/* ================= BACKGROUND STROKES (behind arch) ================= */}
        {/* Left Side Halo Curve */}
        <motion.path
          d="M 30,300 C 5,230 25,140 85,100"
          fill="none"
          stroke="#1d233b"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Left Bottom Loop */}
        <motion.path
          d="M -15,395 C -45,395 -55,345 -25,335 C 5,325 15,425 45,445"
          fill="none"
          stroke="#1d233b"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />

        {/* Right Zigzag Wave */}
        <motion.path
          d="M 345,160 C 370,140 375,185 365,225 C 355,265 385,255 405,205 C 420,160 435,190 415,225"
          fill="none"
          stroke="#1d233b"
          strokeWidth="2.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
        />

        {/* ================= ARCH BACKDROP ================= */}
        <motion.path
          d="M 40,480 V 220 A 160,160 0 0,1 360,220 V 480 Z"
          fill="#f6c845"
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.85, ease: "circOut" }}
        />

        {/* Inner Curved Stripes (Clipped to Arch) */}
        <g clipPath="url(#arch-clip)">
          <motion.path
            d="M 20,480 C 50,300 120,150 160,60 L 205,60 C 165,150 95,300 65,480 Z"
            fill="#d9a41b"
            opacity="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.path
            d="M 80,480 C 110,300 180,150 220,60 L 265,60 C 225,150 155,300 125,480 Z"
            fill="#d9a41b"
            opacity="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.65, duration: 0.8 }}
          />
          <motion.path
            d="M 140,480 C 170,300 240,150 280,60 L 325,60 C 285,150 215,300 185,480 Z"
            fill="#d9a41b"
            opacity="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </g>

        {/* ================= SPARKLE STARS ================= */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0, type: "spring", stiffness: 80 }}
        >
          <use href="#sparkle" x="380" y="70" />
        </motion.g>
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 0.85, opacity: 1 }}
          transition={{ delay: 1.15, type: "spring", stiffness: 80 }}
        >
          <use href="#sparkle" x="420" y="105" />
        </motion.g>
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 0.65, opacity: 1 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 80 }}
        >
          <use href="#sparkle" x="390" y="125" />
        </motion.g>
      </svg>

      {/* ================= FOREGROUND IMAGE: MAN ================= */}
      <div className="absolute bottom-0 left-[45px] w-[310px] h-[390px] z-10 pointer-events-none overflow-visible">
        {loaded && manSrc && (
          <motion.img
            src={manSrc}
            alt="Smiling man in denim shirt"
            className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[130%] max-w-none h-auto select-none pointer-events-none"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          />
        )}
      </div>

      {/* ================= CIRCULAR PLAY BADGE ================= */}
      <motion.div
        className="absolute bottom-[35px] right-[10px] sm:right-[20px] z-20 w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] cursor-pointer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.25, type: "spring", damping: 15 }}
        whileHover={{ scale: 1.08 }}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full animate-spin-slow hover:[animation-duration:10s] transition-[animation-duration] duration-500"
        >
          <defs>
            {/* Round path for curved text */}
            <path
              id="textCircle"
              d="M 60,18 A 42,42 0 1,1 59.9,18"
              fill="none"
            />
          </defs>

          {/* Badge Background Circle */}
          <circle cx="60" cy="60" r="46" fill="#111625" />

          {/* Circular Text */}
          <text>
            <textPath
              href="#textCircle"
              startOffset="0%"
              fill="#ffffff"
              className="text-[7.6px] font-sans tracking-[0.24em] font-semibold uppercase fill-white"
            >
              • codeplex studio • welcome to our world •
            </textPath>
          </text>

          {/* Play Triangle Icon */}
          <polygon points="56,51 56,69 71,60" fill="#ffffff" />
        </svg>
      </motion.div>
    </div>
  );
}
