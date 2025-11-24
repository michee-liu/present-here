"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Sparkles, RefreshCw, Gift } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import santaImage from "figma:asset/bb8c62a7ae7d0a967559ccba71cd194a09dfca81.png";

type CookieState = "unopened" | "cracking" | "santa";

export function FortuneCookie() {
  const [state, setState] = useState<CookieState>("unopened");

  const crackCookie = () => {
    if (state !== "unopened") return;

    setState("cracking");
    
    // Show cracking animation for 1.5 seconds, then show Santa
    setTimeout(() => {
      setState("santa");
    }, 1500);
  };

  const reset = () => {
    setState("unopened");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-red-50/80 to-green-100/80 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {state === "unopened" && (
          <motion.div
            key="unopened"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              onClick={crackCookie}
              className="cursor-pointer mb-8"
            >
              <div className="relative">
                {/* Present Shadow */}
                <div className="absolute top-2 left-2 w-40 h-40 bg-black/20 rounded-lg blur-md" />

                {/* Christmas Present */}
                <div className="relative w-40 h-40 bg-gradient-to-br from-red-500 to-red-700 rounded-lg shadow-2xl border-4 border-red-600">
                  {/* Gift wrap pattern */}
                  <div className="absolute inset-2 border-2 border-red-400/30 rounded-lg" />
                  
                  {/* Ribbon vertical */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-6 -ml-3 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 shadow-lg" />
                  
                  {/* Ribbon horizontal */}
                  <div className="absolute top-1/2 left-0 right-0 h-6 -mt-3 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-300 shadow-lg" />
                  
                  {/* Bow on top */}
                  <div className="absolute -top-4 left-1/2 -ml-8 w-16 h-16 z-10">
                    <div className="relative w-full h-full">
                      {/* Left bow loop */}
                      <div className="absolute left-0 top-2 w-6 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full transform -rotate-45 shadow-md" />
                      {/* Right bow loop */}
                      <div className="absolute right-0 top-2 w-6 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full transform rotate-45 shadow-md" />
                      {/* Center knot */}
                      <div className="absolute left-1/2 top-1/2 -ml-3 -mt-3 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg" />
                    </div>
                  </div>

                  {/* Sparkle effects */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-2 -right-2"
                  >
                    <Sparkles className="w-6 h-6 text-yellow-300 drop-shadow-lg" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -bottom-1 -left-2"
                  >
                    <Sparkles className="w-4 h-4 text-green-400 drop-shadow-lg" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center relative"
            >
              {/* Magical aura around title */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="absolute inset-0 bg-gradient-to-r from-red-200/30 via-green-200/30 to-red-200/30 rounded-full blur-2xl transform scale-150"
              />

              {/* Orbiting sparkles around title */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0.8, 1],
                    opacity: [0, 0.8, 0.6, 0.8],
                    rotate: 360,
                  }}
                  transition={{
                    scale: {
                      delay: 1 + i * 0.1,
                      duration: 0.8,
                    },
                    opacity: {
                      delay: 1 + i * 0.1,
                      duration: 0.8,
                    },
                    rotate: {
                      delay: 1.5,
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="absolute"
                  style={{
                    left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 80}%`,
                    top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 60}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Sparkles
                    className={`w-${i % 2 === 0 ? "3" : "2"} h-${i % 2 === 0 ? "3" : "2"} text-${i % 3 === 0 ? "red" : i % 3 === 1 ? "green" : "yellow"}-400/70`}
                  />
                </motion.div>
              ))}

              {/* Enhanced title with gradient and glow */}
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: "backOut",
                }}
                className="text-3xl mb-3 bg-gradient-to-r from-red-700 via-green-600 to-red-700 bg-clip-text text-transparent relative z-10"
                style={{
                  filter:
                    "drop-shadow(0 2px 8px rgba(220, 38, 38, 0.4))",
                  textShadow:
                    "0 0 30px rgba(220, 38, 38, 0.6)",
                }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Curious what's inside?
                </motion.span>
              </motion.h1>

              {/* Enhanced subtitle with shimmer effect */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-red-700 mb-4 relative z-10"
                style={{
                  textShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <motion.span className="bg-clip-text">
                  Tap the present to open your surprise!
                </motion.span>
              </motion.p>

              {/* Enhanced magic text with pulsing border */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="relative z-10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 1px rgba(220, 38, 38, 0.2)",
                      "0 0 0 2px rgba(220, 38, 38, 0.4)",
                      "0 0 0 1px rgba(220, 38, 38, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50/80 to-green-50/80 backdrop-blur-sm border border-red-200/50"
                >
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <Gift className="w-4 h-4 text-red-500" />
                  </motion.div>
                  <span className="text-sm text-red-700 font-medium">
                    Christmas magic awaits inside
                  </span>
                  <motion.div
                    animate={{
                      rotate: -360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      },
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-green-500" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {state === "cracking" && (
          <motion.div
            key="cracking"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 0.9, 1.05] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{
                rotate: [0, -5, 5, -5, 5, 0],
                scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="relative mb-8"
            >
              {/* Opening present with lid lifting */}
              <div className="relative w-40 h-40">
                {/* Present box bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-br from-red-500 to-red-700 rounded-lg border-4 border-red-600 overflow-hidden"
                >
                  <div className="absolute inset-2 border-2 border-red-400/30 rounded-lg" />
                  {/* Vertical ribbon */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-6 -ml-3 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300" />
                </motion.div>

                {/* Present lid lifting up */}
                <motion.div
                  animate={{ 
                    y: [-12, -40], 
                    rotate: [0, -15],
                    x: [0, -10]
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-lg border-4 border-red-600 overflow-hidden origin-bottom-left"
                >
                  <div className="absolute inset-1 border-2 border-red-400/30 rounded-lg" />
                  {/* Horizontal ribbon on lid */}
                  <div className="absolute top-1/2 left-0 right-0 h-6 -mt-3 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-300" />
                  
                  {/* Bow */}
                  <div className="absolute -top-2 left-1/2 -ml-6 w-12 h-12">
                    <div className="absolute left-0 top-1 w-5 h-6 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full transform -rotate-45" />
                    <div className="absolute right-0 top-1 w-5 h-6 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full transform rotate-45" />
                    <div className="absolute left-1/2 top-1/2 -ml-2 -mt-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full" />
                  </div>
                </motion.div>

                {/* Magical particles bursting out */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, (Math.cos((i * Math.PI * 2) / 12)) * 80],
                      y: [0, (Math.sin((i * Math.PI * 2) / 12)) * 80 - 30],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.05,
                      ease: "easeOut",
                    }}
                    className="absolute top-1/3 left-1/2 w-3 h-3 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"
                  />
                ))}
                
                {/* Glow from inside */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.8, 0.8], scale: [0, 1.5, 1.5] }}
                  transition={{ duration: 1.5 }}
                  className="absolute top-1/2 left-1/2 -ml-10 -mt-10 w-20 h-20 bg-yellow-300/60 rounded-full blur-xl"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{ duration: 1.5 }}
              className="text-red-700 text-center"
            >
              Opening your present...
            </motion.p>
          </motion.div>
        )}

        {state === "santa" && (
          <motion.div
            key="santa"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
            }}
            className="flex flex-col items-center max-w-lg w-full px-4"
          >
            {/* Santa image with festive border */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="relative mb-6"
            >
              {/* Magical glow around Santa */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-red-400/50 via-yellow-400/50 to-green-400/50 rounded-full blur-2xl transform scale-150"
              />
              
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <ImageWithFallback
                  src={santaImage}
                  alt="Santa Claus"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating sparkles around Santa */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 1, 0.8, 1],
                    opacity: [0, 1, 0.7, 1],
                    rotate: 360,
                  }}
                  transition={{
                    scale: {
                      delay: i * 0.1,
                      duration: 0.6,
                    },
                    rotate: {
                      delay: 0.5,
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="absolute"
                  style={{
                    left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 120}px`,
                    top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 120}px`,
                  }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
                </motion.div>
              ))}
            </motion.div>

            {/* Merry Christmas text */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="relative text-center mb-6"
            >
              {/* Glow effect behind text */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-red-300/40 via-green-300/40 to-red-300/40 blur-2xl rounded-full transform scale-150"
              />

              <motion.h2
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-4xl bg-gradient-to-r from-red-600 via-green-600 to-red-600 bg-clip-text text-transparent relative z-10 mb-2"
                style={{
                  filter: "drop-shadow(0 4px 12px rgba(220, 38, 38, 0.5))",
                  textShadow: "0 0 40px rgba(220, 38, 38, 0.8)",
                }}
              >
                Merry Christmas!
              </motion.h2>

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto rounded-full"
              />
            </motion.div>

            {/* Christmas message */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-red-200 mb-6"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-700 text-center leading-relaxed"
              >
                I hope your holidays are filled with joy, laughter, and memorable moments. Will you be joining us for the Christmas party? We would be delighted to have you there—it promises to be a wonderful celebration together.
              </motion.p>
            </motion.div>

            {/* Reset button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                onClick={reset}
                className="bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 text-white px-6 py-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Open Again
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}